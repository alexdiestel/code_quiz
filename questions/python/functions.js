// functions.js — 59 questions — IDs: 16,18,20,41,42,43,44,45,63,64,87,88,89,90,91,92,138,139,140,141,142,143,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,233,234,235,236,237,238,239,240,315,316,317,318,319,320,345,346,347,348,349,350,351,352
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

  {
    id: 191, category: 'functions', difficulty: 'easy',
    code:
`def square(n):
    return n * n

print(square(7))`,
    question: "What does this print?",
    choices: ['14', '49', '7', 'None'],
    answer: 1,
    explanation: `<code>square(7)</code> calls the function with <code>n = 7</code>. The body computes <code>7 * 7 = 49</code> and returns it. <code>print()</code> then displays <code>49</code>. This is the most basic function pattern: receive input, compute, return output. Note that the <code>return</code> statement is what makes the value available to the caller.`,
  },

  {
    id: 192, category: 'functions', difficulty: 'easy',
    code:
`def greet():
    return "hello"

f = greet
print(f())`,
    question: "What does this print?",
    choices: ["'hello'", 'None', 'TypeError', 'NameError'],
    answer: 0,
    explanation: `In Python, functions are <strong>first-class objects</strong> — they can be assigned to variables, passed as arguments, and stored in data structures. <code>f = greet</code> makes <code>f</code> point to the same function object as <code>greet</code>. Calling <code>f()</code> is identical to calling <code>greet()</code>. Notice there are no parentheses in the assignment — <code>f = greet()</code> would call the function and assign its return value instead.`,
  },

  {
    id: 193, category: 'functions', difficulty: 'easy',
    code:
`def minmax(lst):
    return min(lst), max(lst)

lo, hi = minmax([3, 1, 4, 1, 5])
print(lo, hi)`,
    question: "What does this print?",
    choices: ['1 5', '3 5', '1 3', '5 1'],
    answer: 0,
    explanation: `A function can return multiple values by separating them with a comma — Python packs them into a <strong>tuple</strong>. <code>return min(lst), max(lst)</code> returns <code>(1, 5)</code>. The caller unpacks it with <code>lo, hi = ...</code>. This is equivalent to <code>result = minmax(...); lo = result[0]; hi = result[1]</code> but far more concise.`,
  },

  {
    id: 194, category: 'functions', difficulty: 'medium',
    code:
`def info(**kwargs):
    return len(kwargs)

print(info(lang="python", level=3, score=500))`,
    question: "What does this print?",
    choices: ['0', '1', '3', 'TypeError'],
    answer: 2,
    explanation: `<code>**kwargs</code> collects all keyword arguments into a <strong>dict</strong>. Three keyword arguments are passed: <code>lang</code>, <code>level</code>, <code>score</code>. Inside the function, <code>kwargs</code> is <code>{'lang': 'python', 'level': 3, 'score': 500}</code>, so <code>len(kwargs)</code> is <code>3</code>. You can call this function with any number of keyword arguments, including zero.`,
  },

  {
    id: 195, category: 'functions', difficulty: 'medium',
    code:
`nums = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, nums))
print(evens)`,
    question: "What does this print?",
    choices: ['[1, 3, 5]', '[2, 4, 6]', '[True, False, True]', '[0, 0, 0]'],
    answer: 1,
    explanation: `<code>filter(func, iterable)</code> lazily yields elements for which <code>func(element)</code> is truthy. Here the lambda returns <code>True</code> for even numbers. <code>list()</code> forces evaluation. The result contains only even numbers. This is equivalent to <code>[x for x in nums if x % 2 == 0]</code> — the list comprehension is generally preferred for readability.`,
  },

  {
    id: 196, category: 'functions', difficulty: 'medium',
    code:
`keys = ['a', 'b', 'c']
vals = [1, 2, 3]
print(dict(zip(keys, vals)))`,
    question: "What does this print?",
    choices: ["{'a': 1, 'b': 2, 'c': 3}", "['a', 1, 'b', 2, 'c', 3]", "[('a', 1), ('b', 2)]", 'TypeError'],
    answer: 0,
    explanation: `<code>zip(a, b)</code> pairs elements from both iterables: <code>[('a', 1), ('b', 2), ('c', 3)]</code>. Wrapping with <code>dict()</code> interprets each pair as a <code>(key, value)</code> tuple, building a dictionary. This is the idiomatic way to construct a dict from two parallel lists. If the lists differ in length, <code>zip</code> stops at the shorter one.`,
  },

  {
    id: 197, category: 'functions', difficulty: 'medium',
    code:
`result = [x ** 2 for x in range(5)]
print(result)`,
    question: "What does this print?",
    choices: ['[0, 1, 4, 9, 16]', '[1, 4, 9, 16, 25]', '[0, 1, 2, 3, 4]', '[0, 2, 4, 6, 8]'],
    answer: 0,
    explanation: `<code>range(5)</code> produces <code>0, 1, 2, 3, 4</code>. The comprehension squares each: <code>0²=0, 1²=1, 2²=4, 3²=9, 4²=16</code>. List comprehensions are generally faster and more readable than building a list with a <code>for</code> loop and <code>append</code>. The equivalent using <code>map</code> would be <code>list(map(lambda x: x**2, range(5)))</code>.`,
  },

  {
    id: 198, category: 'functions', difficulty: 'medium',
    code:
`scores = [0, 0, 42, 0]
print(any(s > 40 for s in scores))`,
    question: "What does this print?",
    choices: ['True', 'False', '42', 'None'],
    answer: 0,
    explanation: `<code>any(iterable)</code> returns <code>True</code> if <em>at least one</em> element is truthy, and <strong>short-circuits</strong> as soon as it finds one. Here a generator expression is passed — values are tested one by one. At <code>42 > 40</code> it gets <code>True</code> and stops immediately, never evaluating the remaining <code>0</code>. Using a generator (not a list) avoids building the whole sequence in memory first.`,
  },

  {
    id: 199, category: 'functions', difficulty: 'hard',
    code:
`def double(f):
    def wrapper(x):
        return f(x) * 2
    return wrapper

@double
def add_one(x):
    return x + 1

print(add_one(4))`,
    question: "What does this print?",
    choices: ['5', '9', '10', '8'],
    answer: 2,
    explanation: `<code>@double</code> is syntactic sugar for <code>add_one = double(add_one)</code>. When <code>add_one(4)</code> is called, it actually calls <code>wrapper(4)</code>, which calls the original <code>add_one(4)</code> → <code>5</code>, then multiplies by 2 → <code>10</code>. Decorators wrap functions to add behaviour without modifying the original function body — used heavily in frameworks for auth, logging, caching, and routing.`,
  },

  {
    id: 200, category: 'functions', difficulty: 'hard',
    code:
`def counter():
    n = 0
    while True:
        yield n
        n += 1

g = counter()
print(next(g), next(g), next(g))`,
    question: "What does this print?",
    choices: ['0 1 2', '1 2 3', '0 0 0', 'StopIteration'],
    answer: 0,
    explanation: `<code>yield</code> turns a function into a <strong>generator</strong>. Each <code>next(g)</code> resumes execution from after the last <code>yield</code>. First call: yields <code>0</code>, pauses. Second: increments to <code>1</code>, yields <code>1</code>. Third: yields <code>2</code>. The generator retains its local state (<code>n</code>) between calls. This infinite generator never raises <code>StopIteration</code> unless you manually <code>close()</code> it or exhaust it in a for loop.`,
  },

  {
    id: 201, category: 'functions', difficulty: 'hard',
    code:
`from functools import reduce
result = reduce(lambda a, b: a * b, [1, 2, 3, 4])
print(result)`,
    question: "What does this print?",
    choices: ['10', '24', '12', '6'],
    answer: 1,
    explanation: `<code>reduce(f, iterable)</code> applies <code>f</code> cumulatively: <code>f(f(f(1, 2), 3), 4)</code> → <code>((1×2)×3)×4</code> → <code>2×3×4</code> → <code>6×4</code> → <code>24</code>. It computes the product of the list. <code>reduce</code> was removed from Python 3 builtins (it's in <code>functools</code>) because list comprehensions and built-ins like <code>sum()</code> and <code>math.prod()</code> cover most use cases more clearly.`,
  },

  {
    id: 202, category: 'functions', difficulty: 'hard',
    code:
`def make_adder(n):
    return lambda x: x + n

add5 = make_adder(5)
print(add5(3))`,
    question: "What does this print?",
    choices: ['8', '5', '3', 'NameError'],
    answer: 0,
    explanation: `<code>make_adder(5)</code> returns a lambda that adds <code>5</code> to its argument. The lambda "closes over" <code>n = 5</code> — unlike loop lambdas that share a mutable loop variable, here <code>n</code> is a function parameter that gets a fresh binding on each call to <code>make_adder</code>. So <code>add5(3)</code> computes <code>3 + 5 = 8</code>. This pattern is called a <strong>closure factory</strong>.`,
  },

  {
    id: 203, category: 'functions', difficulty: 'hard',
    code:
`def outer(x):
    def inner(y):
        return x * y
    return inner

triple = outer(3)
print(triple(7))`,
    question: "What does this print?",
    choices: ['10', '21', '3', '7'],
    answer: 1,
    explanation: `<code>outer(3)</code> returns <code>inner</code> with <code>x = 3</code> captured in its closure. Calling <code>triple(7)</code> invokes <code>inner(7)</code>, which computes <code>3 * 7 = 21</code>. This is <strong>partial application</strong> — fixing one argument of a two-argument function to create a new single-argument function. Python's <code>functools.partial</code> provides this more generally.`,
  },

  {
    id: 204, category: 'functions', difficulty: 'hard',
    code:
`print(all([]))
print(any([]))`,
    question: "What does this print?",
    choices: ['True\nFalse', 'False\nTrue', 'True\nTrue', 'False\nFalse'],
    answer: 0,
    explanation: `<code>all([])</code> is <strong>vacuously true</strong> — there are no elements to violate the "all are truthy" condition, so it returns <code>True</code>. <code>any([])</code> is <code>False</code> — there are no elements at all, so certainly no truthy ones. These edge cases matter: an empty permission list should probably fail the <code>any()</code> check, not pass it.`,
  },

  {
    id: 205, category: 'functions', difficulty: 'hard',
    code:
`items = ['a', 'b', 'c']
for i, v in enumerate(items, start=10):
    pass
print(i, v)`,
    question: "What does this print?",
    choices: ['2 c', '10 a', '12 c', '3 c'],
    answer: 2,
    explanation: `<code>enumerate(iterable, start=n)</code> pairs each element with a counter starting at <code>n</code>. With <code>start=10</code>: <code>(10, 'a')</code>, <code>(11, 'b')</code>, <code>(12, 'c')</code>. After the loop, <code>i</code> and <code>v</code> hold the values from the <em>last</em> iteration — <code>12</code> and <code>'c'</code>. Loop variables in Python are not scoped to the loop; they leak into the enclosing scope.`,
  },
  {
    id: 233, category: 'functions', difficulty: 'easy',
    code: `def total(*args):
    return sum(args)

print(total(1, 2, 3, 4))`,
    question: "What does this print?",
    choices: ["10", "(1, 2, 3, 4)", "[1, 2, 3, 4]", "TypeError"],
    answer: 0,
    explanation: `<code>*args</code> collects all positional arguments into a tuple. Here <code>args</code> is <code>(1, 2, 3, 4)</code>. <code>sum()</code> accepts any <strong>iterable</strong>, including tuples, so the result is 10.`,
  },
  {
    id: 234, category: 'functions', difficulty: 'medium',
    code: `def count_up(n):
    for i in range(n):
        yield i

gen = count_up(3)
print(next(gen))
print(next(gen))`,
    question: "What does this print?",
    choices: ["0\n1", "0\n1\n2", "1\n2", "0"],
    answer: 0,
    explanation: `<code>yield</code> turns a function into a generator. Each <code>next()</code> call resumes execution until the next <code>yield</code>. The first call yields 0 and pauses; the second yields 1. A fourth call after all values are exhausted would raise <code>StopIteration</code>.`,
  },
  {
    id: 235, category: 'functions', difficulty: 'medium',
    code: `def make_multiplier(n):
    def multiply(x):
        return x * n
    return multiply

triple = make_multiplier(3)
print(triple(5))`,
    question: "What does this print?",
    choices: ["15", "5", "3", "8"],
    answer: 0,
    explanation: `<code>multiply</code> is a closure — it captures <code>n</code> from the enclosing scope and retains access to it even after <code>make_multiplier</code> returns. <code>triple</code> is a function with <code>n</code> permanently bound to 3, so <code>triple(5)</code> returns 15.`,
  },
  {
    id: 236, category: 'functions', difficulty: 'medium',
    code: `def counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

c = counter()
print(c())
print(c())
print(c())`,
    question: "What does this print?",
    choices: ["1\n2\n3", "0\n1\n2", "1\n1\n1", "UnboundLocalError"],
    answer: 0,
    explanation: `<code>nonlocal</code> lets an inner function modify a variable in its enclosing (non-global) scope. Without it, <code>count += 1</code> would treat <code>count</code> as a new local variable and raise <code>UnboundLocalError</code>. Each call increments the shared <code>count</code>.`,
  },
  {
    id: 237, category: 'functions', difficulty: 'hard',
    code: `funcs = [lambda: i for i in range(3)]
print(funcs[0]())
print(funcs[1]())`,
    question: "What does this print?",
    choices: ["2\n2", "0\n1", "0\n0", "1\n2"],
    answer: 0,
    explanation: `All three lambdas close over the same variable <code>i</code>, not its value at creation time. After the loop finishes <code>i</code> is 2, and every lambda returns 2 when called. To capture the current value use a default argument: <code>lambda i=i: i</code>.`,
  },
  {
    id: 238, category: 'functions', difficulty: 'medium',
    code: `words = ["banana", "fig", "apple", "date"]
print(sorted(words, key=len))`,
    question: "What does this print?",
    choices: [
      "['fig', 'date', 'apple', 'banana']",
      "['apple', 'banana', 'date', 'fig']",
      "['fig', 'apple', 'date', 'banana']",
      "['banana', 'apple', 'date', 'fig']",
    ],
    answer: 0,
    explanation: `<code>key=len</code> sorts by string length: fig (3), date (4), apple (5), banana (6). Python's sort is <strong>stable</strong> — words of equal length keep their original relative order.`,
  },
  {
    id: 239, category: 'functions', difficulty: 'medium',
    code: `nums = [1, 2, 3, 4]
result = list(map(lambda x: x ** 2, nums))
print(result)`,
    question: "What does this print?",
    choices: ["[1, 4, 9, 16]", "[1, 2, 3, 4]", "[2, 4, 6, 8]", "[2, 3, 4, 5]"],
    answer: 0,
    explanation: `<code>map(func, iterable)</code> applies <code>func</code> to each element lazily. Wrapping with <code>list()</code> forces evaluation. Each element is squared: 1²=1, 2²=4, 3²=9, 4²=16.`,
  },
  {
    id: 240, category: 'functions', difficulty: 'hard',
    code: `gen = (x * 2 for x in range(3))
print(next(gen))
print(sum(gen))`,
    question: "What does this print?",
    choices: ["0\n6", "0\n8", "0\n10", "0\n4"],
    answer: 0,
    explanation: `<code>next(gen)</code> advances the <strong>generator expression</strong> once: <code>0 * 2 = 0</code>. The generator is now past the first item. <code>sum(gen)</code> consumes the remainder: <code>1*2 + 2*2 = 2 + 4 = 6</code>. Generators are stateful and can only be iterated once.`,
  },
  {
    id: 315, category: 'functions', difficulty: 'medium',
    code: `def apply(func, values):
    return [func(v) for v in values]

print(apply(abs, [-1, -2, 3]))`,
    question: "What does this print?",
    choices: ["[1, 2, 3]", "[-1, -2, 3]", "[1, 2, -3]", "TypeError"],
    answer: 0,
    explanation: `Functions are <strong>first-class objects</strong> in Python — they can be passed as arguments, returned from other functions, or stored in variables. <code>abs</code> is passed without parentheses (that would call it); <code>apply</code> calls it on each value inside the comprehension.`,
  },
  {
    id: 316, category: 'functions', difficulty: 'medium',
    code: `def outer(x):
    def inner(y):
        return x + y
    return inner

add5 = outer(5)
print(add5(3))
print(add5(10))`,
    question: "What does this print?",
    choices: ["8\n15", "5\n5", "3\n10", "TypeError"],
    answer: 0,
    explanation: `<code>outer(5)</code> returns <code>inner</code> with <code>x=5</code> captured in a <strong>closure</strong>. <code>add5</code> is now a function that always adds 5 to its argument. Each call to <code>add5</code> uses the same captured <code>x</code>. This pattern is called <strong>partial application</strong> — fixing some arguments of a function.`,
  },
  {
    id: 317, category: 'functions', difficulty: 'easy',
    code: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))
