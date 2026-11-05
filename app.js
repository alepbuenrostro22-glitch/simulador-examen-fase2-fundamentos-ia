const POINTS_PER_QUESTION = 10;
const PASSING_PERCENTAGE = 70;
const STORAGE_KEY = "azure_ai901_session_attempts";

const questionsData = [
  {
    id: 1,
    question:
      "Una tienda minorista quiere segmentar a sus clientes basándose en su historial de compras, pero no cuenta con categorías ni etiquetas previas para definirlos. ¿Qué tipo de aprendizaje automático debe utilizar?",
    options: [
      { letter: "A", text: "Clasificación" },
      { letter: "B", text: "Regresión" },
      { letter: "C", text: "Agrupamiento (Clustering)" },
      { letter: "D", text: "Aprendizaje por refuerzo" },
    ],
    correct: "C",
    whyCorrect:
      "El agrupamiento (Clustering) es una técnica de aprendizaje no supervisado que descubre patrones y agrupa datos similares (clientes con hábitos parecidos) sin requerir etiquetas previas.",
    whyOthers:
      "La clasificación (A) y la regresión (B) son técnicas supervisadas que exigen datos previamente etiquetados, mientras que el aprendizaje por refuerzo (D) se basa en decisiones secuenciales mediante recompensas y penalizaciones.",
  },
  {
    id: 2,
    question:
      "Una aplicación de reconocimiento de voz es diseñada para entender con precisión diferentes acentos regionales y a usuarios con impedimentos del habla. ¿Qué principio de IA responsable de Microsoft se está aplicando de forma directa?",
    options: [
      { letter: "A", text: "Privacidad y seguridad" },
      { letter: "B", text: "Inclusión" },
      { letter: "C", text: "Transparencia" },
      { letter: "D", text: "Responsabilidad (Accountability)" },
    ],
    correct: "B",
    whyCorrect:
      "El principio de Inclusión busca que los sistemas de IA empoderen e involucren a todas las personas en el mundo, eliminando barreras relacionadas con capacidades físicas, auditivas, del habla o variaciones regionales.",
    whyOthers:
      "Privacidad y seguridad (A) protege los datos personales; Transparencia (C) explica cómo funciona el modelo; y Responsabilidad (D) establece el marco ético y legal de quienes diseñan el sistema.",
  },
  {
    id: 3,
    question:
      "Un equipo recibe miles de correos electrónicos de soporte y necesita extraer automáticamente los conceptos y temas principales de los que trata cada mensaje. ¿Qué capacidad de lenguaje es la más adecuada?",
    options: [
      { letter: "A", text: "Análisis de opiniones (Sentiment Analysis)" },
      { letter: "B", text: "Extracción de frases clave" },
      { letter: "C", text: "Reconocimiento de entidades nombradas (NER)" },
      { letter: "D", text: "Detección de idioma" },
    ],
    correct: "B",
    whyCorrect:
      "La extracción de frases clave evalúa el texto no estructurado e identifica los conceptos centrales o puntos principales de cada documento o correo.",
    whyOthers:
      "El análisis de opiniones (A) solo mide la polaridad emocional; NER (C) identifica objetos específicos como nombres, fechas o lugares; y Detección de idioma (D) solo indica en qué lengua está escrito el texto.",
  },
  {
    id: 4,
    question:
      "Una empresa de control de calidad necesita un sistema que simplemente indique si una radiografía industrial muestra una soldadura defectuosa o no, sin necesidad de dibujar un recuadro o ubicar espacialmente el defecto. ¿Qué servicio debe utilizar?",
    options: [
      { letter: "A", text: "Clasificación de imágenes" },
      { letter: "B", text: "Detección de objetos" },
      { letter: "C", text: "Reconocimiento óptico de caracteres (OCR)" },
      { letter: "D", text: "Análisis de opiniones visuales" },
    ],
    correct: "A",
    whyCorrect:
      "La clasificación de imágenes asigna una categoría o etiqueta global a toda la imagen (por ejemplo, 'defectuosa' o 'aceptable') sin requerir coordenadas espaciales.",
    whyOthers:
      "La detección de objetos (B) se usa cuando necesitas localizar objetos específicos con recuadros delimitadores (bounding boxes); OCR (C) lee texto en imágenes; y (D) no es una capacidad estándar para inspección visual.",
  },
  {
    id: 5,
    question:
      "Estás configurando un modelo generativo y necesitas definir su tono, las reglas de comportamiento y los límites temáticos para que actúe como un tutor académico. ¿En qué componente se debe establecer esta configuración?",
    options: [
      { letter: "A", text: "En el mensaje del usuario final (User prompt)" },
      { letter: "B", text: "En el mensaje del sistema (System prompt)" },
      { letter: "C", text: "En los parámetros de penalización por frecuencia" },
      { letter: "D", text: "En el índice de búsqueda documental" },
    ],
    correct: "B",
    whyCorrect:
      "El mensaje del sistema (System prompt) establece las instrucciones base, la personalidad, las restricciones y el marco de comportamiento del modelo antes de interactuar con el usuario.",
    whyOthers:
      "El User prompt (A) es la consulta que envía el usuario; la penalización por frecuencia (C) solo evita la repetición de palabras; y el índice de búsqueda (D) almacena datos externos para consultas.",
  },
  {
    id: 6,
    question:
      "Durante la evaluación de un modelo de diagnóstico médico predictivo, el sistema indicó que un paciente estaba sano, cuando en realidad las pruebas de laboratorio confirmaron que tenía la enfermedad. ¿Cómo se clasifica este resultado estadístico?",
    options: [
      { letter: "A", text: "Verdadero positivo" },
      { letter: "B", text: "Verdadero negativo" },
      { letter: "C", text: "Falso positivo" },
      { letter: "D", text: "Falso negativo" },
    ],
    correct: "D",
    whyCorrect:
      "Es un Falso negativo porque el modelo predijo un resultado negativo (paciente sano), pero esa predicción fue falsa ya que la condición positiva (enfermedad) sí estaba presente.",
    whyOthers:
      "Un Falso positivo (C) sería diagnosticar enfermo a alguien sano; mientras que Verdadero positivo (A) y Verdadero negativo (B) ocurren cuando el modelo acierta correctamente el estado real del paciente.",
  },
  {
    id: 7,
    question:
      "Un banco utiliza un modelo para predecir el riesgo crediticio y publica un documento claro que explica cómo las variables de ingresos y deudas influyen en la decisión final del sistema para que los usuarios lo comprendan. ¿Qué principio de IA responsable se está cumpliendo?",
    options: [
      { letter: "A", text: "Equidad" },
      { letter: "B", text: "Transparencia" },
      { letter: "C", text: "Privacidad" },
      { letter: "D", text: "Inclusión" },
    ],
    correct: "B",
    whyCorrect:
      "La Transparencia (e inteligibilidad) consiste en informar claramente a los usuarios cómo funciona el sistema de IA, qué factores pesan en sus decisiones y cuáles son sus limitaciones.",
    whyOthers:
      "La Equidad (A) busca evitar el trato discriminatorio; la Privacidad (C) resguarda la confidencialidad de los datos; y la Inclusión (D) se enfoca en la accesibilidad universal del sistema.",
  },
  {
    id: 8,
    question:
      "¿Cuál es el mecanismo técnico principal que permite a un modelo de lenguaje (LLM) basar sus respuestas en la base de conocimientos interna y privada de una empresa sin tener que reentrenar el modelo?",
    options: [
      { letter: "A", text: "Aumentar el parámetro de temperatura al máximo." },
      {
        letter: "B",
        text: "Aplicar Generación Aumentada por Recuperación (RAG).",
      },
      {
        letter: "C",
        text: "Utilizar un modelo exclusivo de clasificación de imágenes.",
      },
      {
        letter: "D",
        text: "Entrenar el modelo desde cero usando datos públicos.",
      },
    ],
    correct: "B",
    whyCorrect:
      "RAG (Retrieval-Augmented Generation) recupera fragmentos relevantes desde documentos internos de la empresa y los inyecta en el prompt para fundamentar la respuesta sin modificar ni reentrenar los pesos del modelo.",
    whyOthers:
      "Subir la temperatura (A) aumenta la aleatoriedad y el riesgo de alucinaciones; la clasificación de imágenes (C) no procesa texto documental; y entrenar desde cero (D) es costoso y no usa datos privados en tiempo real.",
  },
  {
    id: 9,
    question:
      "Una firma de contabilidad necesita digitalizar recibos de gastos escaneados, identificando de manera inteligente y extrayendo el nombre del proveedor, el monto total y la fecha de la transacción. ¿Qué servicio es el más adecuado?",
    options: [
      { letter: "A", text: "Azure AI Document Intelligence" },
      { letter: "B", text: "Azure AI Translator" },
      { letter: "C", text: "Azure AI Content Safety" },
      { letter: "D", text: "Azure AI Speech" },
    ],
    correct: "A",
    whyCorrect:
      "Azure AI Document Intelligence incluye modelos precompilados especializados en recibos y facturas que extraen pares clave-valor (proveedor, fecha, total) y estructuras de tablas.",
    whyOthers:
      "Translator (B) traduce texto entre idiomas; Content Safety (C) modera contenido dañino; y Speech (D) procesa audio y voz, no documentos escaneados.",
  },
  {
    id: 10,
    question:
      "Estás configurando un modelo generativo para escribir respuestas legales precisas y repetibles, donde no se desea ningún nivel de creatividad ni improvisación. ¿Qué ajuste debes realizar en la configuración?",
    options: [
      {
        letter: "A",
        text: "Aumentar la temperatura a un valor cercano a 1.0.",
      },
      { letter: "B", text: "Reducir la temperatura a un valor cercano a 0." },
      { letter: "C", text: "Aumentar el parámetro Top-P al máximo." },
      { letter: "D", text: "Eliminar el historial del chat en cada consulta." },
    ],
    correct: "B",
    whyCorrect:
      "Reducir la temperatura cerca de 0 hace que el modelo sea determinista y seleccione siempre las palabras más probables, generando respuestas consistentes, formales y precisas.",
    whyOthers:
      "Aumentar la temperatura cerca de 1.0 (A) o subir Top-P al máximo (C) incrementa la variedad léxica y la creatividad; y borrar el historial (D) solo elimina el contexto conversacional.",
  },
  {
    id: 11,
    question:
      "¿Qué servicio usarías para crear una aplicación de seguridad que verifique geométricamente si el rostro de la persona frente a la cámara coincide con su foto de gafete registrada?",
    options: [
      { letter: "A", text: "Azure AI Face" },
      { letter: "B", text: "Detección de objetos personalizada" },
      { letter: "C", text: "Azure AI Content Safety" },
      { letter: "D", text: "Clasificación de imágenes" },
    ],
    correct: "A",
    whyCorrect:
      "Azure AI Face está diseñado específicamente para detectar, analizar y verificar biométricamente rostros humanos mediante puntos de referencia geométricos faciales.",
    whyOthers:
      "Detección de objetos (B) y Clasificación de imágenes (D) identifican categorías visuales generales sin biometría facial; y Content Safety (C) filtra material inapropiado.",
  },
  {
    id: 12,
    question:
      "Un restaurante quiere monitorear automáticamente las reseñas publicadas en su sitio web para categorizar rápidamente si los clientes tuvieron una experiencia positiva, neutral o negativa. ¿Qué capacidad debe implementar?",
    options: [
      { letter: "A", text: "Análisis de opiniones (Sentiment Analysis)" },
      { letter: "B", text: "Reconocimiento de entidades nombradas (NER)" },
      { letter: "C", text: "Generación de resúmenes de texto" },
      { letter: "D", text: "Traducción automática" },
    ],
    correct: "A",
    whyCorrect:
      "El Análisis de opiniones (Sentiment Analysis) evalúa el texto y devuelve etiquetas de sentimiento (positivo, neutral, negativo o mixto) junto con puntuaciones de confianza.",
    whyOthers:
      "NER (B) solo extrae nombres o lugares; los resúmenes (C) acortan textos largos sin clasificarlos por polaridad; y la traducción (D) convierte el texto a otro idioma.",
  },
  {
    id: 13,
    question:
      "Una empresa de logística quiere predecir de forma continua cuántos litros de combustible consumirá un camión en su próxima ruta, basándose en el kilometraje, el peso de la carga y la temperatura del clima. ¿Qué tipo de modelo de aprendizaje automático necesita?",
    options: [
      { letter: "A", text: "Agrupamiento" },
      { letter: "B", text: "Clasificación binaria" },
      { letter: "C", text: "Regresión" },
      { letter: "D", text: "Clasificación multiclase" },
    ],
    correct: "C",
    whyCorrect:
      "La Regresión es el método de aprendizaje supervisado que se utiliza para predecir un valor numérico continuo (como litros de combustible, precio o tiempo).",
    whyOthers:
      "La clasificación binaria (B) y multiclase (D) predicen categorías discretas (no valores continuos), y el agrupamiento (A) separa datos sin etiquetas previas.",
  },
  {
    id: 14,
    question:
      "Dentro de una arquitectura que consulta documentos internos (RAG), ¿cuál es el propósito principal de un servicio de búsqueda indexada (como Azure AI Search)?",
    options: [
      {
        letter: "A",
        text: "Generar el texto fluido de la respuesta final que leerá el usuario.",
      },
      {
        letter: "B",
        text: "Buscar y extraer los fragmentos de texto más relevantes de los manuales para pasarlos al modelo.",
      },
      {
        letter: "C",
        text: "Traducir los documentos fuente al idioma nativo del usuario antes de guardarlos.",
      },
      {
        letter: "D",
        text: "Evaluar si la pregunta del usuario viola políticas de seguridad.",
      },
    ],
    correct: "B",
    whyCorrect:
      "El índice de búsqueda (como Azure AI Search) se encarga de la fase de recuperación: localiza los fragmentos más relevantes en los documentos para inyectarlos como contexto al modelo generativo.",
    whyOthers:
      "Redactar la respuesta fluida (A) es tarea del LLM; traducir (C) corresponde a Azure AI Translator; y evaluar políticas de seguridad (D) lo realiza Azure AI Content Safety.",
  },
  {
    id: 15,
    question:
      "Una aplicación de transporte público necesita anunciar dinámicamente por altavoz la próxima estación a los pasajeros a medida que el tren avanza en su ruta. ¿Qué capacidad de inteligencia artificial se requiere?",
    options: [
      { letter: "A", text: "Reconocimiento de voz (Speech-to-Text)" },
      { letter: "B", text: "Traducción de voz" },
      { letter: "C", text: "Síntesis de voz (Text-to-Speech)" },
      { letter: "D", text: "Reconocimiento del hablante" },
    ],
    correct: "C",
    whyCorrect:
      "La síntesis de voz (Text-to-Speech) convierte cadenas de texto digitales (como el nombre de la próxima estación) en audio hablado natural para reproducirlo por altavoz.",
    whyOthers:
      "Speech-to-Text (A) hace lo inverso (convierte voz en texto); Traducción de voz (B) traduce audio entre idiomas; y Reconocimiento del hablante (D) identifica quién está hablando.",
  },
];

