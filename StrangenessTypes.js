// StrangenessTypes.js

1 == 1
1 == '1
'1' == 1
'1' == '1'
1 === 1
1 === '1
'1' === 1
'1' == '1'

console.log('\nComparison of numeric expressions not always exact!');
console.log(0.1 + 0.1 == 0.2);  // => true
console.log(0.1 + 0.1 === 0.2); // => true
console.log(0.1 + 0.2 == 0.3);  // => false
console.log(0.1 + 0.2 === 0.3); // => false

console.log('\nNull is of type object but is not an instance of object!');
console.log(typeof null); // => object
console.log(null);        // => null

console.log('\nNaN is of type Number but is not an instance of number!');
console.log(typeof NaN); // => Number
console.log(NaN);        // => NaN

console.log('\nNaN is not equal to anything, including itself!');
console.log(null === null);         // => true
console.log(Infinity === Infinity); // => true
console.log(NaN === NaN);           // => false
console.log(isNaN(NaN));            // => true

console.log('\nArray comparison with boolean is tricky !');
console.log([] === false);          // => false
console.log([] == false);           // => true
console.log(new Array() === false); // => false
console.log(new Array() == false);  // => true

console.log('\nString comparison with boolean is tricky !');
console.log('false' == false); // => false
console.log('0' == false);     // => true
console.log('' == '0');        // => false
console.log(0 == '');          // => true

console.log('\nComparison of boolean, null, and undefined is tricky !');
console.log(false == undefined); // => false
console.log(false == null);      // => false
console.log(null == undefined);  // => true

console.log('\nComparison of number and whitespace is tricky !');
console.log(0 == '   \t\r\n   ' );  // => true

console.log('\nComparison of objects as reference equality');
var obj1 = {};
var obj2 = obj1;
var obj3 = {};
console.log(obj1 == obj2);  // => true
console.log(obj1 === obj2);  // => true
console.log(obj1 == obj3);  // => false
console.log(obj1 === obj3);  // => false

// falsy values:
// false
// null
// undefined
// ""
// 0
// NaN
// all other values/objects are truthy

// === compares object references, not contents
