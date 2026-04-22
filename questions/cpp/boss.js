// boss.js — 9 questions — IDs: 1067-1075
const CPP_BOSS = [

  {
    id: 1067, category: 'functions', difficulty: 'boss',
    code:
`#include <iostream>
using namespace std;

struct Base {
    Base() { hello(); }
    virtual void hello() { cout << "Base"; }
};
struct Derived : Base {
    void hello() override { cout << "Derived"; }
};

int main() {
    Derived d;
}`,
    question: "What does this print?",
    choices: ['Base', 'Derived', 'BaseDerived', 'DerivedBase'],
    answer: 0,
    explanation: `During construction, virtual dispatch does <em>not</em> apply. When <code>Base::Base()</code> runs, the object is still a <code>Base</code> — the <code>Derived</code> part hasn't been constructed yet. Calling a virtual function from a constructor therefore resolves to the <strong>currently-being-constructed</strong> class's version, not the derived override. The same rule applies in destructors: the vtable is "unwound" as each destructor runs.`,
  },

  {
    id: 1068, category: 'types', difficulty: 'boss',
    code:
`#include <iostream>
using namespace std;

int main() {
    double d = 3.9999;
    int i = d;
    cout << i;
}`,
    question: "What does this print?",
    choices: ['3', '4', '3.9999', 'Undefined behavior'],
    answer: 0,
    explanation: `Assigning a <code>double</code> to an <code>int</code> <strong>truncates</strong> toward zero — it does not round. <code>3.9999</code> loses everything after the decimal point and becomes <code>3</code>. This implicit narrowing is permitted in C++ (unlike brace-initialization <code>int i{d}</code>, which is a compile error). If rounding is needed, use <code>static_cast&lt;int&gt;(std::round(d))</code>.`,
  },

  {
    id: 1069, category: 'pointers', difficulty: 'boss',
    code:
`#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {1, 2, 3};
    int& r = v[0];
    v.push_back(4);
    cout << r;
}`,
    question: "What does this print?",
    choices: ['Undefined behavior', '1', '4', '0'],
    answer: 0,
    explanation: `<code>push_back</code> may trigger a reallocation when the vector's capacity is exceeded. When that happens, all iterators, pointers, and references into the vector are <strong>invalidated</strong> — <code>r</code> now dangles into freed memory. Reading it is undefined behaviour. Guard against this by calling <code>v.reserve(n)</code> upfront, or re-take references after any potentially-reallocating call.`,
  },

  {
    id: 1070, category: 'types', difficulty: 'boss',
    code:
`#include <iostream>
using namespace std;

int main() {
    int x = 2147483647;
    cout << x + 1;
}`,
    question: "What does this print?",
    choices: ['Undefined behavior', '-2147483648', '2147483648', '0'],
    answer: 0,
    explanation: `Signed integer overflow is <strong>undefined behaviour</strong> in C++. The compiler is allowed to assume it never happens and may optimise aggressively — a loop that would wrap on real hardware could become infinite when compiled with <code>-O2</code>. In practice most compilers two's-complement wrap and print <code>-2147483648</code>, but this is not guaranteed. Use <code>unsigned</code> types or check limits (<code>std::numeric_limits&lt;int&gt;::max()</code>) before arithmetic if overflow is possible.`,
  },

  {
    id: 1071, category: 'types', difficulty: 'boss',
    code:
`#include <iostream>
using namespace std;

struct Pair {
    int y;
    int x;
    Pair() : x(1), y(x + 1) {}
};

int main() {
    Pair p;
    cout << p.x << " " << p.y;
}`,
    question: "What does this print?",
    choices: ['Undefined behavior', '1 2', '0 1', 'Compile error'],
    answer: 0,
    explanation: `Member initializer lists execute in <strong>declaration order</strong>, not the order written in the list. <code>y</code> is declared before <code>x</code> in the struct body, so <code>y = x + 1</code> is evaluated first — while <code>x</code> is still uninitialised. Reading an uninitialised variable is undefined behaviour. The fix is to reorder the declarations so <code>x</code> appears before <code>y</code>. Most compilers warn about this with <code>-Wreorder</code>.`,
  },

  {
    id: 1072, category: 'pointers', difficulty: 'boss',
    code:
`#include <iostream>
using namespace std;

int main() {
    int a[] = {10, 20, 30};
    cout << 2[a];
}`,
    question: "What does this print?",
    choices: ['30', '20', 'Compile error', 'Undefined behavior'],
    answer: 0,
    explanation: `The subscript operator is defined as <code>a[i] == *(a + i)</code>. Because pointer addition is commutative, <code>*(a + 2) == *(2 + a) == 2[a]</code>. Writing <code>2[a]</code> is perfectly valid C++ and equivalent to <code>a[2]</code>. While legal, this notation is intentionally perverse and never used in real code — it exists purely to demonstrate that <code>[]</code> is syntactic sugar for pointer arithmetic.`,
  },

  {
    id: 1073, category: 'pointers', difficulty: 'boss',
    code:
`#include <iostream>
using namespace std;

int* get() {
    int x = 42;
    return &x;
}

int main() {
    int* p = get();
    cout << *p;
}`,
    question: "What does this print?",
    choices: ['Undefined behavior', '42', '0', 'Compile error'],
    answer: 0,
    explanation: `<code>x</code> has automatic storage duration — it lives on the stack frame of <code>get()</code>. When <code>get()</code> returns, <code>x</code> is destroyed and the returned pointer becomes <strong>dangling</strong>. Dereferencing it is undefined behaviour: some compilers print <code>42</code> (the memory hasn't been overwritten yet), others crash. Most compilers warn about this with <code>-Wreturn-local-addr</code>.`,
  },

  {
    id: 1074, category: 'functions', difficulty: 'boss',
    code:
`#include <iostream>
using namespace std;

void f(int)    { cout << "int"; }
void f(double) { cout << "double"; }

int main() {
    f(3.14f);
}`,
    question: "What does this print?",
    choices: ['double', 'int', 'Compile error (ambiguous)', 'Undefined behavior'],
    answer: 0,
    explanation: `Overload resolution ranks candidates by conversion cost. A <code>float</code> argument can be <em>promoted</em> to <code>double</code> (a cheap standard promotion) or <em>converted</em> to <code>int</code> (a more expensive standard conversion). Promotions always beat conversions, so <code>f(double)</code> wins. If both overloads required a conversion of equal rank, the call would be ambiguous and fail to compile.`,
  },

  {
    id: 1075, category: 'functions', difficulty: 'boss',
    code:
`#include <iostream>
using namespace std;

struct Base {
    ~Base() { cout << "~Base"; }
};
struct Derived : Base {
    ~Derived() { cout << "~Derived"; }
};

int main() {
    Base* p = new Derived;
    delete p;
}`,
    question: "What does this print?",
    choices: ['Undefined behavior', '~Derived~Base', '~Base', '~Base~Derived'],
    answer: 0,
    explanation: `Deleting a derived object through a base pointer is <strong>undefined behaviour</strong> when the base destructor is not <code>virtual</code>. In practice most compilers only call <code>~Base</code>, leaking <code>Derived</code>'s resources. The fix is one word: declare <code>virtual ~Base() {}</code>. The C++ Core Guidelines (C.35) mandate: any class with a virtual function must have a virtual destructor. This is one of the most common C++ resource leak patterns.`,
  },

];