// Estado de la aplicación
let currentQuestionIndex = 0;
let currentScoreHits = 0;
let currentAttemptAnswers = [];

// Referencias del DOM
const quizView = document.getElementById("quiz-view");
const resultView = document.getElementById("result-view");
const questionCounter = document.getElementById("question-counter");
const liveScore = document.getElementById("live-score");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackCard = document.getElementById("feedback-card");
const feedbackHeader = document.getElementById("feedback-header");
const feedbackCorrect = document.getElementById("feedback-correct");
const feedbackOthers = document.getElementById("feedback-others");
const btnNext = document.getElementById("btn-next");

const historyPanel = document.getElementById("history-panel");
const historyList = document.getElementById("history-list");
const attemptCountSpan = document.getElementById("attempt-count");
const btnToggleHistory = document.getElementById("btn-toggle-history");
const btnCloseHistory = document.getElementById("btn-close-history");

const statusBadge = document.getElementById("status-badge");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");
const finalPercentage = document.getElementById("final-percentage");
const finalHits = document.getElementById("final-hits");
const finalPoints = document.getElementById("final-points");
const btnRetry = document.getElementById("btn-retry");
const reviewSection = document.getElementById("review-section");
const reviewContainer = document.getElementById("review-container");

// Obtener historial de sessionStorage
function getSessionAttempts() {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

// Guardar intento en sessionStorage
function saveAttemptToSession(attemptObj) {
  const attempts = getSessionAttempts();
  attempts.push(attemptObj);
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attempts));
  updateHistoryUI();
}

