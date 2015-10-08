// EnumerableProperties.js

var Shape = function(color) {               // base object
  this.color = color;
}

var Rectangle = function(width, height) {   // derived object
  this.width = width;
  this.height = height;
  this.getArea = function() { return width*height; };
}

Rectangle.prototype = new Shape("red");       // inherit prototype
var rectangle = new Rectangle(10, 20);        // instantiate

console.log("width     -> " + rectangle.width);
console.log("height    -> " + rectangle.height);
console.log("getArea() -> " + rectangle.getArea());
console.log("color     -> " + rectangle.color);
console.log();

for (var property in rectangle) {             // all properties
  console.log(property + " -> " + rectangle[property]);
} 
console.log();

for (var property in rectangle) {
   if (rectangle.hasOwnProperty(property)) { // skip prototype
     console.log(property + " -> " + rectangle[property]);
   }
}
console.log();

keys = Object.keys(rectangle);                // skip prototype
for (i=0; i<keys.length; i++) {
  console.log(keys[i] + " -> " + rectangle[keys[i]]);
}
console.log();