print(greet("Bob", "Hi"))`,
    question: "What does this print?",
    choices: ["Hello, Alice!\nHi, Bob!", "Hello, Alice!\nHello, Bob!", "Hi, Alice!\nHi, Bob!", "TypeError"],
    answer: 0,
    explanation: `Default parameter values are used when the caller omits the argument. <code>greet("Alice")</code> uses the default <code>greeting="Hello"</code>. <code>greet("Bob", "Hi")</code> overrides it. Default values are evaluated once at function definition — using mutable defaults (like <code>[]</code>) is a classic trap.`,
  },
  {
    id: 318, category: 'functions', difficulty: 'medium',
    code: `def f(*args, **kwargs):
    print(args)
    print(kwargs)

f(1, 2, x=3, y=4)`,
    question: "What does this print?",
    choices: ["(1, 2)\n{'x': 3, 'y': 4}", "[1, 2]\n{'x': 3, 'y': 4}", "(1, 2)\n[('x', 3), ('y', 4)]", "TypeError"],
    answer: 0,
    explanation: `<code>*args</code> collects extra positional arguments into a <strong>tuple</strong>. <code>**kwargs</code> collects extra keyword arguments into a <strong>dict</strong>. Together they let a function accept any combination of arguments — the basis of many wrapper and decorator patterns.`,
  },
  {
    id: 319, category: 'functions', difficulty: 'hard',
    code: `from functools import reduce

