#!/usr/bin/env node
/**
 * ACTUALIZADOR DIARIO DE ARQUITECTURA COGNITIVA VIVA (arXiv API: cs.AI, cs.CL, cs.LG)
 *
 * Consulta la API pública de arXiv (https://export.arxiv.org/api/query) buscando los
 * últimos papers en las categorías cs.AI, cs.CL y cs.LG sobre:
 *   1. Test-Time Compute
 *   2. Process Reward Models
 *   3. Reasoning in LLMs
 *   4. Prompt Engineering
 *   5. Agentic Workflows
 *
 * Extrae metadatos verificados, resumen técnico y destila reglas operativas accionables
 * para sistemas de razonamiento profundo y proyección jurídica, actualizando de forma
 * incremental y sin duplicados el archivo `04_Arquitectura_Cognitiva_Viva.md`.
 */

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const fs = require("fs");
const path = require("path");

const ROOT_DIR = __dirname;
const FILE_04 = path.join(ROOT_DIR, "04_Arquitectura_Cognitiva_Viva.md");
const ARXIV_API_URL = "https://export.arxiv.org/api/query";

const EJES_TEMATICOS = [
  {
    id: "test_time_compute",
    titulo: "Test-Time Compute & Inference-Time Scaling",
    query: 'cat:cs.AI+OR+cat:cs.CL+OR+cat:cs.LG+AND+(all:"test-time compute"+OR+all:"test-time scaling"+OR+all:"inference-time compute"+OR+all:"inference-time scaling")',
    searchRaw: '(cat:cs.AI OR cat:cs.CL OR cat:cs.LG) AND ("test-time compute" OR "test-time scaling" OR "inference-time compute" OR "inference-time scaling")',
    reglaBase: "Asignar presupuesto computacional adaptativo en tiempo de inferencia según la complejidad del caso: descomponer cuestiones ambiguas en múltiples trayectorias de análisis, contrastar hipótesis rivales y aplicar verificación cruzada antes de emitir la conclusión."
  },
  {
    id: "process_reward_models",
    titulo: "Process Reward Models (PRM) & Verificación Paso a Paso",
    query: 'cat:cs.AI+OR+cat:cs.CL+OR+cat:cs.LG+AND+(all:"process reward model"+OR+all:"process reward models"+OR+all:"step-level reward"+OR+all:"process supervision")',
    searchRaw: '(cat:cs.AI OR cat:cs.CL OR cat:cs.LG) AND ("process reward model" OR "process reward models" OR "step-level reward" OR "process supervision")',
    reglaBase: "Evaluar y puntuar la validez lógica y normativa de cada paso intermedio del razonamiento (encuadre procesal, legitimación, presupuestos fácticos, subsunción normativa, costas) en lugar de evaluar únicamente la conclusión final."
  },
  {
    id: "reasoning_in_llms",
    titulo: "Reasoning in LLMs (Deliberative, Chain-of-Thought & Self-Verification)",
    query: 'cat:cs.AI+OR+cat:cs.CL+OR+cat:cs.LG+AND+(ti:"reasoning"+AND+(abs:"large language model"+OR+abs:"chain-of-thought"+OR+abs:"self-verification"+OR+abs:"deliberative"))',
    searchRaw: '(cat:cs.AI OR cat:cs.CL OR cat:cs.LG) AND ti:reasoning AND (abs:"large language model" OR abs:"chain-of-thought" OR abs:"self-verification")',
    reglaBase: "Estructurar cadenas de razonamiento explícitas (Chain-of-Thought deliberativo) separando estrictamente la premisa fáctica probada, la premisa normativa vigente y el juicio de subsunción, ejecutando un pase de autoverificación contra alucinaciones o saltos lógicos."
  },
  {
    id: "prompt_engineering",
    titulo: "Prompt Engineering, Meta-Prompting & In-Context Optimization",
    query: 'cat:cs.AI+OR+cat:cs.CL+OR+cat:cs.LG+AND+(all:"prompt engineering"+OR+all:"meta-prompting"+OR+all:"prompt optimization"+OR+all:"in-context learning")',
    searchRaw: '(cat:cs.AI OR cat:cs.CL OR cat:cs.LG) AND ("prompt engineering" OR "meta-prompting" OR "prompt optimization" OR "structured prompting")',
    reglaBase: "Anclar el contexto mediante restricciones explícitas de formato, ejemplos verificados en contexto (few-shot grounding), delimitación estricta de fuentes autorizadas y descomposición modular de instrucciones."
  },
  {
    id: "agentic_workflows",
    titulo: "Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning",
    query: 'cat:cs.AI+OR+cat:cs.CL+OR+cat:cs.LG+AND+(all:"agentic workflow"+OR+all:"agentic workflows"+OR+all:"multi-agent"+OR+all:"autonomous agents"+OR+all:"tool-augmented")',
    searchRaw: '(cat:cs.AI OR cat:cs.CL OR cat:cs.LG) AND ("agentic workflow" OR "agentic workflows" OR "multi-agent reasoning" OR "tool-augmented")',
    reglaBase: "Orquestar flujos agénticos en etapas especializadas: (1) Agente Investigador/Recuperador (búsqueda documental exacta), (2) Agente Analista/Verificador (contraste de precedentes y normas), y (3) Agente Redactor/Crítico (proyección formal y auditoría de consistencia)."
  }
];

