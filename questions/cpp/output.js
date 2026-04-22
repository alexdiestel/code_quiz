// output.js â€” 16 questions â€” IDs: 1001,1002,1003,1004,1005,1021,1022,1023,1024,1025,1026,1027,1028,1051,1052,1053
// Difficulties: easyÃ—3, mediumÃ—2
const CPP_OUTPUT = [

  {
    id: 1001, category: 'output', difficulty: 'easy',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 7 / 2;
    cout << x << endl;
}`,
    question: "What does this print?",
    choices: ['3', '3.5', '4', '3.0'],
    answer: 0,
    explanation: `In C++, dividing two <code>int</code> values performs <strong>integer division</strong> â€” the fractional part is discarded (truncated toward zero). <code>7 / 2</code> equals <code>3</code>, not <code>3.5</code>. To get a decimal result you need at least one floating-point operand, e.g. <code>7.0 / 2</code>.`
  },

  {
    id: 1002, category: 'output', difficulty: 'easy',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 5;
    cout << x++ << endl;
}`,
    question: "What does this print?",
    choices: ['5', '6', '4', 'Undefined'],
    answer: 0,
    explanation: `The post-increment operator <code>x++</code> evaluates to the <em>current</em> value of <code>x</code> before incrementing. <code>cout</code> sees <code>5</code>; <code>x</code> becomes <code>6</code> afterwards. Compare with pre-increment <code>++x</code>, which increments first and then yields the new value.`
  },

  {
    id: 1003, category: 'output', difficulty: 'easy',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 5;
    cout << ++x << endl;
}`,
    question: "What does this print?",
    choices: ['5', '6', '4', '7'],
    answer: 1,
    explanation: `The pre-increment operator <code>++x</code> increments <code>x</code> first and then yields the new value. By the time <code>cout</code> sees the expression, <code>x</code> is already <code>6</code>. This is the key difference from post-increment: <code>x++</code> would have printed <code>5</code>.`
  },

  {
    id: 1004, category: 'output', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    bool a = (5 > 3);
    bool b = (2 > 4);
    cout << a + b << endl;
}`,
    question: "What does this print?",
    choices: ['true', 'false', '1', '2'],
    answer: 2,
    explanation: `In C++, <code>bool</code> values are stored as integers: <code>true</code> = <code>1</code>, <code>false</code> = <code>0</code>. Arithmetic on bools promotes them to <code>int</code>, so <code>a + b</code> = <code>1 + 0</code> = <code>1</code>. <code>cout</code> prints the integer <code>1</code>, not the word <code>true</code> (use <code>boolalpha</code> for that).`
  },

  {
    id: 1005, category: 'output', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 3;
    int y = ++x * 2;
    cout << x << " " << y << endl;
}`,
    question: "What does this print?",
    choices: ['3 6', '4 6', '4 8', '3 8'],
    answer: 2,
    explanation: `<code>++x</code> increments <code>x</code> to <code>4</code> before the multiplication is evaluated. So <code>y = 4 * 2 = 8</code>. Both <code>x</code> and <code>y</code> reflect the post-increment value. Had it been <code>x++ * 2</code>, <code>y</code> would be <code>6</code> and <code>x</code> would still end up as <code>4</code>, but the multiply would use the old value.`
  },

  {
    id: 1021, category: 'output', difficulty: 'easy',
    code:
`#include <iostream>
#include <string>
using namespace std;

