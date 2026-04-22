// functions.js — 4 questions — IDs: 1063-1066
// Difficulties: easy×1, medium×2, hard×1
const CPP_FUNCTIONS = [

  {
    id: 1063, category: 'functions', difficulty: 'easy',
    code:
`#include <iostream>
using namespace std;

int add(int a, int b = 10) {
    return a + b;
}

int main() {
    cout << add(5) << " " << add(5, 3);
}`,
    question: "What does this print?",
    choices: ['15 8', '5 3', '10 8', '5 10'],
    answer: 0,
    explanation: `Default parameters fill in from right to left when arguments are omitted. <code>add(5)</code> uses <code>b=10</code> giving <code>15</code>; <code>add(5, 3)</code> overrides the default with <code>3</code> giving <code>8</code>. Default values are evaluated at the call site each time — not once at function definition.`,
  },

  {
    id: 1064, category: 'functions', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

void increment(int x, int& y) {
    x++;
    y++;
}

int main() {
    int a = 1, b = 1;
    increment(a, b);
    cout << a << " " << b;
}`,
    question: "What does this print?",
    choices: ['1 2', '2 2', '2 1', '1 1'],
    answer: 0,
    explanation: `<code>x</code> is passed by value — the function receives a copy and incrementing it has no effect on <code>a</code>. <code>y</code> is passed by reference — it is an alias for <code>b</code>, so <code>y++</code> modifies <code>b</code> directly. After the call, <code>a</code> is still <code>1</code> but <code>b</code> is <code>2</code>.`,
  },

  {
    id: 1065, category: 'functions', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

struct Foo {
    void get() const { cout << "const"; }
    void get()       { cout << "mutable"; }
};

int main() {
    Foo f;
    const Foo cf;
    f.get();
    cout << " ";
    cf.get();
}`,
    question: "What does this print?",
    choices: ['mutable const', 'const const', 'mutable mutable', 'Compile error'],
    answer: 0,
    explanation: `C++ allows overloading on <code>const</code>-ness of <code>this</code>. A non-const object like <code>f</code> prefers the non-const overload; a const object like <code>cf</code> can only call the <code>const</code>-qualified version. This is useful for containers that return a modifiable reference from non-const objects but a read-only reference from const ones (e.g. <code>operator[]</code>).`,
  },

  {
    id: 1066, category: 'functions', difficulty: 'hard',
    code:
`#include <iostream>
using namespace std;

int square(int x) { return x * x; }
int cube(int x)   { return x * x * x; }

int apply(int (*fn)(int), int val) {
    return fn(val);
}

int main() {
    cout << apply(square, 3) << " " << apply(cube, 3);
}`,
    question: "What does this print?",
    choices: ['9 27', '27 9', '9 9', '27 27'],
    answer: 0,
    explanation: `<code>int (*fn)(int)</code> declares a <strong>function pointer</strong> — a pointer to any function that takes an <code>int</code> and returns an <code>int</code>. Passing <code>square</code> or <code>cube</code> (without parentheses) passes the function's address. Inside <code>apply</code>, <code>fn(val)</code> calls whichever function the pointer holds. Function pointers are the C-era equivalent of callbacks or <code>std::function</code>.`,
  },

];