// Verificar si el usuario ya aprobó en esta sesión
function getApprovedAttempt() {
  const attempts = getSessionAttempts();
  return attempts.find((a) => a.percentage >= PASSING_PERCENTAGE) || null;
}

// Actualizar panel de historial
function updateHistoryUI() {
  const attempts = getSessionAttempts();
  attemptCountSpan.textContent = attempts.length;

  if (attempts.length === 0) {
    historyList.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem;">Aún no hay intentos registrados en esta sesión.</p>`;
    return;
  }

  historyList.innerHTML = attempts
    .map((att, idx) => {
      const isPass = att.percentage >= PASSING_PERCENTAGE;
      return `
            <div class="history-item ${isPass ? "passed" : "failed"}">
                <div>
                    <strong>Intento #${idx + 1}</strong>
                    <span style="color: var(--text-muted); margin-left: 0.5rem;">(${att.timestamp})</span>
                </div>
                <div>
                    <strong>${att.percentage}%</strong> | ${att.hits}/${questionsData.length} aciertos (${att.points} pts) —
                    <span style="color: ${isPass ? "var(--neon-green)" : "var(--neon-red)"}; font-weight: 700;">
                        ${isPass ? "APROBADO" : "NO APROBADO"}
                    </span>
                </div>
            </div>
        `;
    })
    .join("");
}

