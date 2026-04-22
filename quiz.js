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

  'f-string':
    'Formatted string literal (f"..."). Expressions inside {} are evaluated at runtime. ' +
    'Introduced in Python 3.6 and now the preferred way to embed values in strings.',

  'falsy':
    'A value Python treats as False in a boolean context. ' +
    'Falsy values: None, False, 0, 0.0, "", [], {}, set(). Everything else is truthy.',

  'closure':
    'A function that remembers variables from the enclosing scope where it was defined, ' +
    'even after that scope has finished executing. The captured variable is called a "free variable".',

  'late binding':
    'Python looks up variables captured in closures at call time, not at definition time. ' +
    'In a loop, all lambdas share the same variable reference and see its final value.',

  'list comprehension':
    'A concise syntax for building lists: [expr for var in iterable if condition]. ' +
    'Faster and more readable than an equivalent for-loop with append().',

  'dict comprehension':
    'A concise syntax for building dicts: {k: v for k, v in iterable}. ' +
    'Like a list comprehension but produces key–value pairs.',

  'generator':
    'A function that uses yield to produce values one at a time instead of all at once. ' +
    'Calling it returns a generator object; values are computed lazily on demand.',

  'hashable':
    'An object is hashable if it has a fixed hash value for its lifetime. ' +
    'Only hashable types can be dict keys or set members. Integers, strings, and tuples are hashable; lists are not.',

  'short-circuits':
    '"and" stops and returns the first falsy value; "or" stops and returns the first truthy value. ' +
    'The right-hand side is never evaluated if the result is already determined.',

  'vacuously true':
    'A statement about every member of an empty collection is considered true by convention, ' +
    'because there are no counterexamples. all([]) is True for this reason.',

  'view object':
    'dict.keys(), dict.values(), and dict.items() return live view objects, not copies. ' +
    'They reflect changes to the dictionary in real time.',

  'value equality':
    'Checking whether two objects have the same value, using ==. ' +
    'Distinct from identity (is), which checks whether they are the same object in memory.',

  'pass-by-value':
    'The caller\'s variable is unaffected because the function receives a copy of the value. ' +
    'Modifying the parameter inside the function leaves the original unchanged.',

  'true division':
    'Regular / division that always produces a float. ' +
    '7 / 2 = 3.5 in Python 3. Use // for floor (integer) division.',

  'C3 linearisation':
    'The algorithm Python uses to determine method resolution order (MRO) in multiple inheritance. ' +
    'It ensures each class appears before its parents and left-to-right order is respected.',
};

// ── Tooltip ───────────────────────────────────────────────────────────────────
const tooltipEl = document.createElement('div');
tooltipEl.className = 'tooltip-popup';
document.body.appendChild(tooltipEl);

// ── Hit flash overlay ─────────────────────────────────────────────────────────
const hitFlashEl = document.createElement('div');
hitFlashEl.className = 'hit-flash-overlay';
document.body.appendChild(hitFlashEl);

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
  if (!(e.target instanceof Element)) return;
  const term = e.target.closest('.tooltip-term');
  if (!term) return;
  tooltipEl.textContent = term.dataset.tip;
  tooltipEl.classList.add('visible');
  positionTooltip(term);
}, true);

