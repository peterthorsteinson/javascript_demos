// ClosureScope.js

var globalVar = 10;

function regularFunction() {
    return globalVar++;
}
console.log(regularFunction());
console.log(regularFunction());
console.log(regularFunction());
globalVar = 100;
console.log(regularFunction());

console.log();

function outerFunction(outerParam) {
  var outerLocalVar = outerParam;
  return function innerFunction() {
       return outerLocalVar++;
    };
}
var innerFunction = outerFunction(10);
console.log(innerFunction());
console.log(innerFunction());
console.log(innerFunction());
console.log(innerFunction());

console.log();

var innerFunction2 = (function (outerParam) {
  var outerLocalVar = outerParam;
  return function () {
       return outerLocalVar++;
    };
})(10);
console.log(innerFunction2());
console.log(innerFunction2());
console.log(innerFunction2());
console.log(innerFunction2());