int main() {
    string a = "Hello";
    string b = " World";
    cout << a + b << endl;
}`,
    question: "What does this print?",
    choices: ['Hello World', 'HelloWorld', 'Hello + World', 'error'],
    answer: 0,
    explanation: `<code>std::string</code> overloads the <code>+</code> operator to perform concatenation. Unlike C-style char arrays, <code>std::string</code> objects can be added together with <code>+</code>, producing a new string containing both. The result is printed by <code>cout</code> as a plain string.`,
  },

  {
    id: 1022, category: 'output', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    int a = 12, b = 10;
    cout << (a & b) << endl;
}`,
    question: "What does this print?",
    choices: ['8', '12', '2', '22'],
    answer: 0,
    explanation: `<code>&</code> is the bitwise AND operator. <code>12</code> in binary is <code>1100</code>, <code>10</code> is <code>1010</code>. AND keeps only bits set in both: <code>1000</code> = <code>8</code>. Do not confuse with <code>&&</code> (logical AND) which returns a boolean.`,
  },

  {
    id: 1023, category: 'output', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    cout << -7 % 3 << endl;
}`,
    question: "What does this print?",
    choices: ['-1', '1', '2', '-2'],
    answer: 0,
    explanation: `In C++, the result of <code>%</code> has the same sign as the dividend (left operand). <code>-7 / 3</code> truncates toward zero to <code>-2</code>, so the remainder is <code>-7 - (-2 * 3) = -7 + 6 = -1</code>. This differs from Python's modulo, which always returns a non-negative result for a positive divisor.`,
  },

  {
    id: 1024, category: 'output', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int x = 0;
bool inc() { x++; return true; }

int main() {
    bool r = false && inc();
    cout << x << endl;
}`,
    question: "What does this print?",
    choices: ['0', '1', 'true', 'false'],
    answer: 0,
    explanation: `<code>&&</code> short-circuits: if the left operand is <code>false</code>, the right operand is never evaluated. <code>inc()</code> is never called, so <code>x</code> stays at <code>0</code>. The same applies to <code>||</code>: it skips the right side when the left is <code>true</code>. Short-circuit evaluation is guaranteed by the C++ standard.`,
  },

  {
    id: 1025, category: 'output', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    cout << sizeof(arr) / sizeof(arr[0]) << endl;
}`,
    question: "What does this print?",
    choices: ['5', '20', '1', '4'],
    answer: 0,
    explanation: `<code>sizeof(arr)</code> gives the total byte size of the array (5 ints Ã— 4 bytes = 20). <code>sizeof(arr[0])</code> gives the byte size of one element (4). Dividing gives the element count: 5. This is the classic C++ idiom for array length â€” it only works when the array is in scope as an array, not after it decays to a pointer.`,
  },

  {
    id: 1026, category: 'output', difficulty: 'easy',
    code:
`#include <iostream>
using namespace std;

int main() {
    int a = 2, b = 3;
    cout << a << "+" << b << "=" << a + b << endl;
}`,
    question: "What does this print?",
    choices: ['2+3=5', '2 + 3 = 5', 'a+b=5', '5'],
    answer: 0,
    explanation: `<code>cout</code> chains multiple <code>&lt;&lt;</code> operations left to right, printing each in sequence with no separator added automatically. String literals appear literally, integers are converted to their decimal representation. The result is the direct concatenation of each piece: <code>2+3=5</code>.`,
  },

  {
    id: 1027, category: 'output', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 5;
    cout << x-- << " " << x << endl;
}`,
    question: "What does this print?",
    choices: ['5 4', '4 4', '5 5', '4 5'],
    answer: 0,
    explanation: `<code>x--</code> is post-decrement: the expression yields <code>5</code> (current value) and then decrements <code>x</code> to <code>4</code>. By the time the second <code>x</code> is printed, the decrement has taken effect. The order of evaluation in the chained <code>&lt;&lt;</code> is left to right.`,
  },

  {
    id: 1028, category: 'output', difficulty: 'easy',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 7;
    cout << (x % 2 == 0 ? "even" : "odd") << endl;
}`,
    question: "What does this print?",
    choices: ['odd', 'even', '1', '0'],
    answer: 0,
    explanation: `<code>x % 2</code> gives the remainder when dividing by 2. For odd numbers this is <code>1</code>, so <code>== 0</code> is <code>false</code> and the ternary evaluates its right branch: <code>"odd"</code>. The parentheses around the ternary are required here because <code>&lt;&lt;</code> has higher precedence than <code>?:</code>.`,
  },


  {
    id: 1051, category: 'output', difficulty: 'easy',
    code:
`#include <iostream>
using namespace std;

int main() {
    cout << true << " " << false;
}`,
    question: "What does this print?",
    choices: ['1 0', 'true false', 'True False', '1 1'],
    answer: 0,
    explanation: `By default, <code>cout</code> prints <code>bool</code> values as <code>1</code> (true) and <code>0</code> (false), not as words. To print <code>true</code>/<code>false</code>, use the <code>std::boolalpha</code> manipulator: <code>cout &lt;&lt; boolalpha &lt;&lt; true</code>. Once set, boolalpha stays active for the stream until reset with <code>noboolalpha</code>.`,
  },

  {
    id: 1052, category: 'output', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    char c = 65;
    int  i = 65;
    cout << c << " " << i;
}`,
    question: "What does this print?",
    choices: ['A 65', '65 65', 'A A', '65 A'],
    answer: 0,
    explanation: `<code>cout</code> dispatches on the <em>type</em> of its argument, not the value. <code>char</code> with value 65 is printed as the corresponding ASCII character: <code>'A'</code>. <code>int</code> with value 65 is printed as the number: <code>65</code>. To print a <code>char</code> as its numeric value, cast it: <code>cout &lt;&lt; (int)c</code>.`,
  },

  {
    id: 1053, category: 'output', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    cout << boolalpha << true << " "
         << noboolalpha << false;
}`,
    question: "What does this print?",
    choices: ['true 0', '1 0', 'true false', '1 false'],
    answer: 0,
    explanation: `<code>boolalpha</code> and <code>noboolalpha</code> are <strong>sticky</strong> stream manipulators — they change the stream's state until explicitly reversed. After <code>boolalpha</code>, <code>true</code> prints as <code>"true"</code>. After <code>noboolalpha</code>, <code>false</code> reverts to <code>0</code>. Most manipulators (like <code>setw</code>) reset after one use, but flag-type manipulators persist.`,
  },

];