document.addEventListener('mouseleave', e => {
  if (!(e.target instanceof Element)) return;
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

// ── Analytics ─────────────────────────────────────────────────────────────────
// Fire-and-forget: never blocks the quiz, silently drops on error.
function track(payload) {
  try {
    const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
    navigator.sendBeacon('/api/event', blob);
  } catch { /* non-critical */ }
}

// ── State ─────────────────────────────────────────────────────────────────────
let currentLangConfig = null; // set by selectLanguage(); drives questions/categories/theme

let deck           = [];
let current        = 0;
let correctCount   = 0;
let score          = 0;
let lives          = 3;
let answered       = false;
let results        = []; // 'correct' | 'wrong' | null per deck slot
let seenIds        = new Set();
let standaloneMode     = false; // true when loaded via ?qid=
let disabledCategories = new Set(); // "lang:category" keys
let streak         = 0;
let longestStreak  = 0;

const MAX_LIVES = 3;

const SHIELD_SVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>`;

const SHARE_ICONS = {
  x:        `<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  reddit:   `<svg viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,
  email:    `<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  copy:     `<svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>`,
};

const DIFF_POINTS  = { easy: 100, medium: 250, hard: 500, boss: 1000 };

function getMultiplier() {
  return Math.min(1 + streak * 0.5, 3);
}

function updateMultiplierBadge() {
  const el = document.getElementById('streak-mult');
  if (!el) return;
  const mult = getMultiplier();
  el.textContent   = `×${mult % 1 === 0 ? mult : mult.toFixed(1)}`;
  el.dataset.level = mult % 1 === 0 ? String(mult) : mult.toFixed(1);
  el.classList.remove('hidden');
}

// ── DOM refs ──────────────────────────────────────────────────────────────────
const landingView    = document.getElementById('landing-view');
const heroLogo       = document.getElementById('hero-logo');
const heroSub        = document.getElementById('hero-sub');
const heroFlavor     = document.getElementById('hero-flavor');
const langButtons    = document.getElementById('lang-buttons');
const codeFilename   = document.getElementById('code-filename');
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
const nextBtn             = document.getElementById('next-btn');
const shareQuestionBtn    = document.getElementById('share-question-btn');
const shareQuestionLabel  = document.getElementById('share-question-label');
const endView        = document.getElementById('end-view');
const endSubtitle    = document.getElementById('end-subtitle');
const endGrade       = document.getElementById('end-grade');
const restartBtn     = document.getElementById('restart-btn');
const scoreDisplay   = document.getElementById('score-display');
const scorePts       = document.getElementById('score-pts');
const endScore       = document.getElementById('end-score');
const livesDisplay   = document.getElementById('lives-display');
const endTrophy      = document.getElementById('end-trophy');
const endTitle       = document.getElementById('end-title');
const siteFooter     = document.querySelector('.site-footer');
const landingLegal   = document.querySelector('.landing-legal');

// ── Helpers ───────────────────────────────────────────────────────────────────
function renderLives() {
  livesDisplay.innerHTML = Array.from({ length: MAX_LIVES }, (_, i) =>
    `<span class="shield ${i < lives ? 'shield-full' : 'shield-empty'}">${SHIELD_SVG}</span>`
  ).join('');
}

function animateScore(from, to) {
  const duration = Math.min(300 + (to - from) * 0.3, 900);
  const start    = performance.now();
  function step(now) {
    const t       = Math.min((now - start) / duration, 1);
    const eased   = 1 - Math.pow(1 - t, 3); // ease-out cubic
    const current = Math.round(from + (to - from) * eased);
    scorePts.textContent = current.toLocaleString();
    if (t < 1) requestAnimationFrame(step);
  }
  scorePts.classList.remove('score-pop');
  void scorePts.offsetWidth;
  scorePts.classList.add('score-pop');
  requestAnimationFrame(step);
}

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

function starFieldHTML(mult = 1) {
  // 5 levels: ×1, ×1.5, ×2, ×2.5, ×3
  const idx      = Math.round((mult - 1) / 0.5);
  const speedF   = [1, 0.78, 0.56, 0.38, 0.25][idx]; // lower = faster
  const stretchX = [1, 2,    4,    6,    9   ][idx];  // horizontal stretch
  return STARFIELD.map(([cy, r, dur, begin, op]) => {
    const d  = (dur   * speedF).toFixed(2);
    const b  = (begin * speedF).toFixed(2);
    const rx = (r * stretchX).toFixed(1);
    if (stretchX > 1) {
      return `
    <ellipse cx="640" cy="${cy}" rx="${rx}" ry="${r}" fill="#c8d8f0">
      <animateTransform attributeName="transform" type="translate"
        from="0,0" to="-660,0" dur="${d}s" begin="${b}s" repeatCount="indefinite"/>
      <animate attributeName="opacity"
        values="0;${op};${op};0" keyTimes="0;0.08;0.92;1"
        dur="${d}s" begin="${b}s" repeatCount="indefinite"/>
    </ellipse>`;
    }
    return `
    <circle cx="640" cy="${cy}" r="${r}" fill="#c8d8f0">
      <animateTransform attributeName="transform" type="translate"
        from="0,0" to="-660,0" dur="${d}s" begin="${b}s" repeatCount="indefinite"/>
      <animate attributeName="opacity"
        values="0;${op};${op};0" keyTimes="0;0.12;0.88;1"
        dur="${d}s" begin="${b}s" repeatCount="indefinite"/>
    </circle>`;
  }).join('');
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
  html += starFieldHTML(getMultiplier());

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
  const questions = currentLangConfig.questions.filter(q =>
    q.difficulty === 'boss' ||
    !disabledCategories.has(`${currentLangConfig.slug}:${q.category}`)
  );
  const pick = (diff, n) => {
    const pool   = questions.filter(q => q.difficulty === diff);
    let unseen   = pool.filter(q => !seenIds.has(q.id));
    // If this tier is exhausted, reset only that tier's seen entries
    if (unseen.length < n) {
      pool.forEach(q => seenIds.delete(q.id));
      unseen = pool;
    }
    return shuffle(unseen).slice(0, Math.min(n, unseen.length));
  };
  const chosen = [
    ...pick('easy',   3),
    ...pick('medium', 3),
    ...pick('hard',   3),
    ...pick('boss',   1),
  ];
  chosen.forEach(q => seenIds.add(q.id));
  return chosen;
}

function startQuiz(animate, keepScore = false) {
  deck          = selectDeck();
  current       = 0;
  correctCount  = 0;
  answered      = false;
  results       = new Array(deck.length).fill(null);
  streak        = 0;
  longestStreak = 0;
  updateMultiplierBadge();
  if (!keepScore) {
    lives = MAX_LIVES;
    score = 0;
    scorePts.textContent = '0';
  }
  renderLives();
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

  track({ event_type: 'quiz_start', lang: currentLangConfig.slug });

  renderQuestion();
  requestAnimationFrame(alignSidebar);
}


function renderQuestion() {
  const q  = deck[current];
  answered = false;

  renderStarmap();

  diffBadge.textContent = q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
  diffBadge.className   = `difficulty-badge ${q.difficulty}`;
  document.getElementById('question-points').textContent =
    `+${(DIFF_POINTS[q.difficulty] ?? 0).toLocaleString()} pts`;
  document.getElementById('question-id').textContent = `qid: ${q.id}`;

  const cat = currentLangConfig.categories[q.category];
  categoryTag.textContent       = cat ? cat.label : q.category;
  categoryTag.style.color       = cat ? cat.color : 'var(--text-dim)';
  categoryTag.style.borderColor = cat ? cat.color + '55' : 'var(--border)';
  categoryTag.style.background  = cat ? cat.color + '14' : 'transparent';

  questionText.textContent = q.question;

  codeDisplay.className   = currentLangConfig.hlClass;
  codeDisplay.textContent = q.code;
  codeDisplay.removeAttribute('data-highlighted');
  hljs.highlightElement(codeDisplay);

  choicesEl.innerHTML = '';
  shuffle(q.choices).forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.className    = 'choice-btn';
    btn.innerHTML    = `<span class="choice-key">${i + 1}</span><span class="choice-text">${escapeHtml(choice).replace(/\n/g, '<br>')}</span>`;
    btn.dataset.value= choice;
    btn.addEventListener('click', () => handleChoice(btn, q));
    choicesEl.appendChild(btn);
  });

  feedbackCard.classList.add('hidden');
  feedbackCard.classList.remove('correct', 'incorrect');
  updateMultiplierBadge();
}

