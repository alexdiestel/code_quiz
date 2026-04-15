// ── Glossary (terms that appear as <strong> in explanations) ─────────────────
const GLOSSARY = {
  'negative indexing':
    'Counting positions from the end of a sequence using negative numbers. ' +
    '-1 is the last item, -2 is second-to-last, and so on.',

  'slice':
    'Extracting a portion of a sequence using [start:stop:step]. ' +
    'Returns a new object and leaves the original unchanged.',

  'floor division':
    'Division that discards the remainder and returns only the whole-number part. ' +
    '7 // 2 gives 3, not 3.5. Always rounds toward negative infinity.',

  'repetition':
    'Using * with a string or list to repeat it a given number of times. ' +
    '"ab" * 3 gives "ababab"; [0] * 4 gives [0, 0, 0, 0].',

  'mutable objects':
    'Objects whose contents can be changed after creation. ' +
    'Lists, dicts, and sets are mutable — assigning them copies a reference to the same object, not the data.',

  'mutable':
    'Can be changed after creation. Lists, dicts, and sets are mutable. ' +
    'Strings, integers, and tuples are not (they are immutable).',

  'immutable':
    'Cannot be changed after creation. Strings, integers, tuples, and floats are immutable — ' +
    'any apparent "change" creates an entirely new object.',

  'shallow copy':
    'A new container whose elements still point to the same objects as the original. ' +
    'Safe for flat lists of simple values, but nested mutable objects remain shared.',

  'IEEE 754 floating-point precision':
    'The international standard for storing decimal numbers in binary. ' +
    'Some values like 0.1 cannot be represented exactly, causing tiny rounding errors (e.g. 0.1 + 0.2 ≠ 0.3).',

  'iterable':
    'Any object that can be looped over with a for loop — ' +
    'strings, lists, tuples, dicts, sets, ranges, and more all qualify.',

  'concatenation':
    'Joining two sequences end-to-end to produce a new, longer one. ' +
    'Works on strings and lists with the + operator. Does not add or sum values.',

  'mutable default arguments':
    'A Python trap: default argument values are created once when the function is defined, not on each call. ' +
    'A mutable default like [] is therefore shared across every call that uses the default.',

  'reference':
    'A variable holds a reference — a pointer to an object in memory — not the object itself. ' +
    'Assigning a variable copies the pointer, so two variables can end up pointing at the same object.',

  'in-place':
    'Modifying an object directly in memory rather than building and returning a new one. ' +
    'In-place methods (e.g. list.sort()) return None because no new object is produced.',

  'f-strings':
    'Formatted string literals (f"..."). Expressions inside {} are evaluated at runtime. ' +
    'Introduced in Python 3.6 and now the preferred way to embed values in strings.',

  'modulo':
    'The % operator returns the remainder after division. 10 % 3 = 1. ' +
    'Useful for testing divisibility (n % 2 == 0 means n is even) and cycling through ranges.',

  'exponentiation':
    'The ** operator raises a number to a power. 2 ** 10 = 1024. ' +
    'Python integers are arbitrary precision, so very large exponents work without overflow.',

  'chained comparisons':
    'Writing a < b < c instead of (a < b) and (b < c). ' +
    'Python evaluates these as the mathematical notation suggests, testing each link in sequence.',

  'banker\'s rounding':
    'Python\'s round() uses "round half to even" — ties go to the nearest even number. ' +
    'round(2.5) = 2, round(3.5) = 4. This reduces cumulative bias in statistical calculations.',

  'generator expression':
    'A lazy iterator created with () instead of []. Values are computed one at a time, only when needed. ' +
    'Uses almost no memory regardless of size, but can only be iterated once.',

  'stable':
    'A sort is stable if items that compare equal keep their original relative order. ' +
    'Python\'s sort is always stable, which makes multi-key sorting predictable.',

  'identity':
    'Whether two variables point to the exact same object in memory (tested with "is"). ' +
    'Distinct from equality (==), which only compares values.',

  'rebinds':
    'Changing which object a variable points to, without touching the original object. ' +
    'x = [4, 5] rebinds x to a new list; x.append(4) mutates the existing one.',

  'non-empty string':
    'A string with at least one character. Any non-empty string is truthy in Python — ' +
    'even " " (a space) or "False". Only "" (empty string) is falsy.',
};

