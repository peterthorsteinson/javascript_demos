// LiteralValues.js

x = null;
x = undefined;
x = 1; 
x = 0.01;
x = "Hello World";
x = 'Hello World';
x = 'Hello \
World';
x = '\u4f60\u597d\u4e16\u754c'; // 你好世界
x = '你好世界'
x = true; 
x = false;
x = null; // variable refers to nothing
x = undefined; // variable not initialized
x = {}; //literal empty object
x = { a:1, b:2, c:"skip a few"}; // literal object
x = []; //literal empty array
x = [1, 2, "skip a few"]; // literal array

// array of objects
x = [{ a:1, b:2, c:"skip a few"}, { a:99, b:100}];
console.log(x[0].a); // => 1
console.log(x[0].b); // => 2
console.log(x[0].c); // => 9skip a few
console.log(x[1].a); // => 99
console.log(x[1].b); // => 100
console.log(x[1].c); // =>  undefined

// object of nested arrays
x = {a:[1,2,3], b:['a','b','c']};
console.log(x.a[0]); // => 1
console.log(x.a[1]); // => 2
console.log(x.a[2]); // => 3
console.log(x.b[0]); // => a
console.log(x.b[1]); // => b
console.log(x.b[2]); // => c

// literal regular expression
x = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
console.log(x.test('santaclaus@northpole.org'));
console.log(x.test('santaclaus-northpole-org'));

// literal empty function
x = function(){};
console.log(x);   // => function()
console.log(x()); // => undefined

// literal function
x = function(a, b){ return a + b};
console.log(x);      // => function(a, b)
console.log(x(3,4)); // => 7

// Can you spot the difference between the following two strings?
// Hint -> SyntaxError: unterminated string literal
var str1 = 'this is a \
multipline string';
var str2 = 'this is a \ 
multipline string';
console.log(str1);
console.log(str2);

