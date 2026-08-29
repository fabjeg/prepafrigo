/* Logique de l'application — routage par URL (hash), menu tiroir, pages dédiées */

const STORAGE_KEY = "prepafrigo_progress_v1";
const PDF_URL = "support-cours.pdf";

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
let qcmState = null;
let flashState = null;

const sidebarEl = document.getElementById("sidebar");
const mainEl = document.getElementById("main");
const appbarTitleEl = document.getElementById("appbarTitle");
const appbarProgEl = document.getElementById("appbarProg");
const scrimEl = document.getElementById("scrim");
const menuBtn = document.getElementById("menuBtn");
const themeBtn = document.getElementById("themeBtn");

/* ---------- Thème clair / sombre ---------- */
const THEME_KEY = "prepafrigo_theme";
const SUN_SVG = `<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><line x1="12" y1="2.5" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="21.5"/><line x1="2.5" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="21.5" y2="12"/><line x1="4.9" y1="4.9" x2="6.7" y2="6.7"/><line x1="17.3" y1="17.3" x2="19.1" y2="19.1"/><line x1="19.1" y1="4.9" x2="17.3" y2="6.7"/><line x1="6.7" y1="17.3" x2="4.9" y2="19.1"/></svg>`;
const MOON_SVG = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>`;
function currentTheme() { return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"; }
function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", t === "light" ? "#f7fafd" : "#0f1720");
  if (themeBtn) {
    themeBtn.innerHTML = t === "light" ? MOON_SVG : SUN_SVG;
    themeBtn.setAttribute("aria-label", t === "light" ? "Passer en mode sombre" : "Passer en mode clair");
  }
}
function toggleTheme() { applyTheme(currentTheme() === "light" ? "dark" : "light"); }
if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
applyTheme(currentTheme());

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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

/* ---------- Navigation helpers ---------- */
function nav(route) {
  if (location.hash === route) { render(); }   // re-click on same route
  else { location.hash = route; }              // triggers hashchange -> render
}

function parseRoute() {
  const h = location.hash.replace(/^#\/?/, "");
  const [seg, id] = h.split("/");
  switch (seg) {
    case "chapitre":   return { type: "chapter", chapterId: id };
    case "qcm":        return { type: "qcm", chapterId: id };
    case "examen":     return { type: "exam" };
    case "flashcards": return { type: "flash" };
    case "pdf":        return { type: "pdf" };
    default:           return { type: "home" };
  }
}

/* ---------- Drawer ---------- */
function openDrawer() {
  sidebarEl.classList.add("open");
  scrimEl.hidden = false;
  requestAnimationFrame(() => scrimEl.classList.add("show"));
  menuBtn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}
function closeDrawer() {
  sidebarEl.classList.remove("open");
  scrimEl.classList.remove("show");
  menuBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
  setTimeout(() => { if (!sidebarEl.classList.contains("open")) scrimEl.hidden = true; }, 250);
}
menuBtn.addEventListener("click", () => {
  sidebarEl.classList.contains("open") ? closeDrawer() : openDrawer();
});
scrimEl.addEventListener("click", closeDrawer);

/* ---------- Sidebar / drawer content ---------- */
function renderSidebar() {
  const v = currentView;
  let html = `<div class="brand"><img class="brand-logo" src="icon.svg" alt="PrépaFrigo" width="42" height="42"><div class="brand-txt"><h1>PrépaFrigo</h1><p class="subtitle">Habilitation fluide — CAT 1-5</p></div></div>`;

  html += `<div class="nav-item ${v.type === "home" ? "active" : ""}" onclick="nav('#/')">🏠 <span>Accueil</span></div>`;

  html += `<div class="nav-section-title">Chapitres</div>`;
  CHAPTERS.forEach(c => {
    const sc = progress.qcmScores[c.id];
    const active = v.type === "chapter" && v.chapterId === c.id;
    const doneClass = sc && sc.pct >= 80 ? "done" : "";
    const badge = sc ? `${sc.pct}%` : `${c.questions.length}Q`;
    html += `<div class="nav-item chapnav ${active ? "active" : ""} ${doneClass}" onclick="nav('#/chapitre/${c.id}')">
      <span class="nnum">${c.num}</span><span class="ntitle">${c.title}</span><span class="badge">${badge}</span>
    </div>`;
  });

  html += `<div class="nav-section-title">Révision</div>`;
  html += `<div class="nav-item ${v.type === "flash" ? "active" : ""}" onclick="nav('#/flashcards')">🃏 <span>Flashcards</span></div>`;
  html += `<div class="nav-item ${v.type === "exam" ? "active" : ""}" onclick="openExam()">📝 <span>Examen final</span></div>`;

  html += `<div class="nav-section-title">Ressources</div>`;
  html += `<div class="nav-item ${v.type === "pdf" ? "active" : ""}" onclick="nav('#/pdf')">📄 <span>Support de cours (PDF)</span></div>`;

  sidebarEl.innerHTML = html;
}

/* ---------- Page header (in content) ---------- */
function pageHead(kicker, title) {
  return `<div class="page-head">
    <div class="chapter-kicker">${kicker}</div>
    <h2 class="chapter-title">${title}</h2>
  </div>`;
}

/* ---------- HOME ---------- */
function renderHome() {
  let html = pageHead("Préparation à l'habilitation fluide CAT 1-5", "Bienvenue");

  html += `<div class="card"><p>Cette application couvre l'intégralité du support de formation : impact environnemental, physique, mécanique des fluides, réglementation, principe frigorifique, cycle de Mollier, composants du circuit, pratique terrain et climatisation automobile (CAT 5).</p>
  <p>Pour chaque chapitre : un <b>cours</b> synthétique, puis un <b>QCM</b> pour valider tes connaissances. Le <b>support PDF</b> officiel est aussi consultable dans l'app.</p></div>`;

  html += `<div class="section-label">Chapitres</div>`;
  html += `<div class="chapter-grid">`;
  CHAPTERS.forEach(c => {
    const sc = progress.qcmScores[c.id];
    const pctTxt = sc ? sc.pct + "%" : "—";
    const doneClass = sc && sc.pct >= 80 ? "done" : "";
    html += `<div class="chapter-tile ${doneClass}" onclick="nav('#/chapitre/${c.id}')">
      <div class="tile-top"><span class="num">CH. ${c.num}</span><span class="tile-score">${pctTxt}</span></div>
      <div class="title">${c.title}</div>
      <div class="stats"><span>${c.questions.length} questions</span><span>${sc ? "Validé " + (sc.pct >= 80 ? "✅" : "") : "Non commencé"}</span></div>
    </div>`;
  });
  html += `</div>`;

  html += `<div class="exam-cta">
    <h3>📝 Prêt pour l'examen final ?</h3>
    <p>Un QCM de 30 questions piochées aléatoirement dans tous les chapitres, pour simuler l'épreuve théorique.</p>
    <button class="btn-primary" onclick="openExam()">Lancer l'examen final</button>
  </div>`;
  mainEl.innerHTML = html;
}

