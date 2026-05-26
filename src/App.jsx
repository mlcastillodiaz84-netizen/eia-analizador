import { useState } from "react";

const bloques = [
  {
    id: "cpli",
    codigo: "B1",
    titulo: "Consulta Libre, Previa e Informada",
    marco: "Convenio 169 OIT · CIDH · Jurisprudencia",
    color: "#C17A3A",
    criterios: [
      {
        id: "cpli_1",
        pregunta: "¿Se realizó la consulta ANTES de la aprobación del IIA?",
        fundamento: "Art. 6 C169 OIT: la consulta debe ser previa a la decisión administrativa, no posterior.",
        evidencia: "Actas de reunión con fecha anterior a la DIA",
      },
      {
        id: "cpli_2",
        pregunta: "¿Se respetaron tiempos adecuados para la deliberación interna comunitaria?",
        fundamento: "CIDH OC-23/17 y jurisprudencia Sarayaku c. Ecuador (2012): tiempo suficiente según usos y costumbres propios. Sin plazo fijo, pero NUNCA inferior a 30 días hábiles para proyectos de gran escala.",
        evidencia: "Comparar fechas de notificación vs. fecha de respuesta comunitaria vs. fecha de DIA",
      },
      {
        id: "cpli_3",
        pregunta: "¿Se informó en idioma/formato comprensible para las comunidades?",
        fundamento: "Art. 12 C169 OIT + Sarayaku §201: información técnicamente accesible y culturalmente apropiada.",
        evidencia: "Materiales de difusión, actas con constancia de traducción o mediación intercultural",
      },
      {
        id: "cpli_4",
        pregunta: "¿Se realizó de buena fe (sin presiones, incentivos condicionados o desinformación)?",
        fundamento: "Art. 6.2 C169 OIT. Indicadores de mala fe: presencia de fuerzas de seguridad, oferta de beneficios previos al consentimiento, fragmentación de comunidades, plazos impuestos unilateralmente.",
        evidencia: "Actas, denuncias, comunicados de comunidades, notas periodísticas verificadas",
      },
      {
        id: "cpli_5",
        pregunta: "¿Se identificaron y convocaron TODAS las comunidades del área de influencia directa?",
        fundamento: "Decreto 7751/2023 Jujuy Art. 76 + C169: no puede el Estado seleccionar qué comunidades consultar.",
        evidencia: "Mapa de comunidades vs. lista de convocadas en el expediente",
      },
      {
        id: "cpli_6",
        pregunta: "¿Las comunidades tuvieron representación legítima según sus propias formas organizativas?",
        fundamento: "Art. 6.1.a C169: a través de sus instituciones representativas, no delegados designados por el Estado.",
        evidencia: "Personería de organizaciones participantes, actas de asamblea de designación de representantes",
      },
    ],
  },
  {
    id: "acceso",
    codigo: "B2",
    titulo: "Acceso a la Información y Participación",
    marco: "Acuerdo de Escazú · Ley 27.275 · Art. 7 Escazú",
    color: "#3A7A6B",
    criterios: [
      {
        id: "acc_1",
        pregunta: "¿El IIA completo fue publicado y accesible al público antes de la audiencia o consulta?",
        fundamento: "Art. 7.3 Escazú: información debe estar disponible con anticipación suficiente.",
        evidencia: "Fecha de publicación en portal vs. fecha de consulta pública",
      },
      {
        id: "acc_2",
        pregunta: "¿Se convocó audiencia pública o mecanismo equivalente de participación abierta?",
        fundamento: "Art. 7 Escazú + Ley 25.675 Art. 20-21: participación ciudadana efectiva en decisiones ambientales.",
        evidencia: "Acta de audiencia pública, resolución de convocatoria",
      },
      {
        id: "acc_3",
        pregunta: "¿Las observaciones ciudadanas recibieron respuesta fundamentada?",
        fundamento: "Escazú Art. 7.7: el Estado debe tener en cuenta los resultados de la participación.",
        evidencia: "Documento de respuesta a observaciones en el expediente",
      },
      {
        id: "acc_4",
        pregunta: "¿Se garantizó acceso a la información sin discriminación ni requisitos desproporcionados?",
        fundamento: "Ley 27.275 Art. 1-2 + Escazú Art. 5: acceso sin necesidad de justificar interés.",
        evidencia: "Requisitos de registro en portal, restricciones de descarga",
      },
    ],
  },
  {
    id: "acumulativo",
    codigo: "B3",
    titulo: "Impacto Acumulativo y Sinérgico",
    marco: "LGA Art. 11 · Principio Precautorio · Estándares internacionales",
    color: "#5A3A7A",
    criterios: [
      {
        id: "acu_1",
        pregunta: "¿El IIA consideró los impactos de otros proyectos en el mismo salar o cuenca?",
        fundamento: "LGA Art. 11: EIA debe incluir análisis de impactos acumulativos. Ausencia en legislación provincial no exime: Ley 25.675 es norma de presupuestos mínimos de aplicación directa.",
        evidencia: "Capítulo de línea de base e impactos: ¿menciona proyectos vecinos (Olaroz + Cauchari en la misma cuenca)?",
      },
      {
        id: "acu_2",
        pregunta: "¿Se evaluaron impactos sinérgicos sobre el sistema hídrico del salar como unidad?",
        fundamento: "Convención Ramsar: el salar es una unidad ecosistémica. El bombeo en un punto afecta el equilibrio del sistema completo.",
        evidencia: "Modelos hidrogeológicos, estudios de balance hídrico del salar completo",
      },
      {
        id: "acu_3",
        pregunta: "¿Se aplicó el principio precautorio ante incertidumbre científica sobre impactos?",
        fundamento: "LGA Art. 4 + Escazú Art. 8.3: ante incertidumbre, la carga de la prueba recae en el operador.",
        evidencia: "¿El IIA reconoce incertidumbres? ¿Propone medidas ante escenarios inciertos?",
      },
    ],
  },
  {
    id: "ddhh",
    codigo: "B4",
    titulo: "Derechos Humanos y Emergencia Climática",
    marco: "OC-23/17 CIDH · OC Emergencia Climática 2024 · PIDESC",
    color: "#7A3A3A",
    criterios: [
      {
        id: "ddhh_1",
        pregunta: "¿El IIA incorpora enfoque de derechos humanos (agua, salud, alimentación, territorio)?",
        fundamento: "OC-23/17 CIDH (2017): el daño ambiental puede constituir violación de DDHH. El Estado tiene obligación de prevención.",
        evidencia: "¿El IIA analiza impactos sobre derechos, no solo sobre 'recursos naturales'?",
      },
      {
        id: "ddhh_2",
        pregunta: "¿Se evaluó el impacto sobre el derecho al agua de comunidades dependientes del salar?",
        fundamento: "PIDESC Art. 11-12 + OG 15 Comité DESC: el agua es derecho humano. Comunidades de puna dependen de bofedales y vegas vinculados al sistema hídrico del salar.",
        evidencia: "Capítulo de recursos hídricos: ¿incluye usos comunitarios actuales y futuros?",
      },
      {
        id: "ddhh_3",
        pregunta: "¿Se consideró la Opinión Consultiva de Emergencia Climática (CIDH 2024)?",
        fundamento: "OC sobre emergencia climática (solicitada por Chile y Colombia, emitida 2024): refuerza obligaciones estatales de prevención ante proyectos extractivos en ecosistemas vulnerables.",
        evidencia: "Referencia en el IIA o en la DIA a contexto de crisis climática y compromisos NDC de Argentina",
      },
    ],
  },
  {
    id: "humedales",
    codigo: "B5",
    titulo: "Protección de Humedales",
    marco: "Ramsar · Principio Precautorio · Ley de humedales (ausencia)",
    color: "#3A5A7A",
    criterios: [
      {
        id: "hum_1",
        pregunta: "¿Se identificó explícitamente al salar como humedal altoandino bajo Ramsar?",
        fundamento: "Argentina es parte de la Convención Ramsar (Ley 23.919). Los salares de puna son humedales aunque no estén en la Lista Ramsar: la Convención protege todos los humedales.",
        evidencia: "Línea de base: ¿caracteriza al salar como humedal con sus funciones ecosistémicas?",
      },
      {
        id: "hum_2",
        pregunta: "¿Se evaluaron impactos sobre la biodiversidad específica del humedal (flamencos, vicuñas, bofedales)?",
        fundamento: "CDB Art. 14 + Ramsar Resolución XI.8: EIA debe considerar biodiversidad de humedales.",
        evidencia: "Capítulo de fauna y flora: ¿incluye especies dependientes del régimen hídrico del salar?",
      },
      {
        id: "hum_3",
        pregunta: "¿Ante ausencia de Ley Nacional de Humedales, se aplicó el principio precautorio reforzado?",
        fundamento: "El vacío legal no exime de protección: LGA Art. 4 + Ramsar como tratado incorporado (Art. 75 inc. 22 CN). La ausencia de regulación específica exige mayor cautela, no menor.",
        evidencia: "¿El IIA o la DIA mencionan este vacío y adoptan estándares precautorios compensatorios?",
      },
    ],
  },
  {
    id: "contenido",
    codigo: "B6",
    titulo: "Contenido Mínimo del IIA",
    marco: "Decreto 7751/2023 Jujuy · Ley 24.585 · LGA",
    color: "#4A6A3A",
    criterios: [
      {
        id: "cont_1",
        pregunta: "¿El IIA contiene todos los elementos exigidos por el Decreto 7751/2023?",
        fundamento: "Art. 38 Decreto 7751/2023: requisitos mínimos de contenido. Su ausencia permite rechazo del IIA.",
        evidencia: "Índice del IIA vs. lista de requisitos del decreto",
      },
      {
        id: "cont_2",
        pregunta: "¿Se incluye plan de gestión ambiental con indicadores verificables y cronograma?",
        fundamento: "Ley 24.585 + Decreto 7751/2023: el PGA debe ser operativo, no declarativo.",
        evidencia: "Capítulo de PGA: ¿tiene metas medibles, responsables y plazos concretos?",
      },
      {
        id: "cont_3",
        pregunta: "¿Se incluye plan de cierre y remediación con garantías financieras?",
        fundamento: "Ley 24.585 Art. 253 bis: obligación de plan de cierre. Sin garantía financiera, es declaración sin respaldo.",
        evidencia: "¿Hay póliza, fideicomiso u otro instrumento de garantía en el expediente?",
      },
      {
        id: "cont_4",
        pregunta: "¿La línea de base es suficiente para evaluar impactos (mínimo 2 años de datos previos)?",
        fundamento: "Estándar técnico internacional (IFC Performance Standards): línea de base requiere datos de al menos dos ciclos estacionales completos.",
        evidencia: "Período de relevamiento de datos en el IIA",
      },
    ],
  },
];

