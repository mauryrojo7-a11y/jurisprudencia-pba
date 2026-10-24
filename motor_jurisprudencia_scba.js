#!/usr/bin/env node
/**
 * MOTOR DE BÚSQUEDA JURISPRUDENCIAL COMPARATIVA EN TIEMPO REAL - SCBA
 * Conectado a https://sentencias.scba.gov.ar/ y https://sentencias-camara.scba.gov.ar/
 *
 * - Ignora validación SSL (NODE_TLS_REJECT_UNAUTHORIZED = "0")
 * - Consulta en paralelo:
 *   1) Precedentes propios: Juzgado en lo Civil y Comercial N° 7 de Avellaneda (ID: 3659)
 *   2) Alzada directa: Cámara de Apelación en lo Civil y Comercial de Avellaneda-Lanús (ID: 4157)
 *      + Alzada residual/histórica (Cámara Civ. y Com. Lomas de Zamora Salas I, II y III: 312, 313, 2063)
 *   3) Restantes Cámaras de Apelación en lo Civil y Comercial de la Provincia de Buenos Aires
 * - Extrae el texto íntegro real y metadatos verificados mediante ObtenerRegistroVisualizar/
 */

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const fs = require("fs");
const path = require("path");
const https = require("https");

const ORGANISMOS_PATH = path.join(__dirname, "organismos_scba.json");
const BASE_URL_PRIMERA = "https://sentencias.scba.gov.ar";
const BASE_URL_CAMARA = "https://sentencias-camara.scba.gov.ar";

/**
 * Decodifica entidades HTML comunes de los portales de la SCBA.
 */
function decodeHtmlEntities(str) {
  if (!str) return "";
  return str
    .replace(/&#x([0-9A-Fa-f]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(parseInt(dec, 10)))
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&ntilde;/gi, "ñ")
    .replace(/&Ntilde;/gi, "Ñ")
    .replace(/&aacute;/gi, "á")
    .replace(/&eacute;/gi, "é")
    .replace(/&iacute;/gi, "í")
    .replace(/&oacute;/gi, "ó")
    .replace(/&uacute;/gi, "ú")
    .replace(/&Aacute;/gi, "Á")
    .replace(/&Eacute;/gi, "É")
    .replace(/&Iacute;/gi, "Í")
    .replace(/&Oacute;/gi, "Ó")
    .replace(/&Uacute;/gi, "Ú");
}

/**
 * Convierte el HTML de un fallo en texto plano limpio preservando párrafos.
 */
function htmlToCleanText(html) {
  if (!html) return "";
  let text = html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<\/(p|div|tr|h[1-6]|li|br)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ");
  text = decodeHtmlEntities(text);
  return text
    .split("\n")
    .map(line => line.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
}

/**
 * Formatea fecha Date a DD/MM/AAAA
 */
function formatDateDDMMYYYY(date = new Date()) {
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
}

/**
 * Convierte "DD-MM-YYYY" o "DD/MM/YYYY" a "YYYY-MM-DD" para ordenar cronológicamente.
 */
function normalizeDateForSort(fechaStr) {
  if (!fechaStr) return "0000-00-00";
  const m = fechaStr.trim().match(/^(\d{2})[-/](\d{2})[-/](\d{4})$/);
  if (m) return `${m[3]}-${m[2]}-${m[1]}`;
  return fechaStr;
}

/**
 * Ejecuta una petición HTTP con timeout y reintento automático ignorando errores SSL.
 */
async function fetchWithRetry(url, options = {}, retries = 2, timeoutMs = 20000) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, { ...options, signal: controller.signal });
      clearTimeout(timer);
      if (!res.ok) throw new Error(`HTTP ${res.status} en ${url}`);
      return await res.text();
    } catch (err) {
      clearTimeout(timer);
      if (attempt === retries) throw err;
      await new Promise(r => setTimeout(r, 400 * (attempt + 1)));
    }
  }
}

/**
 * Busca registros en BuscarRegistrosPorFechaYOrganismo para un organismo, registro y término dado.
 */
