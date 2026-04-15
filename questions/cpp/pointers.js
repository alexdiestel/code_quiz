// pointers.js — 5 questions — IDs: 1011,1012,1013,1014,1015
// Difficulties: medium×3, hard×2
const CPP_POINTERS = [

  {
    id: 1011, category: 'pointers', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 42;
    int* p = &x;
    cout << *p << endl;
}`,
    question: "What does this print?",
    choices: ['&x', '42', '0', 'Memory address'],
    answer: 1,
    explanation: `<code>p</code> is a pointer that holds the memory address of <code>x</code> (<code>&x</code>). The dereference operator <code>*p</code> follows that address and reads the value stored there — which is <code>42</code>. Printing <code>p</code> directly (without <code>*</code>) would print the raw memory address.`
  },

  {
    id: 1012, category: 'pointers', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int& r = x;
    r = 20;
    cout << x << endl;
}`,
    question: "What does this print?",
    choices: ['10', '20', '0', 'Undefined'],
    answer: 1,
    explanation: `<code>r</code> is a <strong>reference</strong> — an alias for <code>x</code>, not a copy. There is no separate variable; <code>r</code> and <code>x</code> refer to the same memory location. Writing <code>r = 20</code> writes directly to <code>x</code>. Unlike pointers, references cannot be null and cannot be reseated to point elsewhere after initialisation.`
  },

  {
    id: 1013, category: 'pointers', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

void add(int x) { x += 10; }

int main() {
    int n = 5;
    add(n);
    cout << n << endl;
}`,
    question: "What does this print?",
    choices: ['15', '5', '10', '0'],
    answer: 1,
    explanation: `<code>add()</code> receives a copy of <code>n</code>. Modifying the local parameter <code>x</code> has no effect on the original <code>n</code> in <code>main()</code>. This is <strong>pass-by-value</strong>. To modify the original you would need either <code>void add(int& x)</code> (pass by reference) or <code>void add(int* x)</code> (pass by pointer) and call <code>add(&n)</code>.`
  },

  {
    id: 1014, category: 'pointers', difficulty: 'hard',
    code:
`#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30};
    int* p = arr;
    p++;
    cout << *p << endl;
}`,
    question: "What does this print?",
    choices: ['10', '20', '30', 'Undefined'],
    answer: 1,
    explanation: `<code>p</code> starts pointing at <code>arr[0]</code> (value <code>10</code>). <code>p++</code> advances the pointer by <code>sizeof(int)</code> bytes (typically 4), so it now points to <code>arr[1]</code>. Dereferencing gives <code>20</code>. Pointer arithmetic always scales by the size of the pointed-to type — incrementing an <code>int*</code> moves 4 bytes, incrementing a <code>double*</code> moves 8.`
  },

  {
    id: 1015, category: 'pointers', difficulty: 'hard',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 5;
    int* p = &x;
    *p += 3;
    cout << x << " " << *p << endl;
}`,
    question: "What does this print?",
    choices: ['5 8', '8 8', '5 3', '8 5'],
    answer: 1,
    explanation: `<code>p</code> holds the address of <code>x</code>. <code>*p += 3</code> modifies the value <em>at that address</em> — which is <code>x</code> itself. After the operation, the location holds <code>8</code>. Both <code>x</code> and <code>*p</code> name the same memory cell, so both print <code>8</code>.`
  },

];
