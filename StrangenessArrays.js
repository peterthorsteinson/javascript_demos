// StrangenessArrays.js

var array = [6, 7, 12, 17, 33, 44];
var sortedArray = array.sort();
console.log(sortedArray); //=> [ 12, 17, 33, 44, 6, 7 ]

array = ['one', 'two', 'three', 'four', 'five'];
delete array[1];
console.log(array); // => ['one',, 'three', 'four', 'five']
console.log(array[1]); // => undefined (consider using splice method)