async function buscarEnOrganismo({
  idOrganismo,
  nombreOrganismo = "",
  idRegistro = "1",
  fDesde = "01/06/2025",
  fHasta = formatDateDDMMYYYY(),
  textoIncluido = "",
  baseUrl = BASE_URL_PRIMERA
}) {
  const regStr = String(idRegistro);
  let registroNombre = "REGISTRO DE RESOLUCIONES";
  if (regStr === "1") registroNombre = "REGISTRO DE SENTENCIAS";
  else if (regStr === "2") registroNombre = "REGISTRO DE RESOLUCIONES";
  else if (regStr === "4") registroNombre = "REGISTRO DE SENTENCIAS DE SUPREMA CORTE";
  else if (regStr === "5") registroNombre = "REGISTRO DE RESOLUCIONES DE SUPREMA CORTE";

  const payload = {
    fDesde,
    fHasta,
    texoIncluido: textoIncluido, // Nombre exacto del campo en el DOM de SCBA
    idOrganismo: String(idOrganismo),
    idRegistro: regStr,
    nombreOrganismo,
    registro: registroNombre
  };

  const html = await fetchWithRetry(
    `${baseUrl}/RegistroElectronico/BuscarRegistrosPorFechaYOrganismo`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload)
    }
  );

  const tbodyMatch = html.match(/<tbody>([\s\S]*?)<\/tbody>/i);
  if (!tbodyMatch) return [];

  const rows = [...tbodyMatch[1].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
  const results = [];

  for (const rowMatch of rows) {
    const rowHtml = rowMatch[1];
    if (rowHtml.includes("dataTables_empty")) continue;
    const tds = [...rowHtml.matchAll(/<td([^>]*)>([\s\S]*?)<\/td>/gi)];
    if (tds.length < 5) continue;

    const idCodigoAcceso = decodeHtmlEntities(tds[0][2]).replace(/\s+/g, "").trim();
    if (!idCodigoAcceso) continue;

    const nroRegistro = decodeHtmlEntities(tds[1][2]).replace(/\s+/g, " ").trim();
    const fecha = decodeHtmlEntities(tds[2][2]).replace(/\s+/g, " ").trim();
    const fechaOrderMatch = tds[2][1].match(/data-order="([^"]+)"/i);
    const fechaISO = fechaOrderMatch ? fechaOrderMatch[1] : normalizeDateForSort(fecha);
    const nroExpediente = decodeHtmlEntities(tds[3][2]).replace(/\s+/g, " ").trim();
    const caratula = decodeHtmlEntities(tds[4][2]).replace(/\s+/g, " ").trim();

    results.push({
      idCodigoAcceso,
      idOrganismo: String(idOrganismo),
      nombreOrganismo,
      idRegistro: String(idRegistro),
      tipoRegistro: registroNombre,
      nroRegistro,
      fecha,
      fechaISO,
      nroExpediente,
      caratula,
      portalOrigen: baseUrl
    });
  }

  results.sort((a, b) => b.fechaISO.localeCompare(a.fechaISO));
  return results;
}

/**
 * Extrae el texto íntegro y metadatos completos de una sentencia o resolución desde ObtenerRegistroVisualizar/
 */
