// memory.js — 43 questions — IDs: 8,9,21,46,47,48,49,50,93,94,95,96,97,144,145,146,147,148,149,206,207,208,209,210,211,212,213,214,215,216,217,264,265,266,267,268,269,270,353,354,355,356,357
const PY_MEMORY = [
  {
    id: 8, category: 'memory', difficulty: 'medium',
    code: `a = [1, 2, 3]
b = a
b.append(4)
print(a)`,
    question: "What does this print?",
    choices: ['[1, 2, 3]', '[1, 2, 3, 4]', '[4]', 'None'],
    answer: 1,
    explanation: `Lists are <strong>mutable objects</strong> and assignment copies the reference, not the data. <code>b = a</code> makes both variables point to the same list in memory. Modifying <code>b</code> also changes <code>a</code>. To make a real independent copy, use <code>b = a.copy()</code> or <code>b = a[:]</code>.`
  },
  {
    id: 9, category: 'memory', difficulty: 'medium',
    code: `a = [1, 2, 3]
b = a[:]
b.append(4)
print(a)`,
    question: "What does this print?",
    choices: ['[1, 2, 3, 4]', '[1, 2, 3]', '[4]', 'None'],
    answer: 1,
    explanation: `<code>a[:]</code> creates a <strong>shallow copy</strong> — a new list object with the same elements. Unlike <code>b = a</code>, changes to <code>b</code> do not affect <code>a</code>. This is the classic Python idiom for copying a list; <code>a.copy()</code> is the more readable modern equivalent.`
  },
  {
    id: 46, category: 'memory', difficulty: 'medium',
    code: `a = [1, 2, 3]
b = [1, 2, 3]
print(a == b, a is b)`,
    question: "What does this print?",
    choices: ['True False', 'True True', 'False False', 'False True'],
    answer: 0,
    explanation: `<code>==</code> compares <strong>values</strong> (are the contents the same?). <code>is</code> compares <strong>identity</strong> (are they the exact same object in memory?). <code>a</code> and <code>b</code> are two separate lists that happen to hold equal values. Use <code>is</code> only for singletons like <code>None</code>, <code>True</code>, <code>False</code>.`
  },
  {
    id: 47, category: 'memory', difficulty: 'hard',
    code: `x = [1, 2, 3]
y = x
x = [4, 5, 6]
print(y)`,
    question: "What does this print?",
    choices: ['[4, 5, 6]', '[1, 2, 3]', '[1, 2, 3, 4, 5, 6]', 'None'],
    answer: 1,
    explanation: `<code>x = [4, 5, 6]</code> <strong>rebinds</strong> the variable <code>x</code> to a completely new list — it does not modify the original. <code>y</code> still points to <code>[1, 2, 3]</code>. Compare with <code>x.append(4)</code> or <code>x.clear()</code>, which would mutate the object and affect <code>y</code> too.`
  },
  {
    id: 48, category: 'memory', difficulty: 'hard',
    code: `a = [1, 2]
b = a
a += [3, 4]
print(b)`,
    question: "What does this print?",
    choices: ['[1, 2]', '[1, 2, 3, 4]', '[3, 4]', 'TypeError'],
    answer: 1,
    explanation: `<code>+=</code> on a list calls <code>__iadd__</code>, which extends the list <strong>in-place</strong> — it does not create a new object. So <code>a</code> and <code>b</code> still point to the same list. Contrast with <code>a = a + [3, 4]</code>, which creates a new list and rebinds <code>a</code>, leaving <code>b</code> unchanged at <code>[1, 2]</code>.`
  },
  {
    id: 49, category: 'memory', difficulty: 'hard',
    code: `a = [[1, 2], [3, 4]]
b = a.copy()
b[0].append(99)
print(a)`,
    question: "What does this print?",
    choices: ['[[1, 2], [3, 4]]', '[[1, 2, 99], [3, 4]]', '[[1, 2, 99], [3, 4, 99]]', 'TypeError'],
    answer: 1,
    explanation: `<code>a.copy()</code> is a <strong>shallow copy</strong> — the outer list is new, but the inner lists are still shared. <code>b[0]</code> and <code>a[0]</code> point to the same inner list object. Use <code>import copy; copy.deepcopy(a)</code> to fully clone nested structures.`
  },
  {
    id: 21, category: 'memory', difficulty: 'hard',
    code: `x = [1, 2, 3]
print(x.sort())`,
    question: "What does this print?",
    choices: ['[1, 2, 3]', '[3, 2, 1]', 'None', 'TypeError'],
    answer: 2,
    explanation: `<code>list.sort()</code> sorts the list <strong>in-place</strong> and returns <code>None</code>. Printing the return value of <code>sort()</code> always prints <code>None</code> — a very common bug. If you want a new sorted list, use the built-in function <code>sorted(x)</code>, which returns a new list and leaves the original unchanged.`
  },
  {
    id: 50, category: 'memory', difficulty: 'hard',
    code: `t = (1, 2, [3, 4])
t[2].append(5)
print(t)`,
    question: "What does this print?",
    choices: ['(1, 2, [3, 4, 5])', '(1, 2, [3, 4])', 'TypeError', '(1, 2, [3, 4], 5)'],
    answer: 0,
    explanation: `Tuples are <strong>immutable</strong> — you cannot replace or reassign their elements. But if an element is itself a mutable object, you can modify <em>that object's contents</em>. The tuple still holds a reference to the same list; it is the list that changed, not the tuple's structure. This surprises most people.`
  },
  {
    id: 93, category: 'memory', difficulty: 'medium',
    code: `a = "hello"
b = a
a += " world"
print(b)`,
    question: "What does this print?",
    choices: ['hello world', 'hello', 'TypeError', 'None'],
    answer: 1,
    explanation: `Unlike <code>+=</code> on a list (which extends <strong>in-place</strong>), <code>+=</code> on a string creates a <strong>new string object</strong> and rebinds <code>a</code> to it. Strings are <strong>immutable</strong> — there is no in-place modification. <code>b</code> still points to the original <code>"hello"</code>. Compare with <code>a = b = []; a += [1]</code> — there, both <code>a</code> and <code>b</code> would reflect the change, because lists mutate in-place.`
  },
  {
    id: 94, category: 'memory', difficulty: 'medium',
    code: `x = [1, 2, 3]
y = x
x = x + [4]
print(y)`,
    question: "What does this print?",
    choices: ['[1, 2, 3, 4]', '[1, 2, 3]', '[4]', 'TypeError'],
    answer: 1,
    explanation: `<code>x = x + [4]</code> creates a <strong>new list</strong> and <strong>rebinds</strong> <code>x</code> to it — the original list that <code>y</code> points to is untouched. This is the opposite of <code>x += [4]</code>, which calls <code>__iadd__</code> and extends the list in-place, making <code>y</code> also see the new element. The <code>+</code> vs <code>+=</code> distinction on lists is one of Python's most counterintuitive behaviours.`
  },
  {
    id: 95, category: 'memory', difficulty: 'hard',
    code: `d = {'key': [1, 2, 3]}
copy = d.copy()
copy['key'].append(4)
print(d['key'])`,
    question: "What does this print?",
    choices: ['[1, 2, 3]', '[1, 2, 3, 4]', 'TypeError', 'KeyError'],
    answer: 1,
    explanation: `<code>dict.copy()</code> is a <strong>shallow copy</strong>: the dict structure is new, but the <em>values</em> are still shared references. <code>d['key']</code> and <code>copy['key']</code> both point to the same list. Appending through <code>copy</code> mutates the single shared list, so <code>d</code> sees the change too. For full independence: <code>import copy; copy.deepcopy(d)</code>.`
  },
  {
    id: 96, category: 'memory', difficulty: 'hard',
    code: `a = [1, 2, 3]
b = a
del a
print(b)`,
    question: "What does this print?",
    choices: ['[1, 2, 3]', 'NameError', 'None', '[]'],
    answer: 0,
    explanation: `<code>del a</code> removes the <em>name</em> <code>a</code> from the namespace — it does not destroy the underlying object. Python uses <em>reference counting</em>: the list <code>[1, 2, 3]</code> still has one reference (<code>b</code>), so it stays alive. The object is only garbage-collected when its reference count reaches zero. After <code>del a</code>, accessing <code>a</code> raises <code>NameError</code>, but <code>b</code> is completely unaffected.`
  },
  {
    id: 97, category: 'memory', difficulty: 'medium',
    code: `x = None
print(x == None, x is None)`,
    question: "What does this print?",
    choices: ['True True', 'True False', 'False True', 'False False'],
    answer: 0,
    explanation: `Both comparisons return <code>True</code> here, but they mean different things. <code>==</code> checks <strong>value equality</strong>; <code>is</code> checks <strong>identity</strong> (same object in memory). <code>None</code> is a singleton — only one <code>None</code> exists — so both happen to agree. However, <code>x is None</code> is preferred style: a custom class can override <code>__eq__</code> to return <code>True</code> even when <code>x</code> is not <code>None</code>, fooling <code>==</code> but never <code>is</code>.`
  },

  {
    id: 144, category: 'memory', difficulty: 'easy',
    code:
`quest = {'level': 3, 'score': 150}
print(quest.get('lives', 0))`,
    question: "What does this print?",
    choices: ['None', 'KeyError', '0', '3'],
    answer: 2,
    explanation: `<code>dict.get(key, default)</code> returns the value for <code>key</code> if it exists, otherwise returns the default. <code>'lives'</code> is not in <code>quest</code>, so <code>0</code> is returned. This is safer than <code>quest['lives']</code>, which would raise a <code>KeyError</code>. The dict is not modified.`,
  },

  {
    id: 145, category: 'memory', difficulty: 'medium',
    code:
`a = {'x': 1, 'y': 2}
b = {'y': 10, 'z': 3}
a.update(b)
print(a['y'])`,
    question: "What does this print?",
    choices: ['2', '10', '3', 'KeyError'],
    answer: 1,
    explanation: `<code>dict.update(other)</code> merges <code>other</code> into the dict, <strong>overwriting existing keys</strong> with values from <code>other</code>. Both <code>a</code> and <code>b</code> have key <code>'y'</code> — after the update, <code>a['y']</code> is <code>10</code> (from <code>b</code>). New keys from <code>b</code> are added; existing keys not in <code>b</code> are untouched.`,
  },

  {
    id: 146, category: 'memory', difficulty: 'medium',
    code:
`items = [3, 1, 4, 1, 5]
result = items.sort()
print(result)`,
    question: "What does this print?",
    choices: ['[1, 1, 3, 4, 5]', 'None', 'True', '[3, 1, 4, 1, 5]'],
    answer: 1,
    explanation: `<code>list.sort()</code> sorts the list <strong>in-place</strong> and returns <code>None</code>. This is a deliberate design choice: returning <code>None</code> signals that the operation mutated the original, not that a new object was created. To get a sorted copy without modifying the original, use the built-in <code>sorted(items)</code>.`,
  },

  {
    id: 147, category: 'memory', difficulty: 'medium',
    code:
`original = [[1, 2], [3, 4]]
copy = original[:]
copy[0].append(99)
print(original[0])`,
    question: "What does this print?",
    choices: ['[1, 2]', '[1, 2, 99]', '[99, 1, 2]', 'IndexError'],
    answer: 1,
    explanation: `<code>original[:]</code> is a <strong>shallow copy</strong> — a new outer list, but the inner lists are shared between original and copy. <code>copy[0]</code> and <code>original[0]</code> point to the same inner list <code>[1, 2]</code>. Appending through <code>copy</code> is visible through <code>original</code>. A deep copy (<code>copy.deepcopy()</code>) would isolate the inner lists.`,
  },

  {
    id: 148, category: 'memory', difficulty: 'hard',
    code:
`t = ([1, 2], [3, 4])
t[0].append(99)
print(t)`,
    question: "What does this print?",
    choices: [
      '([1, 2], [3, 4])',
      '([1, 2, 99], [3, 4])',
      'TypeError',
      '([99, 1, 2], [3, 4])',
    ],
    answer: 1,
    explanation: `Tuples are immutable — you cannot replace or remove their elements. But immutability only applies to the tuple's <em>slots</em>. Each slot holds a <strong>reference</strong> to an object, and if that object is mutable, it can be modified through any reference. <code>t[0]</code> is a list; appending to the list doesn't change the tuple (the slot still points to the same list object), so no error is raised.`,
  },

  {
    id: 149, category: 'memory', difficulty: 'hard',
    code:
`a = b = []
a += [1]
b += [2]
print(a)`,
    question: "What does this print?",
    choices: ['[1]', '[2]', '[1, 2]', '[1, 2, 2]'],
    answer: 2,
    explanation: `<code>a = b = []</code> makes both names point to the same list. For lists, <code>+=</code> calls <code>list.extend()</code> which mutates <em>in place</em> — it does not rebind the variable. So <code>a += [1]</code> appends to the shared list, and <code>b += [2]</code> appends again to the same list. Both names still point to the same object, now <code>[1, 2]</code>.`,
  },

  {
    id: 206, category: 'memory', difficulty: 'easy',
    code:
`d = {'name': 'quest', 'level': 3}
print(d['level'])`,
    question: "What does this print?",
    choices: ['3', "'level'", 'quest', 'KeyError'],
    answer: 0,
    explanation: `<code>d['level']</code> looks up the value associated with key <code>'level'</code>, returning <code>3</code>. Dict lookup is O(1) on average. If the key doesn't exist, Python raises <code>KeyError</code> — use <code>d.get('level')</code> to return <code>None</code> instead, or <code>d.get('level', default)</code> for a fallback.`,
  },

  {
    id: 207, category: 'memory', difficulty: 'easy',
    code:
`d = {'a': 1, 'b': 2}
print(2 in d)`,
    question: "What does this print?",
    choices: ['True', 'False', 'None', 'KeyError'],
    answer: 1,
    explanation: `The <code>in</code> operator on a dict checks <strong>keys</strong>, not values. <code>2</code> is a value in <code>d</code>, not a key — so this is <code>False</code>. To check values, use <code>2 in d.values()</code>. To check both a key and its value exists, use <code>d.get('a') == 2</code>. This is one of Python's most common dict gotchas.`,
  },

  {
    id: 208, category: 'memory', difficulty: 'medium',
    code:
`d = {x: x ** 2 for x in range(1, 5)}
print(d[3])`,
    question: "What does this print?",
    choices: ['3', '6', '9', 'KeyError'],
    answer: 2,
    explanation: `A <strong>dict comprehension</strong> <code>{key: value for ... in ...}</code> builds a dict in one expression. <code>range(1, 5)</code> is <code>1, 2, 3, 4</code>. The resulting dict is <code>{1: 1, 2: 4, 3: 9, 4: 16}</code>. <code>d[3]</code> looks up key <code>3</code> → value <code>9</code>. Dict comprehensions are the dict equivalent of list comprehensions and are equally efficient.`,
  },

  {
    id: 209, category: 'memory', difficulty: 'medium',
    code:
`d = {'a': 1, 'b': 2, 'c': 3}
val = d.pop('b')
print(val, len(d))`,
    question: "What does this print?",
    choices: ['2 2', '2 3', '1 2', 'KeyError'],
    answer: 0,
    explanation: `<code>dict.pop(key)</code> <strong>removes</strong> the key-value pair and <strong>returns the value</strong>. After popping <code>'b'</code>, the dict becomes <code>{'a': 1, 'c': 3}</code> — two entries. <code>val</code> holds the removed value <code>2</code>. If the key doesn't exist, <code>pop</code> raises <code>KeyError</code> unless you provide a default: <code>d.pop('x', None)</code>.`,
  },

  {
    id: 210, category: 'memory', difficulty: 'medium',
    code:
`a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(len(a & b))`,
    question: "What does this print?",
    choices: ['2', '4', '6', '8'],
    answer: 0,
    explanation: `The <code>&</code> operator on sets computes the <strong>intersection</strong> — elements present in both. <code>a & b</code> → <code>{3, 4}</code>. <code>len({3, 4})</code> → <code>2</code>. Other set operators: <code>|</code> for union, <code>-</code> for difference, <code>^</code> for symmetric difference. Sets are optimised for these membership operations — all are O(min(len(a), len(b))).`,
  },

  {
    id: 211, category: 'memory', difficulty: 'medium',
    code:
`d = {'x': 10, 'y': 20, 'z': 30}
del d['y']
print(list(d.keys()))`,
    question: "What does this print?",
    choices: ["['x', 'z']", "['x', 'y', 'z']", "['y']", "KeyError"],
    answer: 0,
    explanation: `<code>del d['y']</code> permanently removes the key-value pair for <code>'y'</code> from the dict. After deletion, <code>d</code> is <code>{'x': 10, 'z': 30}</code>. <code>d.keys()</code> returns a view of the current keys. As of Python 3.7+, dicts preserve insertion order — so <code>['x', 'z']</code> is guaranteed, not just likely.`,
  },

  {
    id: 212, category: 'memory', difficulty: 'medium',
    code:
`d = {'a': 1}
d.setdefault('b', 99)
d.setdefault('a', 99)
print(d['a'], d['b'])`,
    question: "What does this print?",
    choices: ['1 99', '99 99', '1 1', 'KeyError'],
    answer: 0,
    explanation: `<code>dict.setdefault(key, default)</code> inserts <code>key</code> with <code>default</code> only if <code>key</code> is <em>not already present</em>. For <code>'b'</code> (missing): inserts <code>99</code>. For <code>'a'</code> (already <code>1</code>): does nothing — the existing value is preserved. This is useful for building dicts incrementally without overwriting data, e.g. grouping: <code>d.setdefault(key, []).append(item)</code>.`,
  },

  {
    id: 213, category: 'memory', difficulty: 'hard',
    code:
`val = [0]
d = {'x': val, 'y': val}
d['x'].append(1)
print(d['y'])`,
    question: "What does this print?",
    choices: ['[0]', '[0, 1]', '[1]', 'TypeError'],
    answer: 1,
    explanation: `Both <code>d['x']</code> and <code>d['y']</code> point to the <em>same list object</em> (<code>val</code>). Dicts store <strong>references</strong> to values, not copies. Appending through <code>d['x']</code> mutates the single shared list — so <code>d['y']</code> reflects the change too. To store independent copies, use <code>'x': val.copy(), 'y': val.copy()</code>.`,
  },

  {
    id: 214, category: 'memory', difficulty: 'hard',
    code:
`data = [1, 2, 2, 3, 3, 3, 4]
s = set(data)
print(len(s))`,
    question: "What does this print?",
    choices: ['7', '4', '3', '6'],
    answer: 1,
    explanation: `A <code>set</code> stores only <strong>unique</strong> elements — duplicates are silently discarded. <code>set([1, 2, 2, 3, 3, 3, 4])</code> → <code>{1, 2, 3, 4}</code>, which has 4 elements. Converting a list to a set is the idiomatic way to deduplicate. Note that sets are unordered, so you cannot rely on the iteration order.`,
  },

  {
    id: 215, category: 'memory', difficulty: 'hard',
    code:
`a, *b, c = [1, 2, 3, 4, 5]
print(b)`,
    question: "What does this print?",
    choices: ['[2, 3, 4]', '[1, 2, 3, 4]', '[2, 3, 4, 5]', '(2, 3, 4)'],
    answer: 0,
    explanation: `The <code>*</code> in an unpacking assignment is an <strong>extended unpack</strong> — it collects all "remaining" elements into a list. <code>a</code> gets the first element (<code>1</code>), <code>c</code> gets the last (<code>5</code>), and <code>b</code> gets everything in between: <code>[2, 3, 4]</code>. The starred variable always receives a list, even if it captures zero or one elements. It can appear at any position: <code>*a, b, c</code> or <code>a, *b, c</code>.`,
  },

  {
    id: 216, category: 'memory', difficulty: 'hard',
    code:
`s = set()
s.add([1, 2])
print(s)`,
    question: "What does this print?",
    choices: ['{[1, 2]}', '{1, 2}', 'set()', 'TypeError'],
    answer: 3,
    explanation: `Sets can only contain <strong>hashable</strong> objects. Lists are mutable and therefore not hashable — adding one raises <code>TypeError: unhashable type: 'list'</code>. The rule is: if an object can change its contents, its hash would change too, breaking the set's internal structure. Use a <code>tuple</code> instead: <code>s.add((1, 2))</code> works because tuples are immutable and hashable.`,
  },

  {
    id: 217, category: 'memory', difficulty: 'hard',
    code:
`def add_item(key, d={}):
    d[key] = True
    return len(d)

print(add_item('a'), add_item('b'))`,
    question: "What does this print?",
    choices: ['1 1', '1 2', '2 2', 'TypeError'],
    answer: 1,
    explanation: `The default dict <code>{}</code> is created <em>once</em> when the function is defined and reused on every call. After <code>add_item('a')</code> the shared dict is <code>{'a': True}</code>, length 1. After <code>add_item('b')</code> it becomes <code>{'a': True, 'b': True}</code>, length 2. This is the same mutable-default trap as <code>lst=[]</code>, applied to dicts. Fix: use <code>d=None</code> and create a fresh dict inside if needed.`,
  },
  {
    id: 264, category: 'memory', difficulty: 'hard',
    code: `a = 256
b = 256
print(a is b)

c = 257
d = 257
print(c is d)`,
    question: "What does this print?",
    choices: ["True\nTrue", "True\nFalse", "False\nFalse", "False\nTrue"],
    answer: 1,
    explanation: `CPython caches small integers from -5 to 256. Assignments to values in that range reuse the same object, so <code>a is b</code> is <code>True</code>. Above 256, new objects are created each time, so <code>c is d</code> is <code>False</code>. Always use <code>==</code> for value comparison — <code>is</code> tests identity, not equality.`,
  },
  {
    id: 265, category: 'memory', difficulty: 'medium',
    code: `import copy

a = [[1, 2], [3, 4]]
b = copy.copy(a)
b[0].append(99)
print(a[0])`,
    question: "What does this print?",
    choices: ["[1, 2]", "[1, 2, 99]", "[[1, 2, 99], [3, 4]]", "None"],
    answer: 1,
    explanation: `<code>copy.copy()</code> makes a <em>shallow</em> copy: the outer list is new, but the inner lists are still shared references. Mutating <code>b[0]</code> (appending 99) also changes <code>a[0]</code> because both point to the same inner list. Use <code>copy.deepcopy()</code> to copy nested structures independently.`,
  },
  {
    id: 266, category: 'memory', difficulty: 'medium',
    code: `import copy

a = [[1, 2], [3, 4]]
b = copy.deepcopy(a)
b[0].append(99)
print(a[0])`,
    question: "What does this print?",
    choices: ["[1, 2, 99]", "[1, 2]", "[[1, 2], [3, 4]]", "None"],
    answer: 1,
    explanation: `<code>copy.deepcopy()</code> recursively copies every nested object, so <code>b</code>'s inner lists are completely independent from <code>a</code>'s. Mutating <code>b[0]</code> has no effect on <code>a[0]</code>, which remains <code>[1, 2]</code>.`,
  },
  {
    id: 267, category: 'memory', difficulty: 'medium',
    code: `a = [1, 2, 3]
b = a
del a
print(b)`,
    question: "What does this print?",
    choices: ["[1, 2, 3]", "NameError: name 'a' is not defined", "None", "[]"],
    answer: 0,
    explanation: `<code>del a</code> removes the name <code>a</code> from the local scope — it does not destroy the list object. The list still has a reference count of 1 via <code>b</code>. Python's garbage collector frees an object only when no names (or containers) reference it.`,
  },
  {
    id: 268, category: 'memory', difficulty: 'hard',
    code: `t = ([1, 2], [3, 4])
t[0].append(99)
print(t)`,
    question: "What does this print?",
    choices: ["([1, 2, 99], [3, 4])", "TypeError: 'tuple' object does not support item assignment", "([1, 2], [3, 4])", "([1, 2, 99], [3, 4, 99])"],
    answer: 0,
    explanation: `Tuples are immutable — you cannot rebind <code>t[0]</code> to a different object. But the list <em>inside</em> the tuple is mutable. <code>t[0].append(99)</code> mutates the list in-place without changing what <code>t[0]</code> points to. The tuple's references stay the same; the contents of those references can still change.`,
  },
  {
    id: 269, category: 'memory', difficulty: 'hard',
    code: `x = 10

def change():
    global x
    x = 99

change()
print(x)`,
    question: "What does this print?",
    choices: ["99", "10", "None", "UnboundLocalError"],
    answer: 0,
    explanation: `Without <code>global x</code>, assigning inside the function would create a new local variable, leaving the outer <code>x</code> unchanged. The <code>global</code> declaration tells Python to look up and modify the name in the module (global) scope. After the call, the global <code>x</code> is 99.`,
  },
  {
    id: 270, category: 'memory', difficulty: 'hard',
    code: `a = [1, 2, 3]
b = a
a = a + [4]
print(a)
print(b)`,
    question: "What does this print?",
    choices: [
      "[1, 2, 3, 4]\n[1, 2, 3]",
      "[1, 2, 3, 4]\n[1, 2, 3, 4]",
      "[1, 2, 3]\n[1, 2, 3, 4]",
      "[1, 2, 3]\n[1, 2, 3]",
    ],
    answer: 0,
    explanation: `<code>a + [4]</code> creates a <em>new</em> list and rebinds <code>a</code> to it. <code>b</code> still points to the original list <code>[1, 2, 3]</code>. Compare with <code>a.extend([4])</code> or <code>a += [4]</code>, which mutate in-place and would change what <code>b</code> sees too.`,
  },

  {
    id: 353, category: 'memory', difficulty: 'medium',
    code: `a = [1, [2, 3]]
b = list(a)
b[1].append(4)
print(a)`,
    question: "What does this print?",
    choices: ['[1, [2, 3, 4]]', '[1, [2, 3]]', '[1, [2, 3], 4]', 'TypeError'],
    answer: 0,
    explanation: `<code>list(a)</code> constructs a new list with the same elements — a <strong>shallow copy</strong>. The outer list is new, but <code>b[1]</code> is the same list object as <code>a[1]</code>. Appending through <code>b</code> is visible through <code>a</code>. Use <code>copy.deepcopy(a)</code> to fully decouple nested structures.`,
  },

  {
    id: 354, category: 'memory', difficulty: 'medium',
    code: `a = "hello"
b = "hel" + "lo"
print(a is b)`,
    question: "What does this print?",
    choices: ['True', 'False', 'None', 'TypeError'],
    answer: 0,
    explanation: `CPython <strong>interns</strong> string literals that look like identifiers and folds compile-time constants. <code>"hel" + "lo"</code> is evaluated at compile time to the literal <code>"hello"</code>, which shares the interned object with <code>a</code>. Do not rely on <code>is</code> for string equality — use <code>==</code>. The behaviour can differ across Python implementations and runtime-constructed strings.`,
  },

  {
    id: 355, category: 'memory', difficulty: 'hard',
    code: `a = [None] * 3
b = [[] for _ in range(3)]
a[0] = 1
b[0].append(1)
print(a)
print(b)`,
    question: "What does this print?",
    choices: ['[1, None, None]\n[[1], [], []]', '[1, 1, 1]\n[[1], [1], [1]]', '[1, None, None]\n[[1], [1], [1]]', '[None, None, None]\n[[1], [], []]'],
    answer: 0,
    explanation: `<code>[None] * 3</code> creates three slots all pointing to the <code>None</code> singleton. Reassigning <code>a[0] = 1</code> only rebinds that slot — no aliasing issue. <code>[[] for _ in range(3)]</code> creates three <em>distinct</em> empty list objects. Each <code>[]</code> is independent, so appending to <code>b[0]</code> does not affect <code>b[1]</code> or <code>b[2]</code>. Contrast with <code>[[]] * 3</code> which shares one list.`,
  },

  {
    id: 356, category: 'memory', difficulty: 'hard',
    code: `class Resource:
    def __del__(self):
        print("cleaned up")

r = Resource()
del r
print("after del")`,
    question: "What does this print?",
    choices: ['cleaned up\nafter del', 'after del\ncleaned up', 'after del', 'cleaned up'],
    answer: 0,
    explanation: `<code>del r</code> removes the name from the namespace. If no other references exist, CPython's reference counter drops to zero and the object is immediately destroyed, calling <code>__del__</code> before the next line executes. This is deterministic in CPython but not guaranteed by the language spec — PyPy and other implementations may defer cleanup.`,
  },

  {
    id: 357, category: 'memory', difficulty: 'hard',
    code: `s = set()
t = (1, 2, 3)
s.add(t)
print(len(s))
print(t in s)`,
    question: "What does this print?",
    choices: ['1\nTrue', '3\nTrue', '1\nFalse', 'TypeError'],
    answer: 0,
    explanation: `Tuples are <strong>hashable</strong> (as long as all their elements are hashable) and can be added to sets or used as dict keys. <code>s.add(t)</code> adds the tuple as a single element — the set has length 1. <code>t in s</code> checks membership by hash and equality. Contrast with lists, which are mutable and raise <code>TypeError: unhashable type: 'list'</code> when added to a set.`,
  },

];