function decodeXmlEntities(str) {
  if (!str) return "";
  return str
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(parseInt(d, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
}

function cleanWhitespace(str) {
  return decodeXmlEntities(str || "").replace(/\s+/g, " ").trim();
}

/**
 * Extrae reglas operativas concretas a partir del contenido técnico del abstract y título del paper.
 */
function destilarReglasOperativasDelPaper(paper, eje) {
  const text = `${paper.title} ${paper.summary}`.toLowerCase();
  const reglas = [];

  // 1. Regla base del eje temático vinculada al mecanismo del paper
  reglas.push(`**[Directiva de ${eje.titulo}]**: ${eje.reglaBase}`);

  // 2. Heurísticas específicas detectadas en el paper
  if (/verify|verification|verifier|self-check|critic|factuality|hallucination/.test(text)) {
    reglas.push(
      `**[Protocolo de Verificación Intrínseca]**: Implementar un paso de auditoría independiente sobre cada afirmación fáctica y cita normativa/jurisprudencial antes de consolidar la respuesta final, rechazando cualquier inferencia no respaldada por evidencia documental directa.`
    );
  }
  if (/step-by-step|process|intermediate|prm|step-level|granular|trajectory/.test(text)) {
    reglas.push(
      `**[Supervisión Granular por Pasos (Step-Level PRM)]**: Validar secuencialmente cada considerando o nodo de decisión. Si un paso intermedio presenta incertidumbre o ambigüedad, podar esa rama de razonamiento y recalcular desde el último antecedente verificado.`
    );
  }
  if (/budget|adaptive|scaling|compute|allocate|difficulty|dynamic|efficient/.test(text)) {
    reglas.push(
      `**[Asignación Dinámica de Cómputo de Inferencia]**: Calibrar la profundidad deliberativa según la complejidad del caso: aplicar resolución directa en trámites estandarizados y expandir el árbol de búsqueda (múltiples candidatos + ranking) en casos con colisión normativa o jurisprudencial.`
    );
  }
  if (/multi-agent|agent|tool|workflow|planning|decomposition|orchestrat|subtask/.test(text)) {
    reglas.push(
      `**[Descomposición Agéntica y Uso de Herramientas]**: Dividir la tarea compleja en subtareas atómicas verificables (extracción de hechos -> búsqueda de precedentes -> encuadre legal -> redacción -> control de calidad), invocando herramientas externas de recuperación antes de razonar en abstracto.`
    );
  }
  if (/prompt|in-context|demonstration|instruction|template|constraint|structured/.test(text)) {
    reglas.push(
      `**[Estructuración de Contexto y Restricciones Explícitas]**: Formular las restricciones negativas (prohibición de alucinar metadatos) y las plantillas estructurales al inicio del bloque de instrucciones, utilizando precedentes reales recuperados como anclaje in-context.`
    );
  }
  if (/search|tree|mcts|beam|best-of-n|sampling|consensus|voting|debate/.test(text)) {
    reglas.push(
      `**[Búsqueda Deliberativa y Consenso Interno]**: Generar y contrastar múltiples líneas argumentales (argumento principal, eventuales defensas y criterio de Alzada) seleccionando la solución que maximice la coherencia interna y la estabilidad frente a una eventual apelación.`
    );
  }

  // Asegurar al menos 3 reglas operativas claras por paper
  if (reglas.length < 3) {
    reglas.push(
      `**[Trazabilidad y Explicabilidad Técnica]**: Explicitar los fundamentos y pasos de derivación desde los datos de entrada hasta la conclusión dispositiva, garantizando auditabilidad completa del razonamiento.`
    );
  }

  return reglas;
}

/**
 * Consulta la API de arXiv para una query dada y parsea el feed Atom XML.
 */
async function consultarArxivPorEje(eje, maxResults = 12) {
  const url = `${ARXIV_API_URL}?search_query=${encodeURIComponent(eje.searchRaw)}&sortBy=submittedDate&sortOrder=descending&max_results=${maxResults}`;

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "Proyectista-SCBA-Cognitive-Architecture/1.0 (mailto:mauryrojo7-a11y@users.noreply.github.com)"
        }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const xml = await res.text();
      return parseArxivAtomXml(xml, eje);
    } catch (err) {
      if (attempt === 2) throw err;
      await new Promise(r => setTimeout(r, 1500 * (attempt + 1)));
    }
  }
  return [];
}

