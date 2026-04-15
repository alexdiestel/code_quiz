// functions.js — 22 questions — IDs: 16,18,20,41,42,43,44,45,63,64,87,88,89,90,91,92,138,139,140,141,142,143
const PY_FUNCTIONS = [
  {
    id: 41, category: 'functions', difficulty: 'easy',
    code: `def double(x):
    x * 2

print(double(5))`,
    question: "What does this print?",
    choices: ['10', 'None', '5', 'TypeError'],
    answer: 1,
    explanation: `A function with no <code>return</code> statement implicitly returns <code>None</code>. Here <code>x * 2</code> is computed but the result is thrown away — it is not returned. This is a common bug. The fix is to add <code>return x * 2</code>.`
  },
  {
    id: 42, category: 'functions', difficulty: 'medium',
    code: `def show(*args):
    print(type(args))

show(1, 2, 3)`,
    question: "What does this print?",
    choices: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"],
    answer: 1,
    explanation: `<code>*args</code> collects extra positional arguments into a <strong>tuple</strong> — not a list. Because tuples are immutable, you cannot modify <code>args</code> inside the function. <code>**kwargs</code> similarly collects keyword arguments into a <code>dict</code>.`
  },
  {
    id: 43, category: 'functions', difficulty: 'medium',
    code: `words = ["banana", "fig", "apple", "kiwi"]
print(sorted(words, key=len))`,
    question: "What does this print?",
    choices: ["['fig', 'kiwi', 'apple', 'banana']", "['apple', 'banana', 'fig', 'kiwi']", "['banana', 'apple', 'kiwi', 'fig']", 'TypeError'],
    answer: 0,
    explanation: `The <code>key</code> argument takes a function applied to each element before comparison. <code>key=len</code> sorts by string length. Items of equal length keep their original relative order — Python's sort is <strong>stable</strong>. This pattern works with any function: <code>key=str.lower</code>, <code>key=lambda x: x[-1]</code>, etc.`
  },
  {
    id: 44, category: 'functions', difficulty: 'medium',
    code: `print(all([1, "hello", True, [1]]))`,
    question: "What does this print?",
    choices: ['True', 'False', '4', 'TypeError'],
    answer: 0,
    explanation: `<code>all(iterable)</code> returns <code>True</code> if every element is truthy. <code>1</code>, <code>"hello"</code>, <code>True</code>, and <code>[1]</code> (non-empty list) are all truthy. A related function <code>any(iterable)</code> returns <code>True</code> if <em>at least one</em> element is truthy. Both short-circuit — they stop as soon as the result is determined.`
  },
  {
    id: 63, category: 'functions', difficulty: 'medium',
    code: `nums = [3, 1, 2]
nums.sort
print(nums)`,
    question: "What does this print?",
    choices: ['[1, 2, 3]', '[3, 1, 2]', 'None', 'TypeError'],
    answer: 1,
    explanation: `<code>nums.sort</code> without parentheses is just a <strong>reference to the method</strong> — it evaluates to a method object and immediately discards it. Nothing is sorted. No error is raised either, making this a silent no-op. Always use <code>nums.sort()</code> to actually invoke the sort, or <code>sorted(nums)</code> to get a new sorted list.`
  },
  {
    id: 64, category: 'functions', difficulty: 'medium',
    code: `words = ['banana', 'apple', 'fig']
words.sort(key=len)
print(words[0])`,
    question: "What does this print?",
    choices: ['banana', 'apple', 'fig', 'TypeError'],
    answer: 2,
    explanation: `<code>key=len</code> passes the <strong>function itself</strong> as a sorting key — Python calls <code>len(word)</code> on each element internally. No parentheses here is intentional: you are handing Python a function to apply, not calling it yourself. <code>key=len()</code> would immediately raise <code>TypeError</code> because <code>len()</code> with no argument fails. Sorted ascending by length: <code>fig</code>(3) → <code>apple</code>(5) → <code>banana</code>(6).`
  },
  {
    id: 16, category: 'functions', difficulty: 'hard',
    code: `def add_item(item, lst=[]):
    lst.append(item)
    return lst

print(add_item(1))
print(add_item(2))`,
    question: "What does this print?",
    choices: ['[1]\n[2]', '[1]\n[1, 2]', '[1, 2]\n[1, 2]', 'TypeError'],
    answer: 1,
    explanation: `Classic Python gotcha: <strong>mutable default arguments</strong> are evaluated once when the function is defined, not on each call. The same list object is reused every time. The safe fix is <code>lst=None</code> then <code>if lst is None: lst = []</code> inside the function. This trips up nearly every Python developer at least once.`
  },
  {
    id: 45, category: 'functions', difficulty: 'hard',
    code: `g = (x ** 2 for x in range(5))
print(type(g))`,
    question: "What does this print?",
    choices: ["<class 'list'>", "<class 'tuple'>", "<class 'generator'>", "<class 'range'>"],
    answer: 2,
    explanation: `Using <code>()</code> instead of <code>[]</code> around a comprehension creates a <strong>generator expression</strong> — a lazy iterator that computes values one at a time, only when asked. It uses almost no memory regardless of size. You can iterate it once with a <code>for</code> loop or call <code>next()</code> on it, but you cannot index it.`
  },
  {
    id: 18, category: 'functions', difficulty: 'hard',
    code: `funcs = []
for i in range(3):
    funcs.append(lambda: i)

print([f() for f in funcs])`,
    question: "What does this print?",
    choices: ['[0, 1, 2]', '[2, 2, 2]', '[0, 0, 0]', 'TypeError'],
    answer: 1,
    explanation: `Lambda closures capture variables by <strong>reference</strong>, not by value. All three lambdas share a reference to the same variable <code>i</code>. By the time they are called the loop has finished and <code>i</code> is <code>2</code>. Fix: use a default argument to snapshot the value — <code>lambda i=i: i</code>.`
  },
  {
    id: 20, category: 'functions', difficulty: 'hard',
    code: `print(list(map(str, [1, 2, 3])))`,
    question: "What does this print?",
    choices: ["['1', '2', '3']", '[1, 2, 3]', "['str', 'str', 'str']", 'TypeError'],
    answer: 0,
    explanation: `<code>map(func, iterable)</code> applies <code>func</code> to every element lazily, returning an iterator. Here it applies <code>str()</code> to each integer. <code>list()</code> materialises the iterator into a list. Result: <code>['1', '2', '3']</code> — note Python prints strings with single quotes by default.`
  },
  {
    id: 87, category: 'functions', difficulty: 'easy',
    code: `def greet(name, msg):
    print(msg, name)

greet(msg="hi", name="Alice")`,
    question: "What does this print?",
    choices: ['hi Alice', 'Alice hi', 'TypeError', 'SyntaxError'],
    answer: 0,
    explanation: `Keyword arguments can be passed in <strong>any order</strong>. <code>greet(msg="hi", name="Alice")</code> is identical in effect to <code>greet("Alice", "hi")</code>. Using keyword arguments at the call site makes code more readable and immune to positional reordering in the function signature — a good habit when a function has three or more parameters.`
  },
  {
    id: 88, category: 'functions', difficulty: 'medium',
    code: `def add(a, b):
    return a + b

print(add(1, 2, 3))`,
    question: "What does this print?",
    choices: ['3', '6', 'TypeError', 'SyntaxError'],
    answer: 2,
    explanation: `Python raises <code>TypeError</code> immediately if a function is called with the wrong number of arguments. <code>add()</code> expects exactly 2 positional arguments but received 3. The error message is explicit: <em>"add() takes 2 positional arguments but 3 were given"</em>. To accept a variable number of arguments, use <code>*args</code>.`
  },
  {
    id: 89, category: 'functions', difficulty: 'medium',
    code: `def outer():
    x = 10
    def inner():
        print(x)
    inner()

outer()`,
    question: "What does this print?",
    choices: ['10', 'None', 'NameError', 'UnboundLocalError'],
    answer: 0,
    explanation: `Inner functions can read variables from their <em>enclosing scope</em> — this is a <strong>closure</strong>. When <code>inner()</code> looks up <code>x</code>, Python checks: inner's locals (not there), then outer's locals (found: <code>10</code>). The enclosing scope sits between local and global in Python's LEGB lookup chain: Local → Enclosing → Global → Built-in.`
  },
  {
    id: 90, category: 'functions', difficulty: 'medium',
    code: `def total(n):
    if n == 0:
        return 0
    return n + total(n - 1)

print(total(4))`,
    question: "What does this print?",
    choices: ['10', '4', '0', 'RecursionError'],
    answer: 0,
    explanation: `Each call defers its addition until the base case is reached: <code>total(4)</code> → <code>4 + total(3)</code> → <code>4 + 3 + total(2)</code> → <code>4 + 3 + 2 + total(1)</code> → <code>4 + 3 + 2 + 1 + total(0)</code> → <code>4+3+2+1+0 = 10</code>. Every recursive function needs a base case to stop. Without <code>if n == 0: return 0</code>, this would run until Python's call-stack limit and raise <code>RecursionError</code>.`
  },
  {
    id: 91, category: 'functions', difficulty: 'hard',
    code: `def outer():
    x = 0
    def inner():
        nonlocal x
        x += 1
    inner()
    inner()
    print(x)

outer()`,
    question: "What does this print?",
    choices: ['0', '1', '2', 'UnboundLocalError'],
    answer: 2,
    explanation: `<code>nonlocal</code> tells Python that <code>x</code> refers to the variable in the nearest <em>enclosing</em> scope (outer's <code>x</code>), not a new local. Without it, <code>x += 1</code> (which reads <code>x</code> before writing it) would raise <code>UnboundLocalError</code> — Python would see the assignment and mark <code>x</code> as local, then fail to read it. Each <code>inner()</code> call increments the shared <code>x</code> from <code>0</code> to <code>1</code> to <code>2</code>.`
  },
  {
    id: 92, category: 'functions', difficulty: 'hard',
    code: `f = lambda x, y: x if x > y else y
print(f(3, 7))`,
    question: "What does this print?",
    choices: ['3', '7', 'True', 'TypeError'],
    answer: 1,
    explanation: `This lambda returns the larger of two values — an inline max. The body after <code>:</code> must be a single expression; a ternary fits perfectly. <code>f(3, 7)</code>: is <code>3 > 7</code>? No → return <code>y = 7</code>. Lambdas cannot contain statements (<code>if</code> blocks, loops, <code>return</code>), only expressions — which is why the ternary <em>expression</em> is used here instead of an <code>if</code> <em>statement</em>.`
  },

  {
    id: 138, category: 'functions', difficulty: 'easy',
    code:
`def add(x, y):
    x + y

print(add(3, 4))`,
    question: "What does this print?",
    choices: ['7', '0', 'None', 'TypeError'],
    answer: 2,
    explanation: `The function computes <code>x + y</code> but never returns it — the result is discarded. A Python function with no <code>return</code> statement (or a bare <code>return</code>) implicitly returns <code>None</code>. This is a common source of bugs: the expression on its own line is valid syntax, it just doesn't do anything useful.`,
  },

  {
    id: 139, category: 'functions', difficulty: 'easy',
    code:
`def total(*args):
    return sum(args)

print(total(1, 2, 3, 4))`,
    question: "What does this print?",
    choices: ['10', '[1, 2, 3, 4]', '(1, 2, 3, 4)', 'TypeError'],
    answer: 0,
    explanation: `The <code>*args</code> syntax collects all positional arguments into a <strong>tuple</strong>. Inside the function, <code>args</code> is <code>(1, 2, 3, 4)</code>. <code>sum()</code> works on any iterable including tuples, so <code>sum(args)</code> returns <code>10</code>. You can call a <code>*args</code> function with any number of positional arguments, including zero.`,
  },

  {
    id: 140, category: 'functions', difficulty: 'medium',
    code:
`def power(base, exp=2):
    return base ** exp

print(power(3), power(2, 10))`,
    question: "What does this print?",
    choices: ['9 20', '6 20', '9 1024', '6 1024'],
    answer: 2,
    explanation: `<code>exp=2</code> is a default argument — used when the caller omits it. <code>power(3)</code> computes <code>3 ** 2 = 9</code>. <code>power(2, 10)</code> overrides the default, computing <code>2 ** 10 = 1024</code>. Python's <code>**</code> operator is <strong>exponentiation</strong> and works on arbitrarily large integers without overflow.`,
  },

  {
    id: 141, category: 'functions', difficulty: 'medium',
    code:
`double = lambda n: n * 2
result = list(map(double, [1, 2, 3]))
print(result)`,
    question: "What does this print?",
    choices: ['[2, 4, 6]', '[1, 2, 3]', '<map object>', '[2, 2, 2]'],
    answer: 0,
    explanation: `<code>map(f, iterable)</code> applies <code>f</code> to each element lazily, returning a <strong>map object</strong> (an iterator). Wrapping it with <code>list()</code> forces evaluation. The lambda doubles each value: 1→2, 2→4, 3→6. Without the <code>list()</code> call, printing would show <code>&lt;map object at 0x...&gt;</code>.`,
  },

  {
    id: 142, category: 'functions', difficulty: 'medium',
    code:
`def outer():
    x = 10
    def inner():
        return x * 2
    return inner()

print(outer())`,
    question: "What does this print?",
    choices: ['10', '20', 'None', 'NameError'],
    answer: 1,
    explanation: `<code>inner</code> is a nested function with access to <code>x</code> from <code>outer</code>'s local scope — a <strong>closure</strong>. The inner function "closes over" variables from the enclosing scope and can read them even though they are not its own local variables. <code>outer()</code> calls <code>inner()</code> and returns its result: <code>10 * 2 = 20</code>.`,
  },

  {
    id: 143, category: 'functions', difficulty: 'hard',
    code:
`funcs = [lambda: i for i in range(3)]
print(funcs[0](), funcs[1](), funcs[2]())`,
    question: "What does this print?",
    choices: ['0 1 2', '2 2 2', '0 0 0', '1 2 3'],
    answer: 1,
    explanation: `Each lambda captures the <em>variable</em> <code>i</code>, not its value at creation time. By the time any lambda is called, the loop has finished and <code>i</code> holds its final value: <code>2</code>. This is called <strong>late binding</strong>. Fix: use a default argument — <code>lambda i=i: i</code> — which captures the value at definition time rather than at call time.`,
  },

];
