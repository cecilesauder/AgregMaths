(() => {
  'use strict';

  const byId = id => document.getElementById(id);
  const search = byId('coverage-search');
  const titleFilter = byId('coverage-title-filter');
  const statusFilter = byId('coverage-status-filter');
  const results = byId('coverage-results');
  const resultCount = byId('coverage-result-count');
  let matrix = null;

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, character => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    })[character]);
  }

  function normalize(value) {
    return String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('fr');
  }

  function hasReview(section) {
    return Object.values(section.needsReview || {}).some(count => Number(count) > 0);
  }

  function sumReview(section) {
    return Object.values(section.needsReview || {}).reduce((sum, count) => sum + Number(count || 0), 0);
  }

  function guideUrl(title) {
    const source = String(title.sourceGuide || '');
    const match = source.match(/titre-([0-9A-Za-z]+)\.md$/i);
    return match ? `guides/titre-${match[1]}.html` : 'guides/index.html';
  }

  function badge(label, count, present) {
    const state = present ? 'is-present' : 'is-missing';
    return `<span class="coverage-badge ${state}">${escapeHtml(label)} <strong>${Number(count) || 0}</strong></span>`;
  }

  function renderStats() {
    const totals = matrix.totals || {};
    const stats = {
      'coverage-total-sections': totals.officialSubsections,
      'coverage-total-course': totals.courseCards,
      'coverage-total-exercises': totals.originalExercises,
      'coverage-total-annales': totals.annaleQuestionCards,
      'coverage-with-annales': totals.subsectionsWithAnnales,
      'coverage-review': Number(totals.courseCardsNeedingReview || 0)
        + Number(totals.originalExercisesNeedingReview || 0)
        + Number(totals.annaleCardsNeedingReview || 0),
    };
    for (const [id, value] of Object.entries(stats)) byId(id).textContent = String(value ?? 0);
    const notice = byId('coverage-notice');
    notice.textContent = matrix.notice || '';
    const source = matrix.programSource || {};
    if (source.url) {
      const link = document.createElement('a');
      link.href = source.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Programme officiel 2027 ↗';
      notice.append(document.createTextNode(' '), link);
    }
  }

  function render() {
    if (!matrix) return;
    const query = normalize(search.value.trim());
    const selectedTitle = titleFilter.value;
    const selectedStatus = statusFilter.value;
    const grouped = [];
    let visible = 0;

    for (const title of matrix.titles || []) {
      if (selectedTitle !== 'all' && title.id !== selectedTitle) continue;
      const sections = (title.sections || []).filter(section => {
        if (selectedStatus === 'no-annales' && section.coverage?.annales) return false;
        if (selectedStatus === 'review' && !hasReview(section)) return false;
        if (!query) return true;
        return normalize([
          title.title,
          section.code,
          section.sectionId,
          section.label,
          ...(section.notionNames || []),
        ].join(' ')).includes(query);
      });
      if (!sections.length) continue;
      visible += sections.length;
      grouped.push({ title, sections });
    }

    resultCount.textContent = `${visible} sous-partie${visible > 1 ? 's' : ''} affichée${visible > 1 ? 's' : ''} sur ${matrix.totals?.officialSubsections || 0}`;
    if (!grouped.length) {
      results.innerHTML = '<p class="game-empty">Aucune sous-partie ne correspond à ces filtres.</p>';
      results.setAttribute('aria-busy', 'false');
      return;
    }

    results.innerHTML = grouped.map(({ title, sections }) => {
      const titleAnnales = sections.reduce((count, section) => count + Number(section.coverage?.annales), 0);
      const open = Boolean(query || selectedTitle !== 'all' || selectedStatus !== 'all');
      const list = sections.map(section => {
        const counts = section.counts || {};
        const reviewCount = sumReview(section);
        const years = (counts.annaleSessions || []).join(', ');
        const notionText = (section.notionNames || []).join(' · ');
        const sourceLabel = counts.annaleCardsLinked
          ? `${counts.annaleCardsLinked} question${counts.annaleCardsLinked > 1 ? 's' : ''}${years ? ` · sessions ${years}` : ''}`
          : 'Aucune question d’annale reliée';
        const reviewBadge = reviewCount
          ? `<span class="coverage-badge is-review">À vérifier <strong>${reviewCount}</strong></span>`
          : '<span class="coverage-badge is-clear">Pas de réserve de relecture</span>';
        return `<article class="coverage-card">
          <header class="coverage-card-head"><div><span class="coverage-code">${escapeHtml(section.sectionId)}</span><h3>${escapeHtml(section.label)}</h3></div>${reviewBadge}</header>
          ${notionText ? `<p class="coverage-notions">${escapeHtml(notionText)}</p>` : ''}
          <div class="coverage-badges">
            ${badge('Cours', counts.courseCards, section.coverage?.course)}
            ${badge('Exercices originaux', counts.originalExercises, section.coverage?.originalExercises)}
            <span class="coverage-badge ${section.coverage?.annales ? 'is-present' : 'is-missing'}">Annales <strong>${escapeHtml(sourceLabel)}</strong></span>
          </div>
          <div class="coverage-actions"><a class="button button-small" href="${escapeHtml(guideUrl(title))}">Lire le guide</a><a class="button button-small" href="jeu.html">Travailler dans le jeu</a></div>
        </article>`;
      }).join('');
      return `<details class="coverage-title-group"${open ? ' open' : ''}><summary><span>${escapeHtml(title.title)}</span><small>${sections.length} sous-parties affichées · ${titleAnnales} avec annales liées</small></summary><div class="coverage-card-grid">${list}</div></details>`;
    }).join('');

    results.setAttribute('aria-busy', 'false');
    if (typeof window.renderMathInElement === 'function') {
      window.renderMathInElement(results, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false },
          { left: '$', right: '$', display: false },
        ],
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'option'],
        throwOnError: false,
      });
    }
  }

  async function init() {
    try {
      const response = await fetch('assets/coverage.json', { cache: 'no-cache' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      matrix = await response.json();
      for (const title of matrix.titles || []) {
        const option = document.createElement('option');
        option.value = title.id;
        option.textContent = title.title;
        titleFilter.append(option);
      }
      renderStats();
      byId('coverage-error').hidden = true;
      render();
    } catch (error) {
      results.setAttribute('aria-busy', 'false');
      results.replaceChildren();
      byId('coverage-error').hidden = false;
      resultCount.textContent = 'Matrice indisponible';
      console.error('Impossible de charger la matrice de couverture.', error);
    }
  }

  search.addEventListener('input', render);
  titleFilter.addEventListener('change', render);
  statusFilter.addEventListener('change', render);
  init();
})();
