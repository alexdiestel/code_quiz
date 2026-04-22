// decorators.js — 14 questions — IDs: 221-232, 369-370
const PY_DECORATORS = [
  {
    id: 221, category: 'decorators', difficulty: 'hard',
    code: `def loud(func):
    def wrapper():
        return func().upper()
    return wrapper

@loud
def greet():
    return "hello"

print(greet())`,
    question: "What does this print?",
    choices: ["HELLO", "hello", "wrapper()", "TypeError"],
    answer: 0,
    explanation: `<code>@loud</code> is shorthand for <code>greet = loud(greet)</code>. Calling <code>greet()</code> actually runs <code>wrapper()</code>, which calls the original function and applies <code>.upper()</code> to the result. The original function is wrapped, not replaced.`,
  },
  {
    id: 222, category: 'decorators', difficulty: 'hard',
    code: `class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

c = Circle(5)
print(c.radius)`,
    question: "What does this print?",
    choices: ["5", "<property object at 0x...>", "None", "AttributeError"],
    answer: 0,
    explanation: `<code>@property</code> turns a method into a computed attribute. Accessing <code>c.radius</code> calls the getter and returns its value — no parentheses needed at the call site. Without <code>@property</code>, <code>c.radius</code> would return the method object itself.`,
  },
  {
    id: 223, category: 'decorators', difficulty: 'hard',
    code: `class MathUtils:
    @staticmethod
    def square(x):
        return x * x

print(MathUtils.square(4))`,
    question: "What does this print?",
    choices: ["16", "4", "None", "TypeError: missing argument 'self'"],
    answer: 0,
    explanation: `<code>@staticmethod</code> defines a method that belongs to the class but receives no implicit first argument. Unlike regular methods (which receive <code>self</code>) or class methods (which receive <code>cls</code>), static methods are plain functions namespaced inside the class.`,
  },
  {
    id: 224, category: 'decorators', difficulty: 'hard',
    code: `def add_one(func):
    def wrapper(x):
        return func(x) + 1
    return wrapper

def double(func):
    def wrapper(x):
        return func(x) * 2
    return wrapper

@add_one
@double
def value(x):
    return x

print(value(3))`,
    question: "What does this print?",
    choices: ["7", "8", "6", "9"],
    answer: 0,
    explanation: `Decorators apply bottom-up: <code>@double</code> wraps <code>value</code> first, then <code>@add_one</code> wraps that. Equivalent to <code>add_one(double(value))</code>. Calling <code>value(3)</code> runs <code>add_one</code>'s wrapper first — it calls <code>double</code>'s wrapper (3 × 2 = 6), then adds 1 → 7.`,
  },
  {
    id: 225, category: 'decorators', difficulty: 'hard',
    code: `import functools

def my_decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@my_decorator
def calculate(x):
    return x * 2

print(calculate.__name__)`,
    question: "What does this print?",
    choices: ["calculate", "wrapper", "my_decorator", "func"],
    answer: 0,
    explanation: `<code>@functools.wraps(func)</code> copies metadata — including <code>__name__</code> and <code>__doc__</code> — from the wrapped function onto the wrapper. Without it, <code>calculate.__name__</code> would return <code>'wrapper'</code>, making debugging and introspection confusing.`,
  },
  {
    id: 226, category: 'decorators', difficulty: 'hard',
    code: `def my_decorator(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@my_decorator
def calculate(x):
    return x * 2

print(calculate.__name__)`,
    question: "What does this print?",
    choices: ["wrapper", "calculate", "my_decorator", "func"],
    answer: 0,
    explanation: `Without <code>@functools.wraps</code>, the decorator replaces <code>calculate</code> with <code>wrapper</code>. The name <code>calculate</code> now points to the wrapper object, so <code>__name__</code> returns <code>'wrapper'</code>. This is exactly the problem <code>functools.wraps</code> solves.`,
  },
  {
    id: 227, category: 'decorators', difficulty: 'hard',
    code: `class Animal:
    kingdom = "Animalia"

    @classmethod
    def get_kingdom(cls):
        return cls.kingdom

print(Animal.get_kingdom())`,
    question: "What does this print?",
    choices: ["Animalia", "Animal.kingdom", "None", "TypeError"],
    answer: 0,
    explanation: `<code>@classmethod</code> passes the class itself as the first argument (<code>cls</code>) instead of an instance. It can be called directly on the class without creating an object. Unlike <code>@staticmethod</code>, it has access to the class and works correctly when inherited by subclasses.`,
  },
  {
    id: 228, category: 'decorators', difficulty: 'hard',
    code: `def repeat(n):
    def decorator(func):
        def wrapper():
            for _ in range(n):
                func()
        return wrapper
    return decorator

@repeat(3)
def hello():
    print("hi")

hello()`,
    question: "What does this print?",
    choices: ["hi\nhi\nhi", "hi", "3", "None"],
    answer: 0,
    explanation: `<code>@repeat(3)</code> is a decorator factory. <code>repeat(3)</code> is called first and returns a decorator, which is then applied to <code>hello</code>. The inner <code>wrapper</code> closes over <code>n=3</code> and calls the original function three times.`,
  },
  {
    id: 229, category: 'decorators', difficulty: 'hard',
    code: `def a(func):
    def wrapper():
        print("a before")
        func()
        print("a after")
    return wrapper

def b(func):
    def wrapper():
        print("b before")
        func()
        print("b after")
    return wrapper

@a
@b
def hello():
    print("hello")

hello()`,
    question: "What does this print?",
    choices: [
      "a before\nb before\nhello\nb after\na after",
      "b before\na before\nhello\na after\nb after",
      "a before\nhello\na after",
      "b before\nhello\nb after",
    ],
    answer: 0,
    explanation: `Decorators apply bottom-up (<code>b</code> first, then <code>a</code>), but execute outside-in when called. <code>hello()</code> triggers <code>a</code>'s wrapper → calls <code>b</code>'s wrapper → calls original. The "after" prints unwind in reverse, like a call stack.`,
  },
  {
    id: 230, category: 'decorators', difficulty: 'hard',
    code: `class Count:
    def __init__(self, func):
        self.func = func
        self.calls = 0

    def __call__(self, *args, **kwargs):
        self.calls += 1
        return self.func(*args, **kwargs)

@Count
def greet(name):
    return f"Hello, {name}"

greet("Alice")
greet("Bob")
print(greet.calls)`,
    question: "What does this print?",
    choices: ["2", "3", "1", "AttributeError"],
    answer: 0,
    explanation: `A class with <code>__call__</code> can act as a decorator. <code>@Count</code> replaces <code>greet</code> with a <code>Count</code> instance. Each call to <code>greet()</code> invokes <code>__call__</code> and increments <code>self.calls</code>. After two calls, <code>greet.calls</code> is 2.`,
  },
  {
    id: 231, category: 'decorators', difficulty: 'hard',
    code: `class Temperature:
    def __init__(self):
        self._celsius = 0

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        self._celsius = max(value, -273.15)

t = Temperature()
t.celsius = -300
print(t.celsius)`,
    question: "What does this print?",
    choices: ["-273.15", "-300", "0", "AttributeError: can't set attribute"],
    answer: 0,
    explanation: `<code>@celsius.setter</code> defines a setter for the property. Assigning <code>t.celsius = -300</code> calls it, clamping the value to absolute zero via <code>max(-300, -273.15)</code>. Without the setter, the assignment would raise <code>AttributeError</code>.`,
  },
  {
    id: 232, category: 'decorators', difficulty: 'hard',
    code: `def silence(func):
    def wrapper(*args, **kwargs):
        func(*args, **kwargs)
    return wrapper

@silence
def add(a, b):
    return a + b

result = add(3, 4)
print(result)`,
    question: "What does this print?",
    choices: ["None", "7", "0", "TypeError"],
    answer: 0,
    explanation: `<code>wrapper</code> calls <code>func</code> but never <code>return</code>s its result. A Python function with no explicit return statement returns <code>None</code>. This is a common decorator bug — forgetting to propagate the wrapped function's return value.`,
  },

  {
    id: 369, category: 'decorators', difficulty: 'hard',
    code: `def require_positive(func):
    def wrapper(x):
        if x <= 0:
            return None
        return func(x)
    return wrapper

@require_positive
def double(x):
    return x * 2

print(double(5))
print(double(-1))`,
    question: "What does this print?",
    choices: ['10\nNone', '10\n-2', 'None\nNone', '10\n0'],
    answer: 0,
    explanation: `The decorator guards the wrapped function. When <code>x &lt;= 0</code>, the wrapper short-circuits and returns <code>None</code> without calling the original. When <code>x &gt; 0</code>, the call proceeds normally. This pattern is common for input validation, authentication checks, and feature flags — it separates guard logic from business logic.`,
  },

  {
    id: 370, category: 'decorators', difficulty: 'hard',
    code: `def add_label(cls):
    cls.label = cls.__name__.upper()
    return cls

@add_label
class Widget:
    pass

print(Widget.label)`,
    question: "What does this print?",
    choices: ['WIDGET', 'Widget', 'widget', 'AttributeError'],
    answer: 0,
    explanation: `Decorators can target <strong>classes</strong> as well as functions. <code>@add_label</code> is equivalent to <code>Widget = add_label(Widget)</code>. The decorator receives the class object, mutates it by adding a <code>label</code> attribute, and returns the same class. <code>cls.__name__</code> is the string class name as defined in source. Class decorators are used for registration, computed attributes, and enforcing conventions.`,
  },
];
