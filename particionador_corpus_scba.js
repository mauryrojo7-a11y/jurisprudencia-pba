#!/usr/bin/env node
/**
 * PARTICIONADOR AUTOMÁTICO DE CORPUS MARKDOWN PARA NOTEBOOKLM / GEMINI
 * Divide cualquier archivo Markdown del corpus jurisprudencial SCBA en partes
 * de máximo 400.000 palabras (tope operativo seguro: 380.000 palabras por archivo),
 * respetando íntegramente los límites de cada sentencia/resolución (sin cortar fallos a la mitad)
 * y preservando el encabezado institucional y la sección activa en cada fragmento.
 */

const fs = require("fs");
const path = require("path");

const ROOT_DIR = __dirname;
const MAX_WORDS_PER_PART = 380000; // Garantiza <= 400.000 palabras tanto por espacios como por tokens alfanuméricos

/**
 * Cuenta palabras usando el máximo entre separación por espacios y tokens alfanuméricos Unicode
 * para asegurar compatibilidad estricta con el contador de palabras de NotebookLM (límite 500k).
 */
function countWords(text) {
  if (!text) return 0;
  const wsWords = text.trim().split(/\s+/).filter(Boolean).length;
  const alphaWords = (text.match(/[\p{L}\p{N}]+/gu) || []).length;
  return Math.max(wsWords, alphaWords);
}

function countWhitespaceWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Particiona un archivo Markdown en fragmentos de hasta maxWords palabras.
 * @param {object} opts
 * @param {string} opts.sourceFile Ruta absoluta del archivo origen (.md)
 * @param {string} opts.partPrefix Prefijo del archivo de salida (ej: "01_Juzgado_Parte")
 * @param {number} [opts.maxWords] Máximo de palabras por parte (default: 380000)
 */