nums = [1, 2, 3, 4, 5]
result = reduce(lambda acc, x: acc + x, nums, 0)
print(result)`,
    question: "What does this print?",
    choices: ["15", "0", "120", "TypeError"],
    answer: 0,
    explanation: `<code>reduce(f, iterable, initial)</code> applies <code>f</code> cumulatively: <code>((((0+1)+2)+3)+4)+5 = 15</code>. The third argument is the initial accumulator value. Without it, the first element is used as the seed. <code>reduce</code> is the functional equivalent of a running total loop.`,
  },
  {
    id: 320, category: 'functions', difficulty: 'hard',
    code: `def make_adder(n):
    return lambda x: x + n

adders = [make_adder(i) for i in range(3)]
print([f(10) for f in adders])`,
    question: "What does this print?",
    choices: ["[10, 11, 12]", "[12, 12, 12]", "[0, 1, 2]", "[10, 10, 10]"],
    answer: 0,
    explanation: `Each call to <code>make_adder(i)</code> creates a new <strong>closure</strong> that captures its own <code>n</code>. This avoids the <strong>late binding</strong> trap: because <code>n</code> is a function parameter (not a loop variable), each lambda captures a different value — 0, 1, 2. The result is three distinct adder functions.`,
  },

  {
    id: 345, category: 'functions', difficulty: 'easy',
    code: `def stats(nums):
    return min(nums), max(nums)