async function obtenerTextoIntegro(idCodigoAcceso, baseUrl = BASE_URL_PRIMERA) {
  const html = await fetchWithRetry(
    `${baseUrl}/RegistroElectronico/ObtenerRegistroVisualizar/`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ idCodigoAcceso: String(idCodigoAcceso).trim() })
    }
  );

  // Extraer secciones por encabezado de card
  const organismoMatch = html.match(/<b>Organismo:<\/b>\s*([^<]+)</i);
  const causaMatch = html.match(/<b>Causa:<\/b>\s*([\s\S]*?)\s*-\s*<b>N[uú]mero:<\/b>\s*([^<]+)</i);

  // Extraer el cuerpo de la tarjeta "Documento"
  let documentoHtml = "";
  const docCardMatch = html.match(/<h6[^>]*>\s*Documento\s*<\/h6>\s*<\/div>\s*<div class="card-body"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*(?:<!--|<div class="card)/i);
  if (docCardMatch) {
    documentoHtml = docCardMatch[1];
  } else {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    documentoHtml = bodyMatch ? bodyMatch[1] : html;
  }

  // Extraer firmantes
  const firmantesSectionMatch = html.match(/<h6[^>]*>\s*Firmantes\s*<\/h6>\s*<\/div>\s*<div class="card-body"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/i);
  const firmantes = firmantesSectionMatch ? htmlToCleanText(firmantesSectionMatch[1]) : "";

  // Extraer registración
  const regSectionMatch = html.match(/<h6[^>]*>\s*Registraci[oó]n\s*<\/h6>\s*<\/div>\s*<div class="card-body"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/i);
  const registracion = regSectionMatch ? htmlToCleanText(regSectionMatch[1]) : "";

  const textoIntegro = htmlToCleanText(documentoHtml);

  return {
    idCodigoAcceso: String(idCodigoAcceso).trim(),
    organismo: organismoMatch ? decodeHtmlEntities(organismoMatch[1]).trim() : "",
    caratula: causaMatch ? decodeHtmlEntities(causaMatch[1]).replace(/\s+/g, " ").trim() : "",
    nroExpediente: causaMatch ? decodeHtmlEntities(causaMatch[2]).trim() : "",
    firmantes,
    registracion,
    textoIntegro
  };
}

/**
 * Extrae metadatos enriquecidos, sumario JUBA / síntesis y doctrina legal aplicable
 * de un fallo de la Suprema Corte de Justicia de la Provincia de Buenos Aires (SCBA - Causas C. / Ac.).
 */
function extraerDoctrinaYSumarioSCBA(textoIntegro, caratulaTabla = "", nroExpediente = "") {
  const txt = String(textoIntegro || "");
  if (!txt) {
    return {
      caratulaCompleta: caratulaTabla,
      tribunalOrigen: "",
      magistradosVotantes: "",
      cuestionPlanteada: "",
      precedentesCitados: [],
      doctrinaLegalAplicable: [],
      resolucionDispositiva: ""
    };
  }

  // 1. Carátula completa si en la tabla figura anonimizada con puntos
  let caratulaCompleta = caratulaTabla;
  const acuerdoCaratulaMatch =
    txt.match(/causa\s+(?:C\.|Ac\.)\s*[\d.]+,\s*"([^"]+)"/i) ||
    txt.match(/^(?:C\.|Ac\.)\s*[\d.]+\s+"([^"]+)"/m);
  if (acuerdoCaratulaMatch && (!caratulaCompleta || /^\.+/.test(caratulaCompleta))) {
    caratulaCompleta = `${acuerdoCaratulaMatch[1].trim()} (${caratulaTabla || nroExpediente})`;
  }

  // 2. Magistrados votantes (Ac. 2078)
  let magistradosVotantes = "";
  const votMatch = txt.match(/orden de votaci[oó]n[^:]*:\s*([^\n.]+)\./i);
  if (votMatch) {
    magistradosVotantes = votMatch[1].trim();
  }

  // 3. Tribunal de Origen (Cámara o Tribunal apelado)
  let tribunalOrigen = "";
  const camMatch = txt.match(/((?:La\s+)?(?:Sala\s+[I|V|X\d]+\s+de\s+la\s+)?C[aá]mara\s+(?:Primera\s+|Segunda\s+|I+\s+)?de\s+Apelaci[oó]n\s+en\s+lo\s+Civil\s+y\s+Comercial[^\n.,;]*|Tribunal\s+de\s+Familia[^\n.,;]*)/i);
  if (camMatch) {
    tribunalOrigen = camMatch[1].replace(/^La\s+/i, "").trim();
  }

  // 4. Cuestión Planteada en el Acuerdo
  let cuestionPlanteada = "";
  const cuestMatch = txt.match(/C\s*U\s*E\s*S\s*T\s*I\s*[OÓ]\s*N(?:\s*E\s*S)?\s*\n+([^\n]+(?:\n¿[^\n]+)*)/i);
  if (cuestMatch) {
    cuestionPlanteada = cuestionPlanteada = cuestMatch[1].replace(/\s+/g, " ").trim();
  }

  // 5. Precedentes de la SCBA citados en el fallo (Causas C., Ac., L., B., etc.)
  const precedentesSet = new Set();
  const rxPrec = /\b(?:causas?\s+)?(C\.\s*\d{2,3}\.\d{3}|Ac\.\s*\d{2,3}\.\d{3}|L\.\s*\d{2,3}\.\d{3}|B\.\s*\d{2,3}\.\d{3})\b/gi;
  for (const m of txt.matchAll(rxPrec)) {
    const code = m[1].replace(/\s+/g, " ").trim();
    if (!nroExpediente || !code.replace(/\D/g, "").includes(nroExpediente.replace(/\D/g, ""))) {
      precedentesSet.add(code);
    }
  }
  const precedentesCitados = [...precedentesSet].slice(0, 15);

  // 6. Doctrina Legal Aplicable / Sumario JUBA extraído de los fundamentos centrales de la Corte
  const parrafos = txt.split(/\n+/).map(p => p.trim()).filter(p => p.length > 90);
  const doctrinaParrafos = [];
  const rxDoctrina = /(tiene dicho esta Corte|doctrina legal|esta Suprema Corte|art\.\s*279|art\.\s*289|vicio de absurdo|recurso extraordinario de inaplicabilidad|principio de congruencia|tasa de inter[eé]s|Barrios|obligaci[oó]n de dar dinero|valoraci[oó]n de la prueba|costas|caducidad|prescripci[oó]n|inconstitucionalidad)/i;

  for (const p of parrafos) {
    if (/^(A C U E R D O|A N T E C E D E N T E S|S E N T E N C I A|AUTOS Y VISTOS|Reg[ií]strese)/i.test(p)) continue;
    if (rxDoctrina.test(p)) {
      doctrinaParrafos.push(p);
      if (doctrinaParrafos.length >= 4) break;
    }
  }
  if (doctrinaParrafos.length === 0 && parrafos.length > 1) {
    doctrinaParrafos.push(...parrafos.slice(1, 3));
  }

  // 7. Parte Dispositiva / Sentencia
  let resolucionDispositiva = "";
  const sentIdx = txt.search(/\bS\s*E\s*N\s*T\s*E\s*N\s*C\s*I\s*A\b|\bPOR ELLO,\s*se\s*resuelve:/i);
  if (sentIdx !== -1) {
    resolucionDispositiva = txt
      .slice(sentIdx)
      .replace(/^S\s*E\s*N\s*T\s*E\s*N\s*C\s*I\s*A\s*/i, "")
      .split(/\n/)
      .filter(l => !/^Reg[ií]strese|^Suscripto|^Funcionario:|^---/i.test(l.trim()))
      .slice(0, 6)
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
  }

  return {
    caratulaCompleta,
    tribunalOrigen,
    magistradosVotantes,
    cuestionPlanteada,
    precedentesCitados,
    doctrinaLegalAplicable: doctrinaParrafos,
    resolucionDispositiva
  };
}

