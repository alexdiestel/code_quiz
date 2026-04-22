// arrays.js — 13 questions — IDs: 2028-2037
const JS_ARRAYS = [
  {
    id: 2028, category: 'arrays', difficulty: 'easy',
    code: `const nums = [1, 2, 3, 4, 5];
console.log(nums.map(x => x * 2));`,
    question: "What does this print?",
    choices: ['[2, 4, 6, 8, 10]', '[1, 2, 3, 4, 5]', '30', 'undefined'],
    answer: 0,
    explanation: `<code>map()</code> creates a <em>new</em> array by applying a function to each element — the original is unchanged. Each element is multiplied by 2, producing <code>[2, 4, 6, 8, 10]</code>. Unlike a for-loop, <code>map</code> always returns an array of the same length as the input.`,
  },
  {
    id: 2029, category: 'arrays', difficulty: 'easy',
    code: `const nums = [1, 2, 3, 4, 5];
console.log(nums.filter(x => x % 2 === 0));`,
    question: "What does this print?",
    choices: ['[2, 4]', '[1, 3, 5]', '[2, 4, 6]', '[]'],
    answer: 0,
    explanation: `<code>filter()</code> returns a new array containing only elements for which the callback returns a truthy value. Even numbers satisfy <code>x % 2 === 0</code>, so only 2 and 4 pass. Like <code>map</code>, <code>filter</code> never modifies the original array.`,
  },
  {
    id: 2030, category: 'arrays', difficulty: 'easy',
    code: `const nums = [1, 2, 3, 4];
console.log(nums.reduce((acc, x) => acc + x, 0));`,
    question: "What does this print?",
    choices: ['10', '24', '[1,2,3,4]', 'NaN'],
    answer: 0,
    explanation: `<code>reduce(callback, initialValue)</code> accumulates values left to right. Starting with <code>0</code>: <code>0+1=1</code>, <code>1+2=3</code>, <code>3+3=6</code>, <code>6+4=10</code>. The second argument (<code>0</code>) is the initial accumulator. Without it, the first element would be used as the seed.`,
  },
  {
    id: 2031, category: 'arrays', difficulty: 'easy',
    code: `const a = [1, 2];
const b = [3, 4];
console.log([...a, ...b]);`,
    question: "What does this print?",
    choices: ['[1, 2, 3, 4]', '[[1,2],[3,4]]', '[1, 2, [3, 4]]', 'TypeError'],
    answer: 0,
    explanation: `The spread operator <code>...</code> expands an array's elements into the surrounding context. <code>[...a, ...b]</code> is equivalent to <code>[1, 2, 3, 4]</code> — a flat merge of both arrays. It's a clean alternative to <code>a.concat(b)</code> and works with any iterable.`,
  },
  {
    id: 2032, category: 'arrays', difficulty: 'medium',
    code: `const [first, , third] = [1, 2, 3];
console.log(first, third);`,
    question: "What does this print?",
    choices: ['1 3', '1 2', '2 3', '1 undefined'],
    answer: 0,
    explanation: `Array destructuring assigns elements by position. The hole (<code>,</code> with nothing between) skips index 1 — <code>2</code> is discarded. <code>first</code> gets <code>1</code> (index 0) and <code>third</code> gets <code>3</code> (index 2). Skipping elements is useful when you only need specific positions from an array.`,
  },
  {
    id: 2033, category: 'arrays', difficulty: 'medium',
    code: `const nums = [1, 2, 3, 4];
console.log(nums.find(x => x > 2));
console.log(nums.filter(x => x > 2));`,
    question: "What does this print?",
    choices: ['3\n[3, 4]', '[3, 4]\n3', '3\n3', '[3]\n[3, 4]'],
    answer: 0,
    explanation: `<code>find()</code> returns the <em>first</em> element that satisfies the callback — just the value, not an array. <code>filter()</code> returns <em>all</em> matching elements as an array. Here <code>find</code> stops at <code>3</code> (the first value > 2), while <code>filter</code> collects both <code>3</code> and <code>4</code>.`,
  },
  {
    id: 2034, category: 'arrays', difficulty: 'medium',
    code: `const arr = [1, [2, [3, [4]]]];
console.log(arr.flat());
console.log(arr.flat(Infinity));`,
    question: "What does this print?",
    choices: ['[1, 2, [3, [4]]]\n[1, 2, 3, 4]', '[1, 2, 3, 4]\n[1, 2, 3, 4]', '[1, [2, [3, [4]]]]\n[1, 2, 3, 4]', '[1, 2, 3, [4]]\n[1, 2, 3, 4]'],
    answer: 0,
    explanation: `<code>flat(depth)</code> flattens nested arrays by the given depth (default <code>1</code>). With depth 1, only one level is unwrapped: <code>[2, [3, [4]]]</code> → <code>2, [3, [4]]</code>. With <code>Infinity</code>, all nesting is removed regardless of depth: the fully flat result is <code>[1, 2, 3, 4]</code>.`,
  },
  {
    id: 2035, category: 'arrays', difficulty: 'medium',
    code: `const arr = [1, 2, NaN];
console.log(arr.indexOf(NaN));
console.log(arr.includes(NaN));`,
    question: "What does this print?",
    choices: ['-1\ntrue', '2\ntrue', '-1\nfalse', '2\nfalse'],
    answer: 0,
    explanation: `<code>indexOf</code> uses strict equality (<code>===</code>) internally. Since <code>NaN !== NaN</code>, <code>indexOf(NaN)</code> always returns <code>-1</code>. <code>includes</code> uses the SameValueZero algorithm, which correctly treats <code>NaN === NaN</code>. This is one of the key reasons <code>includes</code> was added to the language.`,
  },
  {
    id: 2036, category: 'arrays', difficulty: 'hard',
    code: `const nums = [10, 9, 2, 1, 20];
console.log(nums.sort());`,
    question: "What does this print?",
    choices: ['[1, 10, 2, 20, 9]', '[1, 2, 9, 10, 20]', '[10, 9, 2, 1, 20]', '[20, 10, 9, 2, 1]'],
    answer: 0,
    explanation: `By default, <code>Array.sort()</code> converts elements to strings and sorts them lexicographically. <code>"1" < "10" < "2" < "20" < "9"</code> by Unicode code point comparison. To sort numerically, always pass a comparator: <code>nums.sort((a, b) => a - b)</code>. This is one of JavaScript's most notorious gotchas.`,
  },
  {
    id: 2037, category: 'arrays', difficulty: 'medium',
    code: `const a = [1, 2, 3];
const b = a;
const c = [...a];
b.push(4);
console.log(a.length);
console.log(c.length);`,
    question: "What does this print?",
    choices: ['4\n3', '3\n3', '4\n4', '3\n4'],
    answer: 0,
    explanation: `<code>b = a</code> copies the reference — both <code>a</code> and <code>b</code> point to the same array. Pushing to <code>b</code> mutates the shared array, so <code>a.length</code> becomes 4. <code>c = [...a]</code> creates a shallow copy (a new array), so it is unaffected by the push and stays at length 3.`,
  },

  {
    id: 2057, category: 'arrays', difficulty: 'medium',
    code: `const a = Array.from({length: 3}, (_, i) => i * 2);
console.log(a);`,
    question: "What does this print?",
    choices: ['[0, 2, 4]', '[0, 1, 2]', '[2, 4, 6]', '[undefined, undefined, undefined]'],
    answer: 0,
    explanation: `<code>Array.from</code> accepts an array-like object with a <code>length</code> property. The second argument is a map function called with <code>(value, index)</code> — since the slots are empty, <code>value</code> is <code>undefined</code>, but the index <code>i</code> is useful. Here it produces <code>[0*2, 1*2, 2*2]</code> = <code>[0, 2, 4]</code>. This is a clean way to generate numeric sequences.`,
  },

  {
    id: 2058, category: 'arrays', difficulty: 'medium',
    code: `const a = [1, [2, [3, [4]]]];
console.log(a.flat().length, a.flat(Infinity).length);`,
    question: "What does this print?",
    choices: ['3 4', '2 4', '4 4', '3 3'],
    answer: 0,
    explanation: `<code>flat()</code> defaults to depth 1, flattening one level: <code>[1, 2, [3, [4]]]</code> — 3 elements. <code>flat(Infinity)</code> recursively flattens all levels: <code>[1, 2, 3, 4]</code> — 4 elements. Depth 1 is often all you need for arrays of arrays; use <code>Infinity</code> cautiously since deeply nested structures are unusual.`,
  },

  {
    id: 2059, category: 'arrays', difficulty: 'hard',
    code: `const arr = [1, 2, NaN, 4];
console.log(arr.indexOf(NaN), arr.findIndex(x => isNaN(x)));`,
    question: "What does this print?",
    choices: ['-1 2', '2 2', '-1 -1', 'NaN 2'],
    answer: 0,
    explanation: `<code>indexOf</code> uses strict equality (<code>===</code>). Since <code>NaN !== NaN</code>, it can never find NaN — returns <code>-1</code>. <code>findIndex</code> calls a callback for each element; <code>isNaN(NaN)</code> returns <code>true</code>, so it correctly identifies the NaN at index 2. Always use <code>findIndex</code> (or <code>Array.prototype.includes</code>) when searching for NaN.`,
  },
];
