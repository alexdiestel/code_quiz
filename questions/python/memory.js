// memory.js — 19 questions — IDs: 8,9,21,46,47,48,49,50,93,94,95,96,97,144,145,146,147,148,149
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

];
