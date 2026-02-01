const STORAGE_KEY = 'snowflake-practice-progress-v1';

const els = {
  landing: document.getElementById('landing'),
  landingGrid: document.getElementById('landing-grid'),
  quizView: document.getElementById('quiz-view'),
  backToLanding: document.getElementById('back-to-landing'),
  questionGrid: document.getElementById('question-grid'),
  testFilter: document.getElementById('test-filter'),
  reviewToggle: document.getElementById('review-toggle'),
  exportMistakes: document.getElementById('export-mistakes'),
  reset: document.getElementById('reset-progress'),
  progressBar: document.getElementById('progress-bar'),
  progressLabel: document.getElementById('progress-label'),
  questionMeta: document.getElementById('question-meta'),
  testPill: document.getElementById('test-pill'),
  questionText: document.getElementById('question-text'),
  options: document.getElementById('options'),
  feedback: document.getElementById('feedback'),
  explanation: document.getElementById('explanation'),
  prev: document.getElementById('prev'),
  next: document.getElementById('next'),
  check: document.getElementById('check'),
  retry: document.getElementById('retry'),
  statAttempted: document.getElementById('stat-attempted'),
  statCorrect: document.getElementById('stat-correct'),
  statIncorrect: document.getElementById('stat-incorrect'),
  statStreak: document.getElementById('stat-streak'),
  statTotalAttempts: document.getElementById('stat-total-attempts'),
};

let questions = [];
let filtered = [];
let currentIndex = 0;
let state = loadState();
let selectedTest = null;

main().catch((err) => {
  console.error(err);
  els.questionText.textContent = 'Failed to load questions';
  els.feedback.textContent = err.message;
});

async function main() {
  questions = await loadQuestions();
  buildFilter(questions);
  buildLanding(questions);
  wireEvents();
}

async function loadQuestions() {
  // Questions are loaded from questions-data.js which is included as a script tag
  if (typeof QUESTIONS_DATA === 'undefined') {
    throw new Error('Questions data not loaded');
  }
  return QUESTIONS_DATA;
}

function buildFilter(items) {
  const tests = Array.from(new Set(items.map((q) => q.testNumber).filter((t) => t !== null && t !== undefined))).sort((a, b) => a - b);
  els.testFilter.innerHTML = ['<option value="all">All tests</option>', ...tests.map((t) => `<option value="${t}">Test ${t}</option>`)].join('');
}

function buildLanding(items) {
  const tests = Array.from(new Set(items.map((q) => q.testNumber).filter((t) => t !== null && t !== undefined))).sort((a, b) => a - b);
  const total = items.length;
  const perTest = tests.map((t) => {
    const subset = items.filter((q) => q.testNumber === t);
    return { t, count: subset.length };
  });
  els.landingGrid.innerHTML = [
    '<button data-test="all"><span>All tests</span><span class="pill">' + total + ' qs</span></button>',
    ...perTest.map((x) => `<button data-test="${x.t}"><span>Test ${x.t}</span><span class="pill">${x.count} qs</span></button>`),
  ].join('');

  els.landingGrid.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const choice = btn.getAttribute('data-test');
      selectedTest = choice === 'all' ? 'all' : Number(choice);
      els.testFilter.value = choice === 'all' ? 'all' : String(choice);
      startQuiz();
    });
  });
}

function applyFilter() {
  const choice = selectedTest ?? els.testFilter.value;
  const reviewOnly = els.reviewToggle.checked;

  filtered = questions.filter((q) => {
    const matchesTest = choice === 'all' ? true : q.testNumber === Number(choice);
    if (!matchesTest) return false;
    if (!reviewOnly) return true;
    const attempt = state.attempts[q.id];
    return attempt && attempt.status === 'incorrect';
  });

  if (filtered.length === 0) {
    els.questionText.textContent = reviewOnly ? 'No incorrect questions to review.' : 'No questions found. Pick a test above or return to landing.';
    els.options.innerHTML = '';
    els.feedback.textContent = '';
    els.explanation.textContent = '';
    els.check.disabled = true;
    els.prev.disabled = true;
    els.next.disabled = true;
    els.retry.disabled = true;
    updateProgress();
    updateStats();
    return;
  }

  if (currentIndex >= filtered.length) currentIndex = 0;
  render();
}

function wireEvents() {
  els.backToLanding.addEventListener('click', backToLanding);
  els.testFilter.addEventListener('change', () => {
    selectedTest = els.testFilter.value === 'all' ? 'all' : Number(els.testFilter.value);
    applyFilter();
  });
  els.reviewToggle.addEventListener('change', () => applyFilter());
  els.exportMistakes.addEventListener('click', exportMistakesCSV);
  els.reset.addEventListener('click', resetProgress);
  els.prev.addEventListener('click', () => move(-1));
  els.next.addEventListener('click', () => move(1));
  els.check.addEventListener('click', gradeCurrent);
  els.retry.addEventListener('click', retryCurrent);
}