/* ---------- CHAPTER (course) ---------- */
function wrapTables(html) {
  return html.replace(/<table/g, '<div class="table-wrap"><table').replace(/<\/table>/g, "</table></div>");
}

function renderChapter() {
  const idx = CHAPTERS.findIndex(ch => ch.id === currentView.chapterId);
  const c = CHAPTERS[idx];
  if (!c) { nav("#/"); return; }
  progress.courseSeen[c.id] = true;
  saveProgress();

  let html = pageHead(`Chapitre ${c.num}`, c.title);
  html += wrapTables(c.html);

  html += `<div class="btn-row">
    <button class="btn-primary" onclick="openChapterQcm('${c.id}')">Faire le QCM · ${c.questions.length} questions</button>
  </div>`;

  const prev = CHAPTERS[idx - 1], next = CHAPTERS[idx + 1];
  html += `<div class="chapter-pager">
    ${prev ? `<button class="pager-btn" onclick="nav('#/chapitre/${prev.id}')"><span class="dir">← Précédent</span><span class="pt">${prev.num} · ${prev.title}</span></button>` : `<span></span>`}
    ${next ? `<button class="pager-btn next" onclick="nav('#/chapitre/${next.id}')"><span class="dir">Suivant →</span><span class="pt">${next.num} · ${next.title}</span></button>` : `<span></span>`}
  </div>`;
  mainEl.innerHTML = html;
}