// Iniciar o verificar bloqueo por aprobación
function initSimulator() {
  updateHistoryUI();
  const approvedAttempt = getApprovedAttempt();

  if (approvedAttempt) {
    // Si ya aprobó en la sesión, mostrar directamente los resultados y la revisión completa
    showFinalScreen(approvedAttempt, true);
  } else {
    startNewQuiz();
  }
}

function startNewQuiz() {
  currentQuestionIndex = 0;
  currentScoreHits = 0;
  currentAttemptAnswers = [];

  resultView.classList.add("hidden");
  quizView.classList.remove("hidden");
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const q = questionsData[currentQuestionIndex];
  const total = questionsData.length;

  questionCounter.textContent = `PREGUNTA ${String(currentQuestionIndex + 1).padStart(2, "0")} / ${total}`;
  liveScore.textContent = `ACIERTOS: ${currentScoreHits}`;
  progressFill.style.width = `${(currentQuestionIndex / total) * 100}%`;

  questionText.textContent = `${q.id}. ${q.question}`;
  optionsContainer.innerHTML = "";

  feedbackCard.classList.add("hidden");
  feedbackCard.classList.remove("is-correct", "is-incorrect");
  btnNext.classList.add("hidden");

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `
            <span class="option-letter">${opt.letter}</span>
            <span class="option-text">${opt.text}</span>
        `;
    btn.addEventListener("click", () => handleSelectOption(opt.letter, btn));
    optionsContainer.appendChild(btn);
  });
}

