// StrangenessNumbers.js

console.log('$' + 4 + 2); // => $42
console.log('$' + (4 + 2)); // => $6

// IEEE 754 precision and round-off error
console.log(0.1 + 0.2 !== 0.3);

console.log(0.1 + 0.2 == 0.30000000000000004);

var a = 0.1;
var b = 0.2;
var c = 0.3;
(a + b) + c === a + (b + c) // => false (associative law not always valid)

var x = 9007199254740992 + 1; // => ???

var x = 9007199254740992;
var y = -x;
x == x + 1; // true !
y == y - 1; // also true !
// Arithmetic operators work, but bitwise/shifts only operate on int32:
x / 2;      // 4503599627370496
x >> 1;     // 0
x | 1;      // 1

Math.pow(2, 53) == Math.pow(2, 53) + 1

var MAX_INT = Math.pow(2, 53); // 9 007 199 254 740 992
for (var i = MAX_INT; i < MAX_INT + 2; ++i) {
    // infinite loop
}

10/0  // => Infinity
-10/0 // => -Infinity
0/0   // => NaN

(Infinity>100) // => true

//also worth noting
Infinity - 1 == Infinity // => true

Math.pow(2,1024) === Infinity // => true

NaN === NaN // => false

