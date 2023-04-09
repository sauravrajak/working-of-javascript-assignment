/**Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
them values and log their values to the console before and after they are declared to demonstrate variable
hoisting. */

{
  console.log(myVar1); // Output: ReferenceError: myVar1 is not defined
  console.log(myVar2); // Output: undefined
  console.log(myVar3); // Output: ReferenceError: myVar3 is not defined

  let myVar1 = "Hello";
  var myVar2 = "World";
  const myVar3 = 2023;

  console.log(myVar1); // Output: Hello
  console.log(myVar2); // Output: World
  console.log(myVar3); // Output: 2023
}
