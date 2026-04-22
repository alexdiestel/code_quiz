// boss.js — 10 questions — IDs: 2099-2108
const JS_BOSS = [
  {
    id: 2099, category: 'functions', difficulty: 'boss',
    code: `console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);`,
    question: "What does this print?",
    choices: ['1\n4\n3\n2', '1\n2\n3\n4', '1\n3\n4\n2', '1\n4\n2\n3'],
    answer: 0,
    explanation: `The JavaScript <strong>event loop</strong> has three queues: synchronous (call stack), microtasks (Promises), and macrotasks (setTimeout). Synchronous code runs first: <code>1</code> then <code>4</code>. The <code>setTimeout</code> callback goes to the macrotask queue. <code>Promise.resolve().then()</code> goes to the microtask queue. After the call stack empties, <em>all</em> microtasks drain first — so <code>3</code> prints before <code>2</code>.`,
  },

  {
    id: 2100, category: 'scope', difficulty: 'boss',
    code: `const funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(() => i);
}
console.log(funcs[0](), funcs[1](), funcs[2]());`,
    question: "What does this print?",
    choices: ['3 3 3', '0 1 2', '2 2 2', '0 0 0'],
    answer: 0,
    explanation: `<code>var</code> is function-scoped, not block-scoped. All three arrow functions close over the <em>same</em> <code>i</code> variable. By the time any of them is called, the loop has finished and <code>i</code> is <code>3</code>. The fix is to use <code>let</code>: it creates a fresh binding per iteration, so each closure captures its own copy.`,
  },

  {
    id: 2101, category: 'types', difficulty: 'boss',
    code: `console.log(1 + "2" + 3);`,
    question: "What does this print?",
    choices: ['"123"', '6', '15', 'NaN'],
    answer: 0,
    explanation: `<code>+</code> is left-associative. <code>1 + "2"</code> evaluates first: one operand is a string, so the number is coerced to a string and concatenated → <code>"12"</code>. Then <code>"12" + 3</code>: same rule applies → <code>"123"</code>. If the string came last (<code>1 + 2 + "3"</code>), the addition would happen first (3) and then concatenate: <code>"33"</code>.`,
  },

  {
    id: 2102, category: 'types', difficulty: 'boss',
    code: `console.log(NaN === NaN, NaN == NaN, typeof NaN);`,
    question: "What does this print?",
    choices: ['false false number', 'true true NaN', 'false false NaN', 'true true number'],
    answer: 0,
    explanation: `<code>NaN</code> is the only value in JavaScript that is <em>not equal to itself</em> — both <code>===</code> and <code>==</code> return <code>false</code>. Despite its name, <code>typeof NaN</code> is <code>"number"</code>. To test for NaN, use <code>Number.isNaN(x)</code> (not the global <code>isNaN()</code>, which coerces its argument first).`,
  },

  {
    id: 2103, category: 'functions', difficulty: 'boss',
    code: `const obj = {
  x: 10,
  getX: () => this?.x,
  getY() { return this.x; }
};
console.log(obj.getX(), obj.getY());`,
    question: "What does this print?",
    choices: ['undefined 10', '10 10', '10 undefined', 'TypeError'],
    answer: 0,
    explanation: `Arrow functions do not have their own <code>this</code> — they inherit it from the surrounding lexical scope. At module/script level, <code>this</code> is <code>undefined</code> (or the global object in loose mode), so <code>getX</code> sees no <code>x</code>. <code>getY</code> is a regular method: <code>this</code> is dynamically bound to the calling object (<code>obj</code>), so <code>this.x</code> is <code>10</code>. Never use arrow functions as object methods when you need <code>this</code> to refer to the object.`,
  },

  {
    id: 2104, category: 'types', difficulty: 'boss',
    code: `console.log(typeof null, null instanceof Object);`,
    question: "What does this print?",
    choices: ['"object" false', '"null" false', '"object" true', '"null" true'],
    answer: 0,
    explanation: `<code>typeof null === "object"</code> is a famous historical bug in JavaScript that has been kept for backwards compatibility since ES1. Internally, null was represented with a type tag of 0, which matched the object tag. Despite the misleading type, <code>null instanceof Object</code> is <code>false</code> — <code>instanceof</code> checks the prototype chain and <code>null</code> has none. Use <code>x === null</code> to reliably test for null.`,
  },

  {
    id: 2105, category: 'objects', difficulty: 'boss',
    code: `function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { return this.name; };

const a = new Animal("Cat");
delete a.name;
console.log(a.speak());`,
    question: "What does this print?",
    choices: ['"undefined"', '"Cat"', '"Animal"', 'TypeError'],
    answer: 0,
    explanation: `<code>name</code> is an <strong>own property</strong> on <code>a</code>, set by the constructor. <code>delete a.name</code> removes it. When <code>speak()</code> then reads <code>this.name</code>, JavaScript walks up the prototype chain — <code>Animal.prototype</code> has no <code>name</code> either — and reaches <code>Object.prototype</code>, which also has none. The lookup returns <code>undefined</code>. Delete only removes own properties; it cannot affect inherited ones.`,
  },

  {
    id: 2106, category: 'types', difficulty: 'boss',
    code: `console.log([] == false, [] == 0, [] == "");`,
    question: "What does this print?",
    choices: ['true true true', 'false false false', 'true true false', 'false true true'],
    answer: 0,
    explanation: `Abstract equality (<code>==</code>) applies coercion rules. <code>[] == false</code>: both sides coerce to numbers — <code>[]</code> becomes <code>""</code> becomes <code>0</code>, <code>false</code> becomes <code>0</code> → <code>true</code>. <code>[] == 0</code>: <code>[]</code> → <code>""</code> → <code>0</code> → <code>true</code>. <code>[] == ""</code>: <code>[]</code> → <code>""</code>, same string → <code>true</code>. This is exactly why <code>===</code> is preferred: it never coerces.`,
  },

  {
    id: 2107, category: 'functions', difficulty: 'boss',
    code: `async function main() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}
main();
console.log(3);`,
    question: "What does this print?",
    choices: ['1\n3\n2', '1\n2\n3', '3\n1\n2', '1\n2\n3'],
    answer: 0,
    explanation: `<code>main()</code> runs synchronously until the first <code>await</code>. It prints <code>1</code>, then suspends at <code>await</code> and returns a Promise. Control returns to the caller, which prints <code>3</code>. The resolved Promise queues the continuation (<code>console.log(2)</code>) as a microtask, which runs after the current synchronous frame finishes — so <code>2</code> is last.`,
  },

  {
    id: 2108, category: 'objects', difficulty: 'boss',
    code: `const key = "x";
const a = { [key]: 1 };
const b = { x: 2, ...a };
const c = { ...a, x: 2 };
console.log(b.x, c.x);`,
    question: "What does this print?",
    choices: ['1 2', '2 1', '2 2', '1 1'],
    answer: 0,
    explanation: `Object spread (<code>...</code>) copies properties in order, and <strong>later keys overwrite earlier ones</strong>. In <code>b</code>: <code>x: 2</code> is set first, then <code>...a</code> spreads <code>x: 1</code> — overwriting it → <code>b.x === 1</code>. In <code>c</code>: <code>...a</code> spreads <code>x: 1</code> first, then <code>x: 2</code> overwrites → <code>c.x === 2</code>. The rule is simple: rightmost definition wins.`,
  },
];
