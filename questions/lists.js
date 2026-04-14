// lists.js — 16 questions — IDs: 1,2,11,15,17,23,24,25,26,27,28,29,69,70,71,72
const Q_LISTS = [
  {
    id: 1, category: 'lists', difficulty: 'easy',
    code: `x = [10, 20, 30, 40, 50]
print(x[-1])`,
    question: "What does this code output?",
    choices: ['10', '50', '[50]', 'IndexError'],
    answer: 1,
    explanation: `<code>x[-1]</code> accesses the last element using <strong>negative indexing</strong>. In Python, negative indices count backwards from the end — <code>-1</code> is the last element, <code>-2</code> is second-to-last, and so on.`
  },
  {
    id: 2, category: 'lists', difficulty: 'easy',
    code: `x = [10, 20, 30, 40, 50]
print(x[:-1])`,
    question: "What does this code output?",
    choices: ['[50]', '[10, 20, 30, 40]', '[10, 20, 30, 40, 50]', '50'],
    answer: 1,
    explanation: `<code>x[:-1]</code> is a <strong>slice</strong>, not an index. The colon makes all the difference. It returns everything <em>up to but not including</em> the last element. Compare: <code>x[-1]</code> → single value, <code>x[:-1]</code> → new list without the last item.`
  },
  {
    id: 23, category: 'lists', difficulty: 'easy',
    code: `x = [3, 1, 2]
y = sorted(x)
print(x)`,
    question: "What does this code output?",
    choices: ['[1, 2, 3]', '[3, 1, 2]', 'None', '[3, 2, 1]'],
    answer: 1,
    explanation: `<code>sorted()</code> is a built-in function that returns a <strong>new sorted list</strong> and leaves the original unchanged. Contrast with <code>list.sort()</code> which sorts <strong>in-place</strong> and returns <code>None</code>. When you want the original preserved, always use <code>sorted()</code>.`
  },
  {
    id: 24, category: 'lists', difficulty: 'easy',
    code: `x = [0, 1, 2, 3, 4, 5, 6]
print(x[::2])`,
    question: "What does this code output?",
    choices: ['[0, 2, 4, 6]', '[1, 3, 5]', '[0, 2, 4]', '[6, 4, 2, 0]'],
    answer: 0,
    explanation: `The third argument in a slice is the <strong>step</strong> — how far to jump between each selected element. <code>[::2]</code> starts from the beginning and takes every 2nd item. A step of <code>-1</code> would reverse the list; a step of <code>3</code> would take every 3rd.`
  },
  {
    id: 11, category: 'lists', difficulty: 'medium',
    code: `nums = [1, 2, 3, 4, 5]
print(nums[1:4])`,
    question: "What does this code output?",
    choices: ['[2, 3, 4, 5]', '[1, 2, 3, 4]', '[2, 3, 4]', '[1, 2, 3]'],
    answer: 2,
    explanation: `Slicing <code>[start:stop]</code> returns elements from index <code>start</code> up to but <strong>not including</strong> <code>stop</code>. <code>nums[1:4]</code> selects indices 1, 2, 3 — the values 2, 3, 4. Python indexing starts at 0, and the stop index is always exclusive.`
  },
  {
    id: 25, category: 'lists', difficulty: 'medium',
    code: `x = [1, 2, 3]
x.append([4, 5])
print(len(x))`,
    question: "What does this code output?",
    choices: ['4', '5', '6', 'TypeError'],
    answer: 0,
    explanation: `<code>append()</code> adds its argument as a <strong>single element</strong>, whatever that argument is. <code>[4, 5]</code> becomes one nested list, so <code>len</code> goes from 3 to 4. To add each element individually, use <code>extend([4, 5])</code> or <code>+= [4, 5]</code>, which would give <code>len</code> of 5.`
  },
  {
    id: 26, category: 'lists', difficulty: 'medium',
    code: `a = [1, 2, 3]
b = ["x", "y"]
print(list(zip(a, b)))`,
    question: "What does this code output?",
    choices: ["[(1, 'x'), (2, 'y')]", "[(1, 'x'), (2, 'y'), (3, None)]", "[(1, 2, 3), ('x', 'y')]", 'ValueError'],
    answer: 0,
    explanation: `<code>zip()</code> pairs up elements from multiple iterables. It <strong>stops at the shortest</strong> — the third element of <code>a</code> is silently dropped because <code>b</code> has nothing to pair it with. Use <code>itertools.zip_longest()</code> if you need to keep all elements, filling gaps with <code>None</code>.`
  },
  {
    id: 15, category: 'lists', difficulty: 'medium',
    code: `a = [1, 2, 3]
b = [4, 5, 6]
print(a + b)`,
    question: "What does this code output?",
    choices: ['[5, 7, 9]', '[1, 2, 3, 4, 5, 6]', '[[1,2,3],[4,5,6]]', 'TypeError'],
    answer: 1,
    explanation: `<code>+</code> on lists performs <strong>concatenation</strong>, not element-wise addition. It joins the lists end-to-end into a new list. For element-wise math you'd use a list comprehension: <code>[x+y for x, y in zip(a, b)]</code>, or NumPy arrays which overload <code>+</code> to mean element-wise addition.`
  },
  {
    id: 17, category: 'lists', difficulty: 'hard',
    code: `result = [x * 2 for x in range(5) if x % 2 == 0]
print(result)`,
    question: "What does this code output?",
    choices: ['[0, 2, 4, 6, 8]', '[0, 4, 8]', '[2, 4, 6, 8, 10]', '[0, 2, 4]'],
    answer: 1,
    explanation: `This list comprehension has two stages: the filter <code>if x % 2 == 0</code> keeps only even values from <code>range(5)</code> → {0, 2, 4}, then <code>x * 2</code> doubles each one: 0→0, 2→4, 4→8. Read it as "double every even number from 0 to 4". The order is: iterate → filter → transform.`
  },
  {
    id: 27, category: 'lists', difficulty: 'hard',
    code: `matrix = [[0] * 3] * 3
matrix[0][0] = 1
print(matrix[1][0])`,
    question: "What does this code output?",
    choices: ['0', '1', 'IndexError', 'TypeError'],
    answer: 1,
    explanation: `<code>[[0]*3]</code> creates one inner list. Multiplying by <code>3</code> repeats the <strong>reference</strong> to that same list — all three rows point to the exact same object. So changing <code>matrix[0][0]</code> changes all three rows simultaneously. To make independent rows: <code>[[0]*3 for _ in range(3)]</code>.`
  },
  {
    id: 28, category: 'lists', difficulty: 'hard',
    code: `a, *b, c = [1, 2, 3, 4, 5]
print(b)`,
    question: "What does this code output?",
    choices: ['[2, 3, 4]', '[2, 3, 4, 5]', '(2, 3, 4)', '[1, 2, 3, 4]'],
    answer: 0,
    explanation: `The <code>*</code> in unpacking absorbs everything not claimed by the named variables on either side. <code>a</code> gets <code>1</code>, <code>c</code> gets <code>5</code>, and <code>*b</code> captures everything in between as a <strong>list</strong> — always a list, even if it ends up with one or zero elements.`
  },
  {
    id: 29, category: 'lists', difficulty: 'hard',
    code: `for i, v in enumerate(["a", "b", "c"]):
    print(i, v)`,
    question: "What does this code output?",
    choices: ['0 a\n1 b\n2 c', 'a 0\nb 1\nc 2', '0\n1\n2', 'a\nb\nc'],
    answer: 0,
    explanation: `<code>enumerate(iterable)</code> yields <code>(index, value)</code> pairs, making it the Pythonic way to loop with a counter. The default start index is <code>0</code>; use <code>enumerate(x, start=1)</code> to begin at 1. It avoids the need for a manual <code>i = 0</code> counter.`
  },
  {
    id: 69, category: 'lists', difficulty: 'easy',
    code: `x = [10, 20, 30]
x.pop()
print(x)`,
    question: "What does this code output?",
    choices: ['[10, 20]', '[20, 30]', '[10, 20, 30]', '[10]'],
    answer: 0,
    explanation: `<code>list.pop()</code> with no argument removes and returns the <strong>last element</strong>. The list is modified in-place. You can also pass an index — <code>x.pop(0)</code> removes the first element — but removing from the end is O(1), while removing from the front is O(n) since every other element shifts.`
  },
  {
    id: 70, category: 'lists', difficulty: 'medium',
    code: `x = [10, 20, 30]
print(1 in x)`,
    question: "What does this code output?",
    choices: ['True', 'False', 'TypeError', '10'],
    answer: 1,
    explanation: `<code>in</code> on a list checks whether a <strong>value</strong> exists anywhere in the list — not whether an index is valid. <code>1</code> is not a value in <code>[10, 20, 30]</code>, so the result is <code>False</code>. <code>10 in x</code> would be <code>True</code>. Contrast with dicts, where <code>in</code> checks keys — on lists it always checks values.`
  },
  {
    id: 71, category: 'lists', difficulty: 'medium',
    code: `for i, v in enumerate("abc", start=1):
    print(i, v)`,
    question: "What does this code output?",
    choices: ['1 a\n2 b\n3 c', '0 a\n1 b\n2 c', 'a 1\nb 2\nc 3', 'TypeError'],
    answer: 0,
    explanation: `<code>enumerate()</code> accepts an optional <code>start</code> keyword argument that sets the first index. With <code>start=1</code>, counting begins at 1 instead of 0 — useful when displaying human-readable numbers. The default is <code>start=0</code>. Strings are <strong>iterable</strong>, so <code>enumerate</code> works on them just as well as lists.`
  },
  {
    id: 72, category: 'lists', difficulty: 'hard',
    code: `x = [0, 1, 2, 3, 4]
del x[1:3]
print(x)`,
    question: "What does this code output?",
    choices: ['[0, 3, 4]', '[0, 1, 3, 4]', '[1, 2]', 'SyntaxError'],
    answer: 0,
    explanation: `<code>del</code> with a <strong>slice</strong> removes every element in that range in one step. <code>x[1:3]</code> covers indices 1 and 2 (values <code>1</code> and <code>2</code>), so they are cut out, leaving <code>[0, 3, 4]</code>. This is more efficient than popping elements one by one in a loop, and it works on any slice, including stepped ones like <code>del x[::2]</code>.`
  },
];