/**
 * Ejecuta funciones asíncronas con límite de concurrencia.
 */
async function mapConcurrent(items, concurrency, fn) {
  const results = new Array(items.length);
  let idx = 0;
  async function worker() {
    while (idx < items.length) {
      const current = idx++;
      try {
        results[current] = await fn(items[current], current);
      } catch (err) {
        results[current] = { error: err.message, item: items[current] };
      }
    }
  }
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

/**
 * Realiza búsqueda multi-término sobre un conjunto de organismos y registros,
 * deduplicando por idCodigoAcceso y ordenando por cantidad de coincidencias y fecha reciente.
 */
async function buscarMultiTerminoEnOrganismos({
  organismos,
  terminos,
  registros = ["1", "2"],
  fDesde = "01/06/2025",
  fHasta = formatDateDDMMYYYY(),
  filtroCaratula = "",
  concurrency = 10
}) {
  const cleanTerms = (Array.isArray(terminos) ? terminos : [terminos])
    .map(t => String(t || "").trim())
    .filter(Boolean);
  const searchTerms = cleanTerms.length > 0 ? cleanTerms : [""];

  const tasks = [];
  for (const org of organismos) {
    for (const idReg of registros) {
      for (const term of searchTerms) {
        tasks.push({ org, idReg, term });
      }
    }
  }

  const rawResponses = await mapConcurrent(tasks, concurrency, async ({ org, idReg, term }) => {
    const items = await buscarEnOrganismo({
      idOrganismo: org.id,
      nombreOrganismo: org.nombre,
      idRegistro: idReg,
      fDesde,
      fHasta,
      textoIncluido: term
    });
    return { term, items };
  });

  const byCode = new Map();
  for (const resp of rawResponses) {
    if (!resp || !Array.isArray(resp.items)) continue;
    for (const item of resp.items) {
      if (filtroCaratula) {
        const rx = new RegExp(filtroCaratula, "i");
        if (!rx.test(item.caratula)) continue;
      }
      const existing = byCode.get(item.idCodigoAcceso);
      if (existing) {
        if (resp.term && !existing.terminosCoincidentes.includes(resp.term)) {
          existing.terminosCoincidentes.push(resp.term);
        }
      } else {
        byCode.set(item.idCodigoAcceso, {
          ...item,
          terminosCoincidentes: resp.term ? [resp.term] : []
        });
      }
    }
  }

  const merged = [...byCode.values()];
  merged.sort((a, b) => {
    if (b.terminosCoincidentes.length !== a.terminosCoincidentes.length) {
      return b.terminosCoincidentes.length - a.terminosCoincidentes.length;
    }
    return b.fechaISO.localeCompare(a.fechaISO);
  });
  return merged;
}

/**
 * Motor principal de Búsqueda Comparativa:
 * 1) Precedentes propios del Juzgado Civil y Comercial N° 7 de Avellaneda (ID 3659)
 * 2) Precedentes de la Alzada Directa: Cámara Civ. y Com. Avellaneda-Lanús (ID 4157) y Lomas de Zamora (Salas I, II, III)
 * 3) Precedentes de las restantes Cámaras de Apelación en lo Civil y Comercial de la PBA
 * Extrae el texto íntegro de los fallos más relevantes/recientes de cada nivel.
 */
async function ejecutarBusquedaComparativa({
  terminos = [],
  registros = ["1", "2"],
  fDesde = "01/06/2025",
  fHasta = formatDateDDMMYYYY(),
  filtroCaratula = "",
  maxTextosJuzgado7 = 5,
  maxTextosAlzadaDirecta = 5,
  maxTextosOtrasCamaras = 5,
  maxTextosSupremaCorte = 5,
  incluirTodasLasCamaras = true
}) {
  const config = JSON.parse(fs.readFileSync(ORGANISMOS_PATH, "utf8"));

  const orgJuzgado7 = [
    { id: config.juzgado_propio.id, nombre: config.juzgado_propio.nombre }
  ];

  const orgAlzadaDirecta = [
    { id: config.alzada_directa.principal.id, nombre: config.alzada_directa.principal.nombre, prioridad: 1 },
    ...config.alzada_directa.alzada_residual_historica_lomas_de_zamora.map(c => ({
      id: c.id,
      nombre: c.nombre,
      prioridad: c.prioridad || 2
    }))
  ];

  const idsAlzadaDirecta = new Set(orgAlzadaDirecta.map(o => String(o.id)));
  const orgRestantesCamaras = incluirTodasLasCamaras
    ? config.camaras_civil_y_comercial_todas.filter(
        c => c.activa && !idsAlzadaDirecta.has(String(c.id))
      )
    : [];

  const orgSupremaCorte = config.suprema_corte_scba?.secretaria_civil_y_comercial
    ? [{ id: config.suprema_corte_scba.secretaria_civil_y_comercial.id, nombre: config.suprema_corte_scba.secretaria_civil_y_comercial.nombre }]
    : [{ id: "289", nombre: "SECRETARIA CIVIL ,COMERCIAL Y DE FAMILIA - SUPREMA CORTE DE JUSTICIA" }];

  const registrosSupremaCorte = registros.map(r => (String(r) === "1" ? "4" : String(r) === "2" ? "5" : String(r)));

  // Ejecutar búsquedas en paralelo en los 4 niveles (Juzgado 7, Cámara Avellaneda-Lanús, Cámaras PBA y Suprema Corte SCBA)
  const [resultadosJuzgado7, resultadosAlzadaDirecta, resultadosOtrasCamaras, resultadosSupremaCorte] = await Promise.all([
    buscarMultiTerminoEnOrganismos({
      organismos: orgJuzgado7,
      terminos,
      registros,
      fDesde,
      fHasta,
      filtroCaratula,
      concurrency: 6
    }),
    buscarMultiTerminoEnOrganismos({
      organismos: orgAlzadaDirecta,
      terminos,
      registros,
      fDesde,
      fHasta,
      filtroCaratula,
      concurrency: 8
    }),
    orgRestantesCamaras.length > 0
      ? buscarMultiTerminoEnOrganismos({
          organismos: orgRestantesCamaras,
          terminos,
          registros,
          fDesde,
          fHasta,
          filtroCaratula,
          concurrency: 12
        })
      : Promise.resolve([]),
    buscarMultiTerminoEnOrganismos({
      organismos: orgSupremaCorte,
      terminos,
      registros: registrosSupremaCorte,
      fDesde,
      fHasta,
      filtroCaratula,
      concurrency: 6
    })
  ]);

  // Priorizar en Alzada Directa a la Cámara de Avellaneda-Lanús (ID 4157) y causas con prefijo AL-
  resultadosAlzadaDirecta.sort((a, b) => {
    const aIs4157 = a.idOrganismo === "4157" ? 1 : 0;
    const bIs4157 = b.idOrganismo === "4157" ? 1 : 0;
    if (bIs4157 !== aIs4157) return bIs4157 - aIs4157;
    if (b.terminosCoincidentes.length !== a.terminosCoincidentes.length) {
      return b.terminosCoincidentes.length - a.terminosCoincidentes.length;
    }
    const aIsAL = /^AL-/i.test(a.nroExpediente) ? 1 : 0;
    const bIsAL = /^AL-/i.test(b.nroExpediente) ? 1 : 0;
    if (bIsAL !== aIsAL) return bIsAL - aIsAL;
    return b.fechaISO.localeCompare(a.fechaISO);
  });

  // En Suprema Corte priorizar Sentencias Definitivas (RS / idRegistro 4) y mayor coincidencia de términos
  resultadosSupremaCorte.sort((a, b) => {
    if (b.terminosCoincidentes.length !== a.terminosCoincidentes.length) {
      return b.terminosCoincidentes.length - a.terminosCoincidentes.length;
    }
    const aIsRS = a.idRegistro === "4" ? 1 : 0;
    const bIsRS = b.idRegistro === "4" ? 1 : 0;
    if (bIsRS !== aIsRS) return bIsRS - aIsRS;
    return b.fechaISO.localeCompare(a.fechaISO);
  });

  // Seleccionar top N de cada categoría para extraer texto íntegro
  const topJuzgado7 = resultadosJuzgado7.slice(0, maxTextosJuzgado7);
  const topAlzadaDirecta = resultadosAlzadaDirecta.slice(0, maxTextosAlzadaDirecta);
  const topOtrasCamaras = resultadosOtrasCamaras.slice(0, maxTextosOtrasCamaras);
  const topSupremaCorte = resultadosSupremaCorte.slice(0, maxTextosSupremaCorte);

  // Extraer textos íntegros en paralelo
  const enrichWithFullText = async (items, isSCBA = false) => {
    return mapConcurrent(items, 6, async (item) => {
      const detalle = await obtenerTextoIntegro(item.idCodigoAcceso, item.portalOrigen);
      const extraSCBA = isSCBA
        ? extraerDoctrinaYSumarioSCBA(detalle.textoIntegro, item.caratula, item.nroExpediente)
        : {};
      return {
        ...item,
        ...extraSCBA,
        firmantes: detalle.firmantes,
        registracion: detalle.registracion,
        textoIntegro: detalle.textoIntegro
      };
    });
  };

  const [juzgado7ConTexto, alzadaDirectaConTexto, otrasCamarasConTexto, supremaCorteConTexto] = await Promise.all([
    enrichWithFullText(topJuzgado7),
    enrichWithFullText(topAlzadaDirecta),
    enrichWithFullText(topOtrasCamaras),
    enrichWithFullText(topSupremaCorte, true)
  ]);

  return {
    parametros: {
      terminos,
      registros,
      fDesde,
      fHasta,
      filtroCaratula,
      timestamp: new Date().toISOString()
    },
    resumen: {
      total_juzgado_7_avellaneda: resultadosJuzgado7.length,
      total_alzada_directa_avellaneda_lanus_y_lomas: resultadosAlzadaDirecta.length,
      total_restantes_camaras_pba: resultadosOtrasCamaras.length,
      total_suprema_corte_scba_civil_comercial: resultadosSupremaCorte.length
    },
    juzgado_7_avellaneda: {
      organismo: config.juzgado_propio,
      total_encontrados: resultadosJuzgado7.length,
      fallos_con_texto_integro: juzgado7ConTexto,
      listado_completo: resultadosJuzgado7.slice(0, 30)
    },
    alzada_directa: {
      organismos_consultados: orgAlzadaDirecta,
      total_encontrados: resultadosAlzadaDirecta.length,
      fallos_con_texto_integro: alzadaDirectaConTexto,
      listado_completo: resultadosAlzadaDirecta.slice(0, 30)
    },
    restantes_camaras_pba: {
      total_organismos_consultados: orgRestantesCamaras.length,
      total_encontrados: resultadosOtrasCamaras.length,
      fallos_con_texto_integro: otrasCamarasConTexto,
      listado_completo: resultadosOtrasCamaras.slice(0, 30)
    },
    suprema_corte_scba: {
      organismo: orgSupremaCorte[0],
      total_encontrados: resultadosSupremaCorte.length,
      fallos_con_texto_integro: supremaCorteConTexto,
      listado_completo: resultadosSupremaCorte.slice(0, 30)
    }
  };
}

/**
 * Interfaz CLI para invocación directa desde terminal o desde el Agente.
 */
async function runCli() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    console.log(`
Uso del Motor Jurisprudencial SCBA:
  1) Búsqueda comparativa completa (Juzgado Civ. y Com. N° 7 Avellaneda + Cámara Avellaneda-Lanús + Restantes Cámaras PBA):
     node motor_jurisprudencia_scba.js --query "término1,término2" [--reg 1|2|ambos] [--caratula "FILTRO"] [--max 5] [--desde DD/MM/AAAA] [--hasta DD/MM/AAAA] [--out archivo.json]

  2) Obtener el texto íntegro de un fallo específico por su código de acceso:
     node motor_jurisprudencia_scba.js --doc <idCodigoAcceso>

  3) Buscar en un organismo específico por su ID:
     node motor_jurisprudencia_scba.js --org <idOrganismo> --query "término" [--reg 1|2]
`);
    process.exit(0);
  }

  const getArg = (flag) => {
    const i = args.indexOf(flag);
    return i !== -1 && i + 1 < args.length ? args[i + 1] : null;
  };

  const docId = getArg("--doc");
  if (docId) {
    const doc = await obtenerTextoIntegro(docId);
    console.log(JSON.stringify(doc, null, 2));
    return;
  }

  const queryRaw = getArg("--query") || getArg("-q") || (!args[0].startsWith("-") ? args[0] : "");
  const terminos = queryRaw
    ? queryRaw.split(/[,|]/).map(s => s.trim()).filter(Boolean)
    : [];

  const regArg = getArg("--reg") || "ambos";
  const registros = regArg === "1" ? ["1"] : regArg === "2" ? ["2"] : ["1", "2"];
  const fDesde = getArg("--desde") || "01/06/2025";
  const fHasta = getArg("--hasta") || formatDateDDMMYYYY();
  const filtroCaratula = getArg("--caratula") || "";
  const max = parseInt(getArg("--max") || "4", 10);
  const outFile = getArg("--out");
  const soloAlzada = args.includes("--solo-alzada");

  const orgEspecifico = getArg("--org");
  if (orgEspecifico) {
    const res = await buscarMultiTerminoEnOrganismos({
      organismos: [{ id: orgEspecifico, nombre: `Organismo ${orgEspecifico}` }],
      terminos,
      registros,
      fDesde,
      fHasta,
      filtroCaratula
    });
    const topConTexto = await mapConcurrent(res.slice(0, max), 5, async (item) => {
      const det = await obtenerTextoIntegro(item.idCodigoAcceso);
      return { ...item, ...det };
    });
    const output = { total: res.length, fallos_con_texto_integro: topConTexto, listado: res.slice(0, 30) };
    if (outFile) fs.writeFileSync(outFile, JSON.stringify(output, null, 2), "utf8");
    console.log(JSON.stringify(output, null, 2));
    return;
  }

  const resultado = await ejecutarBusquedaComparativa({
    terminos,
    registros,
    fDesde,
    fHasta,
    filtroCaratula,
    maxTextosJuzgado7: max,
    maxTextosAlzadaDirecta: max,
    maxTextosOtrasCamaras: max,
    incluirTodasLasCamaras: !soloAlzada
  });

  if (outFile) {
    fs.writeFileSync(outFile, JSON.stringify(resultado, null, 2), "utf8");
  }
  console.log(JSON.stringify(resultado, null, 2));
}

if (require.main === module) {
  runCli().catch(err => {
    console.error("Error en motor_jurisprudencia_scba:", err);
    process.exit(1);
  });
}

module.exports = {
  buscarEnOrganismo,
  obtenerTextoIntegro,
  extraerDoctrinaYSumarioSCBA,
  buscarMultiTerminoEnOrganismos,
  ejecutarBusquedaComparativa
};
