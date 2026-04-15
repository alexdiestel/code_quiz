// boss.js — 1 question — ID: 1020
// Difficulty: boss×1
const CPP_BOSS = [

  {
    id: 1020, category: 'functions', difficulty: 'boss',
    code:
`#include <iostream>
using namespace std;

int counter() {
    static int n = 0;
    return ++n;
}

int main() {
    cout << counter() << " ";
    cout << counter() << " ";
    cout << counter() << endl;
}`,
    question: "What does this print?",
    choices: ['1 1 1', '0 1 2', '1 2 3', 'Undefined'],
    answer: 2,
    explanation: `A <code>static</code> local variable is initialised exactly once — when the function is first called — and its value <em>persists</em> across subsequent calls (it lives for the entire program). Each call to <code>counter()</code> increments the same <code>n</code>: first call returns <code>1</code>, second returns <code>2</code>, third returns <code>3</code>. This is a classic C++ pattern for function-local state without global variables.`
  },

];
