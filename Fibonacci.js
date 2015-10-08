// Fibonacci.js

function fibonacciRecursive(n) {
  if (n < 2) {
  return n;
  } else {
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
}
for (i = 1; i <=10; i++) {
  console.log("fibonacciRecursive(" + i + ") => " + fibonacciRecursive(i));
}

console.log();

function fibonacciIterative(n) {
  if (n === 1 || n == 2) { return 1; }
  var fibonacci_n = 0;
  var fibonacci_n_minus_1 = 1;
  var fibonacci_n_minus_2 = 1;
  for(i = 2; i < n; i++) {
    fibonacci_n = fibonacci_n_minus_1 + fibonacci_n_minus_2;
    fibonacci_n_minus_2 = fibonacci_n_minus_1;
    fibonacci_n_minus_1 = fibonacci_n;
  }
  return fibonacci_n;
}
for (i = 1; i <=10; i++) {
  console.log("fibonacciIterative(" + i + ") => " + fibonacciIterative(i));
}
