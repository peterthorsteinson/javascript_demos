// StrangenessSemicolons.js

function func1() {
    return
    1;
}

function func2() {
    return 1;
}

console.log(func1()); // => undefined
console.log(func2()); // => 1

var x = 2
+3
console.log(x) // => 5
var x = 2;
+3
console.log(x) // => 2

x = 1;
y=2;
var sum = x + y
(sum).toString() // TypeError: y is not a function

x = 1;
y=2;
var sum = x + y;
(sum).toString(); // => "3"



