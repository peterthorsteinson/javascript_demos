// MathMethods.js

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log(Math.pow(2, 16)); // Math.pow(base, exponent)
console.log(Math.pow(2, 53)); // => 9007199254740992 

console.log(Math.PI); // circle circumference/diameter
console.log(Math.E);  // natural logarithm base (approx 2.718)

// Math.LN10 = ln(10) = approx 2.302
console.log(Math.LN10);

console.log(Math.pow(Math.E , Math.LN10)); // => approx 10

console.log(Math.SQRT2 * Math.SQRT2); // approx 2

console.log(Math.sin(0));             //   0 => approx  0.0
console.log(Math.sin(Math.PI/2));     //  90 => approx  1.0
console.log(Math.sin(Math.PI));       // 180 => approx  0.0
console.log(Math.sin(3*Math.PI/2));   // 270 => approx -1.0
console.log(Math.sin(Math.PI/6));     //  30 => approx  0.5
console.log(Math.round(0.7));         // => 1.0: round to nearest integer
console.log(Math.round(0.3));
console.log(Math.ceil(0.76));         // => 1.0: round up to integer
console.log(Math.ceil(0.36));
console.log(Math.floor(0.7));         // => 0.0: round down to integer
console.log(Math.abs(-7));            // => 7
console.log(Math.max(1,2,3));         // return largest argument
console.log(Math.min(1,2,3));         // return smallest argument
console.log(Math.random());           // pseudo-random number from [0.0, 1.0)
console.log(Math.sqrt(3));            // square root 3
console.log(Math.pow(3, 1/3));        // cube root 3
console.log(Math.sin(0));             // Trigonometry: also Math.cos, Math.atan, etc.
console.log(Math.log(10));            // natural log 10
console.log(Math.log(100)/Math.LN10); // base 10 log 100
console.log(Math.log(512)/Math.LN2);  // base 2 log 512
console.log(Math.exp(3));             // e^3
