// functions.js — 15 questions — IDs: 2016-2027
const JS_FUNCTIONS = [
  {
    id: 2016, category: 'functions', difficulty: 'medium',
    code: `console.log(greet());

function greet() {
  return "hello";
}`,
    question: "What does this print?",
    choices: ['"hello"', 'ReferenceError', 'undefined', 'TypeError'],
    answer: 0,
    explanation: `Function <em>declarations</em> are fully <strong>hoisted</strong> — the entire function body is moved to the top of its scope before execution. This means you can call a function before it appears in the source. Function <em>expressions</em> (e.g. <code>const greet = function(){}</code>) are not hoisted the same way and would throw an error here.`,
  },
  {
    id: 2017, category: 'functions', difficulty: 'medium',
    code: `console.log(x);
var x = 5;
console.log(x);`,
    question: "What does this print?",
    choices: ['undefined\n5', 'ReferenceError', '5\n5', '5\nundefined'],
    answer: 0,
    explanation: `<code>var</code> declarations are hoisted to the top of their function scope, but the <em>initialisation</em> is not. The code runs as if written: <code>var x; console.log(x); x = 5; console.log(x);</code>. So the first log prints <code>undefined</code> (declared but not yet assigned), the second prints <code>5</code>.`,
  },
  {
    id: 2018, category: 'functions', difficulty: 'hard',
    code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}`,
    question: "What does this print?",
    choices: ['3\n3\n3', '0\n1\n2', '0\n0\n0', '2\n2\n2'],
    answer: 0,
    explanation: `All three arrow functions close over the same <code>var i</code> variable. By the time the timeouts fire (after the loop completes), <code>i</code> is already <code>3</code>. All three log <code>3</code>. Fix: use <code>let</code> instead of <code>var</code> — <code>let</code> creates a fresh binding for each loop iteration.`,
  },
  {
    id: 2019, category: 'functions', difficulty: 'medium',
    code: `for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}`,
    question: "What does this print?",
    choices: ['0\n1\n2', '3\n3\n3', '0\n0\n0', 'undefined\nundefined\nundefined'],
    answer: 0,
    explanation: `<code>let</code> in a for loop creates a <strong>new binding</strong> for each iteration. Each arrow function captures its own separate <code>i</code>: 0, 1, 2. When the timeouts fire, each closure sees its own value. This is the standard fix for the classic <code>var</code> closure-in-loop bug.`,
  },
  {
    id: 2020, category: 'functions', difficulty: 'medium',
    code: `const obj = {
  name: "Alice",
  greet: function() {
    const inner = () => this.name;
    return inner();
  }
};
console.log(obj.greet());`,
    question: "What does this print?",
    choices: ['"Alice"', 'undefined', 'TypeError', '"inner"'],
    answer: 0,
    explanation: `Arrow functions do not have their own <code>this</code> — they inherit it from the surrounding lexical scope. <code>inner</code> is defined inside a regular method where <code>this</code> refers to <code>obj</code>, so <code>this.name</code> is <code>"Alice"</code>. If <code>inner</code> were a regular function instead of an arrow, <code>this</code> would be <code>undefined</code> (strict mode) or <code>window</code>.`,
  },
  {
    id: 2021, category: 'functions', difficulty: 'easy',
    code: `function greet(name = "World") {
  return "Hello, " + name + "!";
}
console.log(greet());
console.log(greet("Alice"));`,
    question: "What does this print?",
    choices: ['"Hello, World!"\n"Hello, Alice!"', '"Hello, !"\n"Hello, Alice!"', 'TypeError\n"Hello, Alice!"', '"Hello, undefined!"\n"Hello, Alice!"'],
    answer: 0,
    explanation: `Default parameters are used when the argument is <code>undefined</code> (or omitted). <code>greet()</code> passes no argument, so <code>name</code> defaults to <code>"World"</code>. <code>greet("Alice")</code> overrides it. Note: passing <code>null</code> explicitly does <em>not</em> trigger the default — <code>greet(null)</code> would give <code>"Hello, null!"</code>.`,
  },
  {
    id: 2022, category: 'functions', difficulty: 'easy',
    code: `function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));`,
    question: "What does this print?",
    choices: ['10', '24', '[1,2,3,4]', 'NaN'],
    answer: 0,
    explanation: `The rest parameter <code>...nums</code> collects all arguments into a real <code>Array</code>. <code>reduce</code> then accumulates the sum: <code>0+1+2+3+4 = 10</code>. Unlike the legacy <code>arguments</code> object, rest parameters are a proper array with all array methods available.`,
  },
  {
    id: 2023, category: 'functions', difficulty: 'medium',
    code: `const result = (function() {
  return 42;
})();
console.log(result);`,
    question: "What does this print?",
    choices: ['42', 'undefined', 'function', 'TypeError'],
    answer: 0,
    explanation: `This is an IIFE — Immediately Invoked Function Expression. The function is defined and called in one step. The outer parentheses make the function an expression (rather than a declaration), and the trailing <code>()</code> invoke it immediately. IIFEs were widely used before ES modules to create private scopes.`,
  },
  {
    id: 2024, category: 'functions', difficulty: 'hard',
    code: `function f(a, b, c = 10) {}
