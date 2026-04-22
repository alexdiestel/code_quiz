// control.js â€” 16 questions â€” IDs: 1016,1017,1018,1019,1043,1044,1045,1046,1047,1048,1049,1050,1020,1060,1061,1062
// Difficulties: easyÃ—2, mediumÃ—2
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
    explanation: `The loop runs for <code>i = 1, 2, 3, 4</code>, adding each value to <code>sum</code>: <code>0+1+2+3+4 = 10</code>. The condition is <code>i &lt;= 4</code> (inclusive), so all four iterations execute. The general formula for the sum 1â€¦n is <code>n(n+1)/2</code> â€” here <code>4Ã—5/2 = 10</code>.`
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
    explanation: `Starting from <code>x = 1</code>: multiply by 3 â†’ <code>3</code> (still &lt; 10) â†’ multiply by 3 â†’ <code>9</code> (still &lt; 10) â†’ multiply by 3 â†’ <code>27</code> (â‰¥ 10, loop stops). The loop overshoots because the exit check happens <em>before</em> each iteration, not after.`
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
    explanation: `The ternary operator evaluates the condition first: <code>x > 5</code> is <code>true</code> (10 > 5), so the expression takes the left branch and evaluates <code>x * 2 = 20</code>. The right branch (<code>x / 2</code>) is never evaluated. The ternary is an expression â€” it produces a value â€” so it can be used directly in an assignment.`
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

  {
    id: 1020, category: 'control', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int counter() {
    static int c = 0;
    return ++c;
}

int main() {
    for (int i = 0; i < 3; i++)
        cout << counter() << " ";
}`,
    question: "What does this print?",
    choices: ['1 2 3 ', '0 1 2 ', '1 1 1 ', '3 3 3 '],
    answer: 0,
    explanation: `A <code>static</code> local variable is initialised only once and persists between function calls. Each call to <code>counter()</code> increments the same <code>c</code> and returns its new value. Without <code>static</code>, <code>c</code> would be re-created as <code>0</code> on every call and always return <code>1</code>.`,
  },

  {
    id: 1043, category: 'control', difficulty: 'hard',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 2;
    switch (x) {
        case 1: cout << "one ";
        case 2: cout << "two ";
        case 3: cout << "three ";
        default: cout << "done";
    }
}`,
    question: "What does this print?",
    choices: ['two three done', 'two', 'one two three done', 'two done'],
    answer: 0,
    explanation: `Switch cases <strong>fall through</strong> by default â€” execution continues into the next case unless a <code>break</code> statement stops it. Matching <code>case 2</code> starts there and falls through into <code>case 3</code> and <code>default</code>. Always add <code>break</code> at the end of each case unless intentional fallthrough is needed.`,
  },

  {
    id: 1044, category: 'control', difficulty: 'easy',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 10;
    do {
        cout << x << " ";
        x--;
    } while (x > 10);
    cout << "end";
}`,
    question: "What does this print?",
    choices: ['10 end', 'end', '10 9 8 ... end', '10'],
    answer: 0,
    explanation: `A <code>do-while</code> loop always executes the body at least once before checking the condition. <code>x = 10</code> prints, then <code>x</code> becomes 9. The condition <code>9 > 10</code> is false, so the loop exits. <code>"end"</code> is then printed. A regular <code>while</code> would never execute the body here since <code>10 > 10</code> is already false.`,
  },

  {
    id: 1045, category: 'control', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            if (j == 1) break;
            cout << i << j << " ";
        }
    }
}`,
    question: "What does this print?",
    choices: ['00 10 20 ', '00 01 02 10 11 12 20 21 22 ', '00 ', '00 10 11 20 '],
    answer: 0,
    explanation: `<code>break</code> exits only the innermost loop. Each outer iteration prints <code>i0</code> (j=0), then <code>j==1</code> triggers <code>break</code>, skipping j=1 and j=2. The outer loop continues normally. Exiting multiple nested loops requires a different approach (goto, flag variable, or structured refactoring).`,
  },

  {
    id: 1046, category: 'control', difficulty: 'easy',
    code:
`#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 5; i++) {
        if (i % 2 == 0) continue;
        cout << i << " ";
    }
}`,
    question: "What does this print?",
    choices: ['1 3 ', '0 2 4 ', '1 2 3 4 ', '0 1 2 3 4 '],
    answer: 0,
    explanation: `<code>continue</code> skips the rest of the loop body for the current iteration and jumps straight to the next. Even values of <code>i</code> (0, 2, 4) hit <code>continue</code> and are skipped. Only odd values (1, 3) reach the <code>cout</code> statement.`,
  },

  {
    id: 1047, category: 'control', difficulty: 'easy',
    code:
`#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {1, 2, 3, 4};
    int sum = 0;
    for (int x : v) sum += x;
    cout << sum << endl;
}`,
    question: "What does this print?",
    choices: ['10', '4', '24', '0'],
    answer: 0,
    explanation: `The range-based for loop (C++11) iterates over every element of the container. <code>x</code> receives a copy of each element. <code>sum</code> accumulates 1+2+3+4 = 10. To modify elements in the container you'd need <code>int& x</code> (reference). Works with any type that has <code>begin()</code>/<code>end()</code>.`,
  },

  {
    id: 1048, category: 'control', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 5;
    if (x > 10) cout << "big";
    else if (x > 3) cout << "medium";
    else cout << "small";
}`,
    question: "What does this print?",
    choices: ['medium', 'big', 'small', 'medium\nsmall'],
    answer: 0,
    explanation: `The conditions are evaluated in order. <code>x > 10</code> is false, so the first branch is skipped. <code>x > 3</code> is true (5 > 3), so <code>"medium"</code> is printed and the remaining <code>else</code> is skipped entirely. Only one branch of an if/else-if/else chain ever executes.`,
  },

  {
    id: 1049, category: 'control', difficulty: 'hard',
    code:
`#include <iostream>
using namespace std;

