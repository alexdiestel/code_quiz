// lists.js — 52 questions — IDs: 1,2,11,15,17,23,24,25,26,27,28,29,69,70,71,72,121,122,123,124,125,126,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,241,242,243,244,245,246,247,248,298,299,300,301,302,303
const PY_LISTS = [
  {
    id: 1, category: 'lists', difficulty: 'easy',
    code: `x = [10, 20, 30, 40, 50]
print(x[-1])`,
    question: "What does this print?",
    choices: ['10', '50', '[50]', 'IndexError'],
    answer: 1,
    explanation: `<code>x[-1]</code> accesses the last element using <strong>negative indexing</strong>. In Python, negative indices count backwards from the end — <code>-1</code> is the last element, <code>-2</code> is second-to-last, and so on.`
  },
  {
    id: 2, category: 'lists', difficulty: 'easy',
    code: `x = [10, 20, 30, 40, 50]
print(x[:-1])`,
    question: "What does this print?",
    choices: ['[50]', '[10, 20, 30, 40]', '[10, 20, 30, 40, 50]', '50'],
    answer: 1,
    explanation: `<code>x[:-1]</code> is a <strong>slice</strong>, not an index. The colon makes all the difference. It returns everything <em>up to but not including</em> the last element. Compare: <code>x[-1]</code> → single value, <code>x[:-1]</code> → new list without the last item.`
  },
  {
    id: 23, category: 'lists', difficulty: 'easy',
    code: `x = [3, 1, 2]
y = sorted(x)
print(x)`,
    question: "What does this print?",
    choices: ['[1, 2, 3]', '[3, 1, 2]', 'None', '[3, 2, 1]'],
    answer: 1,
    explanation: `<code>sorted()</code> is a built-in function that returns a <strong>new sorted list</strong> and leaves the original unchanged. Contrast with <code>list.sort()</code> which sorts <strong>in-place</strong> and returns <code>None</code>. When you want the original preserved, always use <code>sorted()</code>.`
  },
  {
    id: 24, category: 'lists', difficulty: 'easy',
    code: `x = [0, 1, 2, 3, 4, 5, 6]
print(x[::2])`,
    question: "What does this print?",
    choices: ['[0, 2, 4, 6]', '[1, 3, 5]', '[0, 2, 4]', '[6, 4, 2, 0]'],
    answer: 0,
    explanation: `The third argument in a slice is the <strong>step</strong> — how far to jump between each selected element. <code>[::2]</code> starts from the beginning and takes every 2nd item. A step of <code>-1</code> would reverse the list; a step of <code>3</code> would take every 3rd.`
  },
  {
    id: 11, category: 'lists', difficulty: 'medium',
    code: `nums = [1, 2, 3, 4, 5]
print(nums[1:4])`,
    question: "What does this print?",
    choices: ['[2, 3, 4, 5]', '[1, 2, 3, 4]', '[2, 3, 4]', '[1, 2, 3]'],
    answer: 2,
    explanation: `Slicing <code>[start:stop]</code> returns elements from index <code>start</code> up to but <strong>not including</strong> <code>stop</code>. <code>nums[1:4]</code> selects indices 1, 2, 3 — the values 2, 3, 4. Python indexing starts at 0, and the stop index is always exclusive.`
  },
  {
    id: 25, category: 'lists', difficulty: 'medium',
    code: `x = [1, 2, 3]
x.append([4, 5])
print(len(x))`,
    question: "What does this print?",
    choices: ['4', '5', '6', 'TypeError'],
    answer: 0,
    explanation: `<code>append()</code> adds its argument as a <strong>single element</strong>, whatever that argument is. <code>[4, 5]</code> becomes one nested list, so <code>len</code> goes from 3 to 4. To add each element individually, use <code>extend([4, 5])</code> or <code>+= [4, 5]</code>, which would give <code>len</code> of 5.`
  },
  {
    id: 26, category: 'lists', difficulty: 'medium',
    code: `a = [1, 2, 3]
b = ["x", "y"]
print(list(zip(a, b)))`,
    question: "What does this print?",
    choices: ["[(1, 'x'), (2, 'y')]", "[(1, 'x'), (2, 'y'), (3, None)]", "[(1, 2, 3), ('x', 'y')]", 'ValueError'],
    answer: 0,
    explanation: `<code>zip()</code> pairs up elements from multiple iterables. It <strong>stops at the shortest</strong> — the third element of <code>a</code> is silently dropped because <code>b</code> has nothing to pair it with. Use <code>itertools.zip_longest()</code> if you need to keep all elements, filling gaps with <code>None</code>.`
  },
  {
    id: 15, category: 'lists', difficulty: 'medium',
    code: `a = [1, 2, 3]
b = [4, 5, 6]
print(a + b)`,
    question: "What does this print?",
    choices: ['[5, 7, 9]', '[1, 2, 3, 4, 5, 6]', '[[1,2,3],[4,5,6]]', 'TypeError'],
    answer: 1,
    explanation: `<code>+</code> on lists performs <strong>concatenation</strong>, not element-wise addition. It joins the lists end-to-end into a new list. For element-wise math you'd use a list comprehension: <code>[x+y for x, y in zip(a, b)]</code>, or NumPy arrays which overload <code>+</code> to mean element-wise addition.`
  },
  {
    id: 17, category: 'lists', difficulty: 'hard',
    code: `result = [x * 2 for x in range(5) if x % 2 == 0]
print(result)`,
    question: "What does this print?",
    choices: ['[0, 2, 4, 6, 8]', '[0, 4, 8]', '[2, 4, 6, 8, 10]', '[0, 2, 4]'],
    answer: 1,
    explanation: `This list comprehension has two stages: the filter <code>if x % 2 == 0</code> keeps only even values from <code>range(5)</code> → {0, 2, 4}, then <code>x * 2</code> doubles each one: 0→0, 2→4, 4→8. Read it as "double every even number from 0 to 4". The order is: iterate → filter → transform.`
  },
  {
    id: 27, category: 'lists', difficulty: 'hard',
    code: `matrix = [[0] * 3] * 3
matrix[0][0] = 1
print(matrix[1][0])`,
    question: "What does this print?",
    choices: ['0', '1', 'IndexError', 'TypeError'],
    answer: 1,
    explanation: `<code>[[0]*3]</code> creates one inner list. Multiplying by <code>3</code> repeats the <strong>reference</strong> to that same list — all three rows point to the exact same object. So changing <code>matrix[0][0]</code> changes all three rows simultaneously. To make independent rows: <code>[[0]*3 for _ in range(3)]</code>.`
  },
  {
    id: 28, category: 'lists', difficulty: 'hard',
    code: `a, *b, c = [1, 2, 3, 4, 5]
print(b)`,
    question: "What does this print?",
    choices: ['[2, 3, 4]', '[2, 3, 4, 5]', '(2, 3, 4)', '[1, 2, 3, 4]'],
    answer: 0,
    explanation: `The <code>*</code> in unpacking absorbs everything not claimed by the named variables on either side. <code>a</code> gets <code>1</code>, <code>c</code> gets <code>5</code>, and <code>*b</code> captures everything in between as a <strong>list</strong> — always a list, even if it ends up with one or zero elements.`
  },
  {
    id: 29, category: 'lists', difficulty: 'hard',
    code: `for i, v in enumerate(["a", "b", "c"]):
    print(i, v)`,
    question: "What does this print?",
    choices: ['0 a\n1 b\n2 c', 'a 0\nb 1\nc 2', '0\n1\n2', 'a\nb\nc'],
    answer: 0,
    explanation: `<code>enumerate(iterable)</code> yields <code>(index, value)</code> pairs, making it the Pythonic way to loop with a counter. The default start index is <code>0</code>; use <code>enumerate(x, start=1)</code> to begin at 1. It avoids the need for a manual <code>i = 0</code> counter.`
  },
  {
    id: 69, category: 'lists', difficulty: 'easy',
    code: `x = [10, 20, 30]
x.pop()
print(x)`,
    question: "What does this print?",
    choices: ['[10, 20]', '[20, 30]', '[10, 20, 30]', '[10]'],
    answer: 0,
    explanation: `<code>list.pop()</code> with no argument removes and returns the <strong>last element</strong>. The list is modified in-place. You can also pass an index — <code>x.pop(0)</code> removes the first element — but removing from the end is O(1), while removing from the front is O(n) since every other element shifts.`
  },
  {
    id: 70, category: 'lists', difficulty: 'medium',
    code: `x = [10, 20, 30]
print(1 in x)`,
    question: "What does this print?",
    choices: ['True', 'False', 'TypeError', '10'],
    answer: 1,
    explanation: `<code>in</code> on a list checks whether a <strong>value</strong> exists anywhere in the list — not whether an index is valid. <code>1</code> is not a value in <code>[10, 20, 30]</code>, so the result is <code>False</code>. <code>10 in x</code> would be <code>True</code>. Contrast with dicts, where <code>in</code> checks keys — on lists it always checks values.`
  },
  {
    id: 71, category: 'lists', difficulty: 'medium',
    code: `for i, v in enumerate("abc", start=1):
    print(i, v)`,
    question: "What does this print?",
    choices: ['1 a\n2 b\n3 c', '0 a\n1 b\n2 c', 'a 1\nb 2\nc 3', 'TypeError'],
    answer: 0,
    explanation: `<code>enumerate()</code> accepts an optional <code>start</code> keyword argument that sets the first index. With <code>start=1</code>, counting begins at 1 instead of 0 — useful when displaying human-readable numbers. The default is <code>start=0</code>. Strings are <strong>iterable</strong>, so <code>enumerate</code> works on them just as well as lists.`
  },
  {
    id: 72, category: 'lists', difficulty: 'hard',
    code: `x = [0, 1, 2, 3, 4]
del x[1:3]
print(x)`,
    question: "What does this print?",
    choices: ['[0, 3, 4]', '[0, 1, 3, 4]', '[1, 2]', 'SyntaxError'],
    answer: 0,
    explanation: `<code>del</code> with a <strong>slice</strong> removes every element in that range in one step. <code>x[1:3]</code> covers indices 1 and 2 (values <code>1</code> and <code>2</code>), so they are cut out, leaving <code>[0, 3, 4]</code>. This is more efficient than popping elements one by one in a loop, and it works on any slice, including stepped ones like <code>del x[::2]</code>.`
  },

  {
    id: 121, category: 'lists', difficulty: 'easy',
    code:
`items = [x * 2 for x in range(4)]
print(items)`,
    question: "What does this print?",
    choices: ['[0, 2, 4, 6]', '[2, 4, 6, 8]', '[0, 1, 2, 3]', '[1, 2, 3, 4]'],
    answer: 0,
    explanation: `A <strong>list comprehension</strong> builds a new list by evaluating the expression for each value in the iterable. <code>range(4)</code> yields 0, 1, 2, 3 — doubling each gives <code>[0, 2, 4, 6]</code>. The expression runs left-to-right: <em>value expression</em> → <em>for clause</em> → optional <em>if clause</em>.`,
  },

  {
    id: 122, category: 'lists', difficulty: 'easy',
    code:
`row = [0] * 4
row[2] = 7
print(row)`,
    question: "What does this print?",
    choices: ['[7, 7, 7, 7]', '[0, 7, 0, 0]', '[0, 0, 7, 0]', '[0, 0, 0, 7]'],
    answer: 2,
    explanation: `<code>[0] * 4</code> creates a list of four independent integer objects. Assigning <code>row[2] = 7</code> replaces only the item at index 2. Because integers are <strong>immutable</strong>, each slot holds its own value — changing one cannot affect the others. This safe behaviour changes for mutable objects like lists (see the nested list trap).`,
  },

  {
    id: 123, category: 'lists', difficulty: 'medium',
    code:
`grid = [[0] * 3] * 3
grid[1][1] = 9
print(grid[0])`,
    question: "What does this print?",
    choices: ['[0, 0, 0]', '[0, 9, 0]', '[9, 0, 0]', '[0, 0, 9]'],
    answer: 1,
    explanation: `<code>[[0]*3] * 3</code> does not create three independent rows. It creates three <strong>references to the same inner list</strong>. Mutating <code>grid[1][1]</code> mutates that one shared list, which all three rows point to. Safe fix: <code>[[0]*3 for _ in range(3)]</code> — the comprehension creates a fresh list on every iteration.`,
  },

  {
    id: 124, category: 'lists', difficulty: 'medium',
    code:
`steps = ['start', 'move', 'win']
for i, v in enumerate(steps, 1):
    pass
print(i, v)`,
    question: "What is printed after the loop?",
    choices: ['0 win', '1 start', '3 win', '2 win'],
    answer: 2,
    explanation: `<code>enumerate(steps, 1)</code> yields <code>(1, 'start')</code>, <code>(2, 'move')</code>, <code>(3, 'win')</code>. The loop variables <code>i</code> and <code>v</code> are not scoped to the loop — they persist after it ends, holding the values from the <em>last</em> iteration. Python loop variables always leak into the enclosing scope.`,
  },

  {
    id: 125, category: 'lists', difficulty: 'medium',
    code:
`nums = [1, 2, 3, 4, 5, 6]
result = [n for n in nums if n % 2 == 0]
print(len(result))`,
    question: "How many elements are in `result`?",
    choices: ['2', '3', '4', '6'],
    answer: 1,
    explanation: `The <strong>if clause</strong> in a list comprehension filters the source iterable. <code>n % 2 == 0</code> is true for 2, 4, and 6 — three elements. The resulting list is <code>[2, 4, 6]</code>, so <code>len(result)</code> is <code>3</code>.`,
  },

  {
    id: 126, category: 'lists', difficulty: 'hard',
    code:
`moves = [10, 20, 30, 40]
x = moves.pop(1)
print(x, len(moves))`,
    question: "What does this print?",
    choices: ['10 3', '20 3', '20 4', '30 3'],
    answer: 1,
    explanation: `<code>list.pop(i)</code> removes the element at index <code>i</code>, <strong>returns it</strong>, and shortens the list by one. Index 1 holds <code>20</code>, so <code>x = 20</code>. The list becomes <code>[10, 30, 40]</code> — length 3. Unlike <code>del moves[1]</code>, <code>pop</code> gives you the removed value.`,
  },

  {
    id: 151, category: 'lists', difficulty: 'easy',
    code:
`a = [1, 2, 3]
print(a.append(4))`,
    question: "What does this print?",
    choices: ['[1, 2, 3, 4]', 'None', '4', 'TypeError'],
    answer: 1,
    explanation: `<code>list.append()</code> modifies the list <strong>in-place</strong> and returns <code>None</code> — just like <code>list.sort()</code>. Printing the return value of any in-place method always prints <code>None</code>. The list is modified, but the result of the expression is <code>None</code>. Use <code>a.append(4); print(a)</code> to see the updated list.`,
  },

  {
    id: 152, category: 'lists', difficulty: 'easy',
    code:
`items = [10, 20, 30, 40, 50]
print(items[-3])`,
    question: "What does this print?",
    choices: ['10', '20', '30', '40'],
    answer: 2,
    explanation: `<strong>Negative indexing</strong> counts from the end. <code>-1</code> is the last element (<code>50</code>), <code>-2</code> is <code>40</code>, <code>-3</code> is <code>30</code>. It is equivalent to <code>items[len(items) - 3]</code> → <code>items[2]</code>. This is one of Python's most convenient list features.`,
  },

  {
    id: 153, category: 'lists', difficulty: 'easy',
    code:
`langs = ['python', 'cpp', 'rust']
print('go' in langs)`,
    question: "What does this print?",
    choices: ['True', 'False', 'None', 'ValueError'],
    answer: 1,
    explanation: `The <code>in</code> operator checks for <strong>membership</strong> in a list. It scans elements one by one until a match is found. <code>'go'</code> is not in the list, so it returns <code>False</code>. For large lists, <code>in</code> is O(n) — a <code>set</code> lookup is O(1) if performance matters.`,
  },

  {
    id: 154, category: 'lists', difficulty: 'easy',
    code:
`a = [1, 2]
b = [3, 4]
print(a + b)`,
    question: "What does this print?",
    choices: ['[1, 2, 3, 4]', '[4, 6]', '[1, 2, [3, 4]]', 'TypeError'],
    answer: 0,
    explanation: `The <code>+</code> operator on lists performs <strong>concatenation</strong> — it creates a new list by joining both sequences end-to-end. No elements are added or summed. Neither <code>a</code> nor <code>b</code> is modified. To combine in-place, use <code>a.extend(b)</code> or <code>a += b</code>.`,
  },

  {
    id: 155, category: 'lists', difficulty: 'medium',
    code:
`a = [1, 2, 3]
a.insert(1, 99)
print(a)`,
    question: "What does this print?",
    choices: ['[99, 1, 2, 3]', '[1, 99, 2, 3]', '[1, 2, 99, 3]', '[1, 2, 3, 99]'],
    answer: 1,
    explanation: `<code>list.insert(i, x)</code> inserts <code>x</code> <em>before</em> the element currently at index <code>i</code>. Index 1 currently holds <code>2</code>, so <code>99</code> is placed before it, shifting <code>2</code> and <code>3</code> right. The list grows by one. <code>insert(0, x)</code> prepends; <code>insert(len(a), x)</code> is equivalent to <code>append(x)</code>.`,
  },

  {
    id: 156, category: 'lists', difficulty: 'medium',
    code:
`scores = [10, 20, 10, 30, 10]
print(scores.count(10))`,
    question: "What does this print?",
    choices: ['1', '2', '3', '5'],
    answer: 2,
    explanation: `<code>list.count(x)</code> returns how many times <code>x</code> appears in the list. It scans the entire list — O(n). Here <code>10</code> appears at indices 0, 2, and 4, so the result is <code>3</code>. Useful for tallying votes, occurrences, or duplicates without converting to a <code>Counter</code>.`,
  },

  {
    id: 157, category: 'lists', difficulty: 'medium',
    code:
`a = [0, 1, 2, 3, 4, 5]
print(a[::2])`,
    question: "What does this print?",
    choices: ['[0, 2, 4]', '[1, 3, 5]', '[0, 1, 2]', '[3, 4, 5]'],
    answer: 0,
    explanation: `<code>[::2]</code> is a slice with step <code>2</code>: start at 0, take every 2nd element. Picks indices 0, 2, 4 → <code>[0, 2, 4]</code>. Use <code>[1::2]</code> to pick odd-indexed elements (<code>[1, 3, 5]</code>). The step can be negative to go backwards — <code>[::-1]</code> reverses the list.`,
  },

  {
    id: 158, category: 'lists', difficulty: 'medium',
    code:
`grid = [[1, 2], [3, 4], [5, 6]]
print(grid[2][0])`,
    question: "What does this print?",
    choices: ['1', '3', '5', '6'],
    answer: 2,
    explanation: `<code>grid[2]</code> retrieves the third sublist: <code>[5, 6]</code>. Then <code>[0]</code> picks the first element: <code>5</code>. Chained indexing like <code>grid[row][col]</code> is the standard way to access 2D list elements. Unlike NumPy, Python lists do not support <code>grid[2, 0]</code> syntax natively.`,
  },

  {
    id: 159, category: 'lists', difficulty: 'medium',
    code:
`a = [1, 2, 3, 4, 5]
print(a[::-1])`,
    question: "What does this print?",
    choices: ['[5, 4, 3, 2, 1]', '[1, 2, 3, 4, 5]', '[5, 3, 1]', 'TypeError'],
    answer: 0,
    explanation: `<code>[::-1]</code> is a slice with step <code>-1</code>: start from the end, step backwards one at a time. This produces a reversed copy of the list without modifying the original. An alternative is <code>list(reversed(a))</code>. Note: <code>a.reverse()</code> reverses <em>in-place</em> and returns <code>None</code>.`,
  },

  {
    id: 160, category: 'lists', difficulty: 'medium',
    code:
`a = [3, 1, 2]
b = sorted(a)
print(a[0])`,
    question: "What does this print?",
    choices: ['1', '2', '3', 'None'],
    answer: 2,
    explanation: `<code>sorted()</code> returns a <strong>new sorted list</strong> and leaves the original untouched. <code>a</code> is still <code>[3, 1, 2]</code> — its first element is <code>3</code>. This contrasts with <code>a.sort()</code>, which sorts <code>a</code> in-place (and returns <code>None</code>). Use <code>sorted()</code> when you need to preserve the original order.`,
  },

  {
    id: 161, category: 'lists', difficulty: 'medium',
    code:
`langs = ['python', 'cpp', 'rust']
print(langs.index('cpp'))`,
    question: "What does this print?",
    choices: ['0', '1', '2', 'ValueError'],
    answer: 1,
    explanation: `<code>list.index(x)</code> returns the index of the <em>first</em> occurrence of <code>x</code>. <code>'cpp'</code> is at index <code>1</code>. If the value is not found, it raises <code>ValueError</code> — so check membership with <code>in</code> first if unsure. For duplicate values, only the lowest index is returned.`,
  },

  {
    id: 162, category: 'lists', difficulty: 'hard',
    code:
`nums = [1, 2, 3, 4, 5, 6]
result = [x for x in nums if x % 2 == 0]
print(result)`,
    question: "What does this print?",
    choices: ['[1, 3, 5]', '[2, 4, 6]', '[True, True, True]', '[0, 0, 0]'],
    answer: 1,
    explanation: `List comprehensions can include a filter condition after the <code>for</code> clause. <code>if x % 2 == 0</code> keeps only even numbers. The result is a new list — the original <code>nums</code> is unchanged. This is equivalent to <code>list(filter(lambda x: x % 2 == 0, nums))</code> but more readable.`,
  },

  {
    id: 163, category: 'lists', difficulty: 'hard',
    code:
`matrix = [[1, 2], [3, 4]]
flat = [x for row in matrix for x in row]
print(flat)`,
    question: "What does this print?",
    choices: ['[[1, 2], [3, 4]]', '[1, 2, 3, 4]', '[1, 3, 2, 4]', 'TypeError'],
    answer: 1,
    explanation: `A <strong>nested list comprehension</strong> with two <code>for</code> clauses iterates the outer loop first, then the inner. Read it left to right: for each <code>row</code> in <code>matrix</code>, for each <code>x</code> in <code>row</code>, collect <code>x</code>. This flattens one level of nesting. Equivalent to two nested <code>for</code> loops appending to a list.`,
  },

  {
    id: 164, category: 'lists', difficulty: 'hard',
    code:
`words = ['python', 'go', 'rust', 'c']
print(min(words, key=len))`,
    question: "What does this print?",
    choices: ['python', 'go', 'rust', 'c'],
    answer: 3,
    explanation: `<code>min(iterable, key=f)</code> applies <code>f</code> to each element and returns the element with the smallest result — not the smallest key value itself. <code>key=len</code> compares strings by length: 'python'(6), 'go'(2), 'rust'(4), 'c'(1). The shortest string is <code>'c'</code>, so that's returned.`,
  },

  {
    id: 165, category: 'lists', difficulty: 'hard',
    code:
`a = [1, 2, 3, 4, 5]
a[1:3] = [20, 30, 40]
print(a)`,
    question: "What does this print?",
    choices: ['[1, 20, 30, 40, 4, 5]', '[1, 20, 30, 4, 5]', '[20, 30, 40]', 'TypeError'],
    answer: 0,
    explanation: `<strong>Slice assignment</strong> replaces the selected range with any iterable — they don't have to be the same length. <code>a[1:3]</code> selects elements at indices 1 and 2 (<code>2, 3</code>). Replacing them with <code>[20, 30, 40]</code> (three items) expands the list: the rest of the list shifts right. This can also shrink a list: <code>a[1:3] = []</code> deletes two elements.`,
  },

  {
    id: 166, category: 'lists', difficulty: 'hard',
    code:
`a = [5, 3, 1, 4, 2]
a.sort()
b = a.sort()
print(b)`,
    question: "What does this print?",
    choices: ['[1, 2, 3, 4, 5]', 'None', '[5, 3, 1, 4, 2]', 'TypeError'],
    answer: 1,
    explanation: `<code>list.sort()</code> sorts in-place and always returns <code>None</code>. Calling it a second time on the already-sorted list still returns <code>None</code> — there is no "sorted list" return value, ever. Capturing the result of any in-place method (<code>sort</code>, <code>append</code>, <code>reverse</code>) is almost always a bug.`,
  },
  {
    id: 241, category: 'lists', difficulty: 'medium',
    code: `grid = [[0] * 3] * 3
grid[0][1] = 9
print(grid)`,
    question: "What does this print?",
    choices: [
      "[[0, 9, 0], [0, 0, 0], [0, 0, 0]]",
      "[[0, 9, 0], [0, 9, 0], [0, 9, 0]]",
      "[[9, 9, 9], [9, 9, 9], [9, 9, 9]]",
      "[[0, 0, 0], [0, 0, 0], [0, 0, 0]]",
    ],
    answer: 1,
    explanation: `<code>[[0]*3]*3</code> creates three references to the <em>same inner list</em>. Mutating <code>grid[0][1]</code> changes that shared list, so all three rows reflect the change. To get independent rows use a comprehension: <code>[[0]*3 for _ in range(3)]</code>.`,
  },
  {
    id: 242, category: 'lists', difficulty: 'easy',
    code: `a = [1, 2, 3]
b = [4, 5]
a.extend(b)
print(a)`,
    question: "What does this print?",
    choices: ["[1, 2, 3, [4, 5]]", "[1, 2, 3, 4, 5]", "[4, 5, 1, 2, 3]", "[[1, 2, 3], [4, 5]]"],
    answer: 1,
    explanation: `<code>extend()</code> appends each element of the iterable individually, unlike <code>append()</code> which would add the whole list as a single nested element. The result is a flat list containing all five integers.`,
  },
  {
    id: 243, category: 'lists', difficulty: 'easy',
    code: `x = [10, 20, 30, 40]
x.insert(2, 99)
print(x)`,
    question: "What does this print?",
    choices: ["[10, 20, 99, 30, 40]", "[10, 99, 20, 30, 40]", "[10, 20, 30, 99, 40]", "[99, 10, 20, 30, 40]"],
    answer: 0,
    explanation: `<code>insert(i, val)</code> inserts <code>val</code> <em>before</em> index <code>i</code>. Index 2 was <code>30</code>, so <code>99</code> is placed before it. All elements from index 2 onwards shift right by one.`,
  },
  {
    id: 244, category: 'lists', difficulty: 'easy',
    code: `nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
result = [x for x in nums if x % 3 == 0]
print(result)`,
    question: "What does this print?",
    choices: ["[3, 6, 9]", "[1, 4, 7]", "[0, 3, 6, 9]", "[2, 5, 8]"],
    answer: 0,
    explanation: `The list comprehension filters for values divisible by 3 (<code>% 3 == 0</code>). Among 1–9, those are 3, 6, and 9. The condition acts as a filter — only elements that satisfy it are included in the output list.`,
  },
  {
    id: 245, category: 'lists', difficulty: 'medium',
    code: `a = [1, 2, 3]
b = [4, 5]
print(list(zip(a, b)))`,
    question: "What does this print?",
    choices: ["[(1, 4), (2, 5), (3, None)]", "[(1, 4), (2, 5)]", "[(1, 4), (2, 5), (3,)]", "[(4, 1), (5, 2)]"],
    answer: 1,
    explanation: `<code>zip()</code> stops at the shortest iterable. Since <code>b</code> has only 2 elements, the output contains only 2 tuples — the unmatched <code>3</code> is simply dropped. Use <code>itertools.zip_longest</code> to fill missing values instead.`,
  },
  {
    id: 246, category: 'lists', difficulty: 'easy',
    code: `items = ['a', 'b', 'c']
for i, v in enumerate(items, 1):
    print(i, v)`,
    question: "What does this print?",
    choices: [
      "0 a\n1 b\n2 c",
      "1 a\n2 b\n3 c",
      "a 1\nb 2\nc 3",
      "1 0\n2 1\n3 2",
    ],
    answer: 1,
    explanation: `<code>enumerate(iterable, start)</code> pairs each element with a counter beginning at <code>start</code>. With <code>start=1</code> the counter runs 1, 2, 3 rather than the default 0, 1, 2. The tuple is unpacked into <code>i</code> (index) and <code>v</code> (value).`,
  },
  {
    id: 247, category: 'lists', difficulty: 'easy',
    code: `x = [1, 2, 3, 4, 5]
x.pop()
x.pop(0)
print(x)`,
    question: "What does this print?",
    choices: ["[2, 3, 4]", "[1, 2, 3, 4]", "[2, 3, 4, 5]", "[1, 2, 3]"],
    answer: 0,
    explanation: `<code>pop()</code> with no argument removes the <em>last</em> element (5), leaving <code>[1,2,3,4]</code>. <code>pop(0)</code> removes the element at index 0 (1), leaving <code>[2,3,4]</code>. Both calls modify the list in-place.`,
  },
  {
    id: 248, category: 'lists', difficulty: 'hard',
    code: `result = [j for i in range(3) for j in range(i)]
print(result)`,
    question: "What does this print?",
    choices: ["[0, 0, 1]", "[0, 1, 2]", "[0, 1, 0, 1, 2]", "[]"],
    answer: 0,
    explanation: `The outer loop runs <code>i = 0, 1, 2</code>. For <code>i=0</code>: <code>range(0)</code> is empty. For <code>i=1</code>: <code>range(1)</code> → <code>[0]</code>. For <code>i=2</code>: <code>range(2)</code> → <code>[0, 1]</code>. Combined: <code>[0, 0, 1]</code>. Each inner loop produces values from 0 up to (but not including) the outer index.`,
  },
  {
    id: 298, category: 'lists', difficulty: 'medium',
    code: `a = [1, 2, 3, 4, 5]
b = a[1:4]
b[0] = 99
print(a)`,
    question: "What does this print?",
    choices: ["[1, 2, 3, 4, 5]", "[1, 99, 3, 4, 5]", "[99, 2, 3, 4, 5]", "[1, 99, 99, 99, 5]"],
    answer: 0,
    explanation: `Slicing a list creates a <strong>shallow copy</strong> — <code>b</code> is a new list containing the same integer objects. Reassigning <code>b[0] = 99</code> rebinds an element of <code>b</code> but does not touch <code>a</code>. If the elements were mutable objects (e.g. lists), mutating them through <code>b</code> would affect <code>a</code>.`,
  },
  {
    id: 299, category: 'lists', difficulty: 'easy',
    code: `x = [3, 1, 4, 1, 5, 9]
print(x.count(1))
print(x.index(4))`,
    question: "What does this print?",
    choices: ["2\n2", "1\n2", "2\n3", "1\n3"],
    answer: 0,
    explanation: `<code>list.count(v)</code> returns the number of times <code>v</code> appears. <code>1</code> appears at indices 1 and 3, so the count is 2. <code>list.index(v)</code> returns the index of the <em>first</em> occurrence of <code>v</code>. <code>4</code> is at index 2.`,
  },
  {
    id: 300, category: 'lists', difficulty: 'medium',
    code: `pairs = [(2, 'b'), (1, 'a'), (3, 'c')]
pairs.sort(key=lambda p: p[0])
print(pairs)`,
    question: "What does this print?",
    choices: [
      "[(1, 'a'), (2, 'b'), (3, 'c')]",
      "[(2, 'b'), (1, 'a'), (3, 'c')]",
      "[('a', 1), ('b', 2), ('c', 3)]",
      "[(3, 'c'), (2, 'b'), (1, 'a')]",
    ],
    answer: 0,
    explanation: `The <code>key</code> function extracts a comparison value from each element. <code>lambda p: p[0]</code> sorts by the first element of each tuple. The sort is <strong>stable</strong> and <strong>in-place</strong>. Using a key avoids writing a full comparator and is more efficient than sorting the full tuple directly.`,
  },
  {
    id: 301, category: 'lists', difficulty: 'hard',
    code: `matrix = [[1,2,3],[4,5,6],[7,8,9]]
flat = [x for row in matrix for x in row]
print(flat[4])`,
    question: "What does this print?",
    choices: ["5", "4", "6", "2"],
    answer: 0,
    explanation: `The nested comprehension iterates outer-then-inner: <code>1,2,3,4,5,6,7,8,9</code>. Index 4 is the fifth element: <code>5</code>. Reading the comprehension left-to-right matches the loop nesting order — <code>for row in matrix</code> is the outer loop, <code>for x in row</code> is the inner loop.`,
  },
  {
    id: 302, category: 'lists', difficulty: 'medium',
    code: `a = [1, 2, 3]
b = a * 2
b.append(7)
print(a)`,
    question: "What does this print?",
    choices: ["[1, 2, 3]", "[1, 2, 3, 1, 2, 3]", "[1, 2, 3, 7]", "[1, 2, 3, 1, 2, 3, 7]"],
    answer: 0,
    explanation: `<code>a * 2</code> creates a brand-new list <code>[1,2,3,1,2,3]</code> and assigns it to <code>b</code>. <code>a</code> and <code>b</code> are independent — appending to <code>b</code> does not affect <code>a</code>. (If the elements were mutable, they would still be shared references, but <code>append</code> only changes the list structure, not the elements.)`,
  },
  {
    id: 303, category: 'lists', difficulty: 'easy',
    code: `x = [10, 20, 30, 40, 50]
print(x[1:4:2])`,
    question: "What does this print?",
    choices: ["[20, 40]", "[20, 30, 40]", "[10, 30, 50]", "[20, 30]"],
    answer: 0,
    explanation: `The slice <code>[1:4:2]</code> starts at index 1 (<code>20</code>), stops before index 4, and takes every 2nd element. So it picks index 1 (<code>20</code>) and index 3 (<code>40</code>). The <strong>step</strong> of 2 skips index 2 entirely.`,
  },

];
