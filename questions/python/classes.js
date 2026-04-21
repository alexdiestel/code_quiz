// classes.js — 15 questions — IDs: 271-285
const PY_CLASSES = [
  {
    id: 271, category: 'classes', difficulty: 'easy',
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
    id: 272, category: 'classes', difficulty: 'easy',
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
    id: 273, category: 'classes', difficulty: 'easy',
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
    id: 274, category: 'classes', difficulty: 'easy',
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
];