// ── Tooltip ───────────────────────────────────────────────────────────────────
const tooltipEl = document.createElement('div');
tooltipEl.className = 'tooltip-popup';
document.body.appendChild(tooltipEl);

function positionTooltip(anchorEl) {
  const rect   = anchorEl.getBoundingClientRect();
  const margin = 8;
  const tipW   = tooltipEl.offsetWidth;
  const tipH   = tooltipEl.offsetHeight;

  // Default: above the term, horizontally centred
  let x = rect.left + (rect.width - tipW) / 2;
  let y = rect.top  - tipH - margin;

  // Flip below if it would go off the top of the viewport
  if (y < margin) y = rect.bottom + margin;

  // Clamp horizontally within the viewport
  x = Math.max(margin, Math.min(x, window.innerWidth - tipW - margin));

  tooltipEl.style.left = x + 'px';
  tooltipEl.style.top  = y + 'px';
}

document.addEventListener('mouseenter', e => {
  const term = e.target.closest('.tooltip-term');
  if (!term) return;
  tooltipEl.textContent = term.dataset.tip;
  tooltipEl.classList.add('visible');
  positionTooltip(term);
}, true);

document.addEventListener('mouseleave', e => {
  if (e.target.closest('.tooltip-term')) tooltipEl.classList.remove('visible');
}, true);

// Re-position if the page scrolls while hovering (rare but clean)
window.addEventListener('scroll', () => {
  const hovered = document.querySelector('.tooltip-term:hover');
  if (hovered) positionTooltip(hovered);
}, { passive: true });

// ── Explanation enrichment ────────────────────────────────────────────────────
// Replaces <strong> tags whose text exactly matches a glossary key with
// a hoverable <span class="tooltip-term"> that carries the definition.
function enrichExplanation(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  div.querySelectorAll('strong').forEach(el => {
    const text = el.textContent.trim();
    const key  = Object.keys(GLOSSARY).find(k => k.toLowerCase() === text.toLowerCase());
    if (!key) return;
    const span = document.createElement('span');
    span.className    = 'tooltip-term';
    span.dataset.tip  = GLOSSARY[key];
    span.innerHTML    = el.innerHTML;
    el.replaceWith(span);
  });
  return div.innerHTML;
}

// ── State ─────────────────────────────────────────────────────────────────────
let deck           = [];
let current        = 0;
let correctCount   = 0;
let score          = 0;
let answered       = false;
let results        = []; // 'correct' | 'wrong' | null per deck slot

const DIFF_POINTS  = { easy: 100, medium: 250, hard: 500, boss: 1000 };

// ── DOM refs ──────────────────────────────────────────────────────────────────
const landingView    = document.getElementById('landing-view');
const heroLogo       = document.getElementById('hero-logo');
const heroSub        = document.getElementById('hero-sub');
const langButtons    = document.getElementById('lang-buttons');
const pythonBtn      = document.getElementById('python-btn');
const siteHeader     = document.getElementById('site-header');
const quizView       = document.getElementById('quiz-view');
const diffBadge      = document.getElementById('difficulty-badge');
const categoryTag    = document.getElementById('category-tag');
const questionText   = document.getElementById('question-text');
const codeDisplay    = document.getElementById('code-display');
const choicesEl      = document.getElementById('choices-container');
const questionCard   = document.getElementById('question-card');
const feedbackCard   = document.getElementById('feedback-card');
const statusIcon     = document.getElementById('status-icon');
const statusText     = document.getElementById('status-text');
const correctAnswerEl= document.getElementById('correct-answer-display');
const explanationEl  = document.getElementById('feedback-explanation');
const nextBtn        = document.getElementById('next-btn');
const endView        = document.getElementById('end-view');
const endSubtitle    = document.getElementById('end-subtitle');
const endGrade       = document.getElementById('end-grade');
const restartBtn     = document.getElementById('restart-btn');
const scoreDisplay   = document.getElementById('score-display');
const scorePts       = document.getElementById('score-pts');
const endScore       = document.getElementById('end-score');
const siteFooter     = document.querySelector('.site-footer');
const landingLegal   = document.querySelector('.landing-legal');

