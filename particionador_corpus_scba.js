#!/usr/bin/env node
/**
 * PARTICIONADOR AUTOMÁTICO DE CORPUS MARKDOWN + GENERADOR HTML PARA GITHUB PAGES / NOTEBOOKLM
 * 1. Divide cada archivo Markdown del corpus jurisprudencial SCBA en partes de máximo
 *    400.000 palabras (tope operativo seguro: 380.000 palabras por archivo), respetando
 *    íntegramente los límites de cada sentencia/resolución.
 * 2. Genera una copia semántica en .html de cada una de las partes y de
 *    04_Arquitectura_Cognitiva_Viva.md (más index.html y .nojekyll) para publicación
 *    directa en GitHub Pages (https://mauryrojo7-a11y.github.io/jurisprudencia-pba/).
 */

const fs = require("fs");
const path = require("path");

const ROOT_DIR = __dirname;
const MAX_WORDS_PER_PART = 380000; // Garantiza <= 400.000 palabras tanto por espacios como por tokens alfanuméricos

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

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatInlineMarkdown(line) {
  let s = escapeHtml(line);
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
  return s;
}

/**
 * Convierte un archivo Markdown del corpus en un documento HTML5 semántico, limpio y liviano
 * optimizado para el web crawler de NotebookLM / Gemini.
 */
function markdownToHtmlDocument(mdContent, title) {
  const lines = mdContent.split(/\r?\n/);
  const out = [];
  let inCodeBlock = false;
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      if (!inCodeBlock) {
        inCodeBlock = true;
        out.push('<pre class="fallo-texto">');
      } else {
        inCodeBlock = false;
        out.push("</pre>");
      }
      continue;
    }

    if (inCodeBlock) {
      out.push(escapeHtml(line));
      continue;
    }

    const trimmed = line.trim();
    if (!trimmed) {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      continue;
    }

    if (trimmed === "---" || /^={10,}$/.test(trimmed)) {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      out.push("<hr>");
      continue;
    }

    if (line.startsWith("# ")) {
      if (inList) { out.push("</ul>"); inList = false; }
      out.push(`<h1>${formatInlineMarkdown(line.slice(2))}</h1>`);
    } else if (line.startsWith("## ")) {
      if (inList) { out.push("</ul>"); inList = false; }
      out.push(`<h2>${formatInlineMarkdown(line.slice(3))}</h2>`);
    } else if (line.startsWith("### ")) {
      if (inList) { out.push("</ul>"); inList = false; }
      out.push(`<h3>${formatInlineMarkdown(line.slice(4))}</h3>`);
    } else if (line.startsWith("#### ")) {
      if (inList) { out.push("</ul>"); inList = false; }
      out.push(`<h4>${formatInlineMarkdown(line.slice(5))}</h4>`);
    } else if (line.startsWith("- ")) {
      if (!inList) {
        out.push("<ul>");
        inList = true;
      }
      out.push(`<li>${formatInlineMarkdown(line.slice(2))}</li>`);
    } else {
      if (inList) { out.push("</ul>"); inList = false; }
      out.push(`<p>${formatInlineMarkdown(line)}</p>`);
    }
  }

  if (inList) out.push("</ul>");
  if (inCodeBlock) out.push("</pre>");

  return [
    "<!DOCTYPE html>",
    '<html lang="es">',
    "<head>",
    '  <meta charset="utf-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1">',
    `  <title>${escapeHtml(title)}</title>`,
    "  <style>",
    "    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.5; max-width: 960px; margin: 2rem auto; padding: 0 1rem; color: #111; }",
    "    pre.fallo-texto { white-space: pre-wrap; word-wrap: break-word; background: #f8f9fa; padding: 1rem; border: 1px solid #ddd; border-radius: 4px; font-family: ui-monospace, monospace; font-size: 0.9rem; }",
    "    h1, h2, h3 { color: #1a202c; }",
    "    hr { border: 0; border-top: 1px solid #ccc; margin: 2rem 0; }",
    "  </style>",
    "</head>",
    "<body>",
    "<main>",
    out.join("\n"),
    "</main>",
    "</body>",
    "</html>"
  ].join("\n");
}