/* ---------- QCM engine ---------- */
function buildChapterQcm(chapterId) {
  const c = CHAPTERS.find(ch => ch.id === chapterId);
  qcmState = {
    chapterId,
    title: c.title,
    kicker: `Chapitre ${c.num} — QCM`,
    questions: shuffle(c.questions),
    index: 0,
    answers: [],
    locked: false,
    onFinish: (pct) => { progress.qcmScores[chapterId] = { pct, date: Date.now() }; saveProgress(); },
  };
}
function buildExam() {
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
    onFinish: (pct) => { progress.qcmScores["exam"] = { pct, date: Date.now() }; saveProgress(); },
  };
}
function openChapterQcm(id) { buildChapterQcm(id); location.hash = "#/qcm/" + id; }
function openExam() { buildExam(); location.hash = "#/examen"; }
function restartQcm() {
  if (qcmState.chapterId === "exam") buildExam();
  else buildChapterQcm(qcmState.chapterId);
  render();
}

function renderQcm() {
  const st = qcmState;
  if (st.index >= st.questions.length) { renderQcmResult(); return; }
  const q = st.questions[st.index];
  const pct = Math.round((st.index / st.questions.length) * 100);

  let html = pageHead(st.kicker, st.title);
  html += `<div class="qcm-bar"><div class="qcm-bar-fill" style="width:${pct}%"></div></div>`;
  html += `<div class="card">
    <div class="qcm-progress">Question ${st.index + 1} / ${st.questions.length}</div>
    <div class="qcm-question">${q.q}</div>
    <div class="qcm-options" id="qcm-options">`;
  q.options.forEach((opt, i) => {
    html += `<button class="qcm-option" data-i="${i}" onclick="answerQcm(${i})">${opt}</button>`;
  });
  html += `</div><div id="qcm-explain"></div></div>`;
  html += `<div class="btn-row"><button class="btn-primary" id="qcm-next" onclick="nextQcm()" disabled>Question suivante →</button></div>`;
  mainEl.innerHTML = html;
}

function answerQcm(i) {
  const st = qcmState;
  if (st.locked) return;
  st.locked = true;
  const q = st.questions[st.index];
  const correct = i === q.a;
  st.answers.push({ q: q.q, correct, chosen: i, options: q.options, aIndex: q.a, explain: q.explain, chapterTitle: q.chapterTitle });

  document.querySelectorAll("#qcm-options .qcm-option").forEach((el, idx) => {
    el.classList.add("locked");
    if (idx === q.a) el.classList.add("correct");
    else if (idx === i) el.classList.add("wrong");
    else el.classList.add("dim");
  });
  document.getElementById("qcm-explain").innerHTML = `<div class="qcm-explain"><b>${correct ? "✅ Correct." : "❌ Incorrect."}</b> ${q.explain}</div>`;
  const nextBtn = document.getElementById("qcm-next");
  nextBtn.disabled = false;
  nextBtn.textContent = st.index + 1 >= st.questions.length ? "Voir le résultat →" : "Question suivante →";
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
  let html = pageHead("Résultat", st.title);
  html += `<div class="card result-summary">
    <div>Score final</div>
    <div class="result-score ${scoreClass}">${pct}%</div>
    <div>${correctCount} / ${st.answers.length} bonnes réponses</div>
  </div>`;

  html += `<div class="card"><div class="result-list">`;
  st.answers.forEach((a, i) => {
    html += `<div class="result-item ${a.correct ? "ok" : "ko"}">
      <div class="q">${i + 1}. ${a.q}</div>
      <div class="tag">${a.correct ? "✅ Bonne réponse" : "❌ Ta réponse : " + a.options[a.chosen] + " — Attendu : " + a.options[a.aIndex]}</div>
    </div>`;
  });
  html += `</div></div>`;

  html += `<div class="btn-row">
    <button class="btn-primary" onclick="restartQcm()">↻ Recommencer</button>
    <button class="btn-secondary" onclick="nav('#/')">Accueil</button>
  </div>`;
  mainEl.innerHTML = html;
}

