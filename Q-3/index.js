/**
 Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the
function using the var keyword and log its value to the console before it is assigned a value to demonstrate
variable hoisting.
 */

function sumNumbers(num1, num2) {
  console.log(myVar); // Output: undefined
  var myVar = num1 + num2;
  return myVar;
}

let reslult = sumNumbers(5, 10);
console.log(reslult); // Output: 15
