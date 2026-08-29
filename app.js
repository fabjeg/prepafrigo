/* Logique de l'application */

const STORAGE_KEY = "prepafrigo_progress_v1";

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { qcmScores: {}, courseSeen: {}, flashKnown: {} };
}
function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

let progress = loadProgress();
let currentView = { type: "home" };

const sidebarEl = document.getElementById("sidebar");
const mainEl = document.getElementById("main");

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function totalQuestions() {
  return CHAPTERS.reduce((s, c) => s + c.questions.length, 0);
}

function globalProgressPct() {
  const totalCh = CHAPTERS.length;
  let done = 0;
  CHAPTERS.forEach(c => {
    const sc = progress.qcmScores[c.id];
    if (sc && sc.pct >= 80) done++;
  });
  return Math.round((done / totalCh) * 100);
}

function renderSidebar() {
  let html = `<h1>🧊 Frigo CAT 1-5</h1><p class="subtitle">Habilitation fluide — Théorie &amp; Pratique</p>`;

  html += `<div class="nav-item ${currentView.type === "home" ? "active" : ""}" onclick="goHome()">🏠 Accueil</div>`;

  html += `<div class="nav-section-title">Chapitres</div>`;
  CHAPTERS.forEach(c => {
    const sc = progress.qcmScores[c.id];
    const active = currentView.type === "chapter" && currentView.chapterId === c.id;
    const doneClass = sc && sc.pct >= 80 ? "done" : "";
    const badge = sc ? `${sc.pct}%` : `${c.questions.length}Q`;
    html += `<div class="nav-item ${active ? "active" : ""} ${doneClass}" onclick="goChapter('${c.id}')">
      <span>${c.num}</span><span>${c.title}</span><span class="badge">${badge}</span>
    </div>`;
  });

  html += `<div class="nav-section-title">Révision</div>`;
  html += `<div class="nav-item ${currentView.type === "flash" ? "active" : ""}" onclick="goFlashcards()">🃏 Flashcards</div>`;
  html += `<div class="nav-item ${currentView.type === "exam" ? "active" : ""}" onclick="goExam()">📝 Examen final</div>`;

  sidebarEl.innerHTML = html;
}

function topbar(title, kicker) {
  return `<div class="topbar">
    <div>
      <div class="chapter-kicker">${kicker}</div>
      <h2 class="chapter-title">${title}</h2>
    </div>
    <div class="progress-global">
      Progression globale
      <div class="progress-bar-outer"><div class="progress-bar-inner" style="width:${globalProgressPct()}%"></div></div>
    </div>
  </div>`;
}

/* ---------- HOME ---------- */
function goHome() {
  currentView = { type: "home" };
  render();
}

function renderHome() {
  let html = topbar("Bienvenue", "Préparation à l'habilitation fluide CAT 1-5");
  html += `<div class="card"><p>Cette application couvre l'intégralité du support de formation : impact environnemental, physique, mécanique des fluides, réglementation, principe frigorifique, cycle de Mollier, composants du circuit, pratique terrain et climatisation automobile (CAT 5).</p>
  <p>Pour chaque chapitre : un <b>cours</b> synthétique, puis un <b>QCM</b> pour valider tes connaissances. Utilise les <b>flashcards</b> pour mémoriser les valeurs clés, et l'<b>examen final</b> pour te tester sur l'ensemble du programme.</p></div>`;

  html += `<div class="chapter-grid">`;
  CHAPTERS.forEach(c => {
    const sc = progress.qcmScores[c.id];
    html += `<div class="chapter-tile" onclick="goChapter('${c.id}')">
      <div class="num">CHAPITRE ${c.num}</div>
      <div class="title">${c.title}</div>
      <div class="stats">
        <span>${c.questions.length} questions</span>
        <span>${sc ? "Score : " + sc.pct + "%" : "Non commencé"}</span>
      </div>
    </div>`;
  });
  html += `</div>`;

  html += `<div class="exam-cta">
    <h3>📝 Prêt pour l'examen final ?</h3>
    <p>Un QCM de 30 questions piochées aléatoirement dans tous les chapitres, pour simuler l'épreuve théorique.</p>
    <button class="btn-primary" onclick="goExam()">Lancer l'examen final</button>
  </div>`;
  mainEl.innerHTML = html;
}

/* ---------- CHAPTER (course) ---------- */
function goChapter(id) {
  currentView = { type: "chapter", chapterId: id };
  progress.courseSeen[id] = true;
  saveProgress();
  render();
}

function renderChapter() {
  const c = CHAPTERS.find(ch => ch.id === currentView.chapterId);
  let html = topbar(c.title, `Chapitre ${c.num}`);
  html += c.html;
  html += `<div class="btn-row">
    <button class="btn-primary" onclick="goQcm('${c.id}')">Faire le QCM (${c.questions.length} questions)</button>
    <button class="btn-ghost" onclick="goHome()">← Retour à l'accueil</button>
  </div>`;
  mainEl.innerHTML = html;
}

/* ---------- QCM engine ---------- */
let qcmState = null;

function goQcm(chapterId) {
  const c = CHAPTERS.find(ch => ch.id === chapterId);
  qcmState = {
    chapterId,
    title: c.title,
    kicker: `Chapitre ${c.num} — QCM`,
    questions: shuffle(c.questions),
    index: 0,
    answers: [],
    locked: false,
    onFinish: (pct) => {
      progress.qcmScores[chapterId] = { pct, date: Date.now() };
      saveProgress();
    },
  };
  currentView = { type: "qcm" };
  render();
}

