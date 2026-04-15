// types.js — 5 questions — IDs: 1006,1007,1008,1009,1010
// Difficulties: easy×1, medium×2, hard×2
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
    question: "What does this code output?",
    choices: ['0', '0.25', '0.2', '1'],
    answer: 1,
    explanation: `Both operands are <code>double</code>, so true floating-point division is performed: <code>1.0 / 4.0 = 0.25</code>. Compare with integer division: <code>1 / 4</code> would yield <code>0</code> because the fractional part is discarded. Mixed expressions like <code>1 / 4.0</code> also produce <code>0.25</code> — the <code>int</code> is promoted to <code>double</code> first.`
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
    question: "What does this code output?",
    choices: ['2.5', '2', '3', '0'],
    answer: 1,
    explanation: `<code>x / 2</code> is evaluated first. Both <code>x</code> and the literal <code>2</code> are <code>int</code>, so integer division gives <code>2</code>. That integer <code>2</code> is then implicitly converted to <code>double 2.0</code> when stored in <code>y</code>. <code>cout</code> prints <code>2</code> — the <code>.0</code> is not shown by default. To force floating-point division, write <code>x / 2.0</code>.`
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
    question: "What does this code output?",
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
    question: "What does this code output?",
    choices: ['256', '0', '-1', '255'],
    answer: 1,
    explanation: `<code>unsigned char</code> holds values 0–255. Incrementing past 255 wraps around to 0 — this is well-defined modular arithmetic for unsigned types (unlike signed integer overflow, which is undefined behaviour). The cast to <code>int</code> is needed to print the numeric value; without it <code>cout</code> would treat it as a character.`
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
    question: "What does this code output?",
    choices: ['-4', '-3', '-3.5', '3'],
    answer: 1,
    explanation: `Since C++11, integer division <strong>truncates toward zero</strong>. <code>-7 / 2 = -3.5</code>, truncated toward zero gives <code>-3</code>. In older C (pre-C99) the rounding direction was implementation-defined. Note that <code>-7 % 2 == -1</code> (remainder has the sign of the dividend), which is consistent with truncation toward zero.`
  },

];
