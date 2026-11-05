(() => {
  'use strict';

  const STORAGE_KEY = 'agreg27-game-progress-v2';
  const LEGACY_STORAGE_KEY = 'agreg27-game-progress-v1';
  const INTERVALS = [1, 3, 7, 14, 30, 60, 90];
  const RATING_LABELS = { again: 'À reprendre', hard: 'Difficile', good: 'Correct', easy: 'Facile' };

  function normalize(value) {
    return String(value || '').toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function sourceTypeFor(card, collectionKind) {
    if (card.sourceType) return card.sourceType;
    if (card.provenance || card.source) return 'annale';
    if (collectionKind === 'knowledge') return 'cours';
    return 'original';
  }

  function flattenBank(bank) {
    const cards = [];
    for (const title of (bank?.titles || [])) {
      for (const section of (title.sections || [])) {
        const base = {
          titleId: title.id,
          title: title.title,
          sectionId: section.sectionId || section.id,
          sectionTitle: section.sectionTitle,
          notions: section.notions || [],
        };
        for (const activity of (section.activities || [])) {
          const gesture = activity.gesture || 'apply';
          cards.push({
            ...base,
            ...activity,
            id: activity.id || `${title.id}/${section.id}/${gesture}`,
            kind: activity.kind || (activity.provenance || activity.sourceType === 'annale' ? 'annale' : 'exercise'),
            sourceType: sourceTypeFor(activity, 'activity'),
          });
        }
        const knowledge = section.knowledgeCards || section.courseCards || section.knowledge || [];
        knowledge.forEach((card, index) => {
          cards.push({
            ...base,
            ...card,
            id: card.id || `${title.id}/${section.id}/cours-${index + 1}`,
            kind: 'knowledge',
            knowledgeKind: card.knowledgeKind || card.cardKind || card.kind || 'definition',
            gesture: card.gesture || 'recall',
            sourceType: sourceTypeFor(card, 'knowledge'),
          });
        });
        const annales = section.annaleCards || section.annales || [];
        annales.forEach((card, index) => {
          cards.push({
            ...base,
            ...card,
            id: card.id || `${title.id}/${section.id}/annale-${index + 1}`,
            kind: 'annale',
            gesture: card.gesture || 'apply',
            sourceType: 'annale',
          });
        });
      }
    }
    return cards;
  }

  function create(bank, storage, options = {}) {
    const cards = flattenBank(bank);
    const cardById = new Map(cards.map(card => [card.id, card]));
    const clock = typeof options.now === 'function' ? options.now : () => Date.now();
    let store = storage;
    try { if (!store) store = window.localStorage; }
    catch { store = null; }
    if (!store) store = { getItem: () => null, setItem: () => {} };

    function defaultState() {
      return { version: 2, cards: {}, errors: [], activeSession: null, masteredStreak: 0 };
    }

    function normalizeRecord(record) {
      const oldRating = record?.rating;
      const rating = ['again', 'hard', 'good', 'easy'].includes(oldRating)
        ? oldRating : oldRating === 'mastered' ? 'good' : oldRating === 'review' ? 'again' : 'new';
      return {
        rating,
        successes: Number.isInteger(record?.successes) ? record.successes : (rating === 'good' ? 1 : 0),
        intervalDays: Math.max(0, Number(record?.intervalDays) || 0),
        dueAt: Math.max(0, Number(record?.dueAt) || 0),
        seen: Math.max(0, Number(record?.seen) || 0),
        lapses: Math.max(0, Number(record?.lapses) || 0),
        lastSeen: Math.max(0, Number(record?.lastSeen) || 0),
      };
    }

    function readState() {
      try {
        const current = JSON.parse(store.getItem(STORAGE_KEY) || 'null');
        if (current && current.version === 2 && typeof current === 'object') {
          const state = { ...defaultState(), ...current };
          state.cards = Object.fromEntries(Object.entries(state.cards || {}).map(([id, record]) => [id, normalizeRecord(record)]));
          state.errors = Array.isArray(state.errors) ? state.errors : [];
          state.masteredStreak = Number.isInteger(state.masteredStreak) ? state.masteredStreak : 0;
          return state;
        }
        const legacy = JSON.parse(store.getItem(LEGACY_STORAGE_KEY) || store.getItem(STORAGE_KEY) || 'null');
        if (legacy && typeof legacy === 'object' && (legacy.version === 1 || legacy.cards)) {
          return {
            ...defaultState(),
            cards: Object.fromEntries(Object.entries(legacy.cards || {}).map(([id, record]) => [id, normalizeRecord(record)])),
            masteredStreak: Number.isInteger(legacy.masteredStreak) ? legacy.masteredStreak : 0,
          };
        }
      } catch { /* Corrupt or unavailable browser storage: start a fresh local session. */ }
      return defaultState();
    }

    let state = readState();

    function save() {
      try { store.setItem(STORAGE_KEY, JSON.stringify(state)); }
      catch { /* The current session remains usable if storage is disabled or full. */ }
    }

    function recordFor(id) {
      return state.cards[id] || { rating: 'new', successes: 0, intervalDays: 0, dueAt: 0, seen: 0, lapses: 0, lastSeen: 0 };
    }

    function isDue(id, now = clock()) {
      const record = recordFor(id);
      return !record.dueAt || record.dueAt <= now;
    }

    function filter(filters = {}) {
      const titleId = filters.titleId || 'all';
      const gesture = filters.gesture || 'random';
      const kind = filters.kind || 'all';
      const sourceType = filters.sourceType || 'all';
      const query = normalize(filters.query || '');
      return cards.filter(card => {
        if (titleId !== 'all' && card.titleId !== titleId) return false;
        if (gesture !== 'random' && card.gesture !== gesture) return false;
        if (kind !== 'all' && card.kind !== kind) return false;
        if (sourceType !== 'all' && card.sourceType !== sourceType) return false;
        if (!query) return true;
        const searchable = normalize([
          card.title, card.sectionId, card.sectionTitle, card.name,
          ...(card.notions || []), card.prompt, card.modelAnswer, card.explanation,
        ].join(' '));
        return searchable.includes(query);
      });
    }

    function summary(filters = {}) {
      const matches = filter(filters);
      const now = clock();
      const counts = { total: matches.length, due: 0, newCards: 0, seen: 0, stable: 0, course: 0, annales: 0, original: 0, streak: state.masteredStreak };
      for (const card of matches) {
        const record = recordFor(card.id);
        if (!record.seen) counts.newCards += 1;
        if (!record.dueAt || record.dueAt <= now) counts.due += 1;
        if (record.seen > 0) counts.seen += 1;
        if (record.intervalDays >= 7 && record.rating !== 'again') counts.stable += 1;
        if (card.kind === 'knowledge') counts.course += 1;
        if (card.sourceType === 'annale') counts.annales += 1;
        if (card.sourceType === 'original') counts.original += 1;
      }
      return counts;
    }

    function chooseNext(filters = {}, excludeId = '') {
      const pool = filter(filters);
      if (!pool.length) return null;
      const now = clock();
      const candidates = pool.filter(card => card.id !== excludeId);
      const scored = (candidates.length ? candidates : pool).map(card => ({ card, record: recordFor(card.id) }));
      scored.sort((a, b) => {
        const aDue = !a.record.dueAt || a.record.dueAt <= now ? 0 : 1;
        const bDue = !b.record.dueAt || b.record.dueAt <= now ? 0 : 1;
        return aDue - bDue || (a.record.dueAt || 0) - (b.record.dueAt || 0)
          || b.record.lapses - a.record.lapses || a.record.lastSeen - b.record.lastSeen;
      });
      const tieEnd = scored.findIndex(item => item.record.lastSeen !== scored[0].record.lastSeen);
      const tieCount = tieEnd < 0 ? scored.length : tieEnd;
      return scored[Math.floor(Math.random() * Math.max(1, tieCount))].card;
    }

    function planDailySession({ minutes = 30, titleId = 'all', mode = 'daily', limit } = {}) {
      const target = Number.isInteger(limit) && limit > 0 ? limit : ({ 15: 5, 30: 8, 45: 12, 60: 16 }[minutes] || 8);
      const pool = filter({ titleId });
      const course = pool.filter(card => card.kind === 'knowledge');
      const annales = pool.filter(card => card.sourceType === 'annale');
      const exercises = pool.filter(card => card.sourceType !== 'annale' && card.kind !== 'knowledge');
      const now = clock();
      const selected = [];
      const selectedIds = new Set();

      function ordered(items) {
        return items.slice().sort((a, b) => {
          const ar = recordFor(a.id);
          const br = recordFor(b.id);
          const ad = !ar.dueAt || ar.dueAt <= now ? 0 : 1;
          const bd = !br.dueAt || br.dueAt <= now ? 0 : 1;
          return ad - bd || (ar.dueAt || 0) - (br.dueAt || 0)
            || br.lapses - ar.lapses || ar.lastSeen - br.lastSeen || ar.seen - br.seen;
        });
      }

      function add(items, count, diverse = true) {
        const available = ordered(items.filter(card => !selectedIds.has(card.id)));
        let added = 0;
        const usedSections = new Set(selected.map(card => card.sectionId));
        for (const card of available) {
          if (added >= count) break;
          const anotherSectionAvailable = available.some(other => !selectedIds.has(other.id) && !usedSections.has(other.sectionId));
          if (diverse && usedSections.has(card.sectionId) && anotherSectionAvailable) continue;
          selected.push(card);
          selectedIds.add(card.id);
          usedSections.add(card.sectionId);
          added += 1;
        }
        return added;
      }

      if (mode === 'course') {
        add(course.filter(card => isDue(card.id, now)), target);
        add(course, target - selected.length);
      } else if (mode === 'annales') {
        add(annales.filter(card => isDue(card.id, now)), target, false);
        add(annales, target - selected.length, false);
      } else if (mode === 'practice') {
        add(exercises.filter(card => isDue(card.id, now)), target);
        add(exercises, target - selected.length);
      } else {
        const memoryTarget = Math.min(target, Math.max(2, Math.ceil(target * 0.55)));
        add(course.filter(card => isDue(card.id, now)), memoryTarget);
        add(course, memoryTarget - selected.length);
        if (annales.length && selected.length < target) {
          const annale = ordered(annales.filter(card => !selectedIds.has(card.id)))[0];
          if (annale) add([annale], 1, false);
        }
        const exerciseTarget = Math.min(target - selected.length, Math.max(1, Math.floor(target * 0.25)));
        const exerciseCount = selected.filter(card => card.sourceType !== 'annale' && card.kind !== 'knowledge').length;
        add(exercises.filter(card => isDue(card.id, now)), exerciseTarget);
        add(exercises, Math.max(0, exerciseTarget - (selected.filter(card => card.sourceType !== 'annale' && card.kind !== 'knowledge').length - exerciseCount)));
        add(annales.filter(card => isDue(card.id, now)), target - selected.length, false);
        add(pool.filter(card => isDue(card.id, now)), target - selected.length);
        add(course, target - selected.length);
        add(pool, target - selected.length);
      }

      return { minutes, mode, target, cards: selected.slice(0, target), remainingDue: pool.filter(card => isDue(card.id, now) && !selectedIds.has(card.id)).length };
    }

    function startSession(options = {}) {
      const plan = planDailySession(options);
      if (!plan.cards.length) return null;
      state.activeSession = {
        minutes: plan.minutes,
        mode: plan.mode,
        startedAt: clock(),
        cardIds: plan.cards.map(card => card.id),
        index: 0,
      };
      save();
      return getActiveSession();
    }

    function getActiveSession() {
      const session = state.activeSession;
      if (!session || !Array.isArray(session.cardIds)) return null;
      return {
        ...session,
        cards: session.cardIds.map(id => cardById.get(id)).filter(Boolean),
        current: cardById.get(session.cardIds[session.index]) || null,
        total: session.cardIds.length,
      };
    }

    function advanceSession() {
      if (!state.activeSession) return null;
      state.activeSession.index += 1;
      if (state.activeSession.index >= state.activeSession.cardIds.length) {
        const finished = getActiveSession();
        state.activeSession = null;
        save();
        return { finished: true, session: finished };
      }
      save();
      return { finished: false, session: getActiveSession() };
    }

    function stopSession() {
      const finished = getActiveSession();
      state.activeSession = null;
      save();
      return finished;
    }

    function mark(id, rating) {
      if (!['again', 'hard', 'good', 'easy'].includes(rating) || !cardById.has(id)) return null;
      const now = clock();
      const previous = recordFor(id);
      let successes = previous.successes;
      let intervalDays = previous.intervalDays;
      let dueAt;
      let lapses = previous.lapses;

      if (rating === 'again') {
        successes = 0;
        intervalDays = 0;
        dueAt = now + 10 * 60 * 1000;
        lapses += 1;
        state.masteredStreak = 0;
      } else if (rating === 'hard') {
        intervalDays = Math.max(1, Math.ceil((previous.intervalDays || 1) * 1.2));
        dueAt = now + intervalDays * 24 * 60 * 60 * 1000;
        state.masteredStreak = 0;
      } else if (rating === 'good') {
        successes += 1;
        intervalDays = INTERVALS[Math.min(successes - 1, INTERVALS.length - 1)];
        dueAt = now + intervalDays * 24 * 60 * 60 * 1000;
        state.masteredStreak = 0;
      } else {
        successes += 2;
        intervalDays = INTERVALS[Math.min(Math.max(previous.successes + 1, 1), INTERVALS.length - 1)];
        dueAt = now + intervalDays * 24 * 60 * 60 * 1000;
        state.masteredStreak += 1;
      }

      const next = { rating, successes, intervalDays, dueAt, seen: previous.seen + 1, lapses, lastSeen: now };
      state.cards[id] = next;
      save();
      return next;
    }

    function dueLabel(id) {
      const record = recordFor(id);
      if (!record.seen) return 'À découvrir';
      if (!record.dueAt || record.dueAt <= clock()) return 'À réviser maintenant';
      if (record.rating === 'again') return 'À reprendre dans quelques minutes';
      if (record.intervalDays === 1) return 'Prochaine reprise demain';
      return `Prochaine reprise dans ${record.intervalDays} jours`;
    }

    function addError(id, note = '') {
      const card = cardById.get(id);
      if (!card) return null;
      const error = {
        id: `err-${clock()}-${state.errors.length + 1}`,
        cardId: id,
        title: card.title,
        sectionId: card.sectionId,
        sectionTitle: card.sectionTitle,
        prompt: card.prompt,
        note: String(note).trim().slice(0, 500),
        createdAt: clock(),
        resolvedAt: 0,
      };
      state.errors.unshift(error);
      state.errors = state.errors.slice(0, 200);
      save();
      return error;
    }

    function getErrors({ includeResolved = false } = {}) {
      return state.errors.filter(error => includeResolved || !error.resolvedAt).map(error => ({ ...error, card: cardById.get(error.cardId) || null }));
    }

    function resolveError(errorId) {
      const error = state.errors.find(item => item.id === errorId);
      if (!error) return false;
      error.resolvedAt = clock();
      save();
      return true;
    }

    function removeError(errorId) {
      const before = state.errors.length;
      state.errors = state.errors.filter(item => item.id !== errorId);
      save();
      return state.errors.length < before;
    }

    function clearProgress() {
      state = defaultState();
      save();
    }

    return {
      cards,
      activities: cards,
      titles: bank?.titles || [],
      filter,
      chooseNext,
      planDailySession,
      startSession,
      getActiveSession,
      advanceSession,
      stopSession,
      mark,
      summary,
      dueLabel,
      getRecord: recordFor,
      addError,
      getErrors,
      resolveError,
      removeError,
      clearProgress,
      ratingLabels: { ...RATING_LABELS },
      storageKey: STORAGE_KEY,
    };
  }

  window.AgregGameEngine = { create, flattenBank };
})();
