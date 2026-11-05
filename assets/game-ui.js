(() => {
  'use strict';

  const byId = id => document.getElementById(id);
  const titleFilter = byId('game-title-filter');
  const gestureFilter = byId('game-gesture-filter');
  const searchFilter = byId('game-search');
  const stage = byId('game-active');
  const empty = byId('game-empty');
  const status = byId('game-status');
  const EXAM_RUN_KEY = 'agreg27-exam-run-v1';
  const EXAM_HISTORY_KEY = 'agreg27-exam-history-v1';
  const EXAM_DURATION_MS = 6 * 60 * 60 * 1000;
  const labels = { recall: 'Rappel actif', apply: 'Application', proof: 'Preuve', diagnose: 'Diagnostic d’erreur' };
  const kindLabels = { knowledge: 'Fiche de cours', annale: 'Question issue d’une annale', exercise: 'Exercice original' };
  const delimiters = [
    { left: '$$', right: '$$', display: true },
    { left: '\\[', right: '\\]', display: true },
    { left: '\\(', right: '\\)', display: false },
    { left: '$', right: '$', display: false },
  ];
  let engine = null;
  let current = null;
  let answerShown = false;
  let ratingApplied = false;
  let lastId = '';
  let hintIndex = 0;
  let examSessions = [];
  let examTimer = null;

  function filters() {
    return { titleId: titleFilter.value, gesture: gestureFilter.value, sourceType: byId('game-source-filter').value, query: searchFilter.value };
  }

  function setMath(element) {
    if (element && typeof window.renderMathInElement === 'function') {
      window.renderMathInElement(element, {
        delimiters,
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'option'],
        throwOnError: false,
      });
    }
  }

  function makeList(container, items) {
    const list = document.createElement('ul');
    for (const item of items) {
      const entry = document.createElement('li');
      entry.textContent = String(item);
      list.append(entry);
    }
    container.append(list);
    setMath(container);
  }

  function updateSummary() {
    if (!engine) return;
    const summary = engine.summary(filters());
    byId('game-total').textContent = String(summary.total);
    byId('game-due').textContent = String(summary.due);
    byId('game-stable').textContent = String(summary.stable);
    byId('game-streak').textContent = String(summary.streak);
    const titleId = titleFilter.value;
    const courseCount = engine.filter({ titleId, kind: 'knowledge' }).length;
    const annaleCount = engine.filter({ titleId, sourceType: 'annale' }).length;
    byId('start-course-session').disabled = courseCount === 0;
    byId('start-course-session').title = courseCount ? `${courseCount} fiches de cours` : 'Les fiches de cours arrivent dans la banque.';
    byId('start-annales-session').hidden = annaleCount === 0;
    byId('start-annales-session').disabled = annaleCount === 0;
    byId('start-daily-session').disabled = summary.total === 0;
    byId('start-practice-session').disabled = engine.filter({ titleId, kind: 'exercise' }).length === 0;
  }

  function updateSessionProgress(session) {
    const box = byId('game-session-progress');
    if (!session) {
      box.hidden = true;
      return;
    }
    box.hidden = false;
    const index = Math.min(session.index + 1, session.total);
    byId('session-progress-text').textContent = session.mode === 'course' ? 'Mémorisation des fiches' : session.mode === 'practice' ? 'Entraînement ciblé' : session.mode === 'annales' ? 'Révision des annales' : 'Séance équilibrée';
    byId('session-progress-count').textContent = `Carte ${index} sur ${session.total}`;
    byId('session-progress-fill').style.width = `${Math.round((index / Math.max(1, session.total)) * 100)}%`;
  }

  function makeNotionTags(list) {
    const container = byId('game-notions');
    container.replaceChildren();
    for (const notion of (list || [])) {
      const chip = document.createElement('span');
      chip.className = 'game-label';
      chip.textContent = notion;
      container.append(chip, document.createTextNode(' '));
    }
  }

  function safeHttpUrl(value) {
    if (typeof value !== 'string' || !value.trim()) return '';
    try {
      const url = new URL(value, window.location.href);
      return ['https:', 'http:'].includes(url.protocol) ? url.href : '';
    } catch { return ''; }
  }

  function setLink(link, url, label) {
    const href = safeHttpUrl(url);
    link.hidden = !href;
    if (href) {
      link.href = href;
      link.textContent = label;
    } else link.removeAttribute('href');
  }

  function guideUrlFor(card) {
    const suffix = card.titleId === 'tA' ? 'A' : String(card.titleId || '').replace(/^t/, '');
    return `./guides/titre-${suffix}.html`;
  }

  function displaySource(card) {
    const panel = byId('game-source');
    if (card.kind === 'knowledge') {
      const reference = card.guideReference || `${card.sectionId || ''} — ${card.sectionTitle || ''}`;
      byId('game-source-meta').textContent = reference;
      setLink(byId('game-source-link'), guideUrlFor(card), 'Ouvrir la fiche de cours ↗');
      setLink(byId('game-report-link'), '', '');
      panel.hidden = !byId('game-source-link').hasAttribute('href');
      return;
    }
    const source = card.provenance || card.source || {};
    const subject = source.subject || {};
    const report = source.report || {};
    const year = source.session || source.year || source.annee || '';
    const question = source.question || source.questionNumber || source.reference || '';
    const page = source.page || source.pageStart || source.pages || '';
    const meta = [year && `Session ${year}`, question && `question ${question}`, page && `p. ${page}`].filter(Boolean).join(' · ');
    setLink(byId('game-source-link'), source.subjectUrl || source.url || subject.url, 'Ouvrir le sujet officiel ↗');
    setLink(byId('game-report-link'), source.reportUrl || report.url, 'Rapport du jury ↗');
    byId('game-source-meta').textContent = meta || 'Référence d’annale vérifiée';
    panel.hidden = !byId('game-source-link').hasAttribute('href');
  }

  function displayCard(card, session = null) {
    current = card;
    answerShown = false;
    ratingApplied = false;
    hintIndex = 0;
    byId('game-answer').hidden = true;
    byId('game-reveal').disabled = false;
    byId('game-error-form').hidden = true;
    byId('game-add-error').hidden = true;
    byId('game-error-note').value = '';
    for (const button of document.querySelectorAll('[data-rating]')) button.disabled = true;

    const typeLabel = card.kind === 'knowledge'
      ? kindLabels.knowledge
      : card.sourceType === 'annale' ? kindLabels.annale : kindLabels.exercise;
    byId('game-gesture-label').textContent = typeLabel;
    byId('game-code').textContent = card.sectionId || '';
    byId('game-title-label').textContent = card.title || '';
    byId('game-section-title').textContent = card.name || card.sectionTitle || 'Question de révision';
    makeNotionTags(card.notions);
    const reviewNote = byId('game-review-note');
    reviewNote.hidden = !card.needsReview;
    reviewNote.textContent = card.needsReview ? `À vérifier avec ton cours : ${card.reviewNote || 'vérifie les hypothèses de ce résultat.'}` : '';
    if (!reviewNote.hidden) setMath(reviewNote);
    byId('game-prompt').textContent = card.prompt || 'Rappelle la notion sans tes notes, puis compare ta réponse au modèle.';
    byId('game-answer-text').textContent = card.modelAnswer || card.answer || card.solution || 'Aucune correction rédigée n’est associée à cette carte.';
    byId('game-explanation').textContent = card.explanation || '';
    byId('game-explanation').hidden = !card.explanation;

    const hypotheses = Array.isArray(card.hypotheses) ? card.hypotheses : [];
    const hypothesisBox = byId('game-hypotheses');
    hypothesisBox.hidden = hypotheses.length === 0;
    if (hypotheses.length) {
      const heading = document.createElement('strong');
      heading.textContent = 'Hypothèses à vérifier';
      hypothesisBox.replaceChildren(heading);
      makeList(hypothesisBox, hypotheses);
    } else hypothesisBox.replaceChildren();

    const proofSteps = Array.isArray(card.proofCore) ? card.proofCore : [];
    const proofBox = byId('game-proof');
    proofBox.hidden = proofSteps.length === 0;
    if (proofSteps.length) {
      const heading = document.createElement('strong');
      heading.textContent = 'Étapes essentielles';
      proofBox.replaceChildren(heading);
      makeList(proofBox, proofSteps);
    } else proofBox.replaceChildren();

    displaySource(card);
    const hints = Array.isArray(card.hints) ? card.hints : (card.hint ? [card.hint] : []);
    const hintBox = byId('game-hint-box');
    const hintText = byId('game-hint-text');
    hintBox.hidden = hints.length === 0;
    hintText.hidden = true;
    hintText.textContent = '';
    byId('game-hint-next').disabled = hints.length === 0;
    byId('game-hint-next').textContent = hints.length ? 'Voir le premier indice' : 'Aucun indice';
    byId('game-hint-next').onclick = () => {
      if (hintIndex >= hints.length) return;
      hintText.textContent = hints[hintIndex];
      hintText.hidden = false;
      hintIndex += 1;
      byId('game-hint-next').textContent = hintIndex < hints.length ? 'Voir l’indice suivant' : 'Tous les indices affichés';
      byId('game-hint-next').disabled = hintIndex >= hints.length;
      setMath(hintText);
    };

    stage.hidden = false;
    empty.hidden = true;
    byId('session-complete').hidden = true;
    byId('game-card-status').textContent = `État : ${engine.dueLabel(card.id)}. Tente d’abord le rappel sans notes.`;
    if (session) updateSessionProgress(session);
    else updateSessionProgress(null);
    byId('game-next').textContent = session ? 'Carte suivante →' : 'Question suivante →';
    byId('game-next').disabled = Boolean(session);
    byId('game-next').hidden = !session;
    byId('game-manual-next').hidden = Boolean(session);
    setMath(byId('game-prompt'));
    updateSummary();
  }

  function showEmpty(message) {
    current = null;
    stage.hidden = true;
    byId('session-complete').hidden = true;
    empty.hidden = false;
    empty.textContent = message;
    updateSessionProgress(null);
  }

  function finishDailySession(session) {
    stage.hidden = true;
    empty.hidden = true;
    updateSessionProgress(null);
    const completion = byId('session-complete');
    completion.hidden = false;
    byId('session-complete-text').textContent = `${session.total} cartes parcourues en mode ${session.mode === 'daily' ? 'équilibré' : session.mode}. Les évaluations et les prochaines reprises sont enregistrées sur cet appareil.`;
    byId('game-status').textContent = 'Séance terminée.';
    byId('game-next').disabled = false;
    updateSummary();
  }

  function displaySavedSession(session, resumed = false) {
    if (!session || !session.current) {
      showEmpty('Choisis une séance du jour ou ouvre le mode « Question suivante » pour travailler une carte au choix.');
      return;
    }
    status.textContent = resumed ? 'Séance interrompue reprise depuis la dernière carte.' : 'Séance préparée. Commence par une réponse de mémoire, sans ouvrir le modèle.';
    displayCard(session.current, session);
  }

  function startSession(mode = 'daily') {
    const previous = engine.getActiveSession();
    if (previous && !window.confirm('Remplacer la séance en cours ? Les évaluations déjà enregistrées seront conservées.')) return;
    const minutes = Number(byId('session-duration').value) || 30;
    const session = engine.startSession({ minutes, titleId: titleFilter.value, mode });
    if (!session) {
      const message = mode === 'course'
        ? 'Aucune fiche de cours n’est encore reliée à ce titre.'
        : mode === 'annales' ? 'Aucune question d’annale n’est encore reliée à ce titre.' : 'Aucune carte disponible pour ce filtre.';
      byId('game-start-status').textContent = message;
      showEmpty(message);
      return;
    }
    byId('game-start-status').textContent = `Séance ${minutes} min préparée. Les cartes dues sont prioritaires.`;
    displaySavedSession(session);
    byId('game-stage').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function nextQuestion() {
    if (!engine) return;
    const activeSession = engine.getActiveSession();
    if (activeSession) {
      if (!ratingApplied) {
        byId('game-card-status').textContent = 'Compare d’abord ta réponse, puis choisis un niveau de difficulté pour continuer.';
        return;
      }
      const result = engine.advanceSession();
      ratingApplied = false;
      if (result?.finished) finishDailySession(result.session);
      else displaySavedSession(result?.session || engine.getActiveSession());
      return;
    }
    const next = engine.chooseNext(filters(), lastId);
    if (!next) {
      showEmpty('Aucune carte ne correspond aux filtres choisis. Essaie un autre titre, geste ou mot-clé.');
      status.textContent = 'Aucune carte correspondante.';
      updateSummary();
      return;
    }
    lastId = next.id;
    status.textContent = 'Carte sélectionnée. Cherche quelques instants avant d’ouvrir le modèle.';
    displayCard(next);
  }

  function revealAnswer() {
    if (!current || answerShown) return;
    answerShown = true;
    byId('game-answer').hidden = false;
    byId('game-reveal').disabled = true;
    byId('game-hint-box').hidden = true;
    for (const button of document.querySelectorAll('[data-rating]')) button.disabled = false;
    byId('game-card-status').textContent = 'Compare la formulation, les hypothèses et les étapes utiles avant de t’auto-évaluer.';
    setMath(byId('game-answer'));
  }

  function rate(rating) {
    if (!engine || !current || !answerShown || ratingApplied) return;
    const record = engine.mark(current.id, rating);
    if (!record) return;
    ratingApplied = true;
    for (const button of document.querySelectorAll('[data-rating]')) button.disabled = true;
    const intervalText = rating === 'again' ? 'dans 10 minutes' : `dans ${record.intervalDays} jour${record.intervalDays === 1 ? '' : 's'}`;
    byId('game-card-status').textContent = `${engine.ratingLabels[rating]} · prochaine reprise ${intervalText}.`;
    byId('game-add-error').hidden = !['again', 'hard'].includes(rating);
    byId('game-next').disabled = false;
    updateSummary();
  }

  function updateErrorNotebook() {
    if (!engine) return;
    const errors = engine.getErrors();
    byId('game-error-count').textContent = String(errors.length);
    const list = byId('game-errors-list');
    list.replaceChildren();
    if (!errors.length) {
      const message = document.createElement('p');
      message.className = 'game-empty';
      message.textContent = 'Aucune erreur notée pour l’instant.';
      list.append(message);
      return;
    }
    for (const error of errors) {
      const item = document.createElement('article');
      item.className = 'error-card';
      const title = document.createElement('strong');
      title.textContent = `${error.sectionId} · ${error.sectionTitle || error.title}`;
      const prompt = document.createElement('p');
      prompt.textContent = error.prompt || 'Carte à reprendre';
      const note = document.createElement('p');
      note.className = 'error-note-text';
      note.textContent = error.note || 'Aucune note ajoutée.';
      const actions = document.createElement('div');
      actions.className = 'game-actions';
      if (error.card) {
        const review = document.createElement('button');
        review.className = 'button button-small';
        review.type = 'button';
        review.textContent = 'Reprendre cette carte';
        review.addEventListener('click', () => {
          engine.stopSession();
          displayCard(error.card);
          byId('game-stage').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        actions.append(review);
      }
      const resolve = document.createElement('button');
      resolve.className = 'button button-small';
      resolve.type = 'button';
      resolve.textContent = 'Marquer reprise faite';
      resolve.addEventListener('click', () => { engine.resolveError(error.id); updateErrorNotebook(); });
      actions.append(resolve);
      item.append(title, prompt, note, actions);
      list.append(item);
    }
  }

  function saveCurrentError() {
    if (!current) return;
    const saved = engine.addError(current.id, byId('game-error-note').value);
    if (!saved) return;
    byId('game-error-form').hidden = true;
    byId('game-add-error').hidden = true;
    byId('game-card-status').textContent = 'Erreur ajoutée au carnet local pour la reprendre plus tard.';
    updateErrorNotebook();
  }

  function formatDuration(milliseconds) {
    const seconds = Math.max(0, Math.floor(milliseconds / 1000));
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainder = seconds % 60;
    return [hours, minutes, remainder].map(value => String(value).padStart(2, '0')).join(':');
  }

  function readExamRun() {
    try { return JSON.parse(window.localStorage.getItem(EXAM_RUN_KEY) || 'null'); }
    catch { return null; }
  }

  function writeExamRun(run) {
    try { window.localStorage.setItem(EXAM_RUN_KEY, JSON.stringify(run)); }
    catch { byId('exam-timer-status').textContent = 'Le stockage local est indisponible; le chronomètre ne survivra pas à un rechargement.'; }
  }

  function setExamChoice() {
    const year = Number(byId('exam-year-select').value);
    const session = examSessions.find(item => Number(item.year) === year);
    const subject = session?.subject || {};
    setLink(byId('exam-subject-link'), subject.url, `Ouvrir le sujet officiel ${year} ↗`);
    const report = session?.report || {};
    setLink(byId('exam-report-link'), report.status === 'available' ? (report.url || report.ministryUrl) : '', `Rapport du jury ${year} ↗`);
    byId('exam-source-status').textContent = report.status === 'pending'
      ? `Sujet du concours docteur · source : ${subject.source || 'archive du jury'}. Rapport 2026 indiqué comme en attente au ${examDataLastChecked}.`
      : report.status === 'available' ? `Sujet du concours docteur · source : ${subject.source || 'archive du jury'}; rapport du jury disponible.`
        : `Sujet du concours docteur · source : ${subject.source || 'archive du jury'}.`;
  }

  let examDataLastChecked = '4 novembre 2026';

  function updateExamTimer() {
    const run = readExamRun();
    if (!run) {
      byId('exam-timer').textContent = '06:00:00';
      byId('exam-timer-status').textContent = 'Six heures, durée indicative de l’épreuve écrite.';
      byId('exam-start').hidden = false;
      byId('exam-finish').hidden = true;
      if (examTimer) clearInterval(examTimer);
      examTimer = null;
      return;
    }
    const remaining = Math.max(0, EXAM_DURATION_MS - (Date.now() - run.startedAt));
    byId('exam-timer').textContent = formatDuration(remaining);
    byId('exam-timer-status').textContent = `Session ${run.year} · temps restant sur six heures. Le chronomètre est local et indicatif.`;
    byId('exam-start').hidden = true;
    byId('exam-finish').hidden = false;
    if (remaining === 0) finishExam(true);
  }

  function startExam() {
    const year = Number(byId('exam-year-select').value);
    const session = examSessions.find(item => Number(item.year) === year);
    if (!session?.subject?.url) return;
    if (readExamRun() && !window.confirm('Remplacer le chronomètre de la session en cours ?')) return;
    writeExamRun({ year, startedAt: Date.now() });
    if (examTimer) clearInterval(examTimer);
    examTimer = window.setInterval(updateExamTimer, 1000);
    updateExamTimer();
  }

  function finishExam(automatic = false) {
    const run = readExamRun();
    if (!run) return;
    const elapsed = Math.min(EXAM_DURATION_MS, Date.now() - run.startedAt);
    try {
      const history = JSON.parse(window.localStorage.getItem(EXAM_HISTORY_KEY) || '[]');
      history.unshift({ year: run.year, elapsed, finishedAt: Date.now() });
      window.localStorage.setItem(EXAM_HISTORY_KEY, JSON.stringify(history.slice(0, 10)));
      window.localStorage.removeItem(EXAM_RUN_KEY);
    } catch { /* Keep the page usable if local storage is blocked. */ }
    if (examTimer) clearInterval(examTimer);
    examTimer = null;
    byId('exam-timer').textContent = automatic ? '00:00:00' : formatDuration(EXAM_DURATION_MS);
    byId('exam-timer-status').textContent = `Session ${run.year} terminée après ${formatDuration(elapsed)}. Note sur papier les questions bloquantes et les notions à revoir.`;
    byId('exam-start').hidden = false;
    byId('exam-finish').hidden = true;
  }

  function populateExamSelector(data) {
    examSessions = Array.isArray(data.sessions) ? data.sessions.slice().sort((a, b) => b.year - a.year) : [];
    examDataLastChecked = data.lastChecked || examDataLastChecked;
    const select = byId('exam-year-select');
    select.replaceChildren();
    for (const session of examSessions) select.add(new Option(String(session.year), String(session.year)));
    if (examSessions.length) {
      select.value = String(examSessions[0].year);
      select.addEventListener('change', setExamChoice);
      setExamChoice();
    } else {
      byId('exam-source-status').textContent = 'Aucune session officielle n’est disponible dans le manifeste.';
      byId('exam-start').disabled = true;
    }
    if (data.sample?.subject?.url) setLink(byId('exam-zero-subject'), data.sample.subject.url, 'Sujet zéro ↗');
    else byId('exam-zero').hidden = true;
    if (data.sample?.correction?.url) setLink(byId('exam-zero-correction'), data.sample.correction.url, 'Corrigé du sujet zéro ↗');
    else byId('exam-zero-correction').hidden = true;
    byId('exam-start').addEventListener('click', startExam);
    byId('exam-finish').addEventListener('click', () => finishExam(false));
    const currentRun = readExamRun();
    if (currentRun && examSessions.some(session => Number(session.year) === Number(currentRun.year))) {
      select.value = String(currentRun.year);
      setExamChoice();
      examTimer = window.setInterval(updateExamTimer, 1000);
    }
    updateExamTimer();
  }

  async function start() {
    try {
      if (!window.AgregGameEngine) throw new Error('Moteur de jeu indisponible.');
      const [bankResponse, annalesResponse] = await Promise.all([
        fetch('./assets/game-bank.json'),
        fetch('./assets/annales.json'),
      ]);
      if (!bankResponse.ok) throw new Error(`Banque indisponible (HTTP ${bankResponse.status}).`);
      if (!annalesResponse.ok) throw new Error(`Index des annales indisponible (HTTP ${annalesResponse.status}).`);
      const [bank, annales] = await Promise.all([bankResponse.json(), annalesResponse.json()]);
      engine = window.AgregGameEngine.create(bank);
      if (!engine.cards.length) throw new Error('La banque ne contient aucune carte.');

      for (const title of engine.titles) titleFilter.add(new Option(title.title, title.id));
      titleFilter.addEventListener('change', updateSummary);
      gestureFilter.addEventListener('change', updateSummary);
      byId('game-source-filter').addEventListener('change', updateSummary);
      searchFilter.addEventListener('input', updateSummary);
      byId('game-next').addEventListener('click', nextQuestion);
      byId('game-manual-next').addEventListener('click', nextQuestion);
      byId('game-reveal').addEventListener('click', revealAnswer);
      for (const button of document.querySelectorAll('[data-rating]')) button.addEventListener('click', () => rate(button.dataset.rating));
      for (const button of document.querySelectorAll('[data-start-mode]')) button.addEventListener('click', () => startSession(button.dataset.startMode));
      byId('session-again').addEventListener('click', () => startSession('daily'));
      byId('game-add-error').addEventListener('click', () => { byId('game-error-form').hidden = false; byId('game-error-note').focus(); });
      byId('game-save-error').addEventListener('click', saveCurrentError);
      byId('game-clear-progress').addEventListener('click', () => {
        if (!window.confirm('Effacer les évaluations, le carnet d’erreurs et le chronomètre enregistrés sur cet appareil ?')) return;
        engine.clearProgress();
        try { window.localStorage.removeItem(EXAM_RUN_KEY); window.localStorage.removeItem(EXAM_HISTORY_KEY); } catch { /* Storage may be disabled. */ }
        byId('game-clear-status').textContent = 'Progression et carnet effacés sur cet appareil.';
        updateErrorNotebook();
        updateExamTimer();
        updateSummary();
        showEmpty('Progression effacée. Choisis une séance pour recommencer.');
      });
      populateExamSelector(annales);
      updateSummary();
      updateErrorNotebook();
      const savedSession = engine.getActiveSession();
      if (savedSession?.current) displaySavedSession(savedSession, true);
      else showEmpty('Choisis une séance du jour ou ouvre « Choisir une carte » pour démarrer.');
      byId('game-start-status').textContent = `${engine.cards.length} cartes disponibles. Les évaluations restent locales à cet appareil.`;
    } catch (error) {
      status.textContent = `Le jeu n’a pas pu démarrer : ${error.message}`;
      showEmpty('Actualise la page. Si le problème persiste, vérifie que la banque, l’index des annales et le moteur sont disponibles.');
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