function goExam() {
  const pool = [];
  CHAPTERS.forEach(c => c.questions.forEach(q => pool.push({ ...q, chapterTitle: c.title })));
  const picked = shuffle(pool).slice(0, Math.min(30, pool.length));
  qcmState = {
    chapterId: "exam",
    title: "Examen final",
    kicker: `${picked.length} questions — tous chapitres`,
    questions: picked,
    index: 0,
    answers: [],
    locked: false,
    onFinish: (pct) => {
      progress.qcmScores["exam"] = { pct, date: Date.now() };
      saveProgress();
    },
  };
  currentView = { type: "exam" };
  render();
}

function renderQcm() {
  const st = qcmState;
  if (st.index >= st.questions.length) {
    renderQcmResult();
    return;
  }
  const q = st.questions[st.index];
  let html = topbar(st.title, st.kicker);
  html += `<div class="card">
    <div class="qcm-progress">Question ${st.index + 1} / ${st.questions.length}</div>
    <div class="qcm-question">${q.q}</div>
    <div class="qcm-options" id="qcm-options">`;
  q.options.forEach((opt, i) => {
    html += `<button class="qcm-option" data-i="${i}" onclick="answerQcm(${i})">${opt}</button>`;
  });
  html += `</div><div id="qcm-explain"></div></div>`;
  html += `<div class="btn-row"><button class="btn-ghost" id="qcm-next" onclick="nextQcm()" disabled>Question suivante →</button></div>`;
  mainEl.innerHTML = html;
}

function answerQcm(i) {
  const st = qcmState;
  if (st.locked) return;
  st.locked = true;
  const q = st.questions[st.index];
  const correct = i === q.a;
  st.answers.push({ q: q.q, correct, chosen: i, options: q.options, aIndex: q.a, explain: q.explain, chapterTitle: q.chapterTitle });

  const optionEls = document.querySelectorAll("#qcm-options .qcm-option");
  optionEls.forEach((el, idx) => {
    el.classList.add("locked");
    if (idx === q.a) el.classList.add("correct");
    else if (idx === i) el.classList.add("wrong");
    else el.classList.add("dim");
  });
  document.getElementById("qcm-explain").innerHTML = `<div class="qcm-explain"><b>${correct ? "✅ Correct." : "❌ Incorrect."}</b> ${q.explain}</div>`;
  document.getElementById("qcm-next").disabled = false;
}

function nextQcm() {
  qcmState.index++;
  qcmState.locked = false;
  render();
}

function renderQcmResult() {
  const st = qcmState;
  const correctCount = st.answers.filter(a => a.correct).length;
  const pct = Math.round((correctCount / st.answers.length) * 100);
  st.onFinish(pct);

  const scoreClass = pct >= 80 ? "good" : pct >= 50 ? "mid" : "bad";
  let html = topbar(st.title, "Résultat");
  html += `<div class="card result-summary">
    <div>Score final</div>
    <div class="result-score ${scoreClass}">${pct}%</div>
    <div>${correctCount} / ${st.answers.length} bonnes réponses</div>
  </div>`;

  html += `<div class="card"><div class="result-list">`;
  st.answers.forEach((a, i) => {
    html += `<div class="result-item ${a.correct ? "ok" : "ko"}">
      <div class="q">${i + 1}. ${a.q}</div>
      <div class="tag">${a.correct ? "✅ Bonne réponse" : "❌ Réponse donnée : " + a.options[a.chosen] + " — Attendu : " + a.options[a.aIndex]}</div>
    </div>`;
  });
  html += `</div></div>`;

  html += `<div class="btn-row">
    <button class="btn-primary" onclick="${currentView.type === 'exam' ? 'goExam()' : `goQcm('${st.chapterId}')`}">Recommencer</button>
    <button class="btn-secondary" onclick="goHome()">Retour à l'accueil</button>
  </div>`;
  mainEl.innerHTML = html;
}

/* ---------- Flashcards ---------- */
let flashState = null;

function goFlashcards() {
  flashState = { cards: shuffle(FLASHCARDS), index: 0, flipped: false };
  currentView = { type: "flash" };
  render();
}

function renderFlash() {
  const st = flashState;
  let html = topbar("Flashcards", "Révision rapide — valeurs et définitions clés");
  html += `<div class="flash-wrap">
    <div class="flash-count">Carte ${st.index + 1} / ${st.cards.length}</div>
    <div class="flashcard ${st.flipped ? 'flipped' : ''}" onclick="flipCard()">
      <div class="flashcard-inner">
        <div class="flashcard-face front">${st.cards[st.index].front}</div>
        <div class="flashcard-face back">${st.cards[st.index].back}</div>
      </div>
    </div>
    <div class="flashcard-hint">Clique sur la carte pour retourner</div>
    <div class="btn-row">
      <button class="btn-secondary" onclick="prevCard()" ${st.index === 0 ? "disabled" : ""}>← Précédente</button>
      <button class="btn-primary" onclick="nextCard()">Suivante →</button>
      <button class="btn-ghost" onclick="goFlashcards()">🔀 Mélanger</button>
    </div>
  </div>`;
  mainEl.innerHTML = html;
}

function flipCard() { flashState.flipped = !flashState.flipped; render(); }
function nextCard() {
  flashState.index = (flashState.index + 1) % flashState.cards.length;
  flashState.flipped = false;
  render();
}
function prevCard() {
  flashState.index = Math.max(0, flashState.index - 1);
  flashState.flipped = false;
  render();
}

/* ---------- Router ---------- */
function render() {
  renderSidebar();
  switch (currentView.type) {
    case "home": renderHome(); break;
    case "chapter": renderChapter(); break;
    case "qcm":
    case "exam": renderQcm(); break;
    case "flash": renderFlash(); break;
    default: renderHome();
  }
  mainEl.scrollTop = 0;
  window.scrollTo(0, 0);
}

render();