function handleSelectOption(selectedLetter, selectedButton) {
  const q = questionsData[currentQuestionIndex];
  const isCorrect = selectedLetter === q.correct;

  if (isCorrect) {
    currentScoreHits++;
    liveScore.textContent = `ACIERTOS: ${currentScoreHits}`;
  }

  // Guardar respuesta del usuario
  currentAttemptAnswers.push({
    questionId: q.id,
    selected: selectedLetter,
    correct: q.correct,
    isCorrect: isCorrect,
  });

  // Deshabilitar todos los botones y marcar colores
  const allButtons = optionsContainer.querySelectorAll(".option-btn");
  allButtons.forEach((btn, idx) => {
    btn.disabled = true;
    const optLetter = q.options[idx].letter;
    if (optLetter === q.correct) {
      btn.classList.add("correct");
    } else if (optLetter === selectedLetter && !isCorrect) {
      btn.classList.add("incorrect");
    }
  });

  // Mostrar tarjeta de retroalimentación
  feedbackCard.classList.remove("hidden");
  if (isCorrect) {
    feedbackCard.classList.add("is-correct");
    feedbackHeader.style.color = "var(--neon-green)";
    feedbackHeader.textContent = "✓ RESPUESTA CORRECTA (+10 PTS)";
  } else {
    feedbackCard.classList.add("is-incorrect");
    feedbackHeader.style.color = "var(--neon-red)";
    feedbackHeader.textContent = `✕ RESPUESTA INCORRECTA (Correcta: Opción ${q.correct})`;
  }

  feedbackCorrect.innerHTML = `<strong>¿Por qué es la respuesta correcta?:</strong> ${q.whyCorrect}`;
  feedbackOthers.innerHTML = `<strong>¿Por qué se descartan las demás?:</strong> ${q.whyOthers}`;

  btnNext.textContent =
    currentQuestionIndex === questionsData.length - 1
      ? "FINALIZAR EVALUACIÓN →"
      : "SIGUIENTE PREGUNTA →";
  btnNext.classList.remove("hidden");
}