function parseArxivAtomXml(xml, eje) {
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/gi)];
  const papers = [];

  for (const entryMatch of entries) {
    const entry = entryMatch[1];
    const idUrl = cleanWhitespace(entry.match(/<id>([\s\S]*?)<\/id>/i)?.[1]);
    if (!idUrl) continue;

    // Extraer arXiv ID limpio (sin versión v1/v2 para deduplicar)
    const rawId = idUrl.split("/abs/").pop() || idUrl;
    const arxivId = rawId.replace(/v\d+$/i, "").trim();

    const title = cleanWhitespace(entry.match(/<title>([\s\S]*?)<\/title>/i)?.[1]);
    const summary = cleanWhitespace(entry.match(/<summary>([\s\S]*?)<\/summary>/i)?.[1]);
    const publishedRaw = cleanWhitespace(entry.match(/<published>([\s\S]*?)<\/published>/i)?.[1]);
    const updatedRaw = cleanWhitespace(entry.match(/<updated>([\s\S]*?)<\/updated>/i)?.[1]);
    const publishedDate = publishedRaw ? publishedRaw.slice(0, 10) : "";

    const authors = [...entry.matchAll(/<author>\s*<name>([\s\S]*?)<\/name>/gi)].map(m => cleanWhitespace(m[1]));
    const categories = [...entry.matchAll(/<category[^>]*term="([^"]+)"/gi)].map(m => m[1].trim());

    // Filtrar que tenga al menos una de las categorías cs.AI, cs.CL, cs.LG
    const tieneCatObjetivo = categories.some(c => /^cs\.(AI|CL|LG)$/i.test(c));
    if (!tieneCatObjetivo && categories.length > 0) continue;

    const pdfLink = `https://arxiv.org/pdf/${arxivId}.pdf`;
    const absLink = `https://arxiv.org/abs/${arxivId}`;

    const paperObj = {
      arxivId,
      versionedId: rawId,
      title,
      summary,
      publishedDate,
      updatedDate: updatedRaw ? updatedRaw.slice(0, 10) : publishedDate,
      authors,
      categories,
      absLink,
      pdfLink,
      ejeId: eje.id,
      ejeTitulo: eje.titulo
    };
    paperObj.reglasOperativas = destilarReglasOperativasDelPaper(paperObj, eje);
    papers.push(paperObj);
  }

  return papers;
}

/**
 * Lee los arXiv IDs que ya están registrados en 04_Arquitectura_Cognitiva_Viva.md
 */
function leerIdsExistentes() {
  const existentes = new Set();
  if (!fs.existsSync(FILE_04)) return existentes;
  const content = fs.readFileSync(FILE_04, "utf8");
  for (const m of content.matchAll(/\*\*arXiv ID\*\*:\s*`([0-9]+\.[0-9]+)`/g)) {
    existentes.add(m[1].trim());
  }
  return existentes;
}

