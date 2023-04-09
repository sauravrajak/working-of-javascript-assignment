/**Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product.
Use function expressions to define the function and call the function before it is declared to demonstrate
hoisting. */

multiplyNumbers(5, 10); // Output: TypeError: multiplyNumbers is not a function

const multiplyNumbers = function (num1, num2) {
  return num1 * num2;
};

let result = multiplyNumbers(5, 10);
console.log(result); // Output: 50
