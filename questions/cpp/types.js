// types.js â€” 15 questions â€” IDs: 1006,1007,1008,1009,1010,1029,1030,1031,1032,1033,1034,1035,1054,1055,1056
// Difficulties: easyÃ—1, mediumÃ—2, hardÃ—2
const CPP_TYPES = [

  {
    id: 1006, category: 'types', difficulty: 'easy',
    code:
`#include <iostream>
using namespace std;

int main() {
    double x = 1.0 / 4.0;
    cout << x << endl;
}`,
    question: "What does this print?",
    choices: ['0', '0.25', '0.2', '1'],
    answer: 1,
    explanation: `Both operands are <code>double</code>, so true floating-point division is performed: <code>1.0 / 4.0 = 0.25</code>. Compare with integer division: <code>1 / 4</code> would yield <code>0</code> because the fractional part is discarded. Mixed expressions like <code>1 / 4.0</code> also produce <code>0.25</code> â€” the <code>int</code> is promoted to <code>double</code> first.`
  },

  {
    id: 1007, category: 'types', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 5;
    double y = x / 2;
    cout << y << endl;
}`,
    question: "What does this print?",
    choices: ['2.5', '2', '3', '0'],
    answer: 1,
    explanation: `<code>x / 2</code> is evaluated first. Both <code>x</code> and the literal <code>2</code> are <code>int</code>, so integer division gives <code>2</code>. That integer <code>2</code> is then implicitly converted to <code>double 2.0</code> when stored in <code>y</code>. <code>cout</code> prints <code>2</code> â€” the <code>.0</code> is not shown by default. To force floating-point division, write <code>x / 2.0</code>.`
  },

  {
    id: 1008, category: 'types', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    auto x = 5;
    auto y = 2.0;
    cout << x / y << endl;
}`,
    question: "What does this print?",
    choices: ['2', '2.5', '3', '2.0'],
    answer: 1,
    explanation: `<code>auto</code> deduces <code>x</code> as <code>int</code> (from the integer literal <code>5</code>) and <code>y</code> as <code>double</code> (from <code>2.0</code>). When dividing <code>int</code> by <code>double</code>, the <code>int</code> is promoted to <code>double</code> first. <code>5 / 2.0 = 2.5</code>. Had both been <code>auto</code> from integer literals, the result would be <code>2</code>.`
  },

  {
    id: 1009, category: 'types', difficulty: 'hard',
    code:
`#include <iostream>
using namespace std;

int main() {
    unsigned char x = 255;
    x++;
    cout << (int)x << endl;
}`,
    question: "What does this print?",
    choices: ['256', '0', '-1', '255'],
    answer: 1,
    explanation: `<code>unsigned char</code> holds values 0â€“255. Incrementing past 255 wraps around to 0 â€” this is well-defined modular arithmetic for unsigned types (unlike signed integer overflow, which is undefined behaviour). The cast to <code>int</code> is needed to print the numeric value; without it <code>cout</code> would treat it as a character.`
  },

  {
    id: 1010, category: 'types', difficulty: 'hard',
    code:
`#include <iostream>
using namespace std;

int main() {
    int a = -7;
    cout << a / 2 << endl;
}`,
    question: "What does this print?",
    choices: ['-4', '-3', '-3.5', '3'],
    answer: 1,
    explanation: `Since C++11, integer division <strong>truncates toward zero</strong>. <code>-7 / 2 = -3.5</code>, truncated toward zero gives <code>-3</code>. In older C (pre-C99) the rounding direction was implementation-defined. Note that <code>-7 % 2 == -1</code> (remainder has the sign of the dividend), which is consistent with truncation toward zero.`
  },

  {
    id: 1029, category: 'types', difficulty: 'easy',
    code:
`#include <iostream>
using namespace std;

int main() {
    char c = 'A';
    cout << (char)(c + 1) << endl;
}`,
    question: "What does this print?",
    choices: ['B', 'A', '66', 'A1'],
    answer: 0,
    explanation: `Characters are stored as integers (ASCII values). <code>'A'</code> is 65. Adding 1 gives 66, which cast back to <code>char</code> is <code>'B'</code>. Without the cast, <code>cout &lt;&lt; c + 1</code> would print the integer <code>66</code> because <code>+</code> promotes <code>char</code> to <code>int</code>.`,
  },

  {
    id: 1030, category: 'types', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    char c = '7';
    int digit = c - '0';
    cout << digit << endl;
}`,
    question: "What does this print?",
    choices: ['7', '55', '48', '0'],
    answer: 0,
    explanation: `ASCII digit characters are consecutive: <code>'0'</code>=48, <code>'1'</code>=49, â€¦ <code>'9'</code>=57. Subtracting <code>'0'</code> (48) from any digit character gives its numeric value. <code>'7'</code> (55) âˆ’ <code>'0'</code> (48) = 7. This is the standard C/C++ idiom for converting a single digit character to its integer value.`,
  },

  {
    id: 1031, category: 'types', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    int a = 7, b = 2;
    double result = static_cast<double>(a) / b;
    cout << result << endl;
}`,
    question: "What does this print?",
    choices: ['3.5', '3', '4', '3.0'],
    answer: 0,
    explanation: `<code>static_cast&lt;double&gt;(a)</code> converts <code>a</code> to <code>double</code> before the division. With one operand as <code>double</code>, <code>b</code> is also promoted, and floating-point division is performed: <code>7.0 / 2 = 3.5</code>. Without the cast, <code>a / b</code> would be integer division yielding <code>3</code>.`,
  },

  {
    id: 1032, category: 'types', difficulty: 'easy',
    code:
`#include <iostream>
using namespace std;

int main() {
    bool a = true, b = false;
    cout << a << " " << b << endl;
}`,
    question: "What does this print?",
    choices: ['1 0', 'true false', '1 1', '0 1'],
    answer: 0,
    explanation: `By default, <code>cout</code> prints <code>bool</code> values as integers: <code>true</code> â†’ <code>1</code>, <code>false</code> â†’ <code>0</code>. To print the words <code>true</code>/<code>false</code>, use <code>cout &lt;&lt; boolalpha</code> first. This is the opposite of Python, which always displays <code>True</code>/<code>False</code>.`,
  },

  {
    id: 1033, category: 'types', difficulty: 'medium',
    code:
`#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "Hello, World!";
    cout << s.size() << endl;
    cout << s.substr(7, 5) << endl;
}`,
    question: "What does this print?",
    choices: ['13\nWorld', '12\nWorld', '13\nWorld!', '13\norld'],
    answer: 0,
    explanation: `<code>size()</code> returns the number of characters: <code>"Hello, World!"</code> has 13. <code>substr(pos, len)</code> extracts <code>len</code> characters starting at position <code>pos</code>. Position 7 is <code>'W'</code>, and 5 characters from there give <code>"World"</code>.`,
  },

  {
    id: 1034, category: 'types', difficulty: 'hard',
    code:
`#include <iostream>
using namespace std;

int main() {
    unsigned int x = 0;
    x--;
    cout << (x == 4294967295u) << endl;
}`,
    question: "What does this print?",
    choices: ['1', '0', '-1', 'Undefined'],
    answer: 0,
    explanation: `Decrementing an <code>unsigned int</code> from 0 wraps around to its maximum value (2Â³Â²âˆ’1 = 4294967295) â€” this is well-defined modular arithmetic for unsigned types. The comparison returns <code>true</code> (1). Unlike signed integer overflow (which is undefined behaviour), unsigned overflow is guaranteed to wrap.`,
  },

  {
    id: 1035, category: 'types', difficulty: 'hard',
    code:
`#include <iostream>
using namespace std;

int main() {
    int a = 5;
    int b = 2;
    float c = a / b;
    cout << c << endl;
}`,
    question: "What does this print?",
    choices: ['2', '2.5', '3', '2.0'],
    answer: 0,
    explanation: `<code>a / b</code> is integer division (both operands are <code>int</code>): result is <code>2</code>. That integer <code>2</code> is then converted to <code>float</code> when stored in <code>c</code>. <code>cout</code> prints <code>2</code> â€” the trailing <code>.0</code> is suppressed by default. To get <code>2.5</code> you must force floating-point division: <code>float c = (float)a / b</code>.`,
  },


  {
    id: 1054, category: 'types', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 5, y = 10;
    const int* p = &x;
    p = &y;
    cout << *p;
}`,
    question: "What does this print?",
    choices: ['10', '5', 'Compile error', 'Undefined behavior'],
    answer: 0,
    explanation: `<code>const int* p</code> means <em>pointer to a const int</em> — you cannot modify the value through <code>p</code> (<code>*p = 99</code> would be a compile error). But the pointer itself is not const, so you <em>can</em> reassign <code>p</code> to point at <code>y</code>. After <code>p = &y</code>, <code>*p</code> reads <code>y</code> which is <code>10</code>. Compare with <code>int* const p</code>: const pointer, modifiable pointee.`,
  },

  {
    id: 1055, category: 'types', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    auto x = 5;
    auto y = x;
    y = 99;
    cout << x << " " << y;
}`,
    question: "What does this print?",
    choices: ['5 99', '99 99', '5 5', 'Compile error'],
    answer: 0,
    explanation: `<code>auto</code> deduces the type and copies the value — <code>y</code> is an independent <code>int</code>, not a reference to <code>x</code>. Modifying <code>y</code> has no effect on <code>x</code>. To get a reference, use <code>auto&amp; y = x</code>. This distinction matters most when <code>auto</code> is used with expensive-to-copy objects like <code>std::vector</code>.`,
  },

  {
    id: 1056, category: 'types', difficulty: 'hard',
    code:
`#include <iostream>
using namespace std;

int main() {
    cout << -7 / 2 << " " << 7 / -2;
}`,
    question: "What does this print? (C++11 and later)",
    choices: ['-3 -3', '-4 -4', '-3 -4', '-4 -3'],
    answer: 0,
    explanation: `Since C++11, integer division <strong>truncates toward zero</strong> — it does not floor. Both <code>-7/2</code> and <code>7/-2</code> produce a mathematical result of <code>-3.5</code>, which truncates to <code>-3</code>. Before C++11, the direction of truncation for negative results was implementation-defined, which was a portability hazard. The remainder operator <code>%</code> follows the same rule: <code>-7 % 2 == -1</code>.`,
  },

];