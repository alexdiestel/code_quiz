// boss.js — 1 question — ID: 2099
const JS_BOSS = [
  {
    id: 2099, category: 'boss', difficulty: 'hard',
    code: `console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);`,
    question: "What does this print?",
    choices: ['1\n4\n3\n2', '1\n2\n3\n4', '1\n3\n4\n2', '1\n4\n2\n3'],
    answer: 0,
    explanation: `The JavaScript <strong>event loop</strong> has three queues: synchronous (call stack), microtasks (Promises), and macrotasks (setTimeout). Synchronous code runs first: <code>1</code> then <code>4</code>. The <code>setTimeout</code> callback goes to the macrotask queue. <code>Promise.resolve().then()</code> goes to the microtask queue. After the call stack empties, <em>all</em> microtasks drain first — so <code>3</code> prints before <code>2</code>.`,
  },
];
