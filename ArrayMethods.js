// ArrayMethods.js

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

var a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

console.log("a");
console.log(a);
console.log();

console.log("a.length"); 
console.log(a.length);
console.log();

console.log("first element");
console.log(a[0]);
console.log();

console.log("last element");
console.log(a[a.length-1]);
console.log();

console.log("forEach over elements");
a.forEach(function (currentValue) {console.log(currentValue);});
console.log();

console.log("forEach over elements again");
a.forEach(function (currentValue, index, array) {
  console.log(index, currentValue);
});

console.log("a.push('red')");
console.log(a.push('red')); // returns new length
console.log("a");
console.log(a);
console.log();

console.log("a.pop()");
console.log(a.pop()); // removes and returns 'red' from end
console.log("a");
console.log(a);
console.log();

console.log("a.shift()");
console.log(a.shift()); // remove 'one' from front
console.log("a");
console.log(a);
console.log();

console.log("a.unshift('green')");
console.log(a.unshift('green')); // add 'green' to front and returns new length
console.log("a");
console.log(a);
console.log();

console.log("a.indexOf('five')");
console.log(a.indexOf('five')); // returns index position of 'five'
console.log();

var removedItems = a.splice(2, 6); // splice(start, deleteCount)
console.log(removedItems);
console.log(a);
console.log();

var shallowCopy = a.slice(); // slice(begin, end)
console.log(shallowCopy);
console.log(a);
console.log();

var a = [];  // empty array
console.log(a);
a.push(1,2,3,4,5,6,7,8); // push method adds elements to array
console.log(a);
a.reverse();   // reverse method reverses order of elements
console.log(a);
