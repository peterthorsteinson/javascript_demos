// var_vs_this.js

function MyObject() {
    var x  = 1; // local variable in function
    this.y = 2; // property in object
    this.myMethod = function() { // method in object
        console.log(x);      // 1 (in closure)
        console.log(this.y); // 2 (in this object)
    }
}
var obj = new MyObject();
console.log(obj.x); // undefined (out of scope)
console.log(obj.y); // 2 (property)
obj.myMethod();
