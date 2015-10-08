


A JavaScript function does not perform any checking on parameter values (arguments).
JavaScript function definitions do not specify data types for parameters.

JavaScript functions do not perform type checking on the passed arguments.

JavaScript functions do not check the number of arguments received.
If a function is called with missing arguments (less than declared), the missing values are set to: undefined 

If a function is called with too many arguments (more than declared), these arguments cannot be referred, because they don't have a name. They can only be reached in the arguments object.

JavaScript functions have a built-in object called the arguments object.

The argument object contains an array of the arguments used when the function was called (invoked).

Arguments are Passed by Value

The parameters, in a function call, are the function's arguments.

JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

If a function changes an argument's value, it does not change the parameter's original value.

Changes to arguments are not visible (reflected) outside the function.


Objects are Passed by Reference

In JavaScript, object references are values.

Because of this, objects will behave like they are passed by reference:

If a function changes an object property, it changes the original value.


functionName(parameter1, parameter2, parameter3) {
     code to be executed
 } 

function myFunction(x, y) {
     if (y === undefined) {
           y = 0;
     } 
 }

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
     var i;
    var max = -Infinity;
     for (i = 0; i < arguments.length; i++) {
         if (arguments[i] > max) {
             max = arguments[i];
         }
     }
     return max;
 }