// ── Helpers ───────────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function gradeLabel(score, total) {
  const pct = score / total;
  if (pct === 1)  return { text: 'Perfect Score!',  cls: 'grade-perfect' };
  if (pct >= 0.8) return { text: 'Expert',           cls: 'grade-expert'  };
  if (pct >= 0.6) return { text: 'Getting There',    cls: 'grade-mid'     };
  return               { text: 'Keep Practising',  cls: 'grade-low'     };
}

function alignSidebar() {
  const sidebar = document.querySelector('.quiz-sidebar');
  if (!sidebar) return;
  const top = document.getElementById('question-card').getBoundingClientRect().top;
  sidebar.style.top = top + 'px';
}

// ── Star map ──────────────────────────────────────────────────────────────────
// Fixed dot positions for a 10-question deck (viewBox 0 0 640 56).
// Slight X and Y variation gives a "flight path between locations" feel.
const STARMAP_X = [20,  92, 147, 224, 282, 359, 416, 492, 547, 620];
const STARMAP_Y = [30,  20,  35,  17,  32,  20,  39,  22,  33,  25];

// Font Awesome Free v7.2.0 — fa-skull (regular) · CC BY 4.0 · fontawesome.com/license/free
// viewBox 0 0 640 640 — centered at 320,320
const SKULL_PATH = 'M480 491.4C538.5 447.4 576 379.8 576 304C576 171.5 461.4 64 320 64C178.6 64 64 171.5 64 304C64 379.8 101.5 447.4 160 491.4L160 528C160 554.5 181.5 576 208 576L240 576L240 536C240 522.7 250.7 512 264 512C277.3 512 288 522.7 288 536L288 576L352 576L352 536C352 522.7 362.7 512 376 512C389.3 512 400 522.7 400 536L400 576L432 576C458.5 576 480 554.5 480 528L480 491.4zM160 320C160 284.7 188.7 256 224 256C259.3 256 288 284.7 288 320C288 355.3 259.3 384 224 384C188.7 384 160 355.3 160 320zM416 256C451.3 256 480 284.7 480 320C480 355.3 451.3 384 416 384C380.7 384 352 355.3 352 320C352 284.7 380.7 256 416 256z';

function diffColor(diff) {
  return { easy: '#22c55e', medium: '#f59e0b', hard: '#f43f5e', boss: '#a78bfa' }[diff] || '#94a3b8';
}

// ── Star field — small pixels drifting right→left behind the map ─────────────
// Each entry: [cy, r, dur(s), begin-offset(s), peak-opacity]
// begin offsets calculated so stars are spread across x=30–620 at t=0:
// x_at_t0 = 640 − (|begin|/dur)×660  →  begin = −(640−x)÷660×dur
const STARFIELD = [
  [  5, 0.7, 13.0, -12.0, 0.45],  // x≈30
  [ 13, 0.5, 12.3, -10.1, 0.30],  // x≈100
  [ 17, 0.9, 12.2,  -8.7, 0.40],  // x≈170
  [ 20, 1.0, 14.2,  -8.6, 0.50],  // x≈240
  [ 23, 1.0, 13.9,  -6.9, 0.45],  // x≈310
  [ 28, 0.6, 15.4,  -6.1, 0.35],  // x≈380
  [ 30, 0.7, 15.2,  -4.4, 0.35],  // x≈450
  [ 32, 1.1, 13.3,  -2.4, 0.50],  // x≈520
  [ 35, 0.8, 12.6,  -1.1, 0.40],  // x≈580
  [ 39, 0.6, 13.9, -12.4, 0.35],  // x≈50
  [ 43, 0.5, 13.1,  -8.7, 0.30],  // x≈200
  [ 50, 1.2, 13.5,  -4.5, 0.45],  // x≈420
  [ 52, 0.9, 14.3,  -0.4, 0.40],  // x≈620
];

