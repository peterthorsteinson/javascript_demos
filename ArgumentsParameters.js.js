// ArgumentsParameters.js

// Note: an argument is passed into a parameter
// Number of arguments and parameters need not match

function myFunction(a, b, c) {
  console.log(arguments.length + " -> " + a + ", " + b + ", " + c)
}

myFunction(1);             // => 1 -> 1, undefined, undefined
myFunction(1, 2);          // => 2 -> 1, 2, undefined
myFunction(1, 2, 3);       // => 3 -> 1, 2, 3
myFunction(1, 2, 3, 4);    // => 3 -> 1, 2, 3
myFunction(1, 2, 3, 4, 5); // => 3 -> 1, 2, 3

// Functions have built-in arguments object.
// It is an array-like object containing the actual arguments.
function sum() {
    var count = 0, sum = 0;
    while(arguments.length - count > 0) {
        sum += arguments[count];
        count++;
    }
    return sum;
}
console.log(sum());              // =>   0
console.log(sum(1));             // =>   1
console.log(sum(10, 1, 9, 3));   // =>  23
console.log(sum(10, 1, 9, "3")); // => 203
