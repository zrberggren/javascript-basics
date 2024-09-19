// JavaScript Operators in JavaScript perform operations on variables and values. Operators are used to assign values, compare values, perform arithmetic operations, and more. This snippet includes examples of the following operators:

let name = "Zach"; // String Literal
let Age = 31; // Number Literal
let isCool = true; // Boolean Literal
let firstName = undefined; // Undefined
let selectedColor = Null; // Null

let person = {
  name: "Zach",
  age: 31,
}; // Object Literal

// Dot Notation (Best Practice)
person.name = "John";

// Bracket Notation
let selection = "name";
person[selection] = "Mary";

console.log(person.name);

let selectedColors = ["red", "blue"]; // Array Literal
selectedColors[2] = 1; // Add to Array

console.log(selectedColors.length); // Length of Array

// Perform a task
function greet(name, lastName) {
  // name is a parameter

  console.log("Hello " + name + " " + lastName);
}

greet("Zach", "Smith"); // Zach is an argument

// Calculate a value
function square(number) {
  return number * number;
}

console.log(square(2));