function startQuiz() {
  els.landing.classList.add('hidden');
  els.quizView.classList.remove('hidden');
  els.backToLanding.style.display = 'inline-block';
  applyFilter();
  buildQuestionGrid();
  render();
}

function backToLanding() {
  els.quizView.classList.add('hidden');
  els.landing.classList.remove('hidden');
  els.backToLanding.style.display = 'none';
  selectedTest = null;
  currentIndex = 0;
}

function buildQuestionGrid() {
  if (!filtered.length) {
    els.questionGrid.innerHTML = '<p class="muted">No questions to display</p>';
    return;
  }

  els.questionGrid.innerHTML = filtered
    .map((q, idx) => {
      const attempt = state.attempts[q.id];
      let btnClass = '';
      if (attempt) {
        if (attempt.status === 'correct' && attempt.count === 1) {
          btnClass = 'correct-first';
        } else if (attempt.status === 'incorrect') {
          btnClass = 'incorrect';
        }
      }
      return `<button class="${btnClass}" data-index="${idx}">${idx + 1}</button>`;
    })
    .join('');

  els.questionGrid.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentIndex = Number(btn.getAttribute('data-index'));
      render();
      updateQuestionGrid();
    });
  });

  updateQuestionGrid();
}

function updateQuestionGrid() {
  if (!els.questionGrid) return;
  els.questionGrid.querySelectorAll('button').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === currentIndex);
  });
}

function move(delta) {
  if (!filtered.length) return;
  currentIndex = (currentIndex + delta + filtered.length) % filtered.length;
  render();
}

function render() {
  if (!filtered.length) return;
  const q = filtered[currentIndex];
  const attempt = state.attempts[q.id];

  const attemptCount = attempt?.count || 0;
  const attemptText = attemptCount > 0 ? ` • ${attemptCount} attempt${attemptCount > 1 ? 's' : ''}` : '';
  els.questionMeta.textContent = `Question ${currentIndex + 1} of ${filtered.length}${attemptText}`;
  const hasTest = q.testNumber !== null && q.testNumber !== undefined;
  els.testPill.textContent = hasTest ? `Test ${q.testNumber} • ${q.source}` : q.source;
  els.questionText.innerHTML = marked.parse(q.question);

  const isMulti = q.answers.length > 1;
  els.options.innerHTML = q.options
    .map((opt) => {
      const inputType = isMulti ? 'checkbox' : 'radio';
      const checked = attempt?.selected?.includes(opt.id) ? 'checked' : '';
      return `
        <label class="option" data-id="${opt.id}">
          <input type="${inputType}" name="choice" value="${opt.id}" ${checked} />
          <span>${marked.parseInline(opt.value)}</span>
        </label>`;
    })
    .join('');

  els.feedback.textContent = '';
  els.feedback.className = 'feedback';
  els.explanation.textContent = '';
  els.retry.disabled = !attempt;

  if (attempt) {
    showFeedback(q, attempt.status === 'correct');
    decorateOptions(q, attempt.selected);
    els.check.disabled = true;
  } else {
    els.check.disabled = false;
    clearDecorations();
  }

  updateProgress();
  updateStats();
  updateQuestionGrid();
}

function selectedOptionIds() {
  return Array.from(els.options.querySelectorAll('input:checked')).map((i) => Number(i.value));
}

function gradeCurrent() {
  const q = filtered[currentIndex];
  const chosen = selectedOptionIds();
  if (!chosen.length) {
    els.feedback.textContent = 'Pick an option first.';
    els.feedback.className = 'feedback no';
    return;
  }

  const correct = isCorrect(q.answers, chosen);
  showFeedback(q, correct);
  decorateOptions(q, chosen);
  els.check.disabled = true;
  els.retry.disabled = false;

  const prev = state.attempts[q.id];
  const alreadyCounted = !!prev;
  const prevCount = prev?.count || 0;
  state.attempts[q.id] = { status: correct ? 'correct' : 'incorrect', selected: chosen, count: prevCount + 1 };

  state.stats.totalAttempts += 1;

  if (!alreadyCounted) {
    state.stats.attempted += 1;
    if (correct) state.stats.correct += 1; else state.stats.incorrect += 1;
  } else {
    // If changing from incorrect to correct, fix tallies.
    if (prev.status === 'incorrect' && correct) {
      state.stats.correct += 1;
      state.stats.incorrect -= 1;
    }
  }

  if (correct) {
    state.stats.streak += 1;
  } else {
    state.stats.streak = 0;
  }

  const t = q.testNumber;
  if (t) {
    const slot = state.perTest[t] || { correct: 0, incorrect: 0 };
    if (!alreadyCounted) {
      if (correct) slot.correct += 1; else slot.incorrect += 1;
    } else if (prev.status === 'incorrect' && correct) {
      slot.correct += 1; slot.incorrect -= 1;
    }
    state.perTest[t] = slot;
  }

  persistState();
  updateStats();
  buildQuestionGrid();
}

