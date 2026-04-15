// control.js — 4 questions — IDs: 1016,1017,1018,1019
// Difficulties: easy×2, medium×2
const CPP_CONTROL = [

  {
    id: 1016, category: 'control', difficulty: 'easy',
    code:
`#include <iostream>
using namespace std;

int main() {
    int sum = 0;
    for (int i = 1; i <= 4; i++) {
        sum += i;
    }
    cout << sum << endl;
}`,
    question: "What does this print?",
    choices: ['4', '6', '10', '16'],
    answer: 2,
    explanation: `The loop runs for <code>i = 1, 2, 3, 4</code>, adding each value to <code>sum</code>: <code>0+1+2+3+4 = 10</code>. The condition is <code>i &lt;= 4</code> (inclusive), so all four iterations execute. The general formula for the sum 1…n is <code>n(n+1)/2</code> — here <code>4×5/2 = 10</code>.`
  },

  {
    id: 1017, category: 'control', difficulty: 'easy',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 1;
    while (x < 10) x *= 3;
    cout << x << endl;
}`,
    question: "What does this print?",
    choices: ['9', '12', '27', '3'],
    answer: 2,
    explanation: `Starting from <code>x = 1</code>: multiply by 3 → <code>3</code> (still &lt; 10) → multiply by 3 → <code>9</code> (still &lt; 10) → multiply by 3 → <code>27</code> (≥ 10, loop stops). The loop overshoots because the exit check happens <em>before</em> each iteration, not after.`
  },

  {
    id: 1018, category: 'control', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int y = (x > 5) ? x * 2 : x / 2;
    cout << y << endl;
}`,
    question: "What does this print?",
    choices: ['5', '20', '10', '15'],
    answer: 1,
    explanation: `The ternary operator evaluates the condition first: <code>x > 5</code> is <code>true</code> (10 > 5), so the expression takes the left branch and evaluates <code>x * 2 = 20</code>. The right branch (<code>x / 2</code>) is never evaluated. The ternary is an expression — it produces a value — so it can be used directly in an assignment.`
  },

  {
    id: 1019, category: 'control', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 1;
    {
        int x = 2;
        cout << x << " ";
    }
    cout << x << endl;
}`,
    question: "What does this print?",
    choices: ['1 2', '2 1', '1 1', '2 2'],
    answer: 1,
    explanation: `The inner block declares a <em>new</em> variable <code>x</code> that <strong>shadows</strong> the outer one inside those braces. The inner <code>cout</code> sees the inner <code>x = 2</code>. When the block ends, the inner <code>x</code> is destroyed and the outer <code>x = 1</code> is visible again. Shadowing is legal but can be a source of subtle bugs.`
  },

];
