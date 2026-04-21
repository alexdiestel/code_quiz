// scope.js — 8 questions — IDs: 2038-2045
const JS_SCOPE = [
  {
    id: 2038, category: 'scope', difficulty: 'easy',
    code: `var x = 1;
function test() {
  var x = 2;
  console.log(x);
}
test();
console.log(x);`,
    question: "What does this print?",
    choices: ['2\n1', '1\n1', '2\n2', '1\n2'],
    answer: 0,
    explanation: `<code>var</code> is function-scoped. The <code>x</code> inside <code>test()</code> is a completely separate variable from the outer <code>x</code>. Changes inside the function do not affect the outer scope. This is one of the fundamental differences between <code>var</code> (function scope) and <code>let</code>/<code>const</code> (block scope).`,
  },
  {
    id: 2039, category: 'scope', difficulty: 'medium',
    code: `console.log(x);
let x = 5;`,
    question: "What does this print?",
    choices: ['ReferenceError', 'undefined', '5', 'null'],
    answer: 0,
    explanation: `<code>let</code> and <code>const</code> are in the <strong>Temporal Dead Zone (TDZ)</strong> from the start of their block until the declaration is reached. Accessing them in the TDZ throws a <code>ReferenceError</code> — unlike <code>var</code>, which would return <code>undefined</code>. The TDZ prevents the "hoisted but uninitialized" confusion.`,
  },
  {
    id: 2040, category: 'scope', difficulty: 'easy',
    code: `{
  let a = 1;
  var b = 2;
}
console.log(typeof a);
console.log(typeof b);`,
    question: "What does this print?",
    choices: ['"undefined"\n"number"', '"number"\n"number"', 'ReferenceError\n"number"', '"undefined"\n"undefined"'],
    answer: 0,
    explanation: `<code>let</code> is block-scoped: <code>a</code> only exists inside the braces. Outside, it doesn't exist — but <code>typeof</code> safely returns <code>"undefined"</code> for non-existent names (unlike accessing them directly, which would throw). <code>var</code> is function-scoped, so <code>b</code> leaks out of the block and is still accessible.`,
  },
  {
    id: 2041, category: 'scope', difficulty: 'easy',
    code: `const obj = { x: 1 };
obj.x = 2;
obj.y = 3;
console.log(obj.x, obj.y);`,
    question: "What does this print?",
    choices: ['2 3', '1 undefined', 'TypeError', '1 3'],
    answer: 0,
    explanation: `<code>const</code> prevents reassignment of the binding — you can't do <code>obj = {}</code>. But it does NOT make the object immutable. Properties can be freely added, modified, or deleted. To freeze an object, use <code>Object.freeze(obj)</code>. <code>const</code> only guarantees the variable always refers to the same object in memory.`,
  },
  {
    id: 2042, category: 'scope', difficulty: 'medium',
    code: `function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const fn = outer();
console.log(fn());
console.log(fn());`,
    question: "What does this print?",
    choices: ['1\n2', '0\n1', '1\n1', 'undefined\nundefined'],
    answer: 0,
    explanation: `<code>inner</code> closes over <code>count</code> from <code>outer</code>'s scope. Even after <code>outer()</code> returns, the returned function keeps a live reference to <code>count</code>. Each call to <code>fn()</code> increments and reads the same <code>count</code>. This is a <strong>closure</strong> — the function "closes over" variables from its surrounding lexical environment.`,
  },
  {
    id: 2043, category: 'scope', difficulty: 'medium',
    code: `var x = "global";
function test() {
  console.log(x);
  var x = "local";
  console.log(x);
}
test();`,
    question: "What does this print?",
    choices: ['undefined\n"local"', '"global"\n"local"', '"global"\n"global"', 'ReferenceError'],
    answer: 0,
    explanation: `Inside <code>test()</code>, <code>var x</code> is hoisted to the top of the function, creating a local <code>x</code> that shadows the global. Before the assignment runs, the local <code>x</code> exists but is <code>undefined</code>. The first <code>console.log</code> sees this uninitialized local — not the global. This is the "var hoisting" gotcha within functions.`,
  },
  {
    id: 2044, category: 'scope', difficulty: 'easy',
    code: `const x = 10;
x = 20;
console.log(x);`,
    question: "What does this print?",
    choices: ['TypeError', '20', '10', 'undefined'],
    answer: 0,
    explanation: `<code>const</code> variables cannot be reassigned after their initial declaration. Attempting to do so throws a <code>TypeError: Assignment to constant variable</code> at runtime. Note that the error is thrown at the assignment — the program stops there and never reaches <code>console.log</code>.`,
  },
  {
    id: 2045, category: 'scope', difficulty: 'hard',
    code: `let x = "outer";
function test() {
  console.log(x);
  if (true) {
    let x = "inner";
    console.log(x);
  }
  console.log(x);
}
test();`,
    question: "What does this print?",
    choices: ['"outer"\n"inner"\n"outer"', '"outer"\n"inner"\n"inner"', '"inner"\n"inner"\n"outer"', 'ReferenceError'],
    answer: 0,
    explanation: `<code>let</code> is block-scoped. The <code>x</code> inside the <code>if</code> block is a new variable that only exists within those braces. It shadows the outer <code>x</code> only within that block. Before and after the block, the outer <code>x = "outer"</code> is in scope. Each pair of braces creates a new scope for <code>let</code> and <code>const</code>.`,
  },
];
