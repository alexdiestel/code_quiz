// boss.js — 7 questions — IDs: 51,52,53,98,99,100,150
const PY_BOSS = [
  {
    id: 51, category: 'functions', difficulty: 'boss',
    code: `x = 10

def f():
    print(x)
    x = 20

f()`,
    question: "What does this print?",
    choices: ['10', '20', 'UnboundLocalError', '10\n20'],
    answer: 2,
    explanation: `When Python compiles a function it scans the <em>entire body</em> for assignments. Because <code>x = 20</code> exists inside <code>f</code>, Python marks <code>x</code> as a <strong>local variable throughout the whole function</strong> — even before the assignment line. So <code>print(x)</code> tries to read a local that hasn't been assigned yet, raising <code>UnboundLocalError</code>. Fix: add <code>global x</code> at the top of <code>f</code>.`
  },
  {
    id: 52, category: 'memory', difficulty: 'boss',
    code: `def grow(lst):
    lst += [99]

data = [1, 2, 3]
grow(data)
print(data)`,
    question: "What does this print?",
    choices: ['[1, 2, 3]', '[1, 2, 3, 99]', '[99]', 'None'],
    answer: 1,
    explanation: `<code>lst += [99]</code> on a list calls <code>__iadd__</code>, which extends the list <strong>in-place</strong> before rebinding <code>lst</code> to the same object. The in-place step mutates the original list that <code>data</code> points to. Contrast with <code>lst = lst + [99]</code>: that creates a <em>new</em> list, rebinds only the local <code>lst</code>, and leaves <code>data</code> untouched. The difference between <code>+=</code> and <code>+</code> on lists is one of Python's most dangerous subtleties.`
  },
  {
    id: 53, category: 'memory', difficulty: 'boss',
    code: `t = ([1, 2],)
try:
    t[0] += [3, 4]
except TypeError:
    pass
print(t[0])`,
    question: "What does this print?",
    choices: ['[1, 2]', '[1, 2, 3, 4]', 'TypeError', '[3, 4]'],
    answer: 1,
    explanation: `<code>t[0] += [3, 4]</code> desugars to <code>t[0] = t[0].__iadd__([3, 4])</code>. Step 1: <code>__iadd__</code> extends the list <strong>in-place</strong> — this succeeds and the list becomes <code>[1, 2, 3, 4]</code>. Step 2: the assignment back to <code>t[0]</code> fails because tuples are <strong>immutable</strong> — this raises <code>TypeError</code>. You get <em>both effects at once</em>: the list is mutated AND an exception is raised. The <code>try/except</code> silences the error, leaving the modified list behind.`
  },
  {
    id: 98, category: 'types', difficulty: 'boss',
    code: `class Counter:
    count = 0

    def inc(self):
        self.count += 1

a = Counter()
b = Counter()
a.inc()
print(b.count)`,
    question: "What does this print?",
    choices: ['0', '1', 'AttributeError', 'TypeError'],
    answer: 0,
    explanation: `<code>self.count += 1</code> desugars to <code>self.count = self.count + 1</code>. The <em>read</em> on the right finds the class variable <code>Counter.count = 0</code>. The <em>write</em> on the left creates an <strong>instance attribute</strong> on <code>a</code> that shadows the class variable — only for <code>a</code>. <code>Counter.count</code> (the class variable) is never touched. <code>b.count</code> still reads the class variable: <code>0</code>. To share a counter across all instances you'd write <code>Counter.count += 1</code> directly.`
  },
  {
    id: 99, category: 'functions', difficulty: 'boss',
    code: `try:
    raise ValueError("oops")
except ValueError as e:
    pass

print(e)`,
    question: "What does this print?",
    choices: ['oops', 'ValueError: oops', 'None', 'NameError'],
    answer: 3,
    explanation: `Python <strong>explicitly deletes</strong> the exception variable when an <code>except</code> block exits — even if no error occurred inside the block. This is by design: exception tracebacks hold a reference to the current frame, which holds <code>e</code>, which holds the traceback — a cycle that prevents garbage collection. Python 3 breaks the cycle by deleting <code>e</code>. To use the exception afterwards, save it first: <code>saved = e</code> inside the block.`
  },
  {
    id: 100, category: 'functions', difficulty: 'boss',
    code: `x = "global"

class MyClass:
    x = "class"
    result = [x for _ in range(1)]

print(MyClass.result[0])`,
    question: "What does this print?",
    choices: ['class', 'global', 'NameError', 'TypeError'],
    answer: 1,
    explanation: `In Python 3, list comprehensions have their own scope — and that scope does <em>not</em> include the class body. When the comprehension looks up <code>x</code>, it skips the class namespace entirely and resolves to the module-level <code>"global"</code>. This changed from Python 2, where class scope was visible inside comprehensions. The same applies to generator expressions and dict/set comprehensions. Class scope is uniquely "invisible" to nested scopes.`
  },

  {
    id: 150, category: 'functions', difficulty: 'boss',
    code:
`def run():
    try:
        return 1
    except:
        return 2
    finally:
        return 3

print(run())`,
    question: "What does `run()` return?",
    choices: ['1', '2', '3', '1 then 3'],
    answer: 2,
    explanation: `A <code>finally</code> block <em>always</em> executes — even when a <code>return</code> was already reached in <code>try</code>. When <code>finally</code> itself contains a <code>return</code>, it <strong>overrides</strong> any earlier return value. The <code>try</code> block's <code>return 1</code> is abandoned before the function actually returns. This is one of the most surprising corners of Python's execution model.`,
  },

];
