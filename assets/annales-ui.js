(() => {
  const yearSelect = document.querySelector('#annales-year');
  const kindSelect = document.querySelector('#annales-kind');
  const cards = [...document.querySelectorAll('[data-session-card]')];
  const count = document.querySelector('#annales-count');
  if (!yearSelect || !kindSelect || !cards.length) return;

  const update = () => {
    const year = yearSelect.value;
    const kind = kindSelect.value;
    let documents = 0;
    let sessions = 0;
    for (const card of cards) {
      let visibleInCard = 0;
      for (const item of card.querySelectorAll('[data-annales-document]')) {
        const visible = (year === 'all' || item.dataset.year === year)
          && (kind === 'all' || item.dataset.kind === kind);
        item.hidden = !visible;
        if (visible) visibleInCard += 1;
      }
      const visibleCard = visibleInCard > 0;
      card.hidden = !visibleCard;
      if (visibleCard) sessions += 1;
      documents += visibleInCard;
    }
    const noun = documents > 1 ? 'documents' : 'document';
    count.textContent = `${documents} ${noun} dans ${sessions} session${sessions > 1 ? 's' : ''}`;
  };
  yearSelect.addEventListener('change', update);
  kindSelect.addEventListener('change', update);
  update();
})();