btnNext.addEventListener("click", () => {
  if (currentQuestionIndex < questionsData.length - 1) {
    currentQuestionIndex++;
    renderCurrentQuestion();
  } else {
    finishQuizAttempt();
  }
});

function finishQuizAttempt() {
  const totalQuestions = questionsData.length;
  const percentage = Math.round((currentScoreHits / totalQuestions) * 100);
  const points = currentScoreHits * POINTS_PER_QUESTION;
  const now = new Date();
  const timeStr = now.toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const attemptData = {
    hits: currentScoreHits,
    points: points,
    percentage: percentage,
    timestamp: timeStr,
    answers: currentAttemptAnswers,
  };

  saveAttemptToSession(attemptData);
  const passed = percentage >= PASSING_PERCENTAGE;
  showFinalScreen(attemptData, passed);
}

function showFinalScreen(attemptData, isLockedByPass) {
  quizView.classList.add("hidden");
  resultView.classList.remove("hidden");

  const maxPoints = questionsData.length * POINTS_PER_QUESTION;
  finalPercentage.textContent = `${attemptData.percentage}%`;
  finalHits.textContent = `${attemptData.hits} / ${questionsData.length}`;
  finalPoints.textContent = `${attemptData.points} / ${maxPoints}`;

  if (isLockedByPass) {
    statusBadge.className = "status-badge pass";
    statusBadge.textContent = "ACREDITADO (≥ 70%)";
    resultTitle.textContent = "¡EXAMEN DE LA FASE 2 SUPERADO!";
    resultMessage.textContent =
      "Has alcanzado el puntaje aprobatorio en tu sesión. El simulador ha bloqueado nuevos intentos y habilitado la revisión completa de tus respuestas.";
    btnRetry.classList.add("hidden");
    renderFullReview(attemptData.answers);
    reviewSection.classList.remove("hidden");
  } else {
    statusBadge.className = "status-badge fail";
    statusBadge.textContent = "PUNTAJE INSUFICIENTE (< 70%)";
    resultTitle.textContent = "INTENTO FINALIZADO";
    resultMessage.textContent =
      "Se requiere al menos el 70% (105 puntos / 11 aciertos) para acreditar. Puedes realizar un nuevo intento.";
    btnRetry.classList.remove("hidden");
    reviewSection.classList.add("hidden");
  }
}

function renderFullReview(userAnswers) {
  reviewContainer.innerHTML = questionsData
    .map((q, index) => {
      const userAns = userAnswers[index];
      const selectedOptionObj = q.options.find(
        (o) => o.letter === userAns.selected,
      );
      const correctOptionObj = q.options.find((o) => o.letter === q.correct);

      return `
            <div class="review-item">
                <p class="review-q-title">${q.id}. ${q.question}</p>
                <div class="review-ans ${userAns.isCorrect ? "user-hit" : "user-miss"}">
                    <strong>Tu respuesta:</strong> ${userAns.selected}) ${selectedOptionObj ? selectedOptionObj.text : ""}
                    ${userAns.isCorrect ? "✓" : "✕"}
                </div>
                ${
                  !userAns.isCorrect
                    ? `
                    <div class="review-ans user-hit">
                        <strong>Respuesta correcta:</strong> ${q.correct}) ${correctOptionObj.text}
                    </div>
                `
                    : ""
                }
                <div class="review-explanation">
                    <strong>Fundamento:</strong> ${q.whyCorrect}<br>
                    <span><strong>Descarte:</strong> ${q.whyOthers}</span>
                </div>
            </div>
        `;
    })
    .join("");
}

// Eventos de botones secundarios
btnRetry.addEventListener("click", () => {
  if (!getApprovedAttempt()) {
    startNewQuiz();
  }
});

btnToggleHistory.addEventListener("click", () => {
  historyPanel.classList.toggle("hidden");
});

btnCloseHistory.addEventListener("click", () => {
  historyPanel.classList.add("hidden");
});

// Inicializar al cargar
document.addEventListener("DOMContentLoaded", initSimulator);