function generarHtmlDesdeMarkdownFile(mdFilePath) {
  if (!fs.existsSync(mdFilePath)) return null;
  const mdContent = fs.readFileSync(mdFilePath, "utf8");
  const baseName = path.basename(mdFilePath, ".md");
  const htmlFileName = `${baseName}.html`;
  const htmlFilePath = path.join(ROOT_DIR, htmlFileName);

  const firstHeadingMatch = mdContent.match(/^#\s+(.+)$/m);
  const title = firstHeadingMatch ? `${firstHeadingMatch[1].trim()} (${baseName})` : baseName;

  const htmlContent = markdownToHtmlDocument(mdContent, title);
  fs.writeFileSync(htmlFilePath, htmlContent, "utf8");
  return {
    mdFileName: path.basename(mdFilePath),
    htmlFileName,
    htmlFilePath,
    bytes: Buffer.byteLength(htmlContent, "utf8")
  };
}

/**
 * Particiona un archivo Markdown en fragmentos de hasta maxWords palabras y genera sus copias .html
 */
function particionarArchivoCorpus({ sourceFile, partPrefix, maxWords = MAX_WORDS_PER_PART }) {
  if (!fs.existsSync(sourceFile)) {
    return [];
  }

  const rawContent = fs.readFileSync(sourceFile, "utf8");
  const segments = rawContent.split(/(?=^##\s+|^###\s+)/m);

  const docHeader = segments[0] ? segments[0].trim() : "# Corpus Jurisprudencial SCBA";
  const bodySegments = segments.slice(1);

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

  const baseHeaderWords = countWords(docHeader) + 250;
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

  // Eliminar partes antiguas sobrantes (.md y .html) si existieran
  const existingFiles = fs.readdirSync(ROOT_DIR);
  for (const f of existingFiles) {
    if (f.startsWith(partPrefix) && (f.endsWith(".md") || f.endsWith(".html"))) {
      const m = f.match(new RegExp(`^${partPrefix}(\\d+)\\.(md|html)$`));
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
    const htmlFileName = `${partPrefix}${partNumber}.html`;
    const filePath = path.join(ROOT_DIR, fileName);
    const blocks = partsBlocks[i];

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

    // Generar su copia .html correspondiente
    generarHtmlDesdeMarkdownFile(filePath);

    const wsWords = countWhitespaceWords(fullPartContent);
    const strictWords = countWords(fullPartContent);

    generatedFiles.push({
      fileName,
      htmlFileName,
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
 * Ejecuta el particionado de los 3 archivos principales y genera las copias .html
 * de todas las partes más 04_Arquitectura_Cognitiva_Viva.html, index.html y .nojekyll
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
  const allHtmlFiles = [];

  for (const cfg of configs) {
    const parts = particionarArchivoCorpus(cfg);
    resultados[cfg.partPrefix] = parts;
    for (const p of parts) {
      allHtmlFiles.push({
        htmlFileName: p.htmlFileName,
        label: `${p.htmlFileName} (${p.whitespaceWords.toLocaleString("es-AR")} palabras | ${p.fallosCount} fallos)`
      });
    }
  }

  // Generar también 04_Arquitectura_Cognitiva_Viva.html
  const file04 = path.join(ROOT_DIR, "04_Arquitectura_Cognitiva_Viva.md");
  if (fs.existsSync(file04)) {
    const info04 = generarHtmlDesdeMarkdownFile(file04);
    if (info04) {
      const ws04 = countWhitespaceWords(fs.readFileSync(file04, "utf8"));
      allHtmlFiles.push({
        htmlFileName: info04.htmlFileName,
        label: `${info04.htmlFileName} (${ws04.toLocaleString("es-AR")} palabras | Papers arXiv cs.AI, cs.CL, cs.LG)`
      });
    }
  }

  // Crear .nojekyll para que GitHub Pages sirva los archivos HTML estáticos de forma instantánea
  fs.writeFileSync(path.join(ROOT_DIR, ".nojekyll"), "", "utf8");

  // Crear index.html con índice de todas las partes
  const indexHtml = [
    "<!DOCTYPE html>",
    '<html lang="es">',
    "<head>",
    '  <meta charset="utf-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1">',
    "  <title>Corpus Jurisprudencial SCBA & Arquitectura Cognitiva Viva - GitHub Pages</title>",
    "  <style>",
    "    body { font-family: system-ui, -apple-system, sans-serif; max-width: 900px; margin: 2rem auto; padding: 0 1rem; line-height: 1.6; }",
    "    li { margin-bottom: 0.5rem; }",
    "  </style>",
    "</head>",
    "<body>",
    "  <h1>Corpus Jurisprudencial SCBA (Juzgado Civ. y Com. N° 7 Avellaneda, Cámara Avellaneda-Lanús y Cámaras PBA) + Arquitectura Cognitiva Viva</h1>",
    `  <p>Última actualización: ${new Date().toISOString()}</p>`,
    "  <h2>Fuentes HTML Optimizadas para NotebookLM / Gemini (&lt; 400.000 palabras por archivo)</h2>",
    "  <ul>",
    ...allHtmlFiles.map(f => `    <li><a href="./${f.htmlFileName}">${escapeHtml(f.label)}</a></li>`),
    "  </ul>",
    "</body>",
    "</html>"
  ].join("\n");
  fs.writeFileSync(path.join(ROOT_DIR, "index.html"), indexHtml, "utf8");

  return resultados;
}

if (require.main === module) {
  const res = generarTodasLasParticiones();
  for (const [prefix, parts] of Object.entries(res)) {
    console.log(`\n=== ${prefix}* (${parts.length} partes .md + .html) ===`);
    for (const p of parts) {
      console.log(
        `  - ${p.fileName} / ${p.htmlFileName}: ${p.whitespaceWords.toLocaleString("es-AR")} palabras (estricto: ${p.strictWords.toLocaleString("es-AR")}) | ${p.fallosCount} fallos`
      );
    }
  }
  console.log(`\n=== 04_Arquitectura_Cognitiva_Viva.html e index.html generados ===`);
}

module.exports = {
  particionarArchivoCorpus,
  generarTodasLasParticiones,
  generarHtmlDesdeMarkdownFile,
  countWords,
  countWhitespaceWords
};
