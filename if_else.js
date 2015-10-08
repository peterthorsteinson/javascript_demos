// if_else.js

// test if even
function isEven(x) {
  if (x % 2 === 0) { // Curly braces optional for single statement
    return true;
  } else {      // Curly braces optional for single statement
    return false;
  }
}

// get int in range from min inclusive to max exclusive
function getRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var min = 0, max = 10, randInt; 
for (var i = 1; i <= 10; i++) {
  randInt = getRandomIntegerInRange(min, max);
  console.log(randInt + " is even: " + isEven(randInt));
}
