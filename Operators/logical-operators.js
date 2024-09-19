// Logical Operators in JavaScript perform logical operations on values.

// Logical AND (&&) operator
// Returns true if both operands are true

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log("Eligible", eligibleForLoan);

// NOT (!) operator
let applicationRefused = !eligibleForLoan;
console.log("Application Refused", applicationRefused);

// Falsy (false) values
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

let userColor = "Red";
let defaultColor = "Blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);