/* ---------- Flashcards ---------- */
function buildFlash() { flashState = { cards: shuffle(FLASHCARDS), index: 0, flipped: false }; }
function reshuffleFlash() { buildFlash(); render(); }

function renderFlash() {
  const st = flashState;
  let html = pageHead("Révision rapide — valeurs et définitions clés", "Flashcards");
  html += `<div class="flash-wrap">
    <div class="flash-count">Carte ${st.index + 1} / ${st.cards.length}</div>
    <div class="flashcard ${st.flipped ? "flipped" : ""}" onclick="flipCard()">
      <div class="flashcard-inner">
        <div class="flashcard-face front">${st.cards[st.index].front}</div>
        <div class="flashcard-face back">${st.cards[st.index].back}</div>
      </div>
    </div>
    <div class="flashcard-hint">Touche la carte pour la retourner</div>
    <div class="btn-row">
      <button class="btn-secondary" onclick="prevCard()" ${st.index === 0 ? "disabled" : ""}>← Précédente</button>
      <button class="btn-primary" onclick="nextCard()">Suivante →</button>
      <button class="btn-ghost" onclick="reshuffleFlash()">🔀 Mélanger</button>
    </div>
  </div>`;
  mainEl.innerHTML = html;
}
function flipCard() { flashState.flipped = !flashState.flipped; render(); }
function nextCard() { flashState.index = (flashState.index + 1) % flashState.cards.length; flashState.flipped = false; render(); }
function prevCard() { flashState.index = Math.max(0, flashState.index - 1); flashState.flipped = false; render(); }

/* ---------- PDF ---------- */
function renderPdf() {
  let html = pageHead("Document officiel", "Support de cours");
  html += `<div class="card">
    <p>Le support de formation complet (théorie &amp; pratique, CAT 1-5).</p>
    <div class="btn-row">
      <a class="btn-primary" href="${PDF_URL}" target="_blank" rel="noopener">📄 Ouvrir en plein écran</a>
      <a class="btn-secondary" href="${PDF_URL}" download>⬇︎ Télécharger</a>
    </div>
  </div>`;
  html += `<div class="pdf-frame"><iframe src="${PDF_URL}#view=FitH" title="Support de cours PDF" loading="lazy"></iframe></div>`;
  html += `<p class="pdf-hint">Si l'aperçu ne s'affiche pas sur ton téléphone, utilise « Ouvrir en plein écran ».</p>`;
  mainEl.innerHTML = html;
}

/* ---------- Assistant local (bot) ---------- */
let KB = [];
const CHAT_SVG = `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z"/></svg>`;

