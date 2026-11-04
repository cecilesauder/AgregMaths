(() => {
  'use strict';

  const STORAGE_KEY = 'agreg27-game-progress-v1';
  const MASTER_INTERVALS = [1, 3, 7, 14, 30, 60, 90];

  function normalize(value) {
    return String(value || '').toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function flattenBank(bank) {
    const activities = [];
    for (const title of (bank?.titles || [])) {
      for (const section of (title.sections || [])) {
        for (const activity of (section.activities || [])) {
          const gesture = activity.gesture;
          activities.push({
            ...activity,
            id: `${title.id}/${section.id}/${gesture}`,
            titleId: title.id,
            title: title.title,
            sectionId: section.id,
            sectionTitle: section.sectionTitle,
            notions: section.notions || [],
          });
        }
      }
    }
    return activities;
  }

  function create(bank, storage) {
    const activities = flattenBank(bank);
    let store = storage;
    try { if (!store) store = window.localStorage; }
    catch { store = null; }
    if (!store) store = { getItem: () => null, setItem: () => {} };
    let state;
    try {
      const parsed = JSON.parse(store.getItem(STORAGE_KEY) || '{}');
      state = parsed && typeof parsed === 'object' && parsed.version === 1
        ? parsed
        : { version: 1, cards: {}, masteredStreak: 0 };
      if (!state.cards || typeof state.cards !== 'object') state.cards = {};
      if (!Number.isInteger(state.masteredStreak)) state.masteredStreak = 0;
    } catch {
      state = { version: 1, cards: {}, masteredStreak: 0 };
    }

    function save() {
      try { store.setItem(STORAGE_KEY, JSON.stringify(state)); }
      catch { /* Private browsing or storage quota: the session remains usable. */ }
    }

    function recordFor(id) {
      return state.cards[id] || { rating: 'new', intervalDays: 0, dueAt: 0, seen: 0, lapses: 0, lastSeen: 0 };
    }

    function summary(filters = {}) {
      const matches = filter(filters);
      const now = Date.now();
      let mastered = 0;
      let due = 0;
      let seen = 0;
      for (const activity of matches) {
        const record = recordFor(activity.id);
        if (record.rating === 'mastered' && record.intervalDays >= 3) mastered += 1;
        if (!record.dueAt || record.dueAt <= now) due += 1;
        if (record.seen > 0) seen += 1;
      }
      return { total: matches.length, mastered, due, seen, streak: state.masteredStreak };
    }

    function filter(filters = {}) {
      const titleId = filters.titleId || 'all';
      const gesture = filters.gesture || 'random';
      const query = normalize(filters.query || '');
      return activities.filter(activity => {
        if (titleId !== 'all' && activity.titleId !== titleId) return false;
        if (gesture !== 'random' && activity.gesture !== gesture) return false;
        if (!query) return true;
        const searchable = normalize([
          activity.title, activity.sectionId, activity.sectionTitle,
          ...(activity.notions || []), activity.prompt, activity.modelAnswer,
        ].join(' '));
        return searchable.includes(query);
      });
    }

    function chooseNext(filters = {}, excludeId = '') {
      const pool = filter(filters);
      if (!pool.length) return null;
      const now = Date.now();
      const notSame = pool.filter(activity => activity.id !== excludeId);
      const candidates = notSame.length ? notSame : pool;
      const scored = candidates.map(activity => {
        const record = recordFor(activity.id);
        const due = !record.dueAt || record.dueAt <= now;
        return { activity, record, due };
      });
      const duePool = scored.filter(item => item.due);
      const selectedPool = duePool.length ? duePool : scored;
      selectedPool.sort((a, b) => (a.record.dueAt || 0) - (b.record.dueAt || 0)
        || a.record.lastSeen - b.record.lastSeen
        || a.record.seen - b.record.seen);
      const tieCount = selectedPool.filter(item => item.record.lastSeen === selectedPool[0].record.lastSeen).length;
      const chosen = selectedPool[Math.floor(Math.random() * Math.max(1, tieCount))];
      return chosen.activity;
    }

    function mark(id, rating) {
      if (!['mastered', 'review'].includes(rating) || !activities.some(item => item.id === id)) return null;
      const now = Date.now();
      const previous = recordFor(id);
      let next;
      if (rating === 'mastered') {
        const nextSuccesses = (previous.rating === 'mastered' ? previous.successes || 0 : 0) + 1;
        const intervalDays = MASTER_INTERVALS[Math.min(nextSuccesses - 1, MASTER_INTERVALS.length - 1)];
        next = {
          rating,
          successes: nextSuccesses,
          intervalDays,
          dueAt: now + intervalDays * 24 * 60 * 60 * 1000,
          seen: previous.seen + 1,
          lapses: previous.lapses,
          lastSeen: now,
        };
        state.masteredStreak += 1;
      } else {
        next = {
          rating,
          successes: 0,
          intervalDays: 0,
          dueAt: now + 60 * 60 * 1000,
          seen: previous.seen + 1,
          lapses: previous.lapses + 1,
          lastSeen: now,
        };
        state.masteredStreak = 0;
      }
      state.cards[id] = next;
      save();
      return next;
    }

    function dueLabel(id) {
      const record = recordFor(id);
      if (!record.dueAt) return 'À découvrir';
      if (record.dueAt <= Date.now()) return 'À revoir';
      if (record.rating === 'review') return 'À reprendre après une pause';
      if (record.intervalDays === 1) return 'Révision prévue demain';
      return `Prochaine reprise dans ${record.intervalDays} jours`;
    }

    return {
      activities,
      titles: bank?.titles || [],
      filter,
      chooseNext,
      mark,
      summary,
      dueLabel,
      getRecord: recordFor,
      storageKey: STORAGE_KEY,
    };
  }

  window.AgregGameEngine = { create, flattenBank };
})();
