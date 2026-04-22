// types.js — 18 questions — IDs: 2001-2015
const JS_TYPES = [
  {
    id: 2001, category: 'types', difficulty: 'easy',
    code: `console.log(typeof null);`,
    question: "What does this print?",
    choices: ['"object"', '"null"', '"undefined"', '"error"'],
    answer: 0,
    explanation: `<code>typeof null === "object"</code> is a well-known JavaScript bug that dates back to the language's first implementation in 1995. The internal tag for <code>null</code> was 0, which collided with the object tag. It was never fixed to preserve backwards compatibility. Always check for null explicitly: <code>value === null</code>.`,
  },
  {
    id: 2002, category: 'types', difficulty: 'easy',
    code: `console.log(typeof undeclaredVar);`,
    question: "What does this print?",
    choices: ['"undefined"', 'ReferenceError', '"null"', '"object"'],
    answer: 0,
    explanation: `<code>typeof</code> is the only operator that can safely reference an undeclared variable without throwing a <code>ReferenceError</code>. It returns <code>"undefined"</code> for variables that don't exist. This makes it useful for feature detection: <code>typeof window !== "undefined"</code>.`,
  },
  {
    id: 2003, category: 'types', difficulty: 'easy',
    code: `console.log(0 == false);
console.log(0 === false);`,
    question: "What does this print?",
    choices: ['true\nfalse', 'false\nfalse', 'true\ntrue', 'false\ntrue'],
    answer: 0,
    explanation: `<code>==</code> performs type coercion before comparing. Both <code>false</code> and <code>0</code> coerce to <code>0</code>, so they are loosely equal. <code>===</code> (strict equality) compares both value and type without conversion — <code>0</code> is a number and <code>false</code> is a boolean, so they are not strictly equal. Always prefer <code>===</code>.`,
  },
  {
    id: 2004, category: 'types', difficulty: 'easy',
    code: `console.log(NaN === NaN);
console.log(typeof NaN);`,
    question: "What does this print?",
    choices: ['false\n"number"', 'true\n"NaN"', 'false\n"undefined"', 'true\n"number"'],
    answer: 0,
    explanation: `<code>NaN</code> is the only value in JavaScript not equal to itself — this is by IEEE 754 specification. <code>typeof NaN</code> is <code>"number"</code>, which is counterintuitive but correct: NaN is a numeric value meaning "invalid number". Use <code>Number.isNaN()</code> to reliably check for NaN.`,
  },
  {
    id: 2005, category: 'types', difficulty: 'easy',
    code: `console.log(1 + "2");
console.log("3" - 1);`,
    question: "What does this print?",
    choices: ['"12"\n2', '3\n2', '"12"\n"31"', '3\n"31"'],
    answer: 0,
    explanation: `<code>+</code> prefers string concatenation: if either operand is a string, the other is converted to a string too. <code>1 + "2"</code> → <code>"12"</code>. The <code>-</code> operator has no string meaning, so it always coerces both sides to numbers: <code>"3" - 1</code> → <code>2</code>. This asymmetry is one of JS's most common sources of bugs.`,
  },
  {
    id: 2006, category: 'types', difficulty: 'medium',
    code: `console.log(null == undefined);
console.log(null === undefined);`,
    question: "What does this print?",
    choices: ['true\nfalse', 'false\nfalse', 'true\ntrue', 'false\ntrue'],
    answer: 0,
    explanation: `<code>null</code> and <code>undefined</code> are loosely equal to each other (<code>==</code>) but to nothing else — not <code>0</code>, not <code>""</code>, not <code>false</code>. Strictly (<code>===</code>) they are different types and values. This makes <code>value == null</code> a convenient check for both null and undefined simultaneously.`,
  },
  {
    id: 2007, category: 'types', difficulty: 'easy',
    code: `console.log(true + true);
console.log(true + false);`,
    question: "What does this print?",
    choices: ['2\n1', '"truetrue"\n"truefalse"', '1\n0', 'NaN\nNaN'],
    answer: 0,
    explanation: `When booleans are used in arithmetic, they coerce to numbers: <code>true</code> → <code>1</code>, <code>false</code> → <code>0</code>. So <code>true + true</code> = <code>1 + 1</code> = <code>2</code>. This is the same behaviour as Python's bool-as-int, and is occasionally useful for counting truthy values.`,
  },
  {
    id: 2008, category: 'types', difficulty: 'medium',
    code: `console.log(typeof []);
console.log(typeof {});
console.log(typeof function(){});`,
    question: "What does this print?",
    choices: ['"object"\n"object"\n"function"', '"array"\n"object"\n"function"', '"object"\n"object"\n"object"', '"array"\n"object"\n"object"'],
    answer: 0,
    explanation: `<code>typeof []</code> is <code>"object"</code> — arrays are objects in JavaScript. <code>typeof {}</code> is also <code>"object"</code>. Functions uniquely return <code>"function"</code>. To distinguish an array from a plain object, use <code>Array.isArray()</code>. This is why <code>typeof</code> alone is insufficient for type checking complex values.`,
  },
  {
    id: 2009, category: 'types', difficulty: 'medium',
    code: `console.log(null + 1);
console.log(undefined + 1);`,
    question: "What does this print?",
    choices: ['1\nNaN', 'null1\nundefined1', '0\n0', 'NaN\nNaN'],
    answer: 0,
    explanation: `<code>null</code> coerces to <code>0</code> in numeric contexts, so <code>null + 1 = 1</code>. <code>undefined</code> coerces to <code>NaN</code>, and any arithmetic with <code>NaN</code> yields <code>NaN</code>. This difference between null and undefined in arithmetic catches many developers off guard.`,
  },
  {
    id: 2010, category: 'types', difficulty: 'medium',
    code: `console.log("10" > "9");`,
    question: "What does this print?",
    choices: ['false', 'true', 'NaN', 'TypeError'],
    answer: 0,
    explanation: `When both operands are strings, comparison is lexicographic (character by character by Unicode value). <code>"1"</code> has code point 49, <code>"9"</code> has 57, so <code>"1" < "9"</code> and therefore <code>"10" < "9"</code>. To compare numerically, convert first: <code>Number("10") > Number("9")</code> → <code>true</code>.`,
  },
  {
    id: 2011, category: 'types', difficulty: 'hard',
    code: `console.log([] == false);
console.log([] + []);
console.log([] + {});`,
    question: "What does this print?",
    choices: ['true\n""\n"[object Object]"', 'false\n""\n"[object Object]"', 'true\n[]\n"[object Object]"', 'false\n0\n"[object Object]"'],
    answer: 0,
    explanation: `<code>[] == false</code>: empty array coerces to <code>""</code>, then to <code>0</code>; <code>false</code> coerces to <code>0</code> → equal. <code>[] + []</code>: both stringify to <code>""</code> → <code>""</code>. <code>[] + {}</code>: <code>[]</code> → <code>""</code>, <code>{}</code> → <code>"[object Object]"</code> → <code>"[object Object]"</code>. Welcome to JavaScript type coercion.`,
  },
  {
    id: 2012, category: 'types', difficulty: 'medium',
    code: `console.log(Number(""));
console.log(Number(null));
console.log(Number(undefined));`,
    question: "What does this print?",
    choices: ['0\n0\nNaN', 'NaN\nNaN\nNaN', '0\n0\n0', '""\n0\nNaN'],
    answer: 0,
    explanation: `<code>Number("")</code> → <code>0</code> (empty string is "nothing", which coerces to zero). <code>Number(null)</code> → <code>0</code> (null is like absence of value). <code>Number(undefined)</code> → <code>NaN</code> (undefined means "we don't know" — can't meaningfully convert to a number). These three rules are worth memorising.`,
  },
  {
    id: 2013, category: 'types', difficulty: 'easy',
    code: `console.log("5" * 2);
console.log("5" + 2);`,
    question: "What does this print?",
    choices: ['10\n"52"', '"52"\n10', '10\n7', '"52"\n"52"'],
    answer: 0,
    explanation: `<code>*</code> has no string meaning, so <code>"5"</code> is coerced to a number: <code>5 * 2 = 10</code>. <code>+</code> prefers strings when either operand is a string: <code>"5" + 2 = "52"</code>. This is why mixing string and number operations with <code>+</code> gives surprising results.`,
  },
  {
    id: 2014, category: 'types', difficulty: 'easy',
    code: `console.log(parseInt("10.9"));
console.log(parseFloat("3.14abc"));`,
    question: "What does this print?",
    choices: ['10\n3.14', '10.9\n3.14', '10\n3', 'NaN\nNaN'],
    answer: 0,
    explanation: `<code>parseInt</code> parses up to the first non-integer character and discards the rest — <code>"10.9"</code> → <code>10</code>. <code>parseFloat</code> allows a decimal point but stops at any other non-numeric character — <code>"3.14abc"</code> → <code>3.14</code>. Both functions are lenient; <code>Number()</code> is stricter and returns <code>NaN</code> for mixed strings.`,
  },
  {
    id: 2015, category: 'types', difficulty: 'easy',
    code: `console.log(!!"");
console.log(!!0);
console.log(!!"hello");`,
    question: "What does this print?",
    choices: ['false\nfalse\ntrue', 'true\nfalse\ntrue', 'false\nfalse\nfalse', 'true\ntrue\ntrue'],
    answer: 0,
    explanation: `<code>!!</code> is the double-negation idiom for converting any value to a boolean. <strong>Falsy</strong> values in JS: <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>. Everything else is truthy. <code>""</code> and <code>0</code> are falsy → <code>false</code>. <code>"hello"</code> is truthy → <code>true</code>.`,
  },

  {
    id: 2051, category: 'types', difficulty: 'easy',
    code: `function greet() {}
console.log(typeof greet, typeof greet());`,
    question: "What does this print?",
    choices: ['function undefined', 'function null', 'object undefined', 'function function'],
    answer: 0,
    explanation: `<code>typeof greet</code> (without parentheses) inspects the function object — its type is <code>"function"</code>. <code>greet()</code> calls it; with no <code>return</code> statement it returns <code>undefined</code>, so <code>typeof greet()</code> is <code>"undefined"</code>. A common bug is accidentally calling a function where you meant to pass it as a value.`,
  },

  {
    id: 2052, category: 'types', difficulty: 'medium',
    code: `console.log(0 == "0", 0 == "", "0" == "");`,
    question: "What does this print?",
    choices: ['true true false', 'true true true', 'false false false', 'true false false'],
    answer: 0,
    explanation: `Abstract equality (<code>==</code>) coerces both sides. <code>0 == "0"</code>: string coerces to number, 0 == 0 = true. <code>0 == ""</code>: empty string coerces to 0, true. <code>"0" == ""</code>: both are strings, compared directly — they differ, false. This non-transitivity (0 equals "0" and 0 equals "" but "0" does not equal "") is the canonical argument for always using <code>===</code>.`,
  },

  {
    id: 2053, category: 'types', difficulty: 'hard',
    code: `console.log(+"3", +" ", +null, +undefined);`,
    question: "What does this print?",
    choices: ['3 0 0 NaN', '3 NaN 0 0', '3 0 null NaN', 'NaN NaN NaN NaN'],
    answer: 0,
    explanation: `The unary <code>+</code> operator applies the Abstract ToNumber conversion. <code>+"3"</code> = 3. <code>+" "</code>: whitespace-only strings coerce to 0. <code>+null</code> = 0 (null has a numeric form). <code>+undefined</code> = NaN — undefined has no numeric equivalent. Knowing these edge cases is essential when receiving external data that may be null or undefined.`,
  },
];
