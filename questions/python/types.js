// types.js — 47 questions — IDs: 4,5,6,7,10,13,19,35,36,37,38,39,40,54,55,56,57,58,59,60,61,65,66,67,68,
//                                  79,80,81,82,83,84,85,86,132,133,134,135,136,137,183,184,185,186,187,188,189,190
const PY_TYPES = [
  {
    id: 4, category: 'types', difficulty: 'easy',
    code: `print(7 // 2)`,
    question: "What does this print?",
    choices: ['3.5', '3', '4', '3.0'],
    answer: 1,
    explanation: `<code>//</code> is the <strong>floor division</strong> operator. It divides and rounds down to the nearest integer, returning an <code>int</code> when both operands are ints. So <code>7 // 2 = 3</code>, not <code>3.5</code>. Use a single <code>/</code> for regular float division.`
  },
  {
    id: 5, category: 'types', difficulty: 'easy',
    code: `print(True + True + True)`,
    question: "What does this print?",
    choices: ['True', 'TrueTrueTrue', '3', 'TypeError'],
    answer: 2,
    explanation: `In Python, <code>bool</code> is a subclass of <code>int</code>. <code>True</code> has a numeric value of <code>1</code> and <code>False</code> is <code>0</code>. So <code>True + True + True</code> is literally <code>1 + 1 + 1 = 3</code>. This is why <code>sum([True, False, True, True])</code> is a valid way to count truthy values.`
  },
  {
    id: 6, category: 'types', difficulty: 'easy',
    code: `print(bool("False"))`,
    question: "What does this print?",
    choices: ['False', 'True', '0', 'TypeError'],
    answer: 1,
    explanation: `Any <strong>non-empty string</strong> is truthy in Python — including <code>"False"</code>. That word is just characters; it is not the boolean value <code>False</code>. Only an empty string <code>""</code> is falsy. Common falsy values: <code>0</code>, <code>""</code>, <code>[]</code>, <code>{}</code>, <code>None</code>, <code>False</code>.`
  },
  {
    id: 35, category: 'types', difficulty: 'easy',
    code: `print(10 % 3)`,
    question: "What does this print?",
    choices: ['1', '3', '0', '3.33'],
    answer: 0,
    explanation: `<code>%</code> is the <strong>modulo</strong> operator — it returns the remainder after division. <code>10 % 3 = 1</code> because <code>10 = 3 × 3 + 1</code>. It is widely used to test divisibility: <code>n % 2 == 0</code> checks if <code>n</code> is even, <code>n % 2 != 0</code> checks if it is odd.`
  },
  {
    id: 36, category: 'types', difficulty: 'easy',
    code: `print(2 ** 8)`,
    question: "What does this print?",
    choices: ['16', '256', '512', '64'],
    answer: 1,
    explanation: `<code>**</code> is the <strong>exponentiation</strong> operator. <code>2 ** 8</code> means 2 raised to the power of 8 = 256. Python integers have arbitrary precision — <code>2 ** 100</code> works perfectly and gives the exact result, unlike many other languages.`
  },
  {
    id: 7, category: 'types', difficulty: 'easy',
    code: `print(type(1 / 2))`,
    question: "What does this print?",
    choices: ["<class 'int'>", "<class 'float'>", "0.5", "<class 'number'>"],
    answer: 1,
    explanation: `In Python 3, the <code>/</code> operator <strong>always returns a float</strong>, even when dividing two integers. <code>1 / 2</code> gives <code>0.5</code>. This changed from Python 2, where <code>1 / 2</code> returned <code>0</code>. Use <code>//</code> for integer (floor) division.`
  },
  {
    id: 54, category: 'types', difficulty: 'easy',
    code: `x = {}
print(type(x))`,
    question: "What does this print?",
    choices: ["<class 'set'>", "<class 'dict'>", "<class 'frozenset'>", "TypeError"],
    answer: 1,
    explanation: `Empty curly braces <code>{}</code> always create a <strong>dict</strong>, never a set. To create an empty set you must write <code>set()</code>. A set literal needs at least one element — <code>{1, 2, 3}</code> — to be recognised as a set. This surprises almost everyone who knows <code>{1, 2}</code> is a set.`
  },
  {
    id: 55, category: 'types', difficulty: 'easy',
    code: `s = {'a', 'b', 'c'}
print(s[0])`,
    question: "What does this print?",
    choices: ["'a'", "'c'", "TypeError", "KeyError"],
    answer: 2,
    explanation: `Sets use <code>{}</code> like dicts, but they are <strong>unordered</strong> and have <strong>no indexing</strong>. <code>s[0]</code> raises <code>TypeError: 'set' object is not subscriptable</code>. To access elements you must iterate, convert to a list first, or use set operations. The curly-brace syntax is shared between dicts and sets — the difference is whether you have key-value pairs or bare values.`
  },
  {
    id: 56, category: 'types', difficulty: 'easy',
    code: `d = {'a': 1, 'b': 2}
print(d[0])`,
    question: "What does this print?",
    choices: ['1', "'a'", "KeyError", "None"],
    answer: 2,
    explanation: `Dicts are accessed by <strong>key</strong>, not by position. <code>d[0]</code> looks for a key whose value is <code>0</code> — that key does not exist, so Python raises <code>KeyError</code>. Unlike lists where <code>[0]</code> means "first element", dict subscript is always a key lookup. Use <code>list(d.values())[0]</code> or iterate if you need positional access.`
  },
  {
    id: 57, category: 'types', difficulty: 'easy',
    code: `x = {}
x['a'] = 10
x['b'] = 20
print(list(x))`,
    question: "What does this print?",
    choices: ["['a', 'b']", "[10, 20]", "[('a', 10), ('b', 20)]", "TypeError"],
    answer: 0,
    explanation: `Iterating a dict — and <code>list()</code> is just iteration — yields the <strong>keys</strong>, not the values. To get values use <code>list(x.values())</code>, for key-value pairs use <code>list(x.items())</code>. This catches people who expect <code>list(d)</code> to give them all the data.`
  },
  {
    id: 58, category: 'types', difficulty: 'easy',
    code: `nums = [1, 2, 3]
print(nums(0))`,
    question: "What does this print?",
    choices: ['1', '[1]', "TypeError", "SyntaxError"],
    answer: 2,
    explanation: `<code>nums(0)</code> uses <strong>parentheses</strong> — that is call syntax, not index syntax. Since <code>nums</code> is a list and not callable, Python raises <code>TypeError: 'list' object is not callable</code>. Indexing always uses square brackets: <code>nums[0]</code>. This error also appears when you accidentally name a variable after a built-in: e.g. <code>list = [1, 2]</code> then <code>list(x)</code>.`
  },
  {
    id: 59, category: 'types', difficulty: 'easy',
    code: `a = (5,)
b = (5)
print(len(a))
print(len(b))`,
    question: "What does this print?",
    choices: ['1\nTypeError', '1\n1', '1\n5', 'TypeError'],
    answer: 0,
    explanation: `The trailing comma is what makes a tuple — not the parentheses. <code>(5,)</code> is a one-element tuple; <code>len()</code> returns <code>1</code>. <code>(5)</code> is just the integer <code>5</code> in grouping brackets; <code>len(5)</code> raises <code>TypeError</code> because integers have no length. A common fix is to remember: <em>the comma creates the tuple</em>.`
  },
  {
    id: 60, category: 'types', difficulty: 'easy',
    code: `d = {'name': 'Alice'}
print(d.get('age'))`,
    question: "What does this print?",
    choices: ['KeyError', 'None', '0', "''"],
    answer: 1,
    explanation: `<code>dict.get(key)</code> returns <code>None</code> if the key is absent — no exception. You can also provide a fallback: <code>d.get('age', 0)</code> returns <code>0</code>. Use <code>d['key']</code> when you're certain the key exists; use <code>.get()</code> when absence is a normal possibility.`
  },
  {
    id: 61, category: 'types', difficulty: 'easy',
    code: `s = {3, 1, 2, 2, 3}
print(len(s))`,
    question: "What does this print?",
    choices: ['5', '3', '2', 'TypeError'],
    answer: 1,
    explanation: `Sets automatically deduplicate — each value can only appear once. <code>{3, 1, 2, 2, 3}</code> creates a set with three unique elements. This makes sets useful for removing duplicates: <code>list(set(my_list))</code>. Unlike lists, sets are also unordered, so you cannot rely on any particular iteration order.`
  },
  {
    id: 10, category: 'types', difficulty: 'medium',
    code: `print(0.1 + 0.2 == 0.3)`,
    question: "What does this print?",
    choices: ['True', 'False', '0.3', 'TypeError'],
    answer: 1,
    explanation: `Floating-point numbers can't always be represented exactly in binary. <code>0.1 + 0.2</code> actually equals <code>0.30000000000000004</code> due to <strong>IEEE 754 floating-point precision</strong>. Use <code>math.isclose(0.1 + 0.2, 0.3)</code> for approximate comparisons, or the <code>decimal</code> module for exact decimal arithmetic.`
  },
  {
    id: 13, category: 'types', difficulty: 'medium',
    code: `d = {'a': 1, 'b': 2}
print('c' in d)`,
    question: "What does this print?",
    choices: ['None', 'True', 'False', 'KeyError'],
    answer: 2,
    explanation: `The <code>in</code> operator on a <strong>dictionary checks keys</strong>, not values. Since <code>'c'</code> is not a key in <code>d</code>, this returns <code>False</code>. To check values, use <code>'c' in d.values()</code>. Membership testing on a dict is O(1) — very fast — because dicts use a hash table internally.`
  },
  {
    id: 37, category: 'types', difficulty: 'medium',
    code: `x = {}
print(type(x))`,
    question: "What does this print?",
    choices: ["<class 'dict'>", "<class 'set'>", "<class 'object'>", "<class 'list'>"],
    answer: 0,
    explanation: `An empty <code>{}</code> creates a <strong>dict</strong>, not a set. This is a common gotcha. To create an empty set you must use <code>set()</code>. Non-empty sets can use <code>{1, 2, 3}</code> syntax, but <code>{}</code> is reserved for dicts because dictionaries predated sets in Python.`
  },
  {
    id: 38, category: 'types', difficulty: 'medium',
    code: `print(1 < 2 < 3)`,
    question: "What does this print?",
    choices: ['True', 'False', 'TypeError', 'SyntaxError'],
    answer: 0,
    explanation: `Python supports <strong>chained comparisons</strong> that read like mathematical notation. <code>1 < 2 < 3</code> is equivalent to <code>(1 < 2) and (2 < 3)</code>. In most other languages you would have to write the full form. This also works with mixed operators: <code>0 <= x < 10</code> is a common bounds check.`
  },
  {
    id: 65, category: 'types', difficulty: 'medium',
    code: `d = {'a': 1, 'b': 2}
print(sum(d))`,
    question: "What does this print?",
    choices: ['3', '0', 'TypeError', "['a', 'b']"],
    answer: 2,
    explanation: `<code>sum()</code> iterates its argument — and iterating a dict yields its <strong>keys</strong>. Here the keys are strings. <code>sum()</code> starts with <code>0</code> and tries <code>0 + 'a'</code>, which raises <code>TypeError</code>. To sum the values: <code>sum(d.values())</code>. The dict-iterates-keys rule applies everywhere: <code>for x in d</code>, <code>list(d)</code>, <code>sum(d)</code> — all yield keys.`
  },
  {
    id: 66, category: 'types', difficulty: 'medium',
    code: `d = {'a': 1, 'b': 2}
keys = d.keys()
d['c'] = 3
print(len(keys))`,
    question: "What does this print?",
    choices: ['2', '3', 'TypeError', 'KeyError'],
    answer: 1,
    explanation: `<code>dict.keys()</code> returns a <strong>view object</strong>, not a frozen list. It reflects the current state of the dict live — when you add <code>'c'</code>, the view updates too. This is efficient but surprising. To get a static snapshot that won't change: <code>list(d.keys())</code>.`
  },
  {
    id: 68, category: 'types', difficulty: 'medium',
    code: `d = {'a': 1, 'b': 2}
print('a' in d, 1 in d)`,
    question: "What does this print?",
    choices: ['True True', 'True False', 'False True', 'False False'],
    answer: 1,
    explanation: `The <code>in</code> operator on a dict tests <strong>keys</strong>, not values. <code>'a' in d</code> is <code>True</code> because <code>'a'</code> is a key. <code>1 in d</code> is <code>False</code> because <code>1</code> is a value, not a key. To check values: <code>1 in d.values()</code>. On lists, <code>in</code> checks values — so the dict/list behaviour differs and confuses people.`
  },
  {
    id: 39, category: 'types', difficulty: 'hard',
    code: `print(int("3.14"))`,
    question: "What does this print?",
    choices: ['3', '3.14', 'ValueError', 'TypeError'],
    answer: 2,
    explanation: `<code>int()</code> can parse integer strings like <code>"42"</code> but raises <code>ValueError</code> for anything that looks like a float — it won't truncate silently. To convert <code>"3.14"</code> to an integer, go via float: <code>int(float("3.14"))</code> gives <code>3</code>.`
  },
  {
    id: 19, category: 'types', difficulty: 'hard',
    code: `x = (1,)
print(type(x))`,
    question: "What does this print?",
    choices: ["<class 'list'>", "<class 'tuple'>", "<class 'int'>", "<class 'set'>"],
    answer: 1,
    explanation: `A single-element tuple <strong>requires a trailing comma</strong>: <code>(1,)</code>. Without it, <code>(1)</code> is just an integer in parentheses — the parens are for grouping, not for constructing a tuple. The comma is what signals "this is a tuple". <code>type((1))</code> would give <code>&lt;class 'int'&gt;</code>.`
  },
  {
    id: 40, category: 'types', difficulty: 'hard',
    code: `print(round(2.5))`,
    question: "What does this print?",
    choices: ['3', '2', '2.5', '3.0'],
    answer: 1,
    explanation: `Python 3 uses <strong>banker's rounding</strong> (round half to even) rather than the "always round up" rule. <code>round(2.5)</code> gives <code>2</code> (rounds to the nearest even), but <code>round(3.5)</code> gives <code>4</code>. This minimises cumulative rounding bias in statistical calculations — but it surprises almost everyone the first time.`
  },
  {
    id: 67, category: 'types', difficulty: 'medium',
    code: `nums = [3, 1, 2]
nums = nums.sort()
print(nums[0])`,
    question: "What does this print?",
    choices: ['1', '3', 'None', 'TypeError'],
    answer: 3,
    explanation: `<code>list.sort()</code> returns <code>None</code>. Assigning <code>nums = nums.sort()</code> replaces the list with <code>None</code>. Then <code>nums[0]</code> tries to index <code>None</code>, raising <code>TypeError: 'NoneType' object is not subscriptable</code>. This is a two-step trap: first the <strong>in-place</strong> method silently returns nothing, then the subscript blows up. Use <code>nums.sort()</code> alone — never assign the result.`
  },
  {
    id: 79, category: 'types', difficulty: 'easy',
    code: `print(not 0)`,
    question: "What does this print?",
    choices: ['0', 'False', 'True', 'not 0'],
    answer: 2,
    explanation: `<code>not</code> converts its operand to a boolean and flips it. <code>0</code> is falsy, so <code>not 0</code> is <code>True</code>. The same applies to all falsy values: <code>not []</code>, <code>not ""</code>, <code>not None</code> all return <code>True</code>. <code>not</code> always returns an actual <code>bool</code> — unlike <code>and</code> and <code>or</code>, which return one of their operands.`
  },
  {
    id: 80, category: 'types', difficulty: 'easy',
    code: `x = 5
print("big" if x > 3 else "small")`,
    question: "What does this print?",
    choices: ['big', 'small', 'True', 'if x > 3'],
    answer: 0,
    explanation: `Python's ternary (conditional) expression evaluates to the left value when the condition is <code>True</code>, and the right value when it is <code>False</code>. Since <code>5 > 3</code>, the result is <code>"big"</code>. The form is <code>value_if_true if condition else value_if_false</code> — notice the condition is in the middle, which reads naturally in English.`
  },
  {
    id: 81, category: 'types', difficulty: 'easy',
    code: `print(bool(None))`,
    question: "What does this print?",
    choices: ['True', 'None', 'TypeError', 'False'],
    answer: 3,
    explanation: `<code>None</code> is falsy — <code>bool(None)</code> is <code>False</code>. Python's complete list of falsy values: <code>None</code>, <code>False</code>, <code>0</code>, <code>0.0</code>, <code>""</code>, <code>[]</code>, <code>{}</code>, <code>set()</code>, and any object whose <code>__bool__</code> returns <code>False</code>. Everything else is truthy. This matters whenever you write <code>if x:</code> instead of <code>if x is not None:</code> — they are not equivalent.`
  },
  {
    id: 82, category: 'types', difficulty: 'medium',
    code: `print(isinstance(True, int))`,
    question: "What does this print?",
    choices: ['False', 'True', 'TypeError', 'AttributeError'],
    answer: 1,
    explanation: `<code>bool</code> is a <em>subclass</em> of <code>int</code> in Python — <code>True</code> and <code>False</code> are genuine integers (<code>1</code> and <code>0</code>). <code>isinstance()</code> returns <code>True</code> for any class in the object's inheritance chain, not just the exact class. This is why arithmetic like <code>True + True</code> works, and why <code>sum([True, False, True])</code> correctly counts truthy values.`
  },
  {
    id: 83, category: 'types', difficulty: 'medium',
    code: `x = "5"
print(x * 2)`,
    question: "What does this print?",
    choices: ['10', '55', "['5', '5']", 'TypeError'],
    answer: 1,
    explanation: `<code>*</code> on a string means <strong>repetition</strong>, not arithmetic. <code>"5" * 2</code> gives the string <code>"55"</code>. The value is still a string throughout — no conversion happens. To do arithmetic, you need to convert first: <code>int(x) * 2</code> gives <code>10</code>. The repetition operator works identically on lists: <code>[0] * 3</code> gives <code>[0, 0, 0]</code>.`
  },
  {
    id: 84, category: 'types', difficulty: 'medium',
    code: `print(0 or "hello")`,
    question: "What does this print?",
    choices: ['True', 'False', 'hello', '0'],
    answer: 2,
    explanation: `Python's <code>or</code> does not return <code>True</code> or <code>False</code> — it returns one of its actual operands. Specifically, it returns the <strong>first truthy operand</strong>, or the last operand if all are falsy. <code>0</code> is falsy, so <code>or</code> keeps looking and returns <code>"hello"</code>. This is why the idiom <code>value = x or default</code> works as a fallback pattern.`
  },
  {
    id: 85, category: 'types', difficulty: 'hard',
    code: `print(1 and 2 and 0 and 99)`,
    question: "What does this print?",
    choices: ['True', 'False', '99', '0'],
    answer: 3,
    explanation: `<code>and</code> returns the <strong>first falsy operand</strong>, or the last operand if all are truthy. Evaluating left to right: <code>1</code> is truthy → continue; <code>2</code> is truthy → continue; <code>0</code> is falsy → return <code>0</code> immediately. <code>99</code> is never evaluated — this is <em>short-circuit evaluation</em>. Short-circuiting is also why <code>x and x.method()</code> is safe even when <code>x</code> might be <code>None</code>.`
  },
  {
    id: 86, category: 'types', difficulty: 'hard',
    code: `a = b = []
a.append(1)
print(b)`,
    question: "What does this print?",
    choices: ['[]', '[1]', 'None', 'TypeError'],
    answer: 1,
    explanation: `Chained assignment <code>a = b = []</code> binds <em>both</em> names to the <strong>same single list object</strong>. It does not create two separate empty lists. When you mutate via <code>a</code>, <code>b</code> reflects the change because they are the same object. The safe way to create independent lists: <code>a = []</code> then <code>b = []</code> on separate lines — each literal creates a new object.`
  },

  {
    id: 132, category: 'types', difficulty: 'easy',
    code:
`n = 7
if (score := n * 3) > 20:
    print(score)`,
    question: "What does this print?",
    choices: ['7', '21', 'True', 'Nothing is printed'],
    answer: 1,
    explanation: `The walrus operator <code>:=</code> assigns and evaluates in one step. <code>(score := n * 3)</code> sets <code>score = 21</code> and the expression evaluates to <code>21</code>. Since <code>21 > 20</code> is true, the block runs and prints <code>21</code>. Unlike a regular assignment, <code>:=</code> can appear inside expressions such as <code>if</code> conditions.`,
  },

  {
    id: 133, category: 'types', difficulty: 'easy',
    code:
`items = []
level = 0
name = 'quest'
print(bool(items), bool(level), bool(name))`,
    question: "What does this print?",
    choices: ['True True True', 'False False True', 'False True False', 'True False True'],
    answer: 1,
    explanation: `In Python, <strong>falsy</strong> values include empty containers (<code>[]</code>, <code>{}</code>, <code>()</code>), zero (<code>0</code>, <code>0.0</code>), <code>None</code>, and empty strings. Everything else is truthy. An empty list is falsy, zero is falsy, but any non-empty string — including <code>'quest'</code> — is truthy.`,
  },

  {
    id: 134, category: 'types', difficulty: 'medium',
    code:
`x = 3.0
print(x == 3, type(x) == int)`,
    question: "What does this print?",
    choices: ['True True', 'False False', 'True False', 'False True'],
    answer: 2,
    explanation: `<code>==</code> compares values across compatible types: <code>3.0 == 3</code> is <code>True</code> because Python promotes the int to float for the comparison. But <code>type(x) == int</code> is <code>False</code> — <code>x</code> is a <code>float</code>, not an <code>int</code>. Value equality does not imply type equality.`,
  },

  {
    id: 135, category: 'types', difficulty: 'medium',
    code:
`x = 5
print(1 < x < 10, 10 > x > 1)`,
    question: "What does this print?",
    choices: ['True True', 'True False', 'False True', 'False False'],
    answer: 0,
    explanation: `Python allows <strong>chained comparisons</strong> that read like mathematical notation. <code>1 < x < 10</code> is equivalent to <code>(1 < x) and (x < 10)</code> — both hold for <code>x = 5</code>. <code>10 > x > 1</code> is the same range written in descending order. Each intermediate value is evaluated only once.`,
  },

  {
    id: 136, category: 'types', difficulty: 'hard',
    code:
`x = (1, 2, 3)
y = x
x += (4,)
print(len(y))`,
    question: "What does this print?",
    choices: ['4', '3', '1', 'TypeError'],
    answer: 1,
    explanation: `Tuples are <strong>immutable</strong> — <code>x += (4,)</code> cannot extend the existing tuple in place. Instead it creates a brand-new tuple <code>(1, 2, 3, 4)</code> and <strong>rebinds</strong> <code>x</code> to it. <code>y</code> still points to the original 3-element tuple, so <code>len(y)</code> is <code>3</code>. Compare this with <code>list += [4]</code>, which mutates in place.`,
  },

  {
    id: 137, category: 'types', difficulty: 'hard',
    code:
`a = b = []
a.append(1)
print(b)`,
    question: "What does this print?",
    choices: ['[]', '[1]', 'None', 'NameError'],
    answer: 1,
    explanation: `<code>a = b = []</code> creates one list and makes <em>both</em> names point to it — this is chained assignment, not two separate lists. <code>a.append(1)</code> mutates that shared list, so <code>b</code> reflects the change. To get two independent lists, use <code>a = []; b = []</code> on separate lines.`,
  },

  {
    id: 183, category: 'types', difficulty: 'easy',
    code:
`print(7 / 2)`,
    question: "What does this print?",
    choices: ['3', '3.5', '3.0', 'TypeError'],
    answer: 1,
    explanation: `In Python 3, <code>/</code> always performs <strong>true division</strong> and returns a <code>float</code>, even when both operands are integers and the result is whole. <code>7 / 2</code> → <code>3.5</code>. This changed from Python 2, where <code>/</code> between integers did floor division. Use <code>//</code> for integer (floor) division: <code>7 // 2</code> → <code>3</code>.`,
  },

  {
    id: 184, category: 'types', difficulty: 'easy',
    code:
`print(int(9.9))`,
    question: "What does this print?",
    choices: ['9', '10', '9.9', 'TypeError'],
    answer: 0,
    explanation: `<code>int()</code> <strong>truncates</strong> toward zero — it drops the decimal part without rounding. <code>int(9.9)</code> → <code>9</code>, not <code>10</code>. Similarly <code>int(-9.9)</code> → <code>-9</code>. This differs from <code>round()</code> (nearest even) and <code>math.floor()</code> (always down). Use <code>round()</code> if you want conventional rounding.`,
  },

  {
    id: 185, category: 'types', difficulty: 'medium',
    code:
`print(type(10 / 2))`,
    question: "What does this print?",
    choices: ["<class 'int'>", "<class 'float'>", "<class 'bool'>", "TypeError"],
    answer: 1,
    explanation: `<code>10 / 2</code> evaluates to <code>5.0</code>, not <code>5</code> — Python 3's <code>/</code> always returns a <code>float</code>. So <code>type(10 / 2)</code> is <code>float</code>. If you need an integer result, use floor division <code>//</code>: <code>10 // 2</code> → <code>5</code> (type <code>int</code>). This is a frequent source of bugs when the result is fed into a function expecting an integer.`,
  },

  {
    id: 186, category: 'types', difficulty: 'medium',
    code:
`x = 0 or "" or [] or "quest"
print(x)`,
    question: "What does this print?",
    choices: ["'quest'", 'False', '0', 'None'],
    answer: 0,
    explanation: `Python's <code>or</code> operator does not return <code>True</code> or <code>False</code> — it returns the <strong>first truthy value</strong> it finds, or the <strong>last value</strong> if all are falsy. <code>0</code>, <code>""</code>, and <code>[]</code> are all falsy; <code>"quest"</code> is truthy, so it is returned. This pattern (<code>x = value or default</code>) is a common Python idiom for providing fallbacks.`,
  },

  {
    id: 187, category: 'types', difficulty: 'medium',
    code:
`x = 1 and 2 and 3
print(x)`,
    question: "What does this print?",
    choices: ['True', '1', '3', 'False'],
    answer: 2,
    explanation: `Python's <code>and</code> returns the <strong>first falsy value</strong>, or the <strong>last value</strong> if all are truthy. <code>1</code>, <code>2</code>, and <code>3</code> are all truthy, so <code>and</code> evaluates all of them and returns the last one: <code>3</code>. Compare with <code>0 and 2 and 3</code>, which short-circuits at <code>0</code> and returns <code>0</code> without evaluating the rest.`,
  },

  {
    id: 188, category: 'types', difficulty: 'medium',
    code:
`print(bool(0), bool([]), bool("0"))`,
    question: "What does this print?",
    choices: ['False False False', 'False False True', 'True True True', 'False True True'],
    answer: 1,
    explanation: `<code>0</code> and <code>[]</code> (empty list) are falsy. <code>"0"</code> is a <strong>non-empty string</strong> — any string with at least one character is truthy, even if that character is <code>'0'</code>, <code>' '</code>, or <code>'False'</code>. Only the empty string <code>""</code> is falsy. This trips up many beginners who expect <code>bool("0")</code> to behave like <code>bool(0)</code>.`,
  },

  {
    id: 189, category: 'types', difficulty: 'hard',
    code:
`x = 5
y = x
x += 10
print(y)`,
    question: "What does this print?",
    choices: ['5', '10', '15', 'None'],
    answer: 0,
    explanation: `Integers are <strong>immutable</strong>. <code>y = x</code> makes <code>y</code> point to the integer object <code>5</code>. <code>x += 10</code> does <em>not</em> modify that object — it creates a new integer <code>15</code> and <strong>rebinds</strong> <code>x</code> to it. <code>y</code> still points to <code>5</code>, unchanged. This is unlike <code>+=</code> on a list, which mutates in-place and would affect both variables.`,
  },

  {
    id: 190, category: 'types', difficulty: 'hard',
    code:
`q, r = divmod(17, 5)
print(q, r)`,
    question: "What does this print?",
    choices: ['3 2', '3.4 0', '2 3', '3 3'],
    answer: 0,
    explanation: `<code>divmod(a, b)</code> returns a tuple <code>(a // b, a % b)</code> — the quotient and remainder in one call. <code>17 // 5 = 3</code> and <code>17 % 5 = 2</code>. Useful when you need both values without computing each separately. Works on floats too: <code>divmod(7.5, 2.5)</code> → <code>(3.0, 0.0)</code>.`,
  },

];
