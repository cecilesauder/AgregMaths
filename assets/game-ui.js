(() => {
  'use strict';

  const byId = id => document.getElementById(id);
  const titleFilter = byId('game-title-filter');
  const gestureFilter = byId('game-gesture-filter');
  const searchFilter = byId('game-search');
  const stage = byId('game-active');
  const empty = byId('game-empty');
  const status = byId('game-status');
  const labels = {
    recall: 'Rappel actif',
    apply: 'Application',
    proof: 'Preuve',
    diagnose: 'Diagnostic d’erreur',
  };
  const delimiters = [
    { left: '$$', right: '$$', display: true },
    { left: '\\[', right: '\\]', display: true },
    { left: '\\(', right: '\\)', display: false },
    { left: '$', right: '$', display: false },
  ];
  let engine = null;
  let current = null;
  let answerShown = false;
  let lastId = '';

  function filters() {
    return {
      titleId: titleFilter.value,
      gesture: gestureFilter.value,
      query: searchFilter.value,
    };
  }

  function setMath(element) {
    if (typeof window.renderMathInElement === 'function') {
      window.renderMathInElement(element, {
        delimiters,
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'option'],
        throwOnError: false,
      });
    }
  }

  function updateSummary() {
    if (!engine) return;
    const summary = engine.summary(filters());
    byId('game-total').textContent = String(summary.total);
    byId('game-mastered').textContent = String(summary.mastered);
    byId('game-due').textContent = String(summary.due);
    byId('game-streak').textContent = String(summary.streak);
  }

  function makeNotionTags(list) {
    const container = byId('game-notions');
    container.replaceChildren();
    for (const notion of list) {
      const chip = document.createElement('span');
      chip.className = 'game-label';
      chip.textContent = notion;
      container.append(chip, document.createTextNode(' '));
    }
  }

  function displayCurrent(activity) {
    current = activity;
    answerShown = false;
    const answer = byId('game-answer');
    answer.hidden = true;
    byId('game-reveal').disabled = false;
    byId('game-review').disabled = true;
    byId('game-master').disabled = true;
    byId('game-gesture-label').textContent = labels[activity.gesture] || activity.gesture;
    byId('game-code').textContent = activity.sectionId;
    byId('game-title-label').textContent = activity.title;
    byId('game-section-title').textContent = activity.sectionTitle;
    makeNotionTags(activity.notions);
    byId('game-prompt').textContent = activity.prompt;
    byId('game-answer-text').textContent = activity.modelAnswer;
    byId('game-explanation').textContent = activity.explanation;
    stage.hidden = false;
    empty.hidden = true;
    byId('game-card-status').textContent = `État : ${engine.dueLabel(activity.id)}. Après comparaison, choisis ton auto-évaluation.`;
    setMath(byId('game-prompt'));
    updateSummary();
  }

  function nextQuestion() {
    if (!engine) return;
    const next = engine.chooseNext(filters(), lastId);
    if (!next) {
      current = null;
      stage.hidden = true;
      empty.hidden = false;
      status.textContent = 'Aucune activité trouvée pour les filtres choisis.';
      updateSummary();
      return;
    }
    lastId = next.id;
    status.textContent = 'Question sélectionnée. Cherche quelques instants avant d’ouvrir le modèle.';
    displayCurrent(next);
  }

  function revealAnswer() {
    if (!current || answerShown) return;
    answerShown = true;
    byId('game-answer').hidden = false;
    byId('game-reveal').disabled = true;
    byId('game-review').disabled = false;
    byId('game-master').disabled = false;
    byId('game-card-status').textContent = 'Compare ta réponse aux points essentiels, puis choisis une auto-évaluation.';
    setMath(byId('game-answer'));
  }

  function rate(rating) {
    if (!engine || !current || !answerShown) return;
    const record = engine.mark(current.id, rating);
    if (!record) return;
    byId('game-review').disabled = true;
    byId('game-master').disabled = true;
    const message = rating === 'mastered'
      ? `Noté maîtrisé · prochaine reprise dans ${record.intervalDays} jour${record.intervalDays > 1 ? 's' : ''}.`
      : 'Noté à revoir · la carte repassera dans le circuit de révision.';
    byId('game-card-status').textContent = message;
    updateSummary();
  }

  async function start() {
    try {
      if (!window.AgregGameEngine) throw new Error('Moteur de jeu indisponible.');
      const response = await fetch('./assets/game-bank.json');
      if (!response.ok) throw new Error(`Banque indisponible (HTTP ${response.status}).`);
      const bank = await response.json();
      engine = window.AgregGameEngine.create(bank);
      if (!engine.activities.length) throw new Error('La banque ne contient pas d’activité.');

      for (const title of engine.titles) titleFilter.add(new Option(title.title, title.id));
      titleFilter.addEventListener('change', () => { lastId = ''; nextQuestion(); });
      gestureFilter.addEventListener('change', () => { lastId = ''; nextQuestion(); });
      searchFilter.addEventListener('input', () => { lastId = ''; nextQuestion(); });
      byId('game-next').addEventListener('click', nextQuestion);
      byId('game-reveal').addEventListener('click', revealAnswer);
      byId('game-review').addEventListener('click', () => rate('review'));
      byId('game-master').addEventListener('click', () => rate('mastered'));
      updateSummary();
      nextQuestion();
    } catch (error) {
      status.textContent = `Le jeu n’a pas pu démarrer : ${error.message}`;
      stage.hidden = true;
      empty.hidden = false;
      empty.textContent = 'Actualise la page. Si le problème persiste, signale que la banque ou le moteur est indisponible.';
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