result = stats([3, 1, 4, 1, 5])
print(type(result).__name__)`,
    question: "What does this print?",
    choices: ['tuple', 'list', 'dict', 'int'],
    answer: 0,
    explanation: `Returning multiple values with commas packs them into a <strong>tuple</strong>. <code>return min(nums), max(nums)</code> is identical to <code>return (min(nums), max(nums))</code>. Assigning to a single variable captures the whole tuple; use <code>lo, hi = stats(nums)</code> to unpack it.`,
  },

  {
    id: 346, category: 'functions', difficulty: 'easy',
    code: `def add(a, b, c):
    return a + b + c

nums = [1, 2, 3]
print(add(*nums))`,
    question: "What does this print?",
    choices: ['6', '[1, 2, 3]', 'TypeError', '(1, 2, 3)'],
    answer: 0,
    explanation: `The <code>*</code> operator in a function call <strong>unpacks</strong> the list into positional arguments. <code>add(*[1, 2, 3])</code> is equivalent to <code>add(1, 2, 3)</code>. This is useful for passing a variable-length list to a function that expects fixed positional arguments.`,
  },

  {
    id: 347, category: 'functions', difficulty: 'medium',
    code: `def connect(*, host, port=80):
    return f"{host}:{port}"

print(connect(host="localhost"))`,
    question: "What does this print?",
    choices: ['localhost:80', 'localhost', '80', 'TypeError'],
    answer: 0,
    explanation: `A bare <code>*</code> in the parameter list marks all following parameters as <strong>keyword-only</strong> — they cannot be passed positionally. <code>connect("localhost")</code> would raise <code>TypeError</code>; the caller must write <code>host="localhost"</code>. Default values still work, so <code>port</code> falls back to 80.`,
  },

  {
    id: 348, category: 'functions', difficulty: 'medium',
    code: `def greet(name, greeting):
    return f"{greeting}, {name}!"