function handleChoice(btn, q) {
  if (answered) return;
  answered = true;

  const correct = btn.dataset.value === q.choices[q.answer];
  if (correct) {
    correctCount++;
    const mult = getMultiplier(); // capture before streak update
    streak++;
    if (streak > longestStreak) longestStreak = streak;
    const prev = score;
    score += (DIFF_POINTS[q.difficulty] ?? 0) * mult;
    animateScore(prev, score);
  } else {
    streak = 0;
  }
  results[current] = correct ? 'correct' : 'wrong';

  if (!correct) {
    lives = Math.max(0, lives - 1);
    renderLives();
    // Hit indicator: red flash + card shake
    hitFlashEl.classList.remove('active');
    void hitFlashEl.offsetWidth;
    hitFlashEl.classList.add('active');
    const mainEl = document.querySelector('.main-content');
    if (mainEl) {
      mainEl.classList.remove('shake');
      void mainEl.offsetWidth;
      mainEl.classList.add('shake');
    }
  }

  track({
    event_type:  'question_answered',
    lang:        currentLangConfig.slug,
    category:    q.category,
    question_id: q.id,
    difficulty:  q.difficulty,
    correct,
  });

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

  if (standaloneMode) {
    nextBtn.textContent = 'Start Quest \u2192';
  } else if (lives === 0) {
    nextBtn.textContent = 'See Results \u2192';
  } else {
    nextBtn.textContent = (current === deck.length - 1)
      ? 'See Results \u2192'
      : 'Next Question \u2192';
  }

  setTimeout(() => feedbackCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 60);
}

