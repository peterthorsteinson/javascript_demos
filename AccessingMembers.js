// AccessingMembers.js

x = { a:1, b:2, c:"skip a few"};
console.log(x.a);
console.log(x.b);
console.log(x.c);
console.log(x['a']);
console.log(x['b']);
console.log(x['c']);

x = [1, 2, "skip a few"];
console.log(x['0']);
console.log(x['1']);
console.log(x['2']);
console.log(x[0]);
console.log(x[1]);
console.log(x[2]);
