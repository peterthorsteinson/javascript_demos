var x = 1;
function functionWithHoisting() {
    if (true) {
        var x = 10; // var has no block scope, hoisted
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

var z = 1;
function functionWithoutHoisting() {
    if (true) {
        let z = 10; // let has block scope, not hoisted
    }
    console.log(z); // displays 1, not 10
}
functionWithoutHoisting();
