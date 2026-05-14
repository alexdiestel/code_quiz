/* ═══════════════════════════════════════════════════════════════════════════
   CATALOGUE — Hello, Void language registry
   ───────────────────────────────────────────────────────────────────────────

   Each entry in LANGUAGES defines one playable language:
     label       Display name shown in header and landing button
     slug        Key used in LANGUAGES and data-lang attributes
     filename    Shown in the code window titlebar
     hlClass     highlight.js CSS class for syntax colouring
     theme       CSS custom-property overrides applied when language is active
     categories  Category metadata (label, color) keyed by category id
     questions   Flat array assembled from the language's question modules

   Adding a new language: create questions/<slug>/*.js, add its entry here,
   add a button to index.html, and load its script tags before catalogue.js.
   ═══════════════════════════════════════════════════════════════════════════ */

const LANGUAGES = {

  // ── Python ────────────────────────────────────────────────────────────────
  python: {
    label:    'Python',
    slug:     'python',
    filename: 'snippet.py',
    hlClass:  'language-python',
    theme: {
      bg:          '#0a0e1a',
      primary:     '#7c3aed',
      primaryLt:   '#a78bfa',
      primaryDark: '#5b21b6',
      accent:      '#06b6d4',
      glowRgb:     '124 58 237',
    },
    categories: {
      lists: {
        label:       'Lists',
        description: 'Indexing, slicing, and list operations',
        color:       '#06b6d4',
      },
      strings: {
        label:       'Strings',
        description: 'String methods, iteration, and immutability',
        color:       '#a78bfa',
      },
      types: {
        label:       'Types & Variables',
        description: 'Data types, operators, truthiness, and floats',
        color:       '#f59e0b',
      },
      functions: {
        label:       'Functions',
        description: 'Arguments, closures, lambdas, and comprehensions',
        color:       '#10b981',
      },
      memory: {
        label:       'Memory & Objects',
        description: 'Mutability, aliasing, and object references',
        color:       '#f43f5e',
      },
      decorators: {
        label:        'Decorators',
        description:  '@property, @classmethod, @staticmethod, and custom decorators',
        color:        '#ec4899',
        minDifficulty: 'hard',
      },
      classes: {
        label:        'Classes & OOP',
        description:  'Inheritance, dunder methods, properties, and metaclasses',
        color:        '#14b8a6',
        minDifficulty: 'medium',
      },
      exceptions: {
        label:        'Exceptions',
        description:  'try/except/finally, raising, custom exceptions, and context managers',
        color:        '#f97316',
        minDifficulty: 'medium',
      },
    },
    questions: [
      ...PY_LISTS,
      ...PY_STRINGS,
      ...PY_TYPES,
      ...PY_FUNCTIONS,
      ...PY_MEMORY,
      ...PY_DECORATORS,
      ...PY_CLASSES,
      ...PY_EXCEPTIONS,
      ...PY_BOSS,
    ],
  },

  // ── JavaScript ───────────────────────────────────────────────────────────
  javascript: {
    label:    'JavaScript',
    slug:     'javascript',
    filename: 'snippet.js',
    hlClass:  'language-javascript',
    theme: {
      bg:          '#0a0e1a',
      primary:     '#ca8a04',
      primaryLt:   '#fde047',
      primaryDark: '#a16207',
      accent:      '#facc15',
      glowRgb:     '202 138 4',
    },
    categories: {
      types: {
        label:       'Types & Coercion',
        description: 'typeof, equality, NaN, and type conversion',
        color:       '#f59e0b',
      },
      functions: {
        label:       'Functions',
        description: 'Hoisting, closures, arrow functions, and IIFE',
        color:       '#10b981',
      },
      arrays: {
        label:       'Arrays',
        description: 'map, filter, reduce, destructuring, and spread',
        color:       '#06b6d4',
      },
      scope: {
        label:       'Scope',
        description: 'var/let/const, TDZ, block scope, and closures',
        color:       '#a78bfa',
      },
      objects: {
        label:       'Objects',
        description: 'Shorthand, optional chaining, prototype, and destructuring',
        color:       '#f43f5e',
      },
    },
    questions: [
      ...JS_TYPES,
      ...JS_FUNCTIONS,
      ...JS_ARRAYS,
      ...JS_SCOPE,
      ...JS_OBJECTS,
      ...JS_BOSS,
    ],
  },

  // ── C++ ───────────────────────────────────────────────────────────────────
  cpp: {
    label:    'C++',
    slug:     'cpp',
    filename: 'snippet.cpp',
    hlClass:  'language-cpp',
    theme: {
      bg:          '#0a0e1a',
      primary:     '#b91c1c',
      primaryLt:   '#f87171',
      primaryDark: '#991b1b',
      accent:      '#ef4444',
      glowRgb:     '185 28 28',
    },
    categories: {
      output: {
        label:       'Output',
        description: 'cout, operators, and basic output behaviour',
        color:       '#06b6d4',
      },
      types: {
        label:       'Types',
        description: 'Data types, auto, sizeof, and conversions',
        color:       '#f59e0b',
      },
      pointers: {
        label:       'Pointers',
        description: 'Pointers, references, and memory addressing',
        color:       '#f43f5e',
      },
      control: {
        label:       'Control Flow',
        description: 'Loops, scope, and conditionals',
        color:       '#10b981',
      },
      functions: {
        label:       'Functions',
        description: 'Default args, pass-by-value vs reference, overloading, and const methods',
        color:       '#a78bfa',
      },
    },
    questions: [
      ...CPP_OUTPUT,
      ...CPP_TYPES,
      ...CPP_POINTERS,
      ...CPP_CONTROL,
      ...CPP_FUNCTIONS,
      ...CPP_BOSS,
    ],
  },

};
