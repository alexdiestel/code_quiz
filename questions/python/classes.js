// classes.js — 22 questions — IDs: 271-285, 358-364
const PY_CLASSES = [
  {
    id: 271, category: 'classes', difficulty: 'medium',
    code: `class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        return f"{self.name} says woof"

d = Dog("Rex")
print(d.bark())`,
    question: "What does this print?",
    choices: ["Rex says woof", "self.name says woof", "Dog says woof", "AttributeError"],
    answer: 0,
    explanation: `<code>__init__</code> stores <code>name</code> as an instance attribute on <code>self</code>. When <code>bark()</code> is called, <code>self.name</code> resolves to <code>"Rex"</code>. Every method receives the instance as its first argument — by convention named <code>self</code>.`,
  },
  {
    id: 272, category: 'classes', difficulty: 'medium',
    code: `class Counter:
    count = 0

    def increment(self):
        Counter.count += 1

a = Counter()
b = Counter()
a.increment()
b.increment()
print(Counter.count)`,
    question: "What does this print?",
    choices: ["2", "1", "0", "AttributeError"],
    answer: 0,
    explanation: `<code>count</code> is a <strong>class variable</strong> shared by all instances. Both <code>a.increment()</code> and <code>b.increment()</code> modify <code>Counter.count</code> directly, so it ends up as 2. If <code>self.count += 1</code> were used instead, it would create a new instance variable and leave the class variable at 0.`,
  },
  {
    id: 273, category: 'classes', difficulty: 'medium',
    code: `class Animal:
    def speak(self):
        return "..."

class Cat(Animal):
    def speak(self):
        return "meow"

c = Cat()
print(c.speak())`,
    question: "What does this print?",
    choices: ["meow", "...", "None", "AttributeError"],
    answer: 0,
    explanation: `<code>Cat</code> inherits from <code>Animal</code> but <strong>overrides</strong> the <code>speak</code> method. Python always calls the most derived version first — the child class method takes precedence over the parent's.`,
  },
  {
    id: 274, category: 'classes', difficulty: 'medium',
    code: `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"

p = Point(3, 4)
print(p)`,
    question: "What does this print?",
    choices: ["(3, 4)", "<Point object at 0x...>", "Point(3, 4)", "3 4"],
    answer: 0,
    explanation: `<code>__str__</code> defines the human-readable string representation used by <code>print()</code> and <code>str()</code>. Without it, <code>print(p)</code> would show the default <code>&lt;Point object at 0x...&gt;</code> from <code>object.__str__</code>.`,
  },
  {
    id: 275, category: 'classes', difficulty: 'medium',
    code: `class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

d = Dog("Rex", "Husky")
print(d.name, d.breed)`,
    question: "What does this print?",
    choices: ["Rex Husky", "None Husky", "Rex None", "AttributeError"],
    answer: 0,
    explanation: `<code>super().__init__(name)</code> calls the parent class's <code>__init__</code>, which sets <code>self.name</code>. Then <code>self.breed</code> is set in <code>Dog.__init__</code>. Without the <code>super()</code> call, <code>self.name</code> would never be assigned and the attribute wouldn't exist.`,
  },
  {
    id: 276, category: 'classes', difficulty: 'medium',
    code: `class MyList:
    def __init__(self, data):
        self.data = data

    def __len__(self):
        return len(self.data)

    def __getitem__(self, i):
        return self.data[i]

ml = MyList([10, 20, 30])
print(len(ml), ml[1])`,
    question: "What does this print?",
    choices: ["3 20", "3 10", "2 20", "TypeError"],
    answer: 0,
    explanation: `<code>__len__</code> makes <code>len()</code> work on custom objects. <code>__getitem__</code> enables bracket indexing (<code>ml[1]</code>). Implementing these two dunder methods also makes the object iterable — Python will use <code>__getitem__</code> with indices 0, 1, 2… until <code>IndexError</code>.`,
  },
  {
    id: 277, category: 'classes', difficulty: 'medium',
    code: `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

a = Vector(1, 2)
b = Vector(3, 4)
print(a + b)`,
    question: "What does this print?",
    choices: ["Vector(4, 6)", "(4, 6)", "Vector(1, 2, 3, 4)", "TypeError"],
    answer: 0,
    explanation: `<code>__add__</code> defines the behaviour of <code>+</code> for custom objects. <code>a + b</code> calls <code>a.__add__(b)</code>, which returns a new <code>Vector</code>. <code>print()</code> then calls <code>__str__</code> on the result. Operator overloading makes custom types feel native.`,
  },
  {
    id: 278, category: 'classes', difficulty: 'medium',
    code: `class A:
    def hello(self):
        return "A"

class B(A):
    def hello(self):
        return "B"

class C(A):
    def hello(self):
        return "C"

class D(B, C):
    pass

print(D().hello())`,
    question: "What does this print?",
    choices: ["B", "C", "A", "D"],
    answer: 0,
    explanation: `Python resolves methods using the <strong>C3 linearisation</strong> algorithm (MRO). For <code>D(B, C)</code> the order is <code>D → B → C → A</code>. The first class in the MRO that defines <code>hello</code> wins — that's <code>B</code>. Check any class's MRO with <code>D.__mro__</code>.`,
  },
  {
    id: 279, category: 'classes', difficulty: 'medium',
    code: `class Circle:
    def __init__(self, r):
        self._r = r

    @property
    def area(self):
        return 3.14159 * self._r ** 2

c = Circle(3)
print(round(c.area, 2))`,
    question: "What does this print?",
    choices: ["28.27", "9.42", "3.14", "TypeError"],
    answer: 0,
    explanation: `<code>@property</code> lets <code>area</code> be accessed like an attribute (<code>c.area</code>) while executing a method behind the scenes. The value is computed on every access — there is no stored <code>area</code> field. <code>round(28.27433…, 2)</code> gives <code>28.27</code>.`,
  },
  {
    id: 280, category: 'classes', difficulty: 'medium',
    code: `class Foo:
    x = []

    def add(self, val):
        self.x.append(val)

a = Foo()
b = Foo()
a.add(1)
b.add(2)
print(a.x)`,
    question: "What does this print?",
    choices: ["[1, 2]", "[1]", "[2]", "[]"],
    answer: 0,
    explanation: `<code>x = []</code> is a <strong>class variable</strong> — a single list shared by all instances. <code>self.x.append()</code> mutates that shared list rather than creating a new instance attribute. Both <code>a</code> and <code>b</code> see the same list. Compare with <code>self.x = []</code> inside <code>__init__</code>, which gives each instance its own list.`,
  },
  {
    id: 281, category: 'classes', difficulty: 'hard',
    code: `class Meta(type):
    def __new__(mcs, name, bases, namespace):
        namespace['greeting'] = f"Hello from {name}"
        return super().__new__(mcs, name, bases, namespace)

class MyClass(metaclass=Meta):
    pass

print(MyClass.greeting)`,
    question: "What does this print?",
    choices: ["Hello from MyClass", "Hello from Meta", "None", "AttributeError"],
    answer: 0,
    explanation: `A metaclass controls how classes are constructed — it is the "class of a class". <code>Meta.__new__</code> is called when Python processes the <code>class MyClass</code> statement and injects a <code>greeting</code> attribute into the class before it is finalised. The result is a class attribute accessible directly on <code>MyClass</code>.`,
  },
  {
    id: 282, category: 'classes', difficulty: 'hard',
    code: `class Singleton:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

a = Singleton()
b = Singleton()
print(a is b)`,
    question: "What does this print?",
    choices: ["True", "False", "None", "TypeError"],
    answer: 0,
    explanation: `<code>__new__</code> controls object creation (before <code>__init__</code>). By storing the first instance in a class variable and returning it on every subsequent call, only one instance ever exists. <code>a is b</code> checks <strong>identity</strong> — they point to the exact same object in memory.`,
  },
  {
    id: 283, category: 'classes', difficulty: 'hard',
    code: `class A:
    def __init__(self):
        self.val = 10

    def __eq__(self, other):
        return self.val == other.val

    def __hash__(self):
        return hash(self.val)

a1 = A()
a2 = A()
s = {a1, a2}
print(len(s))`,
    question: "What does this print?",
    choices: ["1", "2", "0", "TypeError"],
    answer: 0,
    explanation: `Sets use both <code>__hash__</code> and <code>__eq__</code> to detect duplicates. Both objects have <code>val=10</code>, so they have the same hash and compare equal — the set treats them as one element. If you define <code>__eq__</code> without <code>__hash__</code>, Python sets <code>__hash__ = None</code> making the class unhashable.`,
  },
  {
    id: 284, category: 'classes', difficulty: 'hard',
    code: `class Base:
    def method(self):
        return "Base"

class Child(Base):
    def method(self):
        return super().method() + "+Child"

class GrandChild(Child):
    def method(self):
        return super().method() + "+GrandChild"

print(GrandChild().method())`,
    question: "What does this print?",
    choices: ["Base+Child+GrandChild", "Base+GrandChild", "GrandChild+Child+Base", "Base"],
    answer: 0,
    explanation: `<code>super().method()</code> follows the MRO chain. <code>GrandChild.method()</code> calls <code>Child.method()</code>, which calls <code>Base.method()</code>, which returns <code>"Base"</code>. The results compose as the call stack unwinds: <code>"Base"</code> → <code>"Base+Child"</code> → <code>"Base+Child+GrandChild"</code>.`,
  },
  {
    id: 285, category: 'classes', difficulty: 'hard',
    code: `class Descriptor:
    def __get__(self, obj, objtype=None):
        return 42

class MyClass:
    value = Descriptor()

m = MyClass()
print(m.value)`,
    question: "What does this print?",
    choices: ["42", "None", "<Descriptor object>", "AttributeError"],
    answer: 0,
    explanation: `A descriptor is any object that defines <code>__get__</code> (and optionally <code>__set__</code>/<code>__delete__</code>). When a descriptor is stored as a class attribute, Python calls its <code>__get__</code> on every attribute access. This is the mechanism behind <code>@property</code>, <code>@classmethod</code>, and <code>@staticmethod</code>.`,
  },

  {
    id: 358, category: 'classes', difficulty: 'medium',
    code: `class Item:
    def __repr__(self):
        return "Item(repr)"
    def __str__(self):
        return "Item(str)"

i = Item()
print(str(i))
print(repr(i))`,
    question: "What does this print?",
    choices: ['Item(str)\nItem(repr)', 'Item(repr)\nItem(str)', 'Item(str)\nItem(str)', 'Item(repr)\nItem(repr)'],
    answer: 0,
    explanation: `<code>__str__</code> is called by <code>str()</code> and <code>print()</code> — for human-readable output. <code>__repr__</code> is called by <code>repr()</code> — for an unambiguous developer-facing representation. If only <code>__repr__</code> is defined, it also serves as the fallback for <code>str()</code>. The reverse is not true.`,
  },

  {
    id: 359, category: 'classes', difficulty: 'medium',
    code: `class Date:
    def __init__(self, year, month, day):
        self.year = year
        self.month = month
        self.day = day

    @classmethod
    def from_string(cls, s):
        y, m, d = map(int, s.split("-"))
        return cls(y, m, d)

d = Date.from_string("2024-01-15")
print(d.year)`,
    question: "What does this print?",
    choices: ['2024', '1', '15', 'AttributeError'],
    answer: 0,
    explanation: `<code>@classmethod</code> factories are the standard alternative constructor pattern. <code>cls</code> refers to the class — calling <code>cls(y, m, d)</code> is equivalent to <code>Date(y, m, d)</code>. Using <code>cls</code> instead of a hardcoded name allows subclasses to inherit the factory and receive the correct subclass type back.`,
  },

  {
    id: 360, category: 'classes', difficulty: 'medium',
    code: `class Box:
    def __init__(self):
        self._size = 1

    @property
    def size(self):
        return self._size

    @size.setter
    def size(self, val):
        self._size = val if val > 0 else 1

b = Box()
b.size = -5
print(b.size)`,
    question: "What does this print?",
    choices: ['1', '-5', '0', 'AttributeError'],
    answer: 0,
    explanation: `The <code>@size.setter</code> intercepts assignment and enforces validation — negative values are clamped to 1. The actual value lives in the private <code>_size</code> attribute. This pattern keeps the API clean (simple assignment syntax) while hiding validation logic. Without the setter, <code>b.size = -5</code> would raise <code>AttributeError: can't set attribute</code>.`,
  },

  {
    id: 361, category: 'classes', difficulty: 'medium',
    code: `class Bag:
    def __init__(self, items):
        self.items = items

    def __contains__(self, item):
        return item in self.items

b = Bag([1, 2, 3])
print(2 in b)
print(5 in b)`,
    question: "What does this print?",
    choices: ['True\nFalse', 'False\nTrue', 'True\nTrue', 'TypeError'],
    answer: 0,
    explanation: `Defining <code>__contains__</code> makes the <code>in</code> operator work on your class. <code>2 in b</code> calls <code>b.__contains__(2)</code>. If <code>__contains__</code> is absent but <code>__iter__</code> is defined, Python falls back to iterating and comparing element by element. Without either, <code>in</code> raises <code>TypeError</code>.`,
  },

  {
    id: 362, category: 'classes', difficulty: 'hard',
    code: `class Point:
    __slots__ = ('x', 'y')

    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(1, 2)
try:
    p.z = 3
except AttributeError:
    print("no z")
print(p.x)`,
    question: "What does this print?",
    choices: ['no z\n1', '1\nno z', 'no z', '1'],
    answer: 0,
    explanation: `<code>__slots__</code> declares a fixed set of allowed instance attributes, preventing dynamic creation of new ones. <code>p.z = 3</code> raises <code>AttributeError</code> because <code>'z'</code> is not in <code>__slots__</code>. As a side effect, <code>__slots__</code> removes the per-instance <code>__dict__</code>, which saves memory — useful when creating millions of small objects.`,
  },

  {
    id: 363, category: 'classes', difficulty: 'hard',
    code: `from dataclasses import dataclass

@dataclass
class Point:
    x: float
    y: float

p = Point(1.0, 2.0)
print(p.x + p.y)
print(repr(p))`,
    question: "What does this print?",
    choices: ['3.0\nPoint(x=1.0, y=2.0)', '3.0\n<Point object>', '3.0\nPoint(1.0, 2.0)', 'TypeError'],
    answer: 0,
    explanation: `<code>@dataclass</code> auto-generates <code>__init__</code>, <code>__repr__</code>, and <code>__eq__</code> from the class-level field annotations. The generated <code>__repr__</code> uses the format <code>ClassName(field=value, ...)</code>. This eliminates boilerplate for data-holding classes while remaining fully compatible with regular class features.`,
  },

  {
    id: 364, category: 'classes', difficulty: 'boss',
    code: `class Plugin:
    registry = []

    def __init_subclass__(cls, **kwargs):
        super().__init_subclass__(**kwargs)
        Plugin.registry.append(cls.__name__)

class Alpha(Plugin):
    pass

class Beta(Plugin):
    pass

print(Plugin.registry)`,
    question: "What does this print?",
    choices: ["['Alpha', 'Beta']", "['Plugin', 'Alpha', 'Beta']", '[]', "['Alpha']"],
    answer: 0,
    explanation: `<code>__init_subclass__</code> is called automatically on the <em>base class</em> whenever a new <em>subclass</em> is defined — at class-creation time, not at instantiation. It is a clean hook for plugin registration, auto-wiring, or validation without needing a metaclass. <code>Plugin</code> itself does not trigger it, so it does not appear in the registry.`,
  },
];