console.log(f.length);`,
    question: "What does this print?",
    choices: ['2', '3', '1', '0'],
    answer: 0,
    explanation: `<code>Function.length</code> reports the number of parameters <em>before</em> the first default value or rest parameter. Since <code>c</code> has a default, only <code>a</code> and <code>b</code> count. Rest parameters (<code>...args</code>) also set length to 0 for all following params. This reflects the function's minimum expected arity.`,
  },
  {
    id: 2025, category: 'functions', difficulty: 'medium',
    code: `function makeCounter() {
  let count = 0;
  return () => ++count;
}
const c = makeCounter();
console.log(c());
console.log(c());
console.log(c());`,
    question: "What does this print?",
    choices: ['1\n2\n3', '0\n1\n2', '1\n1\n1', '0\n0\n0'],
    answer: 0,
    explanation: `<code>makeCounter</code> returns an arrow function that closes over <code>count</code>. Each call to <code>c()</code> pre-increments and returns <code>count</code>. The variable persists between calls because the closure keeps a reference to it — this is the classic counter pattern and demonstrates that closures capture variables, not values.`,
  },
  {
    id: 2026, category: 'functions', difficulty: 'hard',
    code: `const f = function myFunc() {
  return typeof myFunc;
};
console.log(f());
console.log(typeof myFunc);`,
    question: "What does this print?",
    choices: ['"function"\n"undefined"', '"function"\n"function"', '"undefined"\n"undefined"', 'ReferenceError'],
    answer: 0,
    explanation: `In a <strong>named function expression</strong>, the name (<code>myFunc</code>) is only visible <em>inside</em> the function body. Outside, only the variable <code>f</code> exists — <code>myFunc</code> is undefined in the outer scope. Inside, <code>typeof myFunc</code> is <code>"function"</code>. Named function expressions are useful for recursion and stack traces.`,
  },
  {
    id: 2027, category: 'functions', difficulty: 'hard',
    code: `function outer() {
  let x = 10;
  function inner() {
    let x = 20;
    return x;
  }
  return x + inner();
}
console.log(outer());`,
    question: "What does this print?",
    choices: ['30', '20', '40', '10'],
    answer: 0,
    explanation: `<code>inner()</code> has its own <code>x = 20</code> which <strong>shadows</strong> the outer <code>x = 10</code>. Inside <code>inner</code>, <code>x</code> refers to the local one: returns <code>20</code>. Back in <code>outer</code>, <code>x</code> still refers to the outer <code>10</code>. <code>10 + 20 = 30</code>. Shadowing is legal but can make code harder to follow.`,
  },

  {
    id: 2054, category: 'functions', difficulty: 'medium',
    code: `function add(x, arr = []) {
  arr.push(x);
  return arr;
}
console.log(add(1));
console.log(add(2));`,
    question: "What does this print?",
    choices: ['[1]\n[2]', '[1]\n[1, 2]', '[1]\n[2, 2]', 'TypeError'],
    answer: 0,
    explanation: `JavaScript default parameters are <strong>re-evaluated on each call</strong>. Every time <code>add</code> is called without a second argument, a brand new <code>[]</code> is created. This is the opposite of Python, where a mutable default is evaluated once and shared across calls — one of Python's most famous gotchas. In JS, mutable defaults are safe.`,
  },

  {
    id: 2055, category: 'functions', difficulty: 'medium',
    code: `function sum(first, ...rest) {
  return first + rest.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));`,
    question: "What does this print?",
    choices: ['10', '1', '9', 'TypeError'],
    answer: 0,
    explanation: `The rest parameter (<code>...rest</code>) collects all arguments after <code>first</code> into a real array: <code>[2, 3, 4]</code>. <code>reduce</code> sums that to <code>9</code>. Adding <code>first</code> (1) gives <code>10</code>. Unlike the legacy <code>arguments</code> object, rest parameters are actual arrays with all Array methods available.`,
  },

  {
    id: 2056, category: 'functions', difficulty: 'hard',
    code: `function* gen() {
  yield 1;
  yield 2;
}
const g = gen();
console.log([...g]);
console.log([...g]);`,
    question: "What does this print?",
    choices: ['[1, 2]\n[]', '[1, 2]\n[1, 2]', '[1]\n[2]', 'TypeError'],
    answer: 0,
    explanation: `A generator can only be iterated <strong>once</strong>. The first spread consumes both yielded values, leaving the generator in a done state. The second spread immediately sees a done iterator and produces an empty array. To iterate multiple times, call <code>gen()</code> again to get a fresh generator instance.`,
  },
];
