// output.js — 5 questions — IDs: 1001,1002,1003,1004,1005
// Difficulties: easy×3, medium×2
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
    question: "What does this code output?",
    choices: ['3', '3.5', '4', '3.0'],
    answer: 0,
    explanation: `In C++, dividing two <code>int</code> values performs <strong>integer division</strong> — the fractional part is discarded (truncated toward zero). <code>7 / 2</code> equals <code>3</code>, not <code>3.5</code>. To get a decimal result you need at least one floating-point operand, e.g. <code>7.0 / 2</code>.`
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
    question: "What does this code output?",
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
    question: "What does this code output?",
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
    question: "What does this code output?",
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
    question: "What does this code output?",
    choices: ['3 6', '4 6', '4 8', '3 8'],
    answer: 2,
    explanation: `<code>++x</code> increments <code>x</code> to <code>4</code> before the multiplication is evaluated. So <code>y = 4 * 2 = 8</code>. Both <code>x</code> and <code>y</code> reflect the post-increment value. Had it been <code>x++ * 2</code>, <code>y</code> would be <code>6</code> and <code>x</code> would still end up as <code>4</code>, but the multiply would use the old value.`
  },

];