function showEndScreen(gameOver = false) {
  // Hide the question/feedback cards — quiz-view (and starmap) stay visible
  questionCard.classList.add('hidden');
  feedbackCard.classList.add('hidden');
  endView.classList.remove('hidden');

  const total = deck.length;

  if (gameOver) {
    endTrophy.textContent   = '[ GAME OVER ]';
    endTitle.textContent    = 'Shields Depleted';
    endSubtitle.textContent = `${correctCount} of ${current + 1} correct`;
    restartBtn.textContent  = 'Try Again \u2192';
  } else {
    endTrophy.textContent   = '[ COMPLETE ]';
    endTitle.textContent    = 'Quest Complete!';
    endSubtitle.textContent = `${correctCount} of ${total} correct`;
    restartBtn.textContent  = 'Continue Quest \u2192';
  }

  endScore.textContent = score.toLocaleString();
  const endStreakEl = document.getElementById('end-streak');
  if (endStreakEl) {
    endStreakEl.textContent = longestStreak > 0 ? `longest streak: ${longestStreak}` : '';
    endStreakEl.className   = `end-streak${longestStreak >= 6 ? ' end-streak-hot' : ''}`;
  }
  const grade = gradeLabel(correctCount, gameOver ? current + 1 : total);
  endGrade.textContent = grade.text;
  endGrade.className   = `end-grade ${grade.cls}`;

  track({
    event_type: 'quiz_complete',
    lang:       currentLangConfig.slug,
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Theme application ─────────────────────────────────────────────────────────
function applyTheme(theme) {
  const root = document.documentElement;
  root.style.setProperty('--bg',           theme.bg);
  root.style.setProperty('--primary',      theme.primary);
  root.style.setProperty('--primary-lt',   theme.primaryLt);
  root.style.setProperty('--primary-dark', theme.primaryDark);
  root.style.setProperty('--accent',       theme.accent);
  root.style.setProperty('--glow-rgb',     theme.glowRgb);
}

// ── Landing transition ────────────────────────────────────────────────────────
function selectLanguage(lang) {
  currentLangConfig = LANGUAGES[lang];
  applyTheme(currentLangConfig.theme);
  seenIds.clear();

  // Update header subtitle and code-window filename
  const logoSub = document.getElementById('logo-sub');
  if (logoSub) logoSub.textContent = currentLangConfig.label;
  if (codeFilename) codeFilename.textContent = currentLangConfig.filename;
  const EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';
  const DUR  = 680;

  // Hide footer and landing legal links for the duration of the transition
  if (siteFooter)    siteFooter.style.visibility    = 'hidden';
  if (landingLegal)  landingLegal.style.visibility  = 'hidden';

  // Step 1 — fade out subtitle, flavor, and buttons
  heroSub.classList.add('fade-out');
  heroFlavor.classList.add('fade-out');
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

// Wire up all language buttons via data-lang attribute
document.querySelectorAll('.lang-btn[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => selectLanguage(btn.dataset.lang));
});

document.querySelector('#site-header .logo').addEventListener('click', () => {
  if (siteHeader.classList.contains('header-hidden')) return;

  // Hide quiz view and reset inner state for next start
  quizView.classList.add('hidden');
  endView.classList.add('hidden');
  questionCard.classList.remove('hidden');
  scoreDisplay.classList.add('hidden');
  seenIds.clear();
  const sidebar = document.querySelector('.quiz-sidebar');
  if (sidebar) sidebar.classList.remove('sidebar-visible');

  // Reset landing to initial state
  heroLogo.style.visibility = '';
  heroSub.classList.remove('fade-out');
  heroFlavor.classList.remove('fade-out');
  langButtons.classList.remove('fade-out');
  if (landingLegal) landingLegal.style.visibility = '';
  landingView.style.cssText = '';
  landingView.classList.remove('hidden');

  // Reset background to neutral default
  document.documentElement.style.setProperty('--bg', '#0a0e1a');

  // Slide header out
  siteHeader.classList.add('header-hidden');
});

nextBtn.addEventListener('click', () => {
  if (standaloneMode) {
    standaloneMode = false;
    history.replaceState(null, '', location.pathname); // clean ?qid= from URL
    startQuiz(true, false);
    return;
  }
  if (lives === 0) {
    showEndScreen(true);
    return;
  }
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

restartBtn.addEventListener('click', () => {
  const keepScore = lives > 0; // game over resets score; quest complete carries it
  startQuiz(true, keepScore);
});

// ── Keyboard navigation ───────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  // Ignore when typing in an input
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  // Ignore if quiz isn't active
  if (quizView.classList.contains('hidden')) return;

  const key = e.key;

  // 1–4: select a choice (only before answering)
  if (['1','2','3','4'].includes(key) && !answered) {
    const btns = choicesEl.querySelectorAll('.choice-btn');
    const idx  = parseInt(key) - 1;
    if (btns[idx]) btns[idx].click();
    return;
  }

  // Enter / Space: advance after answering or continue from end screen
  if (key === 'Enter' || key === ' ') {
    if (!endView.classList.contains('hidden')) {
      e.preventDefault();
      restartBtn.click();
      return;
    }
    if (answered) {
      e.preventDefault();
      nextBtn.click();
    }
  }
});

// ── Share popup ───────────────────────────────────────────────────────────────
let _sharePayload = null;
let _shareAnchor  = null;

const sharePopupEl = (() => {
  const el = document.createElement('div');
  el.className = 'share-popup';
  el.innerHTML =
    `<button class="share-opt" data-share="x">${SHARE_ICONS.x}<span>X / Twitter</span></button>` +
    `<button class="share-opt" data-share="reddit">${SHARE_ICONS.reddit}<span>Reddit</span></button>` +
    `<button class="share-opt" data-share="whatsapp">${SHARE_ICONS.whatsapp}<span>WhatsApp</span></button>` +
    `<button class="share-opt" data-share="email">${SHARE_ICONS.email}<span>Email</span></button>` +
    `<hr class="share-divider">` +
    `<button class="share-opt" data-share="copy">${SHARE_ICONS.copy}<span>Copy link</span></button>`;
  document.body.appendChild(el);
  return el;
})();

function openSharePopup(payload, anchorEl) {
  _sharePayload = payload;
  _shareAnchor  = anchorEl;

  const anchor  = anchorEl.getBoundingClientRect();
  const estH    = 218; // approximate popup height
  const estW    = 186;
  const margin  = 8;

  const fitsAbove = anchor.top > estH + margin;
  const top  = fitsAbove ? anchor.top - estH - margin : anchor.bottom + margin;
  const left = Math.max(margin, Math.min(anchor.left, window.innerWidth - estW - margin));

  sharePopupEl.style.top  = top  + 'px';
  sharePopupEl.style.left = left + 'px';
  sharePopupEl.classList.add('open');
}

function closeSharePopup() {
  sharePopupEl.classList.remove('open');
  _shareAnchor = null;
}

sharePopupEl.addEventListener('click', e => {
  const btn = e.target.closest('[data-share]');
  if (!btn || !_sharePayload) return;

  const { url, text, title, copyValue } = _sharePayload;
  const action = btn.dataset.share;

  if (action === 'copy') {
    navigator.clipboard.writeText(copyValue || url).then(() => {
      const span = btn.querySelector('span');
      const orig = span.textContent;
      span.textContent = 'Copied!';
      setTimeout(() => { span.textContent = orig; closeSharePopup(); }, 1500);
    });
    return;
  }

  const targets = {
    x:        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text + '\n' + url)}`,
    reddit:   `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(text + '\n' + url)}`,
    email:    `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n\n' + url)}`,
  };
  if (targets[action]) window.open(targets[action], '_blank', 'noopener,noreferrer');
  closeSharePopup();
});