const estadoOpciones = [
  { valor: "sin_evaluar", label: "Sin evaluar", color: "#6B7280" },
  { valor: "cumple", label: "Cumple", color: "#16A34A" },
  { valor: "cumple_parcial", label: "Cumple parcialmente", color: "#D97706" },
  { valor: "no_cumple", label: "No cumple", color: "#DC2626" },
  { valor: "sin_informacion", label: "Sin información", color: "#7C3AED" },
];

const getEstadoOpt = (v) => estadoOpciones.find((e) => e.valor === v) || estadoOpciones[0];

export default function App() {
  const [proyectoActivo, setProyectoActivo] = useState(null);
  const [proyectos, setProyectos] = useState([]);
  const [bloqueActivo, setBloqueActivo] = useState(null);
  const [criterioAbierto, setCriterioAbierto] = useState(null);
  const [modalNuevoProyecto, setModalNuevoProyecto] = useState(false);
  const [nuevoProyecto, setNuevoProyecto] = useState({ nombre: "", salar: "", empresa: "", expediente: "", anio: "" });
  const [evaluaciones, setEvaluaciones] = useState({});
  const [notas, setNotas] = useState({});
  const [vista, setVista] = useState("inicio");

  const crearProyecto = () => {
    if (!nuevoProyecto.nombre) return;
    const id = Date.now().toString();
    setProyectos([...proyectos, { ...nuevoProyecto, id }]);
    setProyectoActivo(id);
    setModalNuevoProyecto(false);
    setNuevoProyecto({ nombre: "", salar: "", empresa: "", expediente: "", anio: "" });
    setBloqueActivo(null);
    setVista("evaluacion");
  };

  const setEval = (proyId, critId, valor) => {
    setEvaluaciones((prev) => ({
      ...prev,
      [proyId]: { ...(prev[proyId] || {}), [critId]: valor },
    }));
  };

  const setNota = (proyId, critId, texto) => {
    setNotas((prev) => ({
      ...prev,
      [proyId]: { ...(prev[proyId] || {}), [critId]: texto },
    }));
  };

  const getEval = (proyId, critId) => evaluaciones[proyId]?.[critId] || "sin_evaluar";
  const getNota = (proyId, critId) => notas[proyId]?.[critId] || "";

  const calcularResumen = (proyId) => {
    const total = bloques.reduce((a, b) => a + b.criterios.length, 0);
    let cumple = 0, parcial = 0, noCumple = 0, sinInfo = 0, sinEval = 0;
    bloques.forEach((b) => b.criterios.forEach((c) => {
      const v = getEval(proyId, c.id);
      if (v === "cumple") cumple++;
      else if (v === "cumple_parcial") parcial++;
      else if (v === "no_cumple") noCumple++;
      else if (v === "sin_informacion") sinInfo++;
      else sinEval++;
    }));
    return { total, cumple, parcial, noCumple, sinInfo, sinEval };
  };

  const proyActual = proyectos.find((p) => p.id === proyectoActivo);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0F1117",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#E8E0D0",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #2A2A35",
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
        background: "#0F1117",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer" }}
          onClick={() => setVista("inicio")}>
          <div style={{
            width: "32px", height: "32px", borderRadius: "4px",
            background: "linear-gradient(135deg, #C17A3A, #7A4A2A)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "16px",
          }}>⚖</div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: "bold", letterSpacing: "0.05em", color: "#E8E0D0" }}>
              ANALIZADOR EIA
            </div>
            <div style={{ fontSize: "10px", color: "#6B7280", letterSpacing: "0.08em" }}>
              MINERÍA DE LITIO · HUMEDALES ANDINOS
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          {proyectos.length > 0 && (
            <select
              value={proyectoActivo || ""}
              onChange={(e) => { setProyectoActivo(e.target.value); setVista("evaluacion"); setBloqueActivo(null); }}
              style={{
                background: "#1A1A24", border: "1px solid #2A2A35", color: "#E8E0D0",
                padding: "6px 12px", borderRadius: "4px", fontSize: "12px", cursor: "pointer",
              }}>
              <option value="" disabled>Seleccionar expediente</option>
              {proyectos.map((p) => (
                <option key={p.id} value={p.id}>{p.nombre}</option>
              ))}
            </select>
          )}
          <button onClick={() => setModalNuevoProyecto(true)} style={{
            background: "#C17A3A", color: "#0F1117", border: "none",
            padding: "8px 16px", borderRadius: "4px", fontSize: "12px",
            fontWeight: "bold", cursor: "pointer", letterSpacing: "0.05em",
          }}>+ NUEVO EXPEDIENTE</button>
        </div>
      </div>

      {/* Pantalla de inicio */}
      {vista === "inicio" && (
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#C17A3A", marginBottom: "1rem" }}>
              HERRAMIENTA DE ANÁLISIS JURÍDICO-AMBIENTAL
            </div>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "normal", lineHeight: 1.2, marginBottom: "1.5rem", color: "#F5F0E8" }}>
              Evaluación de Cumplimiento Normativo<br />
              <span style={{ color: "#C17A3A" }}>EIA · Minería de Litio</span>
            </h1>
            <p style={{ fontSize: "15px", color: "#9A9080", lineHeight: 1.8, maxWidth: "600px" }}>
              Instrumento de análisis jurídico para cotejar expedientes administrativos de evaluación de impacto ambiental
              de proyectos mineros en humedales andinos contra estándares normativos nacionales e internacionales.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#2A2A35", marginBottom: "3rem" }}>
            {bloques.map((b) => (
              <div key={b.id} style={{ background: "#0F1117", padding: "1.5rem" }}>
                <div style={{ fontSize: "10px", letterSpacing: "0.1em", color: b.color, marginBottom: "0.5rem" }}>
                  {b.codigo}
                </div>
                <div style={{ fontSize: "13px", fontWeight: "bold", marginBottom: "0.5rem", color: "#E8E0D0" }}>
                  {b.titulo}
                </div>
                <div style={{ fontSize: "11px", color: "#6B7280" }}>{b.criterios.length} criterios</div>
                <div style={{ fontSize: "10px", color: "#4A4A55", marginTop: "0.5rem", lineHeight: 1.5 }}>{b.marco}</div>
              </div>
            ))}
          </div>

          {proyectos.length === 0 ? (
            <div style={{ textAlign: "center", padding: "3rem", border: "1px dashed #2A2A35", borderRadius: "4px" }}>
              <div style={{ fontSize: "14px", color: "#6B7280", marginBottom: "1rem" }}>
                No hay expedientes cargados
              </div>
              <button onClick={() => setModalNuevoProyecto(true)} style={{
                background: "#C17A3A", color: "#0F1117", border: "none",
                padding: "12px 24px", borderRadius: "4px", fontSize: "13px",
                fontWeight: "bold", cursor: "pointer",
              }}>Cargar primer expediente</button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "1rem" }}>
                EXPEDIENTES CARGADOS
              </div>
              {proyectos.map((p) => {
                const res = calcularResumen(p.id);
                return (
                  <div key={p.id} onClick={() => { setProyectoActivo(p.id); setVista("evaluacion"); setBloqueActivo(null); }}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "1rem 1.5rem", background: "#1A1A24", marginBottom: "1px",
                      cursor: "pointer", borderLeft: "3px solid #C17A3A",
                    }}>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: "bold", color: "#E8E0D0" }}>{p.nombre}</div>
                      <div style={{ fontSize: "12px", color: "#6B7280" }}>{p.empresa} · {p.salar} · {p.anio}</div>
                    </div>
                    <div style={{ display: "flex", gap: "1rem", fontSize: "12px" }}>
                      <span style={{ color: "#16A34A" }}>{res.cumple} ✓</span>
                      <span style={{ color: "#D97706" }}>{res.parcial} ◐</span>
                      <span style={{ color: "#DC2626" }}>{res.noCumple} ✗</span>
                      <span style={{ color: "#6B7280" }}>{res.sinEval} pendientes</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Vista de evaluación */}
      {vista === "evaluacion" && proyActual && (
        <div style={{ display: "flex", height: "calc(100vh - 64px)" }}>
          {/* Sidebar bloques */}
          <div style={{
            width: "260px", borderRight: "1px solid #2A2A35",
            background: "#0D0D16", flexShrink: 0, overflowY: "auto",
          }}>
            <div style={{ padding: "1.5rem 1rem 1rem" }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.5rem" }}>
                EXPEDIENTE
              </div>
              <div style={{ fontSize: "13px", fontWeight: "bold", color: "#E8E0D0", marginBottom: "0.25rem" }}>
                {proyActual.nombre}
              </div>
              <div style={{ fontSize: "11px", color: "#6B7280" }}>
                {proyActual.empresa} · {proyActual.anio}
              </div>
              {proyActual.expediente && (
                <div style={{ fontSize: "10px", color: "#4A4A55", marginTop: "0.25rem" }}>
                  Expte. {proyActual.expediente}
                </div>
              )}
            </div>
            <div style={{ borderTop: "1px solid #2A2A35", padding: "0.5rem 0" }}>
              {bloques.map((b) => {
                const evaluados = b.criterios.filter((c) => getEval(proyActual.id, c.id) !== "sin_evaluar");
                const activo = bloqueActivo === b.id;
                return (
                  <div key={b.id}
                    onClick={() => { setBloqueActivo(b.id); setCriterioAbierto(null); }}
                    style={{
                      padding: "0.75rem 1rem",
                      cursor: "pointer",
                      background: activo ? "#1A1A28" : "transparent",
                      borderLeft: activo ? `3px solid ${b.color}` : "3px solid transparent",
                    }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <div style={{ fontSize: "10px", color: b.color, letterSpacing: "0.08em" }}>{b.codigo}</div>
                        <div style={{ fontSize: "12px", color: activo ? "#F5F0E8" : "#9A9080", lineHeight: 1.4, marginTop: "2px" }}>
                          {b.titulo}
                        </div>
                      </div>
                      <div style={{ fontSize: "10px", color: "#4A4A55", flexShrink: 0, marginLeft: "0.5rem" }}>
                        {evaluados.length}/{b.criterios.length}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ padding: "1rem", borderTop: "1px solid #2A2A35" }}>
              <button onClick={() => setVista("resumen")} style={{
                width: "100%", background: "#1A1A24", color: "#C17A3A",
                border: "1px solid #C17A3A", padding: "8px", borderRadius: "4px",
                fontSize: "11px", cursor: "pointer", letterSpacing: "0.05em",
              }}>VER RESUMEN</button>
            </div>
          </div>

          {/* Panel principal */}
          <div style={{ flex: 1, overflowY: "auto", padding: "2rem" }}>
            {!bloqueActivo ? (
              <div style={{ textAlign: "center", padding: "4rem 2rem", color: "#4A4A55" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⬅</div>
                <div style={{ fontSize: "14px" }}>Seleccioná un bloque para comenzar la evaluación</div>
              </div>
            ) : (() => {
              const bloque = bloques.find((b) => b.id === bloqueActivo);
              return (
                <div>
                  <div style={{ marginBottom: "2rem" }}>
                    <div style={{ fontSize: "11px", color: bloque.color, letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                      {bloque.codigo} · {bloque.marco}
                    </div>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "normal", color: "#F5F0E8", marginBottom: "0.5rem" }}>
                      {bloque.titulo}
                    </h2>
                  </div>
                  {bloque.criterios.map((criterio, idx) => {
                    const evalActual = getEval(proyActual.id, criterio.id);
                    const estadoOpt = getEstadoOpt(evalActual);
                    const abierto = criterioAbierto === criterio.id;
                    return (
                      <div key={criterio.id} style={{
                        marginBottom: "1px",
                        background: abierto ? "#1A1A28" : "#141420",
                        borderLeft: `3px solid ${estadoOpt.color}`,
                      }}>
                        <div onClick={() => setCriterioAbierto(abierto ? null : criterio.id)}
                          style={{
                            padding: "1rem 1.25rem",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "1rem",
                          }}>
                          <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", flex: 1 }}>
                            <div style={{
                              fontSize: "10px", color: "#4A4A55", flexShrink: 0,
                              marginTop: "3px", fontFamily: "monospace",
                            }}>
                              {String(idx + 1).padStart(2, "0")}
                            </div>
                            <div style={{ fontSize: "13px", color: "#D0C8B8", lineHeight: 1.5 }}>
                              {criterio.pregunta}
                            </div>
                          </div>
                          <div style={{
                            fontSize: "10px", color: estadoOpt.color,
                            letterSpacing: "0.05em", flexShrink: 0,
                            padding: "3px 8px", border: `1px solid ${estadoOpt.color}`,
                            borderRadius: "2px",
                          }}>
                            {estadoOpt.label}
                          </div>
                        </div>
                        {abierto && (
                          <div style={{ padding: "0 1.25rem 1.25rem 2.75rem" }}>
                            <div style={{
                              background: "#0F0F1A", padding: "1rem", borderRadius: "4px",
                              marginBottom: "1rem", fontSize: "12px", lineHeight: 1.7, color: "#8A8070",
                            }}>
                              <div style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#4A4A55", marginBottom: "0.5rem" }}>
                                FUNDAMENTO NORMATIVO
                              </div>
                              {criterio.fundamento}
                            </div>
                            <div style={{
                              background: "#0F0F1A", padding: "1rem", borderRadius: "4px",
                              marginBottom: "1rem", fontSize: "12px", lineHeight: 1.7, color: "#8A8070",
                            }}>
                              <div style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#4A4A55", marginBottom: "0.5rem" }}>
                                ¿QUÉ BUSCAR EN EL EXPEDIENTE?
                              </div>
                              {criterio.evidencia}
                            </div>
                            <div style={{ marginBottom: "1rem" }}>
                              <div style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#4A4A55", marginBottom: "0.5rem" }}>
                                ESTADO DE CUMPLIMIENTO
                              </div>
                              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                                {estadoOpciones.map((op) => (
                                  <button key={op.valor}
                                    onClick={() => setEval(proyActual.id, criterio.id, op.valor)}
                                    style={{
                                      padding: "6px 12px", fontSize: "11px", cursor: "pointer",
                                      border: `1px solid ${op.color}`,
                                      background: evalActual === op.valor ? op.color : "transparent",
                                      color: evalActual === op.valor ? "#0F1117" : op.color,
                                      borderRadius: "2px", fontWeight: evalActual === op.valor ? "bold" : "normal",
                                    }}>
                                    {op.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div>
                              <div style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#4A4A55", marginBottom: "0.5rem" }}>
                                NOTAS / HALLAZGOS EN EL EXPEDIENTE
                              </div>
                              <textarea
                                value={getNota(proyActual.id, criterio.id)}
                                onChange={(e) => setNota(proyActual.id, criterio.id, e.target.value)}
                                placeholder="Registrá acá lo que encontrás en el expediente: fojas, fechas, documentos, observaciones..."
                                style={{
                                  width: "100%", minHeight: "80px", background: "#0F0F1A",
                                  border: "1px solid #2A2A35", color: "#D0C8B8",
                                  padding: "0.75rem", fontSize: "12px", lineHeight: 1.6,
                                  borderRadius: "4px", resize: "vertical", boxSizing: "border-box",
                                  fontFamily: "Georgia, serif",
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Vista resumen */}
      {vista === "resumen" && proyActual && (
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <button onClick={() => setVista("evaluacion")} style={{
              background: "transparent", border: "none", color: "#6B7280",
              fontSize: "12px", cursor: "pointer", marginBottom: "1rem", padding: 0,
            }}>← volver</button>
            <div style={{ fontSize: "11px", color: "#6B7280", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
              RESUMEN DE EVALUACIÓN
            </div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "normal", color: "#F5F0E8" }}>{proyActual.nombre}</h2>
            <div style={{ fontSize: "13px", color: "#6B7280" }}>{proyActual.empresa} · {proyActual.salar} · {proyActual.anio}</div>
          </div>

          {bloques.map((b) => {
            const res = { cumple: 0, parcial: 0, noCumple: 0, sinInfo: 0, sinEval: 0 };
            b.criterios.forEach((c) => {
              const v = getEval(proyActual.id, c.id);
              if (v === "cumple") res.cumple++;
              else if (v === "cumple_parcial") res.parcial++;
              else if (v === "no_cumple") res.noCumple++;
              else if (v === "sin_informacion") res.sinInfo++;
              else res.sinEval++;
            });
            return (
              <div key={b.id} style={{
                background: "#141420", marginBottom: "1px",
                borderLeft: `3px solid ${b.color}`,
              }}>
                <div style={{ padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: "10px", color: b.color, letterSpacing: "0.08em" }}>{b.codigo}</div>
                    <div style={{ fontSize: "13px", color: "#E8E0D0", fontWeight: "bold" }}>{b.titulo}</div>
                  </div>
                  <div style={{ display: "flex", gap: "1rem", fontSize: "12px" }}>
                    {res.cumple > 0 && <span style={{ color: "#16A34A" }}>{res.cumple} cumple</span>}
                    {res.parcial > 0 && <span style={{ color: "#D97706" }}>{res.parcial} parcial</span>}
                    {res.noCumple > 0 && <span style={{ color: "#DC2626" }}>{res.noCumple} no cumple</span>}
                    {res.sinInfo > 0 && <span style={{ color: "#7C3AED" }}>{res.sinInfo} sin info</span>}
                    {res.sinEval > 0 && <span style={{ color: "#4A4A55" }}>{res.sinEval} pendiente</span>}
                  </div>
                </div>
                {b.criterios.filter((c) => getNota(proyActual.id, c.id)).map((c) => (
                  <div key={c.id} style={{
                    padding: "0.75rem 1.25rem 0.75rem 2.5rem",
                    borderTop: "1px solid #2A2A35",
                    fontSize: "12px",
                  }}>
                    <div style={{ color: "#8A8070", marginBottom: "0.25rem", lineHeight: 1.4 }}>{c.pregunta}</div>
                    <div style={{ color: "#D0C8B8", fontStyle: "italic", lineHeight: 1.6 }}>
                      {getNota(proyActual.id, c.id)}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}

      {/* Modal nuevo proyecto */}
      {modalNuevoProyecto && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)",
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200,
        }}>
          <div style={{
            background: "#141420", border: "1px solid #2A2A35",
            padding: "2rem", width: "480px", borderRadius: "4px",
          }}>
            <div style={{ fontSize: "14px", fontWeight: "bold", color: "#F5F0E8", marginBottom: "1.5rem" }}>
              Cargar nuevo expediente
            </div>
            {[
              { key: "nombre", label: "Nombre del proyecto / expediente *" },
              { key: "empresa", label: "Empresa titular" },
              { key: "salar", label: "Salar / humedal" },
              { key: "expediente", label: "Número de expediente" },
              { key: "anio", label: "Año del IIA" },
            ].map((campo) => (
              <div key={campo.key} style={{ marginBottom: "1rem" }}>
                <div style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#6B7280", marginBottom: "0.4rem" }}>
                  {campo.label}
                </div>
                <input
                  value={nuevoProyecto[campo.key]}
                  onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, [campo.key]: e.target.value })}
                  style={{
                    width: "100%", background: "#0F1117", border: "1px solid #2A2A35",
                    color: "#E8E0D0", padding: "8px 12px", fontSize: "13px",
                    borderRadius: "4px", boxSizing: "border-box", fontFamily: "Georgia, serif",
                  }}
                />
              </div>
            ))}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
              <button onClick={crearProyecto} style={{
                flex: 1, background: "#C17A3A", color: "#0F1117", border: "none",
                padding: "10px", borderRadius: "4px", fontSize: "13px",
                fontWeight: "bold", cursor: "pointer",
              }}>Crear expediente</button>
              <button onClick={() => setModalNuevoProyecto(false)} style={{
                flex: 1, background: "transparent", color: "#6B7280",
                border: "1px solid #2A2A35", padding: "10px", borderRadius: "4px",
                fontSize: "13px", cursor: "pointer",
              }}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
