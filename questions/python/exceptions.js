// exceptions.js — 16 questions — IDs: 286-297, 365-368
const PY_EXCEPTIONS = [
  {
    id: 286, category: 'exceptions', difficulty: 'medium',
    code: `try:
    x = int("abc")
except ValueError:
    print("caught")`,
    question: "What does this print?",
    choices: ["caught", "ValueError", "Nothing", "abc"],
    answer: 0,
    explanation: `<code>int("abc")</code> raises a <code>ValueError</code> because <code>"abc"</code> cannot be converted to an integer. The <code>except ValueError</code> clause catches it and the code inside runs. Without the try/except the program would crash.`,
  },
  {
    id: 287, category: 'exceptions', difficulty: 'medium',
    code: `try:
    result = 10 / 0
except ZeroDivisionError:
    result = -1
finally:
    print(result)`,
    question: "What does this print?",
    choices: ["-1", "10", "0", "ZeroDivisionError"],
    answer: 0,
    explanation: `The <code>finally</code> block always runs — whether or not an exception occurred. <code>10 / 0</code> raises <code>ZeroDivisionError</code>, the except clause sets <code>result = -1</code>, then <code>finally</code> prints it. <code>finally</code> is commonly used for cleanup (closing files, releasing locks).`,
  },
  {
    id: 288, category: 'exceptions', difficulty: 'medium',
    code: `try:
    x = 1
except Exception:
    print("error")
else:
    print("ok")`,
    question: "What does this print?",
    choices: ["ok", "error", "ok\nerror", "Nothing"],
    answer: 0,
    explanation: `The <code>else</code> clause in a try/except runs only when <em>no</em> exception was raised in the try block. Since <code>x = 1</code> succeeds, the else branch executes and prints <code>"ok"</code>. This keeps success-path code separate from the error-handling code.`,
  },
  {
    id: 289, category: 'exceptions', difficulty: 'medium',
    code: `try:
    raise ValueError("oops")
except ValueError as e:
    print(str(e))`,
    question: "What does this print?",
    choices: ["oops", "ValueError", "ValueError: oops", "None"],
    answer: 0,
    explanation: `<code>raise ValueError("oops")</code> creates and raises a <code>ValueError</code> with the message <code>"oops"</code>. The <code>as e</code> binds the exception object to <code>e</code>. <code>str(e)</code> returns just the message string — not the class name.`,
  },
  {
    id: 290, category: 'exceptions', difficulty: 'medium',
    code: `def divide(a, b):
    try:
        return a / b
    finally:
        print("cleanup")

print(divide(10, 2))`,
    question: "What does this print?",
    choices: ["cleanup\n5.0", "5.0\ncleanup", "cleanup", "5.0"],
    answer: 0,
    explanation: `<code>finally</code> runs before the function actually returns. The <code>return</code> value is saved, <code>finally</code> executes and prints <code>"cleanup"</code>, then the saved value <code>5.0</code> is returned and printed by the outer <code>print()</code>.`,
  },
  {
    id: 291, category: 'exceptions', difficulty: 'medium',
    code: `try:
    open("nonexistent.txt")
except (FileNotFoundError, PermissionError) as e:
    print(type(e).__name__)`,
    question: "What does this print?",
    choices: ["FileNotFoundError", "IOError", "OSError", "PermissionError"],
    answer: 0,
    explanation: `A tuple of exception types in one <code>except</code> clause catches any of them. <code>open()</code> on a missing file raises <code>FileNotFoundError</code>. <code>type(e).__name__</code> gives the class name as a string. <code>FileNotFoundError</code> is actually a subclass of <code>OSError</code>, but the specific type is reported here.`,
  },
  {
    id: 292, category: 'exceptions', difficulty: 'medium',
    code: `class AppError(Exception):
    pass

try:
    raise AppError("bad input")
except Exception as e:
    print(isinstance(e, AppError))`,
    question: "What does this print?",
    choices: ["True", "False", "AppError", "TypeError"],
    answer: 0,
    explanation: `Custom exceptions subclass <code>Exception</code>, so they are caught by <code>except Exception</code>. <code>isinstance(e, AppError)</code> returns <code>True</code> because <code>e</code> is an instance of <code>AppError</code>, which is a subclass of <code>Exception</code>. This shows the exception hierarchy is just regular class inheritance.`,
  },
  {
    id: 293, category: 'exceptions', difficulty: 'medium',
    code: `def f():
    try:
        raise ValueError("v")
    except ValueError:
        raise RuntimeError("r") from None

try:
    f()
except RuntimeError as e:
    print(e)`,
    question: "What does this print?",
    choices: ["r", "v", "v\nr", "ValueError: v"],
    answer: 0,
    explanation: `<code>raise X from None</code> explicitly suppresses the original exception context. Without <code>from None</code>, Python would show both <code>ValueError</code> and <code>RuntimeError</code> in the traceback as chained exceptions. The caller only sees the <code>RuntimeError("r")</code>.`,
  },
  {
    id: 294, category: 'exceptions', difficulty: 'medium',
    code: `x = -5
assert x > 0, "x must be positive"
print("done")`,
    question: "What does this print?",
    choices: ["AssertionError: x must be positive", "done", "False", "None"],
    answer: 0,
    explanation: `<code>assert condition, message</code> raises <code>AssertionError</code> with the given message when the condition is false. Since <code>-5 > 0</code> is <code>False</code>, the assert fires and <code>"done"</code> is never reached. Assertions are typically used for sanity checks during development and can be disabled globally with <code>python -O</code>.`,
  },
  {
    id: 295, category: 'exceptions', difficulty: 'hard',
    code: `try:
    try:
        raise ValueError("inner")
    finally:
        raise RuntimeError("finally")
except RuntimeError as e:
    print(e)`,
    question: "What does this print?",
    choices: ["finally", "inner", "ValueError: inner", "RuntimeError: finally"],
    answer: 0,
    explanation: `When a <code>finally</code> block raises its own exception, the original exception (<code>ValueError</code>) is discarded and the new one (<code>RuntimeError</code>) propagates instead. The outer <code>except RuntimeError</code> catches it and prints its message <code>"finally"</code>.`,
  },
  {
    id: 296, category: 'exceptions', difficulty: 'hard',
    code: `def risky():
    try:
        return 1
    finally:
        return 2

print(risky())`,
    question: "What does this print?",
    choices: ["2", "1", "None", "RuntimeError"],
    answer: 0,
    explanation: `If <code>finally</code> contains a <code>return</code>, it overrides the <code>return</code> in the <code>try</code> block. The function exits from <code>finally</code> with <code>2</code>, and the <code>return 1</code> is silently discarded. This is a well-known Python gotcha — returning from <code>finally</code> also suppresses any exception.`,
  },
  {
    id: 297, category: 'exceptions', difficulty: 'hard',
    code: `class CM:
    def __enter__(self):
        print("enter")
        return self

    def __exit__(self, exc_type, exc_val, tb):
        print("exit")
        return True

with CM():
    raise ValueError("oops")

print("after")`,
    question: "What does this print?",
    choices: ["enter\nexit\nafter", "enter\nexit", "enter\nValueError\nexit", "enter"],
    answer: 0,
    explanation: `<code>__exit__</code> receives the exception info. Returning <code>True</code> suppresses the exception — it is swallowed and execution continues normally after the <code>with</code> block. Returning <code>False</code> or <code>None</code> would let the exception propagate. This is how context managers like <code>suppress()</code> work.`,
  },

  {
    id: 365, category: 'exceptions', difficulty: 'medium',
    code: `from contextlib import suppress

with suppress(ValueError):
    int("not a number")
    print("after int()")

print("done")`,
    question: "What does this print?",
    choices: ['done', 'after int()\ndone', 'ValueError\ndone', 'Nothing'],
    answer: 0,
    explanation: `<code>contextlib.suppress(*exceptions)</code> silently ignores the listed exception types. When <code>int("not a number")</code> raises <code>ValueError</code>, the exception is suppressed and execution jumps to the end of the <code>with</code> block — <code>"after int()"</code> is never printed. Execution continues normally after the block. It is equivalent to a try/except that passes on the matched exception.`,
  },

  {
    id: 366, category: 'exceptions', difficulty: 'medium',
    code: `try:
    raise FileNotFoundError("file.txt")
except OSError as e:
    print(type(e).__name__)`,
    question: "What does this print?",
    choices: ['FileNotFoundError', 'OSError', 'IOError', 'Exception'],
    answer: 0,
    explanation: `An <code>except</code> clause catches the named type <em>and all its subclasses</em>. <code>FileNotFoundError</code> is a subclass of <code>OSError</code>, so it is caught. The bound variable <code>e</code> holds the actual exception object — a <code>FileNotFoundError</code> instance — so <code>type(e).__name__</code> returns the concrete class name, not the one written in the <code>except</code> clause.`,
  },

  {
    id: 367, category: 'exceptions', difficulty: 'hard',
    code: `try:
    try:
        int("bad")
    except ValueError as e:
        raise RuntimeError("conversion failed") from e
except RuntimeError as e:
    print(e)
    print(type(e.__cause__).__name__)`,
    question: "What does this print?",
    choices: ['conversion failed\nValueError', 'ValueError\nRuntimeError', 'conversion failed\nNone', 'RuntimeError\nValueError'],
    answer: 0,
    explanation: `<code>raise X from e</code> explicitly chains exceptions: it sets <code>X.__cause__</code> to <code>e</code> and marks the chain as explicit. The outer handler catches <code>RuntimeError</code> and prints its message, then inspects <code>e.__cause__</code> — the original <code>ValueError</code>. Use <code>raise X from None</code> to suppress the chain entirely and hide the original cause.`,
  },

  {
    id: 368, category: 'exceptions', difficulty: 'hard',
    code: `def f():
    try:
        raise ValueError("oops")
    finally:
        return 42

print(f())`,
    question: "What does this print?",
    choices: ['42', 'ValueError: oops', 'None', '0'],
    answer: 0,
    explanation: `A <code>return</code> inside <code>finally</code> <strong>suppresses any in-flight exception</strong> and causes the function to return normally. The <code>ValueError</code> is silently discarded — no traceback, no propagation. This is a well-known footgun: returning from <code>finally</code> swallows exceptions. A <code>break</code> or <code>continue</code> in <code>finally</code> has the same swallowing effect.`,
  },
];
