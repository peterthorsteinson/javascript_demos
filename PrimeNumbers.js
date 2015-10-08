// PrimeNumbers.js

function isPrime(value) {
  var limit = Math.sqrt(value);
  for(var i = 2; i <= limit; i++) {
    if(value % i === 0) {
      return false;
    }
  }
  return value > 1;
}

for(var i = 2; i < 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

