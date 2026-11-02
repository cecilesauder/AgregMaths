(() => {
  const STORAGE_THEME = 'agreg27-theme';
  const STORAGE_DONE = 'agreg27-done';
  const base = document.body.dataset.base || './';
  const root = document.documentElement;

  const loadDone = () => {
    try { return new Set(JSON.parse(localStorage.getItem(STORAGE_DONE) || '[]')); }
    catch { return new Set(); }
  };
  const saveDone = (set) => localStorage.setItem(STORAGE_DONE, JSON.stringify([...set]));
  const done = loadDone();

  const savedTheme = localStorage.getItem(STORAGE_THEME);
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const syncThemeButton = () => {
    if (!themeButton) return;
    const light = root.dataset.theme === 'light';
    themeButton.setAttribute('aria-pressed', String(light));
    themeButton.setAttribute('aria-label', light ? 'Activer le thème sombre' : 'Activer le thème clair');
    themeButton.textContent = light ? '☾' : '☼';
  };
  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem(STORAGE_THEME, root.dataset.theme);
    syncThemeButton();
  });
  syncThemeButton();

  const progressNodes = [...document.querySelectorAll('[data-progress-count]')];
  const updateProgress = (total) => {
    const count = [...done].filter(id => id.startsWith('resource-') || id.startsWith('guide-') || id.startsWith('exercise-')).length;
    for (const node of progressNodes) {
      const value = Math.min(count, total);
      node.textContent = `${value} / ${total} ressources`;
      const fill = node.closest('.progress-panel, .exercise-progress')?.querySelector('.progress-fill');
      if (fill) fill.style.width = `${total ? (value / total) * 100 : 0}%`;
    }
    const stat = document.querySelector('[data-stat-done]');
    if (stat) stat.textContent = String(count);
  };

  document.querySelectorAll('[data-self-check]').forEach(button => {
    const id = button.dataset.selfCheck;
    const paint = () => {
      const checked = done.has(id);
      button.setAttribute('aria-pressed', String(checked));
      button.textContent = checked ? '✓ Travaillé' : 'Marquer comme travaillé';
    };
    paint();
    button.addEventListener('click', () => {
      done.has(id) ? done.delete(id) : done.add(id);
      saveDone(done);
      paint();
      updateProgress(Number(document.body.dataset.progressTotal || 0));
    });
  });

  const grid = document.querySelector('#resource-grid');
  if (!grid) {
    updateProgress(Number(document.body.dataset.progressTotal || 0));
    renderMath();
    return;
  }

  const searchInput = document.querySelector('#catalog-search');
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const resultCount = document.querySelector('#result-count');
  const activeFilter = { value: 'all' };
  const normalize = (value) => String(value || '').toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const make = (tag, cls, text) => {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text != null) el.textContent = text;
    return el;
  };
  const badgeName = { programme: 'Programme 2027', exercices: 'Entraînement', algebre: 'Algèbre', analyse: 'Analyse', option: 'Option A', transversal: 'Transversal' };

  const buildCard = item => {
    const card = make('article', 'resource-card');
    card.dataset.track = item.track;
    card.dataset.kind = item.kind;
    card.dataset.id = item.id;
    const top = make('div', 'card-topline');
    top.append(make('span', `card-tag ${item.track}`, badgeName[item.track] || item.track));
    if (done.has(item.id)) top.append(make('span', 'done-indicator', '✓ Travaillé'));
    card.append(top);
    card.append(make('h3', '', item.title));
    card.append(make('p', '', item.description));
    const actions = make('div', 'card-actions');
    const link = make('a', '', item.cta || 'Ouvrir la ressource →');
    link.href = item.url;
    if (item.external === true) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    actions.append(link);
    const check = make('button', 'mark-done', done.has(item.id) ? '✓ Fait' : 'À travailler');
    check.type = 'button';
    check.setAttribute('aria-pressed', String(done.has(item.id)));
    check.setAttribute('aria-label', `${done.has(item.id) ? 'Retirer l’état travaillé pour' : 'Marquer comme travaillé'} : ${item.title}`);
    check.addEventListener('click', () => {
      done.has(item.id) ? done.delete(item.id) : done.add(item.id);
      saveDone(done);
      render(items);
    });
    actions.append(check);
    card.append(actions);
    return card;
  };

  let items = [];
  const render = (allItems) => {
    const query = normalize(searchInput?.value || '');
    const filtered = allItems.filter(item => {
      const matchesFilter = activeFilter.value === 'all' || item.track === activeFilter.value;
      const searchable = normalize([item.title, item.description, item.group, ...(item.tags || [])].join(' '));
      return matchesFilter && (!query || searchable.includes(query));
    });
    grid.replaceChildren();
    grid.setAttribute('aria-busy', 'false');
    if (!filtered.length) {
      const empty = make('div', 'empty-state', 'Aucune ressource ne correspond à cette recherche. Essaie un autre terme ou filtre.');
      grid.append(empty);
    } else {
      const frag = document.createDocumentFragment();
      filtered.forEach(item => frag.append(buildCard(item)));
      grid.append(frag);
    }
    if (resultCount) resultCount.textContent = `${filtered.length} ressource${filtered.length > 1 ? 's' : ''}`;
    updateProgress(allItems.length);
  };

  filterButtons.forEach(button => button.addEventListener('click', () => {
    activeFilter.value = button.dataset.filter || 'all';
    filterButtons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    render(items);
  }));
  searchInput?.addEventListener('input', () => render(items));

  fetch(`${base}assets/catalogue.json`)
    .then(response => { if (!response.ok) throw new Error('Catalogue indisponible'); return response.json(); })
    .then(data => {
      items = Array.isArray(data.resources) ? data.resources : [];
      const count = document.querySelector('[data-stat-resources]');
      const guideCount = document.querySelector('[data-stat-guides]');
      if (count) count.textContent = String(items.filter(item => item.kind === 'html').length);
      if (guideCount) guideCount.textContent = String(items.filter(item => item.kind === 'guide' && item.track !== 'transversal').length);
      render(items);
    })
    .catch(() => {
      grid.replaceChildren(make('div', 'empty-state', 'Le catalogue n’a pas pu se charger. Actualise la page ou ouvre directement le titre 1.'));
    });

  function renderMath() {
    if (typeof window.renderMathInElement !== 'function') return;
    window.renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '\\[', right: '\\]', display: true },
        { left: '\\(', right: '\\)', display: false },
        { left: '$', right: '$', display: false }
      ],
      ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'option'],
      throwOnError: false
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderMath, { once: true });
  else renderMath();
})();
