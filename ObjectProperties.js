// ObjectProperties.js

// Object is collection of name/value pairs (string/value map)
var dude = { // literal object syntax
  firstName: "Brendan", // property "firstName" -> value "Brendan"
  lastName: "Eich",     // property "lastNamee" -> value "Eich"
  employer: "Mozilla",  // actually resigned as CEO April 3, 2014
  coolFlag: true        // property "coolFlag"  -> value true
};

console.log(dude.firstName);   // read property
console.log(dude["firstName"]);

console.log(dude.lastName);
console.log(dude["lastName"]);

console.log(dude.employer);
console.log(dude["employer"]);

console.log(dude.coolFlag);
console.log(dude["coolFlag"]);

dude.employer = null;           // write property (resigned)
console.log(dude.employer);
console.log(dude["employer"]);

dude.birthYear = 1961;          // dynamically add properties
console.log(dude.birthYear);
console.log(dude["birthYear"]);