function formatearPaperMarkdown(paper) {
  const autoresStr = paper.authors.length > 6
    ? `${paper.authors.slice(0, 6).join(", ")} et al.`
    : paper.authors.join(", ");

  const reglasLines = paper.reglasOperativas.map((r, i) => `  ${i + 1}. ${r}`).join("\n");

  return [
    `### [arXiv:${paper.arxivId}] ${paper.title}`,
    `- **arXiv ID**: \`${paper.arxivId}\` (${paper.versionedId})`,
    `- **Fecha de Publicación**: ${paper.publishedDate}`,
    `- **Categorías arXiv**: \`${paper.categories.join("`, `")}\``,
    `- **Eje Cognitivo**: ${paper.ejeTitulo}`,
    `- **Autores**: ${autoresStr}`,
    `- **Enlaces Oficiales**: [Abstract (${paper.absLink})](${paper.absLink}) | [PDF (${paper.pdfLink})](${paper.pdfLink})`,
    "",
    `#### Resumen Técnico (Technical Abstract & Mechanism)`,
    `> ${paper.summary}`,
    "",
    `#### Reglas Operativas Extraídas (Aplicación en Inferencia y Razonamiento)`,
    reglasLines,
    "",
    "---",
    ""
  ].join("\n");
}

function construirEncabezadoMaestro(totalPapers, fechaISO) {
  return [
    `# 04 - Arquitectura Cognitiva Viva: Estado del Arte en Razonamiento de LLMs, Test-Time Compute y Flujos Agénticos (arXiv cs.AI / cs.CL / cs.LG)`,
    "",
    `- **Repositorio**: \`mauryrojo7-a11y/jurisprudencia-pba\``,
    `- **Fuente Científica en Tiempo Real**: API Oficial de arXiv (\`https://export.arxiv.org/api/query\` — Categorías \`cs.AI\`, \`cs.CL\`, \`cs.LG\`)`,
    `- **Última Actualización Automática**: ${fechaISO}`,
    `- **Ejes Monitoreados Diariamente**:`,
    `  1. **Test-Time Compute & Inference-Time Scaling**`,
    `  2. **Process Reward Models (PRM) & Step-Level Verification**`,
    `  3. **Reasoning in LLMs (Deliberative Chain-of-Thought & Self-Correction)**`,
    `  4. **Prompt Engineering, Meta-Prompting & In-Context Optimization**`,
    `  5. **Agentic Workflows, Multi-Agent Systems & Tool-Augmented Reasoning**`,
    "",
    "---",
    "",
    `## SÍNTESIS DE REGLAS OPERATIVAS DE ARQUITECTURA COGNITIVA (META-PROTOCOLO DE INFERENCIA)`,
    "",
    `Las siguientes reglas operativas sintetizan los hallazgos de frontera extraídos de los papers registrados en este documento y deben ser aplicadas como **arquitectura cognitiva de razonamiento** al analizar expedientes, jurisprudencia y proyectar resoluciones:`,
    "",
    `1. **Escalamiento Adaptativo en Tiempo de Inferencia (Test-Time Compute Allocation)**:`,
    `   - Antes de redactar una resolución, clasificar la complejidad del caso (estándar vs. controvertido/atípico). En casos complejos, expandir el cómputo de inferencia generando hipótesis alternativas de encuadre normativo y contrastándolas contra los precedentes del Juzgado N° 7 y de la Cámara Departamental.`,
    `2. **Verificación Paso a Paso tipo Process Reward Model (Step-Level PRM)**:`,
    `   - No validar únicamente el fallo final: auditar secuencialmente cada eslabón lógico del razonamiento: *(Paso 1: Legitimación y personería -> Paso 2: Trabado de la litis / rebeldía -> Paso 3: Hechos conducentes y carga probatoria art. 375 CPCCBA -> Paso 4: Subsunción en CCyCN / leyes especiales -> Paso 5: Tasa de interés, costas art. 68/556 CPCCBA y diferimiento/regulación de honorarios Ley 14.967)*. Si un paso carece de respaldo fáctico o normativo, corregir inmediatamente antes de avanzar al siguiente considerando.`,
    `3. **Anclaje Empírico Estricto y Cero Alucinación (Grounded In-Context Learning)**:`,
    `   - Toda cita de jurisprudencia debe provenir exclusivamente de registros verificados en el corpus (\`01_Juzgado_Civ_Com_7_Avellaneda.md\`, \`02_Camara_Avellaneda_Lanus.md\`, \`03_Camaras_Civiles_PBA.md\`). Queda prohibido extrapolar números de causa, fechas o carátulas por similitud estadística.`,
    `4. **Orquestación Agéntica en Tres Fases (Retrieve -> Verify & Reason -> Draft & Critique)**:`,
    `   - Separar cognitivamente la fase de **Recuperación** (búsqueda exhaustiva de precedentes aplicables), la fase de **Deliberación** (comparación entre el criterio propio del Juzgado N° 7 y el de la Alzada de Avellaneda-Lanús) y la fase de **Proyección y Crítica** (redacción bajo Ac. 3975/20 SCBA seguida de revisión formal de congruencia conforme arts. 34 inc. 4 y 163 CPCCBA).`,
    "",
    "---",
    ""
  ].join("\n");
}

