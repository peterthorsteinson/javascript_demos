// Prototype.js

function Vector2D(x,y) { // constructors capitlaized by convention
  this.x = x;
  this.y = y;
}
Vector2D.prototype.rho = function() { // could use unicode rho
  return Math.sqrt(this.x*this.x + this.y*this.y);
};
Vector2D.prototype.theta = function() { // could use unicode theta
  return Math.atan2(this.y, this.x);
};

var v = new Vector2D(1, 1);
console.log("rho   -> " + v.rho());
console.log("theta -> " + v.theta()*180/Math.PI);