// Close on outside click (capture so it fires before the trigger button's click)
document.addEventListener('click', e => {
  if (!sharePopupEl.classList.contains('open')) return;
  if (sharePopupEl.contains(e.target)) return;
  if (_shareAnchor && _shareAnchor.contains(e.target)) return; // let button handler run
  closeSharePopup();
}, true);

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSharePopup(); });

function tryShare(payload, anchorEl) {
  if (navigator.share) {
    navigator.share({ title: payload.title, text: payload.text, url: payload.url }).catch(() => {});
    return;
  }
  // Toggle: close if already open from the same button
  if (sharePopupEl.classList.contains('open') && _shareAnchor === anchorEl) {
    closeSharePopup();
    return;
  }
  openSharePopup(payload, anchorEl);
}

// ── Share score (end screen) ──────────────────────────────────────────────────
const shareBtn = document.getElementById('share-btn');

shareBtn.addEventListener('click', () => {
  const lang = currentLangConfig ? currentLangConfig.label : 'Code_Quest';
  tryShare({
    url:       'https://code-quest.dev',
    text:      `I scored ${score.toLocaleString()} pts on Code_Quest (${lang}) — can you beat it?`,
    title:     'Code_Quest Score',
    copyValue: `I scored ${score.toLocaleString()} pts on Code_Quest (${lang}) — can you beat it?\nhttps://code-quest.dev`,
  }, shareBtn);
});

