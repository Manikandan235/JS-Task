const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;

let quotient;
if (num2 !== 0) {
  quotient = num1 / num2;
} else {
  quotient = "Cannot divide by zero";
}

var remainder = num2 !== 0 ? num1 % num2 : "Cannot find remainder with zero divisor";

console.log("First Number: " + num1);
console.log("Second Number: " + num2);
console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);
