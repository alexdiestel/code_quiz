// strings.js — 37 questions — IDs: 3,12,14,22,30,31,32,33,34,62,73,74,75,76,77,78,127,128,129,130,131,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182
const PY_STRINGS = [
  {
    id: 3, category: 'strings', difficulty: 'easy',
    code: `print("ha" * 3)`,
    question: "What does this print?",
    choices: ['ha3', 'hahaha', 'ha ha ha', 'TypeError'],
    answer: 1,
    explanation: `The <code>*</code> operator on strings means <strong>repetition</strong>. <code>"ha" * 3</code> concatenates <code>"ha"</code> three times. This works with any string and positive integer. The same syntax works on lists too: <code>[0] * 5</code> gives <code>[0, 0, 0, 0, 0]</code>.`
  },
  {
    id: 30, category: 'strings', difficulty: 'easy',
    code: `print("ell" in "hello")`,
    question: "What does this print?",
    choices: ['True', 'False', '1', 'TypeError'],
    answer: 0,
    explanation: `The <code>in</code> operator on strings tests for <strong>substrings</strong>. <code>"ell" in "hello"</code> returns <code>True</code> because <code>"ell"</code> appears consecutively within <code>"hello"</code>. The test is case-sensitive — <code>"ELL" in "hello"</code> would be <code>False</code>.`
  },
  {
    id: 31, category: 'strings', difficulty: 'easy',
    code: `name = "world"
print(f"Hello, {name}!")`,
    question: "What does this print?",
    choices: ['Hello, world!', 'Hello, {name}!', 'Hello, name!', 'SyntaxError'],
    answer: 0,
    explanation: `<strong>f-strings</strong> (formatted string literals) evaluate the expression inside <code>{}</code> at runtime and insert the result. You can put any valid Python expression in the braces — variables, arithmetic, function calls, even conditions. They are the most readable way to build strings in modern Python.`
  },
  {
    id: 32, category: 'strings', difficulty: 'easy',
    code: `s = "  hello world  "
print(s.strip())`,
    question: "What does this print?",
    choices: ['hello world', '  hello world  ', 'helloworld', 'hello'],
    answer: 0,
    explanation: `<code>strip()</code> removes leading and trailing whitespace — spaces, tabs, and newlines. <code>lstrip()</code> removes only from the left, <code>rstrip()</code> only from the right. Strings are <strong>immutable</strong>, so a new string is returned; the original is unchanged.`
  },
  {
    id: 12, category: 'strings', difficulty: 'medium',
    code: `x = "hello"
for char in x:
    print(char, end="")`,
    question: "What does this print?",
    choices: ['hello', 'h e l l o', "['h','e','l','l','o']", 'TypeError'],
    answer: 0,
    explanation: `Strings in Python are <strong>iterable</strong> — looping over a string yields one character at a time. The <code>end=""</code> argument suppresses the default newline after each <code>print()</code>, so all characters appear on one line. Any sequence (list, tuple, string, range) can be iterated with <code>for</code>.`
  },
  {
    id: 33, category: 'strings', difficulty: 'medium',
    code: `s = "one,two,three"
print(s.split(","))`,
    question: "What does this print?",
    choices: ["['one', 'two', 'three']", "['o','n','e',',','t']", "'one two three'", 'TypeError'],
    answer: 0,
    explanation: `<code>str.split(sep)</code> splits a string on a separator and returns a list of strings. Calling <code>split()</code> with no argument splits on any whitespace and discards empty strings. It is the inverse of <code>join()</code> — <code>",".join(["one","two","three"])</code> would rebuild the original.`
  },
  {
    id: 34, category: 'strings', difficulty: 'medium',
    code: `words = ["Python", "is", "fun"]
print(" ".join(words))`,
    question: "What does this print?",
    choices: ['Python is fun', "['Python', 'is', 'fun']", 'Python,is,fun', 'TypeError'],
    answer: 0,
    explanation: `<code>sep.join(iterable)</code> joins a sequence of strings using <code>sep</code> as glue. The separator comes first — this feels backwards at first but means you can easily swap the separator. It is the inverse of <code>split()</code>, and much faster than concatenating with <code>+</code> in a loop.`
  },
  {
    id: 14, category: 'strings', difficulty: 'medium',
    code: `print("abc"[::-1])`,
    question: "What does this print?",
    choices: ['abc', 'cba', "['c','b','a']", 'TypeError'],
    answer: 1,
    explanation: `<code>[::-1]</code> is a slice with a <strong>step of -1</strong>, which iterates backwards through the sequence. This is the classic Pythonic one-liner to reverse a string, list, or tuple. The full slice form is <code>[start:stop:step]</code> — omitting start and stop means "the entire sequence".`
  },
  {
    id: 22, category: 'strings', difficulty: 'hard',
    code: `a = "hello"
a[0] = "H"
print(a)`,
    question: "What does this print?",
    choices: ['Hello', 'hello', 'H', 'TypeError'],
    answer: 3,
    explanation: `Strings in Python are <strong>immutable</strong> — you cannot change individual characters. Attempting to assign to a string index raises <code>TypeError: 'str' object does not support item assignment</code>. To produce a modified string, create a new one: <code>a = "H" + a[1:]</code> or <code>a = a.replace("h", "H", 1)</code>.`
  },
  {
    id: 62, category: 'strings', difficulty: 'medium',
    code: `text = "  hello  "
print(text.strip == "hello")`,
    question: "What does this print?",
    choices: ['True', 'False', 'TypeError', 'AttributeError'],
    answer: 1,
    explanation: `<code>text.strip</code> without parentheses is a <strong>reference to the method object</strong> — it never runs the function. A method object can never equal the string <code>"hello"</code>, so the comparison is silently <code>False</code>. Python does not warn you. The fix is <code>text.strip()</code>. Forgotten parentheses are one of the most common silent bugs in Python.`
  },
  {
    id: 73, category: 'strings', difficulty: 'easy',
    code: `s = "hello"
s.upper()
print(s)`,
    question: "What does this print?",
    choices: ['HELLO', 'hello', 'Hello', 'TypeError'],
    answer: 1,
    explanation: `Strings are <strong>immutable</strong>. <code>s.upper()</code> creates and returns a brand-new uppercase string — it does not modify <code>s</code> in place. To actually use the result, you must capture it: <code>s = s.upper()</code> or <code>print(s.upper())</code>. This is true of every string method: <code>strip()</code>, <code>replace()</code>, <code>split()</code> — they all return new objects.`
  },
  {
    id: 74, category: 'strings', difficulty: 'easy',
    code: `print(len("hello world"))`,
    question: "What does this print?",
    choices: ['10', '11', '5', '2'],
    answer: 1,
    explanation: `<code>len()</code> counts every character in a string — including spaces. <code>"hello world"</code> has 5 letters, 1 space, and 5 more letters: 11 in total. Spaces are not special — they are just characters. Tabs and newlines also count as single characters each.`
  },
  {
    id: 75, category: 'strings', difficulty: 'medium',
    code: `s = "Python"
print(s[-3:])`,
    question: "What does this print?",
    choices: ['Pyt', 'hon', 'tho', 'on'],
    answer: 1,
    explanation: `<code>s[-3:]</code> starts at the 3rd character from the end and runs to the end. In <code>"Python"</code>, index <code>-3</code> is <code>'h'</code> (P=0, y=1, t=2, h=3 / or h=-3, o=-2, n=-1), so the <strong>slice</strong> yields <code>"hon"</code>. Omitting the stop means "through the end". Negative slice starts are very handy for extracting file extensions, suffixes, and last-N-chars patterns.`
  },
  {
    id: 76, category: 'strings', difficulty: 'medium',
    code: `s = "hello"
print(s.find("xyz"))`,
    question: "What does this print?",
    choices: ['None', 'ValueError', '-1', 'False'],
    answer: 2,
    explanation: `<code>str.find(sub)</code> returns <code>-1</code> when the substring is not found — it never raises an exception. This makes it safe for conditional use: <code>if s.find("x") != -1</code>. The stricter alternative is <code>str.index(sub)</code>, which raises <code>ValueError</code> on failure. Pick <code>find()</code> when absence is normal, <code>index()</code> when absence is a bug.`
  },
  {
    id: 77, category: 'strings', difficulty: 'medium',
    code: `s = "aabbaa"
print(s.replace("a", "x", 2))`,
    question: "What does this print?",
    choices: ['xxbbxx', 'xxbbaa', 'aabbxx', 'TypeError'],
    answer: 1,
    explanation: `The optional third argument to <code>replace()</code> caps the number of substitutions. Here only the first <code>2</code> occurrences of <code>"a"</code> are replaced — positions 0 and 1 — giving <code>"xxbbaa"</code>. The remaining two <code>"a"</code>s at the end are untouched. Without the count, all four would be replaced. Strings are <strong>immutable</strong>, so a new string is returned.`
  },
  {
    id: 78, category: 'strings', difficulty: 'hard',
    code: `print("aaa".count("aa"))`,
    question: "What does this print?",
    choices: ['2', '1', '3', '0'],
    answer: 1,
    explanation: `<code>str.count()</code> is <em>non-overlapping</em>. It finds <code>"aa"</code> at index 0, then advances past it to index 2, where only one <code>"a"</code> remains — too short for another match. Total: <code>1</code>. If overlapping matches mattered (returning <code>2</code>), you would need a manual loop or a regex with a lookahead. This non-overlapping behaviour is consistent with how <code>replace()</code> and <code>split()</code> work.`
  },

  {
    id: 127, category: 'strings', difficulty: 'easy',
    code:
`steps = ['read', 'the', 'code']
print(' '.join(steps))`,
    question: "What does this print?",
    choices: ["'read the code'", 'read the code', "['read', 'the', 'code']", 'readthecode'],
    answer: 1,
    explanation: `<code>str.join(iterable)</code> concatenates the items of the iterable, placing the string it was called on between each pair. <code>' '.join(['read', 'the', 'code'])</code> inserts a space between each word. No quotes are printed — <code>print</code> outputs the value, not its repr.`,
  },

  {
    id: 128, category: 'strings', difficulty: 'easy',
    code:
`quest = 'code_quest_2026'
parts = quest.split('_')
print(parts[1])`,
    question: "What does this print?",
    choices: ['code', 'quest', '2026', '_quest_2026'],
    answer: 1,
    explanation: `<code>str.split(sep)</code> breaks the string at every occurrence of <code>sep</code> and returns a list. <code>'code_quest_2026'.split('_')</code> → <code>['code', 'quest', '2026']</code>. Index 1 is <code>'quest'</code>. The separator itself is not included in any of the resulting pieces.`,
  },

  {
    id: 129, category: 'strings', difficulty: 'medium',
    code:
`s = 'abcabc'
print(s.replace('b', 'X', 1))`,
    question: "What does this print?",
    choices: ['aXcaXc', 'aXcabc', 'abcaXc', 'XXcXXc'],
    answer: 1,
    explanation: `The optional third argument to <code>str.replace(old, new, count)</code> limits how many replacements are made. With <code>count=1</code>, only the <em>first</em> occurrence of <code>'b'</code> is replaced, leaving the second untouched. Without a count argument, all occurrences would be replaced.`,
  },

  {
    id: 130, category: 'strings', difficulty: 'medium',
    code:
`s = '  quest  '
print(len(s.strip()))`,
    question: "What does this print?",
    choices: ['9', '7', '5', '6'],
    answer: 2,
    explanation: `<code>str.strip()</code> removes leading and trailing whitespace, returning a new string. <code>'  quest  '.strip()</code> → <code>'quest'</code>, which has 5 characters. The original string (length 9) is unchanged — strings are <strong>immutable</strong>.`,
  },

  {
    id: 131, category: 'strings', difficulty: 'hard',
    code:
`code = 'abcdef'
print(code[1::2])`,
    question: "What does this print?",
    choices: ['ace', 'bdf', 'bce', 'adf'],
    answer: 1,
    explanation: `<code>[start::step]</code> begins at index 1 and takes every 2nd character. Starting at <code>'b'</code> (index 1): <code>'b'</code> (1), <code>'d'</code> (3), <code>'f'</code> (5). Compare with <code>[::2]</code> which starts at index 0 and gives <code>'ace'</code>. The step applies <em>after</em> the start position, not from the beginning.`,
  },

  {
    id: 167, category: 'strings', difficulty: 'easy',
    code:
`s = "python"
print(s[2:5])`,
    question: "What does this print?",
    choices: ["'tho'", "'yth'", "'pyt'", "'hon'"],
    answer: 0,
    explanation: `<code>s[2:5]</code> slices from index 2 up to (but not including) index 5. Characters: index 2 = <code>'t'</code>, 3 = <code>'h'</code>, 4 = <code>'o'</code> → <code>'tho'</code>. The stop index is always exclusive. A common pattern: <code>s[:n]</code> gives the first <code>n</code> characters; <code>s[n:]</code> gives the rest.`,
  },

  {
    id: 168, category: 'strings', difficulty: 'easy',
    code:
`lang = "python"
print(lang.upper())`,
    question: "What does this print?",
    choices: ["'PYTHON'", "'Python'", "'python'", "TypeError"],
    answer: 0,
    explanation: `<code>str.upper()</code> returns a new string with all letters converted to uppercase. Strings are <strong>immutable</strong> — <code>lang</code> itself is unchanged. The pair <code>str.lower()</code> / <code>str.upper()</code> is handy for case-insensitive comparisons: <code>a.lower() == b.lower()</code>.`,
  },

  {
    id: 169, category: 'strings', difficulty: 'easy',
    code:
`s = "go!"
print(s * 3)`,
    question: "What does this print?",
    choices: ["'go!go!go!'", "'go! go! go!'", "'ggg'", "TypeError"],
    answer: 0,
    explanation: `The <code>*</code> operator on a string performs <strong>repetition</strong> — it concatenates the string with itself <code>n</code> times. <code>"go!" * 3</code> is <code>"go!" + "go!" + "go!"</code>. A new string object is created; the original is unchanged. <code>s * 0</code> gives an empty string; <code>s * 1</code> gives a copy.`,
  },

  {
    id: 170, category: 'strings', difficulty: 'easy',
    code:
`url = "code-quest.dev"
print("quest" in url)`,
    question: "What does this print?",
    choices: ['True', 'False', 'None', 'TypeError'],
    answer: 0,
    explanation: `The <code>in</code> operator on strings checks for <strong>substring</strong> membership — it looks for <code>'quest'</code> anywhere inside <code>url</code>. It's case-sensitive. <code>'Quest' in url</code> would be <code>False</code>. This is equivalent to <code>url.find('quest') != -1</code> but far more readable.`,
  },

  {
    id: 171, category: 'strings', difficulty: 'medium',
    code:
`s = "mississippi"
print(s.count("ss"))`,
    question: "What does this print?",
    choices: ['1', '2', '3', '4'],
    answer: 1,
    explanation: `<code>str.count(sub)</code> returns the number of <strong>non-overlapping</strong> occurrences of <code>sub</code>. In <code>"mississippi"</code>: the first <code>"ss"</code> appears at index 2, the second at index 5. After each match, the search resumes <em>after</em> the match end — overlapping matches are not counted. Result: <code>2</code>.`,
  },

  {
    id: 172, category: 'strings', difficulty: 'medium',
    code:
`x = 4
print(f"{x ** 2} points")`,
    question: "What does this print?",
    choices: ["'16 points'", "'x ** 2 points'", "'4 points'", "SyntaxError"],
    answer: 0,
    explanation: `Expressions inside <code>{}</code> in an <strong>f-string</strong> are evaluated at runtime. <code>x ** 2</code> computes <code>16</code>, which is then converted to a string and inserted. F-strings can contain any valid Python expression — function calls, method calls, arithmetic, ternaries — making them very flexible.`,
  },

  {
    id: 173, category: 'strings', difficulty: 'medium',
    code:
`path = "code/quest/2026"
parts = path.split("/")
print(parts[-1])`,
    question: "What does this print?",
    choices: ["'code'", "'quest'", "'2026'", "'code/quest/2026'"],
    answer: 2,
    explanation: `<code>str.split(sep)</code> splits on every occurrence of <code>sep</code> and returns a list of substrings. <code>"code/quest/2026".split("/")</code> → <code>['code', 'quest', '2026']</code>. <code>parts[-1]</code> is the last element: <code>'2026'</code>. Splitting on <code>None</code> (the default) splits on any whitespace and strips leading/trailing whitespace too.`,
  },

  {
    id: 174, category: 'strings', difficulty: 'medium',
    code:
`s = "aabbaa"
print(s.replace("aa", "X"))`,
    question: "What does this print?",
    choices: ["'XbbX'", "'Xbb'", "'aabbaa'", "'XXbbXX'"],
    answer: 0,
    explanation: `<code>str.replace(old, new)</code> replaces <em>all</em> non-overlapping occurrences of <code>old</code> with <code>new</code> and returns a new string. <code>"aa"</code> appears at the start and end → both become <code>"X"</code>. The middle <code>"bb"</code> is unchanged. To limit replacements, pass a third argument: <code>s.replace("aa", "X", 1)</code> replaces only the first match.`,
  },

  {
    id: 175, category: 'strings', difficulty: 'medium',
    code:
`s = "code quest"
print(s.title())`,
    question: "What does this print?",
    choices: ["'Code Quest'", "'CODE QUEST'", "'code quest'", "'Code quest'"],
    answer: 0,
    explanation: `<code>str.title()</code> capitalises the first letter of each word (defined as any sequence after a non-letter character) and lowercases the rest. It's simpler than <code>str.capitalize()</code> (which only affects the very first letter of the whole string). Useful for display formatting, though it can misbehave with apostrophes: <code>"don't".title()</code> → <code>"Don'T"</code>.`,
  },

  {
    id: 176, category: 'strings', difficulty: 'medium',
    code:
`s = "hello world"
print(s.find("world"))`,
    question: "What does this print?",
    choices: ['5', '6', '7', '-1'],
    answer: 1,
    explanation: `<code>str.find(sub)</code> returns the <strong>index</strong> of the first occurrence of <code>sub</code>, or <code>-1</code> if not found. <code>"world"</code> starts at index 6 (after the space). Contrast with <code>str.index(sub)</code>, which raises <code>ValueError</code> instead of returning <code>-1</code>. Use <code>find</code> when absence is a valid outcome.`,
  },

  {
    id: 177, category: 'strings', difficulty: 'medium',
    code:
`filename = "snippet.py"
print(filename.endswith(".py"))`,
    question: "What does this print?",
    choices: ['True', 'False', "'py'", 'None'],
    answer: 0,
    explanation: `<code>str.endswith(suffix)</code> returns <code>True</code> if the string ends with the given suffix. It also accepts a tuple of suffixes: <code>filename.endswith((".py", ".pyw"))</code> checks both. The counterpart <code>str.startswith(prefix)</code> checks the beginning. Both are case-sensitive and never raise errors.`,
  },

  {
    id: 178, category: 'strings', difficulty: 'hard',
    code:
`words = ["in", "space", "no", "one"]
print("-".join(words))`,
    question: "What does this print?",
    choices: ["'in-space-no-one'", "'in space no one'", "'-in-space-no-one-'", "TypeError"],
    answer: 0,
    explanation: `<code>sep.join(iterable)</code> concatenates all strings in the iterable, placing <code>sep</code> between each pair — <em>not</em> at the start or end. <code>"-".join(["in","space","no","one"])</code> → <code>"in-space-no-one"</code>. Every element must be a string; passing integers raises <code>TypeError</code>. This is significantly faster than concatenating in a loop.`,
  },

  {
    id: 179, category: 'strings', difficulty: 'hard',
    code:
`s = "  Code Quest  "
print(s.strip().lower().replace(" ", "_"))`,
    question: "What does this print?",
    choices: ["'code_quest'", "'Code_Quest'", "'  code_quest  '", "'code quest'"],
    answer: 0,
    explanation: `Method calls chain left to right: <code>strip()</code> removes the surrounding spaces → <code>"Code Quest"</code>. <code>lower()</code> lowercases it → <code>"code quest"</code>. <code>replace(" ", "_")</code> replaces the space → <code>"code_quest"</code>. Each method returns a new string; the original <code>s</code> is unchanged throughout.`,
  },

  {
    id: 180, category: 'strings', difficulty: 'hard',
    code:
`s = "hello"
s[0] = "H"
print(s)`,
    question: "What does this print?",
    choices: ["'Hello'", "'hello'", 'TypeError', 'SyntaxError'],
    answer: 2,
    explanation: `Strings are <strong>immutable</strong> in Python — individual characters cannot be reassigned. <code>s[0] = "H"</code> raises <code>TypeError: 'str' object does not support item assignment</code>. To produce a modified string, construct a new one: <code>s = "H" + s[1:]</code> or <code>s = s.replace("h", "H", 1)</code>.`,
  },

  {
    id: 181, category: 'strings', difficulty: 'hard',
    code:
`t = "Hello, {}! Score: {}"
print(t.format("quest", 500))`,
    question: "What does this print?",
    choices: ["'Hello, quest! Score: 500'", "'Hello, {}! Score: {}'", "'Hello, quest! Score: {}'", "IndexError"],
    answer: 0,
    explanation: `<code>str.format()</code> replaces each <code>{}</code> placeholder with the positional arguments in order. It's the predecessor to f-strings and still widely used in templates, logging, and older codebases. You can also use numbered placeholders (<code>{0}</code>, <code>{1}</code>) or named ones (<code>{name}</code>) for more control.`,
  },

  {
    id: 182, category: 'strings', difficulty: 'hard',
    code:
`s = "quest"
print(s[::-1] == s)`,
    question: "What does this print?",
    choices: ['True', 'False', 'None', 'TypeError'],
    answer: 1,
    explanation: `<code>s[::-1]</code> reverses the string: <code>"tseuq"</code>. Comparing <code>"tseuq"</code> with <code>"quest"</code> → <code>False</code>. A string equals its own reversal only if it is a palindrome (e.g. <code>"racecar"</code> or <code>"level"</code>). This is a compact Python idiom for palindrome detection.`,
  },

];