function particionarArchivoCorpus({ sourceFile, partPrefix, maxWords = MAX_WORDS_PER_PART }) {
  if (!fs.existsSync(sourceFile)) {
    return [];
  }

  const rawContent = fs.readFileSync(sourceFile, "utf8");
  const segments = rawContent.split(/(?=^##\s+|^###\s+)/m);

  const docHeader = segments[0] ? segments[0].trim() : "# Corpus Jurisprudencial SCBA";
  const bodySegments = segments.slice(1);

  // Agrupar cualquier encabezado "## ..." con el primer "### ..." que le sigue para no dejar secciones huérfanas al final de una parte
  const atomicBlocks = [];
  let pendingSectionHeader = "";
  let activeSectionTitle = "";

  for (const seg of bodySegments) {
    if (seg.startsWith("## ")) {
      pendingSectionHeader = seg.trim();
      const firstLine = pendingSectionHeader.split(/\r?\n/)[0];
      activeSectionTitle = firstLine;
    } else if (seg.startsWith("### ")) {
      const combined = pendingSectionHeader
        ? `${pendingSectionHeader}\n\n${seg.trim()}`
        : seg.trim();
      atomicBlocks.push({
        text: combined,
        words: countWords(combined),
        sectionTitle: activeSectionTitle,
        hasExplicitSectionHeader: Boolean(pendingSectionHeader)
      });
      pendingSectionHeader = "";
    } else {
      const combined = pendingSectionHeader
        ? `${pendingSectionHeader}\n\n${seg.trim()}`
        : seg.trim();
      atomicBlocks.push({
        text: combined,
        words: countWords(combined),
        sectionTitle: activeSectionTitle,
        hasExplicitSectionHeader: Boolean(pendingSectionHeader)
      });
      pendingSectionHeader = "";
    }
  }

  if (pendingSectionHeader) {
    atomicBlocks.push({
      text: pendingSectionHeader,
      words: countWords(pendingSectionHeader),
      sectionTitle: activeSectionTitle,
      hasExplicitSectionHeader: true
    });
  }

  const baseHeaderWords = countWords(docHeader) + 250; // margen para metadatos de la parte
  const partsBlocks = [];
  let currentPart = [];
  let currentWords = baseHeaderWords;

  for (const block of atomicBlocks) {
    if (currentPart.length > 0 && currentWords + block.words > maxWords) {
      partsBlocks.push(currentPart);
      currentPart = [block];
      currentWords = baseHeaderWords + block.words;
    } else {
      currentPart.push(block);
      currentWords += block.words;
    }
  }
  if (currentPart.length > 0) {
    partsBlocks.push(currentPart);
  }

  const totalParts = partsBlocks.length;
  const generatedFiles = [];

  // Eliminar partes antiguas sobrantes si existieran
  const existingFiles = fs.readdirSync(ROOT_DIR);
  for (const f of existingFiles) {
    if (f.startsWith(partPrefix) && f.endsWith(".md")) {
      const m = f.match(new RegExp(`^${partPrefix}(\\d+)\\.md$`));
      if (m && Number(m[1]) > totalParts) {
        try {
          fs.unlinkSync(path.join(ROOT_DIR, f));
        } catch (_) {}
      }
    }
  }

  for (let i = 0; i < totalParts; i++) {
    const partNumber = i + 1;
    const fileName = `${partPrefix}${partNumber}.md`;
    const filePath = path.join(ROOT_DIR, fileName);
    const blocks = partsBlocks[i];

    // Si el primer bloque de una parte > 1 no empieza con "## ", agregar el encabezado de sección activa en continuación
    let bodyText = "";
    if (blocks.length > 0) {
      const first = blocks[0];
      const prefixSection =
        !first.hasExplicitSectionHeader && first.sectionTitle
          ? `${first.sectionTitle} (Continuación - Parte ${partNumber}/${totalParts})\n\n`
          : "";
      bodyText = prefixSection + blocks.map(b => b.text).join("\n\n");
    }

    const partHeaderNote = [
      docHeader,
      `- **Fragmento para NotebookLM / Gemini**: Parte ${partNumber} de ${totalParts} (\`${fileName}\`)`,
      `- **Archivo Fuente Completo**: \`${path.basename(sourceFile)}\``,
      `- **Fallos incluidos en esta parte**: ${blocks.length}`,
      "",
      "---",
      ""
    ].join("\n");

    const fullPartContent = `${partHeaderNote}\n${bodyText}\n`;
    fs.writeFileSync(filePath, fullPartContent, "utf8");

    const wsWords = countWhitespaceWords(fullPartContent);
    const strictWords = countWords(fullPartContent);

    generatedFiles.push({
      fileName,
      filePath,
      partNumber,
      totalParts,
      fallosCount: blocks.length,
      whitespaceWords: wsWords,
      strictWords,
      bytes: Buffer.byteLength(fullPartContent, "utf8")
    });
  }

  return generatedFiles;
}

/**
 * Ejecuta el particionado de los 3 archivos principales del corpus jurisprudencial SCBA
 */
function generarTodasLasParticiones() {
  const configs = [
    {
      sourceFile: path.join(ROOT_DIR, "01_Juzgado_Civ_Com_7_Avellaneda.md"),
      partPrefix: "01_Juzgado_Parte"
    },
    {
      sourceFile: path.join(ROOT_DIR, "02_Camara_Avellaneda_Lanus.md"),
      partPrefix: "02_Camara_Parte"
    },
    {
      sourceFile: path.join(ROOT_DIR, "03_Camaras_Civiles_PBA.md"),
      partPrefix: "03_Camaras_PBA_Parte"
    }
  ];

  const resultados = {};
  for (const cfg of configs) {
    const parts = particionarArchivoCorpus(cfg);
    resultados[cfg.partPrefix] = parts;
  }
  return resultados;
}

if (require.main === module) {
  const res = generarTodasLasParticiones();
  for (const [prefix, parts] of Object.entries(res)) {
    console.log(`\n=== ${prefix}* (${parts.length} partes) ===`);
    for (const p of parts) {
      console.log(
        `  - ${p.fileName}: ${p.whitespaceWords.toLocaleString("es-AR")} palabras (estricto: ${p.strictWords.toLocaleString("es-AR")}) | ${p.fallosCount} fallos | ${(p.bytes / (1024 * 1024)).toFixed(2)} MB`
      );
    }
  }
}

module.exports = {
  particionarArchivoCorpus,
  generarTodasLasParticiones,
  countWords,
  countWhitespaceWords
};
