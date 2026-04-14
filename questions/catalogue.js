/* ═══════════════════════════════════════════════════════════════════════════
   CATALOGUE — Code_Quiz question database
   Last updated: 2026-04-14
   ───────────────────────────────────────────────────────────────────────────
   Total: 100 questions  |  easy: 30  medium: 39  hard: 25  boss: 6

   File            Qs   IDs
   lists.js        16   1,2,11,15,17,23,24,25,26,27,28,29,69,70,71,72
   strings.js      16   3,12,14,22,30,31,32,33,34,62,73,74,75,76,77,78
   types.js        33   4,5,6,7,10,13,19,35,36,37,38,39,40,
                        54,55,56,57,58,59,60,61,65,66,67,68,
                        79,80,81,82,83,84,85,86
   functions.js    16   16,18,20,41,42,43,44,45,63,64,87,88,89,90,91,92
   memory.js       13   8,9,21,46,47,48,49,50,93,94,95,96,97
   boss.js          6   51,52,53,98,99,100

   Next available ID: 101

   Rules for adding questions:
   · Set answer: as an index (0–3) into the choices[] array — not a string copy
   · Add the new ID to the relevant row above and increment the file Qs count
   · Update Total and the easy/medium/hard/boss counts
   ═══════════════════════════════════════════════════════════════════════════ */

const CATEGORIES = {
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
};

const QUESTIONS = [
  ...Q_LISTS,
  ...Q_STRINGS,
  ...Q_TYPES,
  ...Q_FUNCTIONS,
  ...Q_MEMORY,
  ...Q_BOSS,
];