function starFieldHTML() {
  return STARFIELD.map(([cy, r, dur, begin, op]) => `
    <circle cx="640" cy="${cy}" r="${r}" fill="#c8d8f0">
      <animateTransform attributeName="transform" type="translate"
        from="0,0" to="-660,0" dur="${dur}s" begin="${begin}s" repeatCount="indefinite"/>
      <animate attributeName="opacity"
        values="0;${op};${op};0" keyTimes="0;0.12;0.88;1"
        dur="${dur}s" begin="${begin}s" repeatCount="indefinite"/>
    </circle>`).join('');
}

// Returns line endpoints offset by r px from each dot center along the segment angle.
function segmentPts(i, j, r) {
  const a  = Math.atan2(STARMAP_Y[j] - STARMAP_Y[i], STARMAP_X[j] - STARMAP_X[i]);
  const ca = Math.cos(a), sa = Math.sin(a);
  return {
    x1: +(STARMAP_X[i] + r * ca).toFixed(1), y1: +(STARMAP_Y[i] + r * sa).toFixed(1),
    x2: +(STARMAP_X[j] - r * ca).toFixed(1), y2: +(STARMAP_Y[j] - r * sa).toFixed(1),
  };
}

function renderStarmap() {
  const svg = document.getElementById('starmap-svg');
  if (!svg) return;
  const n    = deck.length;
  const done = current; // 0..done-1 completed, done is current
  const R    = 7;       // px gap between line endpoint and dot edge

  let html = `
    <defs>
      <filter id="dot-glow" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="dot-glow-strong" x="-120%" y="-120%" width="340%" height="340%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/><feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  `;

  // Stars drifting right → left
  html += starFieldHTML();

  // Background path — individual dashed segments, offset from dot centers
  for (let i = 0; i < n - 1; i++) {
    const { x1, y1, x2, y2 } = segmentPts(i, i + 1, R);
    html += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
      stroke="#1c2535" stroke-width="1.5" stroke-dasharray="3 5" stroke-linecap="round"/>`;
  }

  // Traveled segments — newest draws in with stroke-dashoffset animation
  for (let i = 0; i < done; i++) {
    const col            = diffColor(deck[i].difficulty);
    const { x1, y1, x2, y2 } = segmentPts(i, i + 1, R);
    const isNew          = (i === done - 1);
    if (isNew) {
      const len = Math.round(Math.hypot(x2 - x1, y2 - y1));
      html += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
        stroke="${col}" stroke-width="1.5" stroke-linecap="round" opacity="0.55"
        stroke-dasharray="${len}" stroke-dashoffset="${len}">
        <animate attributeName="stroke-dashoffset" from="${len}" to="0" dur="1s"
          calcMode="spline" keyTimes="0;1" keySplines="0.4 0 0.2 1" fill="freeze"/>
      </line>`;
    } else {
      html += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
        stroke="${col}" stroke-width="1.5" stroke-linecap="round" opacity="0.55"/>`;
    }
  }

  // Dots
  for (let i = 0; i < n; i++) {
    const x      = STARMAP_X[i], y = STARMAP_Y[i];
    const col    = diffColor(deck[i].difficulty);
    const isBoss = deck[i].difficulty === 'boss';

    if (i === done) {
      // Current — outer ring + glowing filled dot
      if (!isBoss) {
        html += `
          <circle cx="${x}" cy="${y}" r="9" fill="none"
            stroke="${col}" stroke-width="1" opacity="0.55"/>
          <circle cx="${x}" cy="${y}" r="5" fill="${col}" filter="url(#dot-glow)"/>
        `;
      }
    } else if (i < done) {
      // Completed — correct: strong glow filled; wrong: hollow ring
      if (!isBoss) {
        if (results[i] === 'correct') {
          html += `<circle cx="${x}" cy="${y}" r="4.5" fill="${col}"
            filter="url(#dot-glow-strong)" opacity="0.9"/>`;
        } else {
          html += `<circle cx="${x}" cy="${y}" r="4" fill="none"
            stroke="${col}" stroke-width="1.2" opacity="0.65"/>`;
        }
      }
    } else {
      // Future — hollow ring
      if (!isBoss) {
        html += `<circle cx="${x}" cy="${y}" r="4" fill="none"
          stroke="${col}" stroke-width="1.2" opacity="0.5"/>`;
      }
    }

    // Boss: FA skull path, no circle — scaled from 640×640 viewBox
    if (isBoss) {
      let scale, op, extra;
      if (i === done) {
        scale = 0.036; op = 1;
        extra = `filter="url(#dot-glow)"`;
        // outer ring to match current-dot indicator on normal dots
        html += `<circle cx="${x}" cy="${y}" r="13" fill="none"
          stroke="${col}" stroke-width="1" opacity="0.55"/>`;
      } else if (i < done) {
        scale = 0.028; op = results[i] === 'correct' ? 0.85 : 0.6;
        extra = results[i] === 'correct' ? 'filter="url(#dot-glow-strong)"' : '';
      } else {
        scale = 0.028; op = 0.5; extra = '';
      }
      html += `<g transform="translate(${x},${y}) scale(${scale}) translate(-320,-320)"
        fill="${col}" opacity="${op}" ${extra} pointer-events="none">
        <path d="${SKULL_PATH}"/>
      </g>`;
    }
  }

  svg.innerHTML = html;
}

// ── Quiz flow ─────────────────────────────────────────────────────────────────
function selectDeck() {
  const pick = (diff, n) => {
    const pool = QUESTIONS.filter(q => q.difficulty === diff);
    return shuffle(pool).slice(0, Math.min(n, pool.length));
  };
  return [
    ...pick('easy',   3),
    ...pick('medium', 3),
    ...pick('hard',   3),
    ...pick('boss',   1),
  ];
}

function startQuiz(animate) {
  deck         = selectDeck();
  current      = 0;
  correctCount = 0;
  score        = 0;
  answered     = false;
  results      = new Array(deck.length).fill(null);
  scorePts.textContent = '0';
  scoreDisplay.classList.remove('hidden');

  endView.classList.add('hidden');
  questionCard.classList.remove('hidden');
  quizView.classList.remove('hidden');

  if (animate) {
    const mainEl = document.querySelector('.main-content');
    if (mainEl) {
      mainEl.classList.remove('quiz-reveal');
      void mainEl.offsetWidth; // reflow to restart animation
      mainEl.classList.add('quiz-reveal');
    }
  }

  const sidebar = document.querySelector('.quiz-sidebar');
  if (sidebar) sidebar.classList.add('sidebar-visible');

  renderQuestion();
  requestAnimationFrame(alignSidebar);
}


function renderQuestion() {
  const q     = deck[current];
  answered    = false;
  const total = deck.length;

  renderStarmap();

  diffBadge.textContent = q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
  diffBadge.className   = `difficulty-badge ${q.difficulty}`;
  document.getElementById('question-points').textContent =
    `+${(DIFF_POINTS[q.difficulty] ?? 0).toLocaleString()} pts`;

  const cat = CATEGORIES[q.category];
  categoryTag.textContent       = cat ? cat.label : q.category;
  categoryTag.style.color       = cat ? cat.color : 'var(--text-dim)';
  categoryTag.style.borderColor = cat ? cat.color + '55' : 'var(--border)';
  categoryTag.style.background  = cat ? cat.color + '14' : 'transparent';

  questionText.textContent = q.question;

  codeDisplay.textContent = q.code;
  codeDisplay.removeAttribute('data-highlighted');
  hljs.highlightElement(codeDisplay);

  choicesEl.innerHTML = '';
  shuffle(q.choices).forEach(choice => {
    const btn = document.createElement('button');
    btn.className    = 'choice-btn';
    btn.innerHTML    = escapeHtml(choice).replace(/\n/g, '<br>');
    btn.dataset.value= choice;
    btn.addEventListener('click', () => handleChoice(btn, q));
    choicesEl.appendChild(btn);
  });

  feedbackCard.classList.add('hidden');
  feedbackCard.classList.remove('correct', 'incorrect');
}

function handleChoice(btn, q) {
  if (answered) return;
  answered = true;

  const correct = btn.dataset.value === q.choices[q.answer];
  if (correct) {
    correctCount++;
    score += DIFF_POINTS[q.difficulty] ?? 0;
    scorePts.textContent = score.toLocaleString();
  }
  results[current] = correct ? 'correct' : 'wrong';

  choicesEl.querySelectorAll('.choice-btn').forEach(b => {
    b.disabled = true;
    if (b.dataset.value === q.choices[q.answer]) b.classList.add('correct');
    else if (b === btn && !correct)   b.classList.add('incorrect');
  });

  feedbackCard.classList.remove('hidden', 'correct', 'incorrect');
  feedbackCard.classList.add(correct ? 'correct' : 'incorrect');
  statusIcon.textContent      = correct ? '✓' : '✗';
  statusText.textContent      = correct ? 'Correct!' : 'Not quite…';
  correctAnswerEl.textContent = q.choices[q.answer];
  explanationEl.innerHTML     = enrichExplanation(q.explanation);

  nextBtn.textContent = (current === deck.length - 1)
    ? 'See Results \u2192'
    : 'Next Question \u2192';

  setTimeout(() => feedbackCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 60);
}

function showEndScreen() {
  // Hide the question/feedback cards — quiz-view (and starmap) stay visible
  questionCard.classList.add('hidden');
  feedbackCard.classList.add('hidden');
  endView.classList.remove('hidden');

  const total = deck.length;
  endSubtitle.textContent = `${correctCount} of ${total} correct`;
  endScore.textContent = score.toLocaleString();
  const grade = gradeLabel(correctCount, total);
  endGrade.textContent = grade.text;
  endGrade.className   = `end-grade ${grade.cls}`;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Landing transition ────────────────────────────────────────────────────────
function selectLanguage(lang) {
  const EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';
  const DUR  = 680;

  // Hide footer and landing legal links for the duration of the transition
  if (siteFooter)    siteFooter.style.visibility    = 'hidden';
  if (landingLegal)  landingLegal.style.visibility  = 'hidden';

  // Step 1 — fade out subtitle and button
  heroSub.classList.add('fade-out');
  langButtons.classList.add('fade-out');

  setTimeout(() => {
    // Measure hero logo position
    const heroRect     = heroLogo.getBoundingClientRect();
    const heroFontSize = parseFloat(getComputedStyle(heroLogo).fontSize);

    // Temporarily force header visible (no transition) so we can measure it
    const prevStyle = siteHeader.getAttribute('style') || '';
    siteHeader.style.cssText = 'transition:none!important;transform:none!important;opacity:1!important;pointer-events:none;visibility:visible;';
    siteHeader.getBoundingClientRect(); // force reflow

    const titleEl       = siteHeader.querySelector('.logo-title');
    const titleRect     = titleEl.getBoundingClientRect();
    const titleFontSize = parseFloat(getComputedStyle(titleEl).fontSize);
    const headerH       = siteHeader.offsetHeight;

    // Restore header to hidden state for its own slide-in transition
    siteHeader.style.cssText = prevStyle;
    siteHeader.getBoundingClientRect(); // force reflow

    // Step 2 — create a fixed-position clone that animates from hero → header
    const clone = document.createElement('div');
    clone.id = 'logo-clone';
    clone.innerHTML = heroLogo.innerHTML;
    clone.style.cssText = [
      'position:fixed',
      `top:${heroRect.top}px`,
      `left:${heroRect.left}px`,
      `font-family:'JetBrains Mono',monospace`,
      `font-size:${heroFontSize}px`,
      'font-weight:600',
      'color:var(--text)',
      'letter-spacing:-0.03em',
      'line-height:1',
      'white-space:nowrap',
      'pointer-events:none',
      'z-index:500',
      'transform-origin:left top',
      `transition:transform ${DUR}ms ${EASE}`,
    ].join(';');
    document.body.appendChild(clone);

    // Hide real hero logo — clone takes its place visually
    heroLogo.style.visibility = 'hidden';

    // Compute where the clone needs to end up (header title position)
    const scale  = titleFontSize / heroFontSize;
    const deltaX = titleRect.left - heroRect.left;
    const deltaY = titleRect.top  - heroRect.top;

    // Step 3 — animate landing background height down to header height (curtain rise)
    landingView.style.height     = window.innerHeight + 'px';
    landingView.style.transition = `height ${DUR}ms ${EASE}`;
    landingView.getBoundingClientRect(); // flush
    landingView.style.height = headerH + 'px';

    // Trigger clone movement on next frame
    requestAnimationFrame(() => {
      clone.style.transform = `translate(${deltaX}px,${deltaY}px) scale(${scale})`;
    });

    // Step 4 — slide header in at ~40% of the animation
    setTimeout(() => siteHeader.classList.remove('header-hidden'), DUR * 0.4);

    // Step 5 — build quiz content at ~50% (fades in as curtain rises)
    setTimeout(() => startQuiz(true), DUR * 0.5);

    // Step 6 — crossfade clone + landing strip out to reveal real header underneath
    setTimeout(() => {
      const FADE = 180;
      clone.style.transition        = `opacity ${FADE}ms ease`;
      clone.style.opacity           = '0';
      landingView.style.transition  = `opacity ${FADE}ms ease`;
      landingView.style.opacity     = '0';
      setTimeout(() => {
        landingView.classList.add('hidden');
        landingView.style.cssText = '';
        const c = document.getElementById('logo-clone');
        if (c) c.remove();
        if (siteFooter)   siteFooter.style.visibility   = '';
        if (landingLegal) landingLegal.style.visibility = '';
      }, FADE + 20);
    }, DUR);

  }, 200); // brief pause so fade-out starts first
}

// ── Events ────────────────────────────────────────────────────────────────────
window.addEventListener('resize', alignSidebar, { passive: true });

pythonBtn.addEventListener('click', () => selectLanguage('python'));

document.querySelector('#site-header .logo').addEventListener('click', () => {
  if (siteHeader.classList.contains('header-hidden')) return;

  // Hide quiz view and reset inner state for next start
  quizView.classList.add('hidden');
  endView.classList.add('hidden');
  questionCard.classList.remove('hidden');
  scoreDisplay.classList.add('hidden');
  const sidebar = document.querySelector('.quiz-sidebar');
  if (sidebar) sidebar.classList.remove('sidebar-visible');

  // Reset landing to initial state
  heroLogo.style.visibility = '';
  heroSub.classList.remove('fade-out');
  langButtons.classList.remove('fade-out');
  if (landingLegal) landingLegal.style.visibility = '';
  landingView.style.cssText = '';
  landingView.classList.remove('hidden');

  // Slide header out
  siteHeader.classList.add('header-hidden');
});

nextBtn.addEventListener('click', () => {
  current++;
  if (current >= deck.length) {
    showEndScreen();
  } else {
    const card = document.getElementById('question-card');
    card.classList.add('slide-out');
    setTimeout(() => {
      card.classList.remove('slide-out');
      renderQuestion();
      card.classList.add('slide-in');
      setTimeout(() => card.classList.remove('slide-in'), 300);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 180);
  }
});

restartBtn.addEventListener('click', () => startQuiz(true));

// ── Boot ──────────────────────────────────────────────────────────────────────
// (start screen is already visible by default via HTML)