function norm(s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
const STOP = new Set(norm("le la les un une des de du d l et ou a à en y que qui quoi est sont ce cet cette ces quel quelle quels quelles pour dans sur avec comment combien pourquoi quand ou son sa ses au aux par ne pas plus se qu on nous vous il elle je tu me te mon ma mes ton ta si oui non fait faire quels").split(/\s+/));
function tok(s) { return norm(s).replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(w => w.length > 2 && !STOP.has(w)); }

function buildKB() {
  KB = [];
  if (typeof FLASHCARDS !== "undefined") {
    FLASHCARDS.forEach(f => KB.push({ type: "Flashcard", q: f.front, a: f.back, tokens: tok(f.front + " " + f.back) }));
  }
  CHAPTERS.forEach(c => {
    c.questions.forEach(q => {
      const ans = q.options[q.a];
      KB.push({ type: "QCM", q: q.q, a: `<b>${ans}</b>. ${q.explain}`, chapterId: c.id, chapterNum: c.num, chapterTitle: c.title, tokens: tok(q.q + " " + ans + " " + q.explain) });
    });
    const d = document.createElement("div");
    d.innerHTML = c.html;
    d.querySelectorAll("h3, p, li").forEach(el => {
      const t = (el.textContent || "").replace(/\s+/g, " ").trim();
      if (t.length >= 30) KB.push({ type: "Cours", q: null, a: t, chapterId: c.id, chapterNum: c.num, chapterTitle: c.title, tokens: tok(t) });
    });
  });
  const df = {};
  KB.forEach(doc => new Set(doc.tokens).forEach(t => df[t] = (df[t] || 0) + 1));
  KB._df = df; KB._N = KB.length;
}

function searchKB(query) {
  const qt = tok(query);
  if (!qt.length) return [];
  const df = KB._df, N = KB._N;
  const scored = [];
  KB.forEach(doc => {
    const set = new Set(doc.tokens); let s = 0, hits = 0;
    qt.forEach(t => { if (set.has(t)) { hits++; s += Math.log(1 + N / ((df[t] || 0) + 1)); } });
    if (hits === 0) return;
    const boost = doc.type === "Flashcard" ? 1.3 : doc.type === "QCM" ? 1.15 : 1;
    scored.push({ doc, score: s * boost * (0.4 + hits / qt.length), cov: hits / qt.length });
  });
  scored.sort((a, b) => b.score - a.score);
  return scored;
}

function botAnswer(query) {
  const res = searchKB(query);
  if (!res.length || res[0].cov < 0.34) {
    const near = res[0] && res[0].doc.chapterId ? res[0].doc : null;
    return {
      type: null,
      html: "Je n'ai pas trouvé de réponse précise dans le cours 🤔 Reformule avec d'autres mots-clés" + (near ? ", ou regarde le chapitre suggéré ci-dessous." : "."),
      sources: near ? [{ id: near.chapterId, num: near.chapterNum, title: near.chapterTitle }] : [],
    };
  }
  const top = res[0].doc;
  const html = top.q ? `<div class="bot-q">${top.q}</div>${top.a}` : top.a;
  const sources = []; const seen = new Set();
  res.slice(0, 6).forEach(r => {
    const d = r.doc;
    if (d.chapterId && !seen.has(d.chapterId)) { seen.add(d.chapterId); sources.push({ id: d.chapterId, num: d.chapterNum, title: d.chapterTitle }); }
  });
  return { type: top.type, html, sources: sources.slice(0, 3) };
}

function buildBot() {
  buildKB();
  const fab = document.createElement("button");
  fab.id = "botFab"; fab.className = "bot-fab"; fab.setAttribute("aria-label", "Assistant révision"); fab.innerHTML = CHAT_SVG;
  const panel = document.createElement("div");
  panel.id = "botPanel"; panel.className = "bot-panel"; panel.hidden = true;
  panel.innerHTML = `
    <div class="bot-head"><div class="bot-title">💬 Assistant révision</div><button class="bot-close" aria-label="Fermer">✕</button></div>
    <div class="bot-msgs" id="botMsgs"></div>
    <div class="bot-chips" id="botChips"></div>
    <form class="bot-input" id="botForm"><input id="botInput" type="text" placeholder="Pose ta question…" autocomplete="off" enterkeyhint="send"><button type="submit" aria-label="Envoyer">➤</button></form>`;
  document.body.appendChild(fab);
  document.body.appendChild(panel);

  const msgs = panel.querySelector("#botMsgs");
  const chipsBox = panel.querySelector("#botChips");
  const form = panel.querySelector("#botForm");
  const input = panel.querySelector("#botInput");

  function addUser(text) { const el = document.createElement("div"); el.className = "bot-msg user"; el.textContent = text; msgs.appendChild(el); msgs.scrollTop = msgs.scrollHeight; }
  function addBot(ans) {
    const el = document.createElement("div"); el.className = "bot-msg bot";
    let h = ans.type ? `<div class="bot-type">${ans.type}</div>` : "";
    h += ans.html;
    if (ans.sources && ans.sources.length) {
      h += `<div class="bot-src">` + ans.sources.map(s => `<span class="bot-src-chip" data-ch="${s.id}">Ch. ${s.num} · ${s.title}</span>`).join("") + `</div>`;
    }
    el.innerHTML = h;
    el.querySelectorAll(".bot-src-chip").forEach(chip => chip.addEventListener("click", () => { closeBot(); nav("#/chapitre/" + chip.getAttribute("data-ch")); }));
    msgs.appendChild(el); msgs.scrollTop = msgs.scrollHeight;
  }
  function ask(q) { addUser(q); setTimeout(() => addBot(botAnswer(q)), 130); }
  function openBot() { panel.hidden = false; fab.classList.add("hidden"); setTimeout(() => input.focus(), 60); }
  function closeBot() { panel.hidden = true; fab.classList.remove("hidden"); }

  addBot({ type: null, html: "Salut 👋 Je suis ton assistant de révision. Pose-moi une question sur le programme (fluides, pressions, réglementation, sécurité…) et je réponds à partir du cours.", sources: [] });
  const suggestions = (typeof FLASHCARDS !== "undefined" ? FLASHCARDS : []).map(f => f.front).filter(t => t.length < 46).slice(0, 6);
  suggestions.forEach(s => { const c = document.createElement("button"); c.type = "button"; c.className = "bot-chip"; c.textContent = s; c.addEventListener("click", () => ask(s)); chipsBox.appendChild(c); });

  fab.addEventListener("click", openBot);
  panel.querySelector(".bot-close").addEventListener("click", closeBot);
  form.addEventListener("submit", (e) => { e.preventDefault(); const v = input.value.trim(); if (!v) return; input.value = ""; ask(v); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) closeBot(); });
}