function retryCurrent() {
  const q = filtered[currentIndex];
  if (!state.attempts[q.id]) return;
  const prev = state.attempts[q.id];

  state.stats.attempted -= 1;
  state.stats.totalAttempts -= prev.count || 0;
  if (prev.status === 'correct') state.stats.correct -= 1; else state.stats.incorrect -= 1;

  const t = q.testNumber;
  if (t && state.perTest[t]) {
    if (prev.status === 'correct') state.perTest[t].correct -= 1; else state.perTest[t].incorrect -= 1;
  }

  delete state.attempts[q.id];
  state.stats.streak = 0;
  persistState();
  buildQuestionGrid();
  render();
}

function decorateOptions(q, chosen) {
  const chosenSet = new Set(chosen);
  const correctSet = new Set(q.answers);
  els.options.querySelectorAll('.option').forEach((el) => {
    const id = Number(el.dataset.id);
    const isCorrect = correctSet.has(id);
    const picked = chosenSet.has(id);
    el.classList.remove('correct', 'incorrect');
    if (picked && isCorrect) el.classList.add('correct');
    else if (picked && !isCorrect) el.classList.add('incorrect');
  });
}

function clearDecorations() {
  els.options.querySelectorAll('.option').forEach((el) => el.classList.remove('correct', 'incorrect'));
}

function showFeedback(q, correct) {
  els.feedback.textContent = correct ? 'Correct!' : 'Not quite—try again or check explanation.';
  els.feedback.className = `feedback ${correct ? 'ok' : 'no'}`;
  if (q.explanation || q.reference) {
    const link = q.reference ? `<a href="${q.reference}" target="_blank" rel=\"noreferrer\">Reference</a>` : '';
    const parsedExplanation = q.explanation ? marked.parse(q.explanation) : '';
    els.explanation.innerHTML = `${parsedExplanation} ${link}`;
  } else {
    els.explanation.textContent = '';
  }
}

function isCorrect(expected, chosen) {
  const a = new Set(expected);
  const b = new Set(chosen);
  if (a.size !== b.size) return false;
  for (const x of a) if (!b.has(x)) return false;
  return true;
}

function updateProgress() {
  const total = filtered.length;
  const idx = total ? currentIndex + 1 : 0;
  els.progressLabel.textContent = `${idx} / ${total}`;
  const pct = total ? Math.max(1, Math.round((idx / total) * 100)) : 0;
  els.progressBar.style.width = `${pct}%`;
}

function updateStats() {
  els.statAttempted.textContent = state.stats.attempted;
  els.statCorrect.textContent = state.stats.correct;
  els.statIncorrect.textContent = state.stats.incorrect;
  els.statStreak.textContent = state.stats.streak;
  els.statTotalAttempts.textContent = state.stats.totalAttempts || 0;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return freshState();
    const parsed = JSON.parse(raw);
    return {
      attempts: parsed.attempts || {},
      stats: parsed.stats || { attempted: 0, correct: 0, incorrect: 0, streak: 0, totalAttempts: 0 },
      perTest: parsed.perTest || {},
    };
  } catch (e) {
    console.warn('Resetting progress due to parse error', e);
    return freshState();
  }
}

function freshState() {
  return { attempts: {}, stats: { attempted: 0, correct: 0, incorrect: 0, streak: 0, totalAttempts: 0 }, perTest: {} };
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function resetProgress() {
  if (!confirm('Reset all saved progress?')) return;
  state = freshState();
  persistState();
  applyFilter();
}

function exportMistakesCSV() {
  const mistakes = questions.filter((q) => {
    const attempt = state.attempts[q.id];
    return attempt && attempt.status === 'incorrect';
  });

  if (mistakes.length === 0) {
    alert('No incorrect answers to export.');
    return;
  }

  const headers = [
    'number',
    'question',
    'option_1',
    'option_2',
    'option_3',
    'option_4',
    'option_5',
    'option_6',
    'correct_answers',
    'explanation',
    'reference_url',
    'source_file',
    'test_number',
  ];

  const rows = mistakes.map((q) => {
    const opts = ['', '', '', '', '', ''];
    q.options.forEach((opt) => {
      opts[opt.id - 1] = opt.value;
    });

    return [
      q.number,
      escapeCSV(q.question),
      escapeCSV(opts[0]),
      escapeCSV(opts[1]),
      escapeCSV(opts[2]),
      escapeCSV(opts[3]),
      escapeCSV(opts[4]),
      escapeCSV(opts[5]),
      q.answers.join(', '),
      escapeCSV(q.explanation),
      q.reference,
      q.source,
      q.testNumber ?? '',
    ];
  });

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `snowflake-mistakes-${new Date().toISOString().split('T')[0]}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function escapeCSV(str) {
  if (!str) return '';
  const s = String(str);
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}