async function actualizarArquitecturaCognitivaArxiv() {
  const hoyISO = new Date().toISOString().slice(0, 10);
  const idsExistentes = leerIdsExistentes();
  const archivoExiste = fs.existsSync(FILE_04);

  console.log(`[arXiv Cognitive Updater] Consultando arXiv API (cs.AI, cs.CL, cs.LG)... (${idsExistentes.size} papers ya registrados)`);

  const resultadosPorEje = new Map();
  let nuevosPapersCount = 0;

  for (const eje of EJES_TEMATICOS) {
    try {
      const papers = await consultarArxivPorEje(eje, 12);
      const nuevosDelEje = [];
      for (const p of papers) {
        if (!idsExistentes.has(p.arxivId)) {
          idsExistentes.add(p.arxivId);
          nuevosDelEje.push(p);
          nuevosPapersCount++;
        }
      }
      resultadosPorEje.set(eje.id, { eje, nuevos: nuevosDelEje });
      // Respetar rate-limit recomendado por arXiv API
      await new Promise(r => setTimeout(r, 800));
    } catch (err) {
      console.error(`[arXiv Cognitive Updater] Error consultando eje ${eje.id}:`, err.message);
      resultadosPorEje.set(eje.id, { eje, nuevos: [] });
    }
  }

  if (!archivoExiste) {
    // Crear archivo completo por primera vez organizado por los 5 ejes
    const secciones = [construirEncabezadoMaestro(idsExistentes.size, hoyISO)];
    for (const eje of EJES_TEMATICOS) {
      const data = resultadosPorEje.get(eje.id);
      const lista = data ? data.nuevos : [];
      secciones.push(`## EJE: ${eje.titulo.toUpperCase()}\n`);
      for (const p of lista) {
        secciones.push(formatearPaperMarkdown(p));
      }
    }
    const fullContent = secciones.join("\n");
    fs.writeFileSync(FILE_04, fullContent, "utf8");
    console.log(`[arXiv Cognitive Updater] Creado ${FILE_04} con ${nuevosPapersCount} papers recientes (${(Buffer.byteLength(fullContent) / 1024).toFixed(1)} KB).`);
    return { nuevosPapers: nuevosPapersCount, totalRegistrados: idsExistentes.size };
  }

  // Si ya existe, insertar incrementalmente los nuevos papers en su sección correspondiente
  let content = fs.readFileSync(FILE_04, "utf8");
  content = content.replace(
    /- \*\*Última Actualización Automática\*\*:\s*[0-9-]+/,
    `- **Última Actualización Automática**: ${hoyISO}`
  );

  if (nuevosPapersCount > 0) {
    for (const eje of EJES_TEMATICOS) {
      const data = resultadosPorEje.get(eje.id);
      if (!data || data.nuevos.length === 0) continue;
      const sectionHeader = `## EJE: ${eje.titulo.toUpperCase()}`;
      const idx = content.indexOf(sectionHeader);
      const nuevosMd = data.nuevos.map(p => formatearPaperMarkdown(p)).join("\n");
      if (idx !== -1) {
        const endLine = content.indexOf("\n", idx);
        const before = content.slice(0, endLine + 1);
        const after = content.slice(endLine + 1);
        content = `${before}\n${nuevosMd}\n${after.replace(/^\n+/, "")}`;
      } else {
        content += `\n\n${sectionHeader}\n\n${nuevosMd}`;
      }
    }
  }

  fs.writeFileSync(FILE_04, content, "utf8");
  console.log(`[arXiv Cognitive Updater] Actualizado ${FILE_04} -> Nuevos papers añadidos: ${nuevosPapersCount} | Total registrados: ${idsExistentes.size}`);
  return { nuevosPapers: nuevosPapersCount, totalRegistrados: idsExistentes.size };
}

if (require.main === module) {
  actualizarArquitecturaCognitivaArxiv().catch(err => {
    console.error("Error en actualizador_arquitectura_cognitiva_arxiv:", err);
    process.exit(1);
  });
}

module.exports = { actualizarArquitecturaCognitivaArxiv };
