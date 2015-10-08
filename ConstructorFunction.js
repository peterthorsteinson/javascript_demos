// ConstructorFunction.js

function Person(title, firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
  this.toString = function() {
    return this.title + " " + this.firstName + ' ' + this.lastName;
  };
}
var pm = new Person("Sir", "Winston", "Churchill");
console.log(pm.toString());
console.log(pm.lastName);

Person.prototype.getLastNameLength = function() {
  return this.lastName.length;
};

console.log(pm.getLastNameLength());