// Hoisting.js

var x = 1;
function functionWithHoisting() {
    if (true) {
        var x = 10; // no block scope
    }
    console.log(x); // displays 10, not 1
}
functionWithHoisting();

var y = 1;
function equivalentfunction() {
    var y; // declaration hoisted to top of function hides global
    if (true) {
        y = 10; // initialization not hoisted
    }
    console.log(y); // displays 10, not 1
}
equivalentfunction();