params = {"name": "Alice", "greeting": "Hi"}
print(greet(**params))`,
    question: "What does this print?",
    choices: ['Hi, Alice!', 'Alice, Hi!', 'TypeError', 'KeyError'],
    answer: 0,
    explanation: `The <code>**</code> operator in a function call <strong>unpacks a dict</strong> into keyword arguments. Each key becomes a parameter name and its value becomes the argument. This is the dict counterpart of <code>*</code> for sequences — useful for constructing dynamic argument sets at runtime.`,
  },

  {
    id: 349, category: 'functions', difficulty: 'medium',
    code: `nums = range(10)
result = list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, nums)))
print(result)`,
    question: "What does this print?",
    choices: ['[0, 4, 16, 36, 64]', '[0, 1, 4, 9, 16]', '[4, 16, 36, 64]', '[0, 4, 16, 36]'],
    answer: 0,
    explanation: `<code>filter</code> first selects even numbers from 0-9: <code>0, 2, 4, 6, 8</code>. <code>map</code> then squares each: <code>0, 4, 16, 36, 64</code>. Both are lazy — no work happens until <code>list()</code> forces evaluation. The list comprehension equivalent is <code>[x**2 for x in range(10) if x % 2 == 0]</code>.`,
  },

  {
    id: 350, category: 'functions', difficulty: 'medium',
    code: `def evens(n):
    for i in range(n):
        if i % 2 == 0:
            yield i