/* ---------- Router ---------- */
const TITLES = { home: "Accueil", chapter: "Chapitre", qcm: "QCM", exam: "Examen final", flash: "Flashcards", pdf: "Support de cours" };

function render() {
  currentView = parseRoute();
  const v = currentView;

  // appbar title
  let title = TITLES[v.type] || "Accueil";
  if (v.type === "chapter") {
    const c = CHAPTERS.find(ch => ch.id === v.chapterId);
    title = c ? `Ch. ${c.num} · ${c.title}` : "Chapitre";
  }
  appbarTitleEl.textContent = title;
  const gp = globalProgressPct();
  appbarProgEl.innerHTML = `<span class="prog-txt">${gp}%</span><span class="prog-track"><span class="prog-fill" style="width:${gp}%"></span></span>`;

  renderSidebar();

  switch (v.type) {
    case "chapter": renderChapter(); break;
    case "qcm":
      if (!qcmState || qcmState.chapterId !== v.chapterId) buildChapterQcm(v.chapterId);
      renderQcm(); break;
    case "exam":
      if (!qcmState || qcmState.chapterId !== "exam") buildExam();
      renderQcm(); break;
    case "flash":
      if (!flashState) buildFlash();
      renderFlash(); break;
    case "pdf": renderPdf(); break;
    default: renderHome();
  }

  closeDrawer();
  mainEl.scrollTop = 0;
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);
render();
buildBot();