int main() {
    int i = 0;
    while (i < 10) {
        i++;
        if (i % 3 == 0) continue;
        if (i > 6) break;
        cout << i << " ";
    }
}`,
    question: "What does this print?",
    choices: ['1 2 4 5 ', '1 2 3 4 5 6 ', '1 2 4 5 7 ', '1 2 4 5 6 '],
    answer: 0,
    explanation: `i goes 1,2,3,4,5,6,7â€¦. When i=3: <code>continue</code> skips print. i=4: prints 4. i=5: prints 5. i=6: <code>continue</code> skips. i=7: <code>break</code> exits loop (7>6 triggers before the print). So output is <code>1 2 4 5 </code>. The <code>i++</code> runs before both checks each iteration.`,
  },

  {
    id: 1050, category: 'control', difficulty: 'medium',
    code:
`#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "hello";
    if (s == "hello") cout << "match";
    else cout << "no match";
}`,
    question: "What does this print?",
    choices: ['match', 'no match', '1', 'Compile error'],
    answer: 0,
    explanation: `<code>std::string</code> overloads <code>==</code> to compare contents character by character â€” not memory addresses. This is unlike C-style char arrays, where <code>==</code> compares pointers and almost never does what you expect. <code>"hello" == "hello"</code> is <code>true</code>, so <code>"match"</code> is printed.`,
  },


  {
    id: 1060, category: 'control', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 1;
    switch (x) {
        case 1: cout << "one";
        case 2: cout << "two";
        default: cout << "def";
    }
}`,
    question: "What does this print?",
    choices: ['onetwodef', 'one', 'onedef', 'Compile error'],
    answer: 0,
    explanation: `Without a <code>break</code> statement, execution <strong>falls through</strong> to the next case. After matching <code>case 1</code> and printing <code>"one"</code>, it continues into <code>case 2</code> then <code>default</code>. Fallthrough is intentional in some patterns (e.g. sharing code between cases), but accidental fallthrough is a common bug. Use <code>[[fallthrough]]</code> (C++17) to document intentional cases.`,
  },

  {
    id: 1061, category: 'control', difficulty: 'easy',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 10;
    do {
        cout << x;
        x--;
    } while (x > 10);
}`,
    question: "What does this print?",
    choices: ['10', 'Nothing', '10 9 8 ...', 'Infinite loop'],
    answer: 0,
    explanation: `A <code>do-while</code> loop executes its body <em>before</em> checking the condition. Even though <code>x > 10</code> is immediately false, the body runs once first: printing <code>10</code> and decrementing <code>x</code> to <code>9</code>. Only then is the condition evaluated — it's false, so the loop ends. Use <code>do-while</code> whenever you need at least one execution unconditionally.`,
  },

  {
    id: 1062, category: 'control', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 5; i++) {
        if (i % 2 == 0) continue;
        cout << i << " ";
    }
}`,
    question: "What does this print?",
    choices: ['1 3 ', '0 2 4 ', '1 2 3 4 5 ', '0 1 2 3 4 '],
    answer: 0,
    explanation: `<code>continue</code> skips the rest of the loop body for the current iteration and jumps to the update expression (<code>i++</code>). When <code>i</code> is even (<code>i % 2 == 0</code>), <code>cout</code> is skipped. Only the odd values 1 and 3 are printed. Compare with <code>break</code>, which exits the loop entirely.`,
  },

];