// ── Share question ────────────────────────────────────────────────────────────
shareQuestionBtn.addEventListener('click', () => {
  const q = deck[current];
  if (!q) return;
  tryShare({
    url:   `https://code-quest.dev?qid=${q.id}`,
    text:  'Can you predict the output? Try this code snippet on Code_Quest.',
    title: 'Code_Quest — Can you predict the output?',
  }, shareQuestionBtn);
});

// ── Standalone (?qid=) ────────────────────────────────────────────────────────
function findQuestionById(id) {
  for (const lang of Object.values(LANGUAGES)) {
    const q = lang.questions.find(q => q.id === id);
    if (q) return { lang, q };
  }
  return null;
}

function initFromUrl() {
  const params = new URLSearchParams(location.search);
  const qid = params.get('qid');
  if (!qid) return;

  const result = findQuestionById(parseInt(qid, 10));
  if (!result) return; // unknown ID — fall through to normal landing

  const { lang, q } = result;
  currentLangConfig = lang;
  applyTheme(lang.theme);
  standaloneMode = true;

  // Update header labels
  const logoSub = document.getElementById('logo-sub');
  if (logoSub) logoSub.textContent = lang.label;
  if (codeFilename) codeFilename.textContent = lang.filename;

  // Build a single-question deck
  deck         = [q];
  current      = 0;
  correctCount = 0;
  answered     = false;
  results      = [null];
  lives        = MAX_LIVES;
  renderLives();
  score = 0;
  scorePts.textContent = '0';

  // Show quiz immediately (no landing transition)
  landingView.classList.add('hidden');
  siteHeader.classList.remove('header-hidden');
  scoreDisplay.classList.remove('hidden');
  quizView.classList.remove('hidden');
  const sidebar = document.querySelector('.quiz-sidebar');
  if (sidebar) sidebar.classList.add('sidebar-visible');

  renderQuestion();
  requestAnimationFrame(alignSidebar);
}

// ── Settings panel ────────────────────────────────────────────────────────────
function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem('cq_disabled') || '[]');
    disabledCategories = new Set(saved);
  } catch { disabledCategories = new Set(); }
}

function saveSettings() {
  localStorage.setItem('cq_disabled', JSON.stringify([...disabledCategories]));
}

function buildSettingsPanel(langSlug) {
  const lang = LANGUAGES[langSlug];
  if (!lang) return;
  document.getElementById('settings-title').textContent = `${lang.label} — Topics`;
  const body = document.getElementById('settings-body');
  const pills = Object.entries(lang.categories).map(([key, cat]) => {
    const active = !disabledCategories.has(`${lang.slug}:${key}`);
    return `<button class="topic-pill${active ? ' active' : ''}"
              data-lang="${lang.slug}" data-cat="${key}"
              style="--pill-color:${cat.color}">${cat.label}</button>`;
  }).join('');
  body.innerHTML = `<div class="settings-pills">${pills}</div>`;
  body.querySelectorAll('.topic-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const key        = `${btn.dataset.lang}:${btn.dataset.cat}`;
      const totalCats  = Object.keys(lang.categories).length;
      const disabledForLang = [...disabledCategories].filter(k => k.startsWith(btn.dataset.lang + ':')).length;
      const isLastActive = !disabledCategories.has(key) && disabledForLang === totalCats - 1;
      if (isLastActive) return;
      if (disabledCategories.has(key)) {
        disabledCategories.delete(key);
        btn.classList.add('active');
      } else {
        disabledCategories.add(key);
        btn.classList.remove('active');
      }
      saveSettings();
    });
  });
}

const settingsOverlay = document.getElementById('settings-overlay');
const settingsClose   = document.getElementById('settings-close');

document.querySelectorAll('.lang-cog').forEach(cog => {
  cog.addEventListener('click', () => {
    buildSettingsPanel(cog.dataset.lang);
    settingsOverlay.classList.remove('hidden');
  });
});
settingsClose.addEventListener('click', () => settingsOverlay.classList.add('hidden'));
settingsOverlay.addEventListener('click', e => {
  if (e.target === settingsOverlay) settingsOverlay.classList.add('hidden');
});

// ── Boot ──────────────────────────────────────────────────────────────────────
loadSettings();
initFromUrl(); // handles ?qid= before landing is shown
