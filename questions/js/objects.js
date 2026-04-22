// objects.js — 8 questions — IDs: 2046-2050
const JS_OBJECTS = [
  {
    id: 2046, category: 'objects', difficulty: 'easy',
    code: `const name = "Alice";
const age = 30;
const person = { name, age };
console.log(person.name, person.age);`,
    question: "What does this print?",
    choices: ['"Alice" 30', 'undefined undefined', '"name" "age"', 'TypeError'],
    answer: 0,
    explanation: `ES6 <strong>shorthand property names</strong>: when a property name matches a variable name, you can write just the name once. <code>{ name, age }</code> is equivalent to <code>{ name: name, age: age }</code>. This is one of the most commonly used ES6 syntax improvements for building objects from existing variables.`,
  },
  {
    id: 2047, category: 'objects', difficulty: 'easy',
    code: `const user = { profile: { name: "Alice" } };
console.log(user.profile?.name);
console.log(user.address?.city);`,
    question: "What does this print?",
    choices: ['"Alice"\nundefined', '"Alice"\nTypeError', 'TypeError\nundefined', '"Alice"\nnull'],
    answer: 0,
    explanation: `The <strong>optional chaining</strong> operator <code>?.</code> short-circuits to <code>undefined</code> if the left side is <code>null</code> or <code>undefined</code>, instead of throwing a <code>TypeError</code>. <code>user.address</code> is <code>undefined</code>, so <code>?.city</code> returns <code>undefined</code> without error. Without <code>?.</code>, accessing <code>.city</code> on <code>undefined</code> would throw.`,
  },
  {
    id: 2048, category: 'objects', difficulty: 'easy',
    code: `const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));
console.log(Object.values(obj));`,
    question: "What does this print?",
    choices: ['["a","b","c"]\n[1,2,3]', '[1,2,3]\n["a","b","c"]', '["a","b","c"]\n["a","b","c"]', '[1,2,3]\n[1,2,3]'],
    answer: 0,
    explanation: `<code>Object.keys()</code> returns an array of the object's own enumerable property <em>names</em>. <code>Object.values()</code> returns an array of the corresponding <em>values</em>. Both follow insertion order for string keys in modern JavaScript engines. A third companion, <code>Object.entries()</code>, returns <code>[key, value]</code> pairs.`,
  },
  {
    id: 2049, category: 'objects', difficulty: 'medium',
    code: `function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  return this.name + " speaks";
};
const a = new Animal("Dog");
console.log(a.speak());
console.log(a.hasOwnProperty("speak"));`,
    question: "What does this print?",
    choices: ['"Dog speaks"\nfalse', '"Dog speaks"\ntrue', 'TypeError\nfalse', '"undefined speaks"\ntrue'],
    answer: 0,
    explanation: `Methods on <code>prototype</code> are shared across all instances but are NOT own properties of each instance. <code>hasOwnProperty("speak")</code> returns <code>false</code> because <code>speak</code> lives on <code>Animal.prototype</code>, not directly on <code>a</code>. Property lookup walks the prototype chain — <code>a.speak()</code> finds it there. <code>hasOwnProperty</code> only checks the object itself.`,
  },
  {
    id: 2050, category: 'objects', difficulty: 'medium',
    code: `const { x: a, y: b = 10 } = { x: 1 };
console.log(a, b);`,
    question: "What does this print?",
    choices: ['1 10', '1 undefined', 'undefined 10', 'TypeError'],
    answer: 0,
    explanation: `Object destructuring with <strong>renaming</strong> (<code>x: a</code>) extracts the property <code>x</code> into a variable named <code>a</code>. The <strong>default value</strong> (<code>y: b = 10</code>) is used when the property is absent or <code>undefined</code>. Since <code>y</code> doesn't exist in the source object, <code>b</code> takes its default of <code>10</code>. Both renaming and defaults can be combined.`,
  },

  {
    id: 2064, category: 'objects', difficulty: 'medium',
    code: `const obj = Object.freeze({ x: 1, y: 2 });
obj.x = 99;
obj.z = 3;
console.log(obj.x, obj.z);`,
    question: "What does this print?",
    choices: ['1 undefined', '99 3', '1 3', 'TypeError'],
    answer: 0,
    explanation: `<code>Object.freeze</code> prevents adding, removing, or modifying properties. In non-strict mode, violations are <strong>silently ignored</strong>. In strict mode they throw a <code>TypeError</code>. <code>obj.x</code> stays <code>1</code>; <code>obj.z</code> was never added, so it's <code>undefined</code>. Note that freeze is <em>shallow</em> — nested objects are not frozen.`,
  },

  {
    id: 2065, category: 'objects', difficulty: 'medium',
    code: `const prefix = "user";
const obj = {
  [\`\${prefix}Name\`]: "Alice",
  [\`\${prefix}Age\`]: 30,
};
console.log(obj.userName, obj.userAge);`,
    question: "What does this print?",
    choices: ['Alice 30', 'undefined undefined', 'Alice undefined', 'TypeError'],
    answer: 0,
    explanation: `Computed property keys (<code>[expression]</code>) allow any expression — including template literals — as a property name. At creation time, <code>\`\${prefix}Name\`</code> evaluates to <code>"userName"</code> and <code>\`\${prefix}Age\`</code> to <code>"userAge"</code>. This pattern is useful for dynamically building objects from runtime values.`,
  },

  {
    id: 2066, category: 'objects', difficulty: 'hard',
    code: `const obj = {
  _x: 0,
  get x() { return this._x * 2; },
};
obj._x = 5;
console.log(obj.x);`,
    question: "What does this print?",
    choices: ['10', '5', '0', 'TypeError'],
    answer: 0,
    explanation: `A getter (<code>get x()</code>) defines a computed property that runs code on every read. When you access <code>obj.x</code>, the getter executes and returns <code>this._x * 2</code>. Since <code>_x</code> was updated to <code>5</code>, the getter returns <code>10</code>. Getters are useful for derived values that should always reflect current state without explicit method calls.`,
  },
];