g = evens(6)
print(list(g))
print(list(g))`,
    question: "What does this print?",
    choices: ['[0, 2, 4]\n[]', '[0, 2, 4]\n[0, 2, 4]', '[]\n[0, 2, 4]', '[0, 2, 4]\n[0, 2, 4, 6]'],
    answer: 0,
    explanation: `Generators are <strong>stateful and single-use</strong>. The first <code>list(g)</code> exhausts the generator. The second call finds it at its end and returns an empty list. To iterate again, create a new generator with another call to <code>evens(6)</code>.`,
  },

  {
    id: 351, category: 'functions', difficulty: 'hard',
    code: `def inner():
    yield 1
    yield 2

def outer():
    yield from inner()
    yield 3

print(list(outer()))`,
    question: "What does this print?",
    choices: ['[1, 2, 3]', '[[1, 2], 3]', '[1, 2]', '[3]'],
    answer: 0,
    explanation: `<code>yield from iterable</code> delegates to a sub-generator, transparently forwarding all its yielded values. <code>yield from inner()</code> yields <code>1</code> then <code>2</code>, then control returns to <code>outer</code> which yields <code>3</code>. It is cleaner than a <code>for</code> loop with <code>yield</code> and also propagates <code>send()</code> and <code>throw()</code> correctly.`,
  },

  {
    id: 352, category: 'functions', difficulty: 'hard',
    code: `def accumulator():
    total = 0
    while True:
        value = yield total
        total += value

g = accumulator()
next(g)
print(g.send(10))
print(g.send(5))`,
    question: "What does this print?",
    choices: ['10\n15', '0\n10', '10\n10', '0\n15'],
    answer: 0,
    explanation: `<code>next(g)</code> starts the generator and runs it to the first <code>yield</code>, which yields <code>total=0</code> (discarded). <code>g.send(10)</code> resumes with <code>value=10</code>, adds to total (now 10), loops back, and yields <code>10</code>. <code>g.send(5)</code> sets <code>value=5</code>, total becomes 15, and yields <code>15</code>. <code>send()</code> is the two-way communication channel of generators.`,
  },

];
