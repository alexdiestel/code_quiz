// pointers.js — 12 questions — IDs: 1011,1012,1013,1014,1015,1036,1037,1038,1039,1040,1041,1042
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

  {
    id: 1036, category: 'pointers', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

void inc(int* p) { (*p)++; }

int main() {
    int x = 5;
    inc(&x);
    cout << x << endl;
}`,
    question: "What does this print?",
    choices: ['6', '5', '1', 'Undefined'],
    answer: 0,
    explanation: `<code>&x</code> passes the address of <code>x</code> to <code>inc</code>. Inside <code>inc</code>, <code>(*p)++</code> dereferences the pointer and increments the value at that address — which is <code>x</code> itself. The parentheses around <code>*p</code> are essential: <code>*p++</code> would increment the pointer, not the pointed-to value.`,
  },

  {
    id: 1037, category: 'pointers', difficulty: 'medium',
    code:
`#include <iostream>
using namespace std;

void swap(int& a, int& b) {
    int t = a; a = b; b = t;
}

int main() {
    int x = 1, y = 2;
    swap(x, y);
    cout << x << " " << y << endl;
}`,
    question: "What does this print?",
    choices: ['2 1', '1 2', '1 1', '2 2'],
    answer: 0,
    explanation: `<code>a</code> and <code>b</code> are references — aliases for <code>x</code> and <code>y</code>. Modifying them directly modifies the originals. Unlike <strong>pass-by-value</strong> (which operates on copies), pass-by-reference lets a function change the caller's variables. This is the canonical in-place swap pattern.`,
  },

  {
    id: 1038, category: 'pointers', difficulty: 'easy',
    code:
`#include <iostream>
using namespace std;

int main() {
    int* p = nullptr;
    cout << (p == nullptr) << endl;
}`,
    question: "What does this print?",
    choices: ['1', '0', 'true', 'nullptr'],
    answer: 0,
    explanation: `<code>nullptr</code> (introduced in C++11) is a type-safe null pointer constant. Comparing a null pointer to <code>nullptr</code> returns <code>true</code>, which prints as <code>1</code> (bool printed without <code>boolalpha</code>). Always initialise pointers to <code>nullptr</code> if not immediately assigned — dereferencing a null pointer is undefined behaviour.`,
  },

  {
    id: 1039, category: 'pointers', difficulty: 'hard',
    code:
`#include <iostream>
using namespace std;

int main() {
    int a = 5, b = 10;
    int& ref = a;
    ref = b;
    cout << a << " " << b << endl;
}`,
    question: "What does this print?",
    choices: ['10 10', '5 10', '10 5', '5 5'],
    answer: 0,
    explanation: `<code>ref = b</code> copies the <em>value</em> of <code>b</code> into <code>a</code> (via the reference) — it does NOT make <code>ref</code> an alias for <code>b</code>. References cannot be reseated after initialisation. So <code>a</code> becomes 10 and <code>b</code> stays 10. Both print <code>10</code>.`,
  },

  {
    id: 1040, category: 'pointers', difficulty: 'hard',
    code:
`#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30};
    int* p = arr;
    cout << *(p + 2) << endl;
}`,
    question: "What does this print?",
    choices: ['30', '20', '10', '12'],
    answer: 0,
    explanation: `<code>arr</code> decays to a pointer to its first element. <code>p + 2</code> advances the pointer by <code>2 * sizeof(int)</code> bytes, pointing to <code>arr[2]</code>. Dereferencing gives <code>30</code>. Pointer arithmetic always scales by the pointed-to type size — <code>p + n</code> is equivalent to <code>&arr[n]</code>.`,
  },

  {
    id: 1041, category: 'pointers', difficulty: 'hard',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int* const p = &x;
    *p = 30;
    cout << x << endl;
}`,
    question: "What does this print?",
    choices: ['30', '10', 'Compile error', 'Undefined'],
    answer: 0,
    explanation: `<code>int* const p</code> is a <em>const pointer</em>: the pointer itself cannot be reassigned to another address, but the value it points to can be modified. <code>*p = 30</code> writes through the pointer, changing <code>x</code> to 30. Compare with <code>const int* p</code> (pointer to const), which allows pointer reassignment but forbids modifying the value.`,
  },

  {
    id: 1042, category: 'pointers', difficulty: 'hard',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 5;
    const int* p = &x;
    x = 10;
    cout << *p << endl;
}`,
    question: "What does this print?",
    choices: ['10', '5', 'Compile error', 'Undefined'],
    answer: 0,
    explanation: `<code>const int* p</code> means "pointer to a const int" — you can't modify <code>x</code> <em>through</em> <code>p</code>, but <code>x</code> itself is not const and can be changed directly. After <code>x = 10</code>, <code>p</code> still points to the same variable, so <code>*p</code> reads the updated value: <code>10</code>.`,
  },

];
