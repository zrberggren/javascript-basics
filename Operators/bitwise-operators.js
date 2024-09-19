// Bitwise operators treat their operands as a sequence of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers.
// For example, the decimal number nine has a binary representation of 1001.
// Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000

// Read, Write, Execute
// 00000100
// 00000110
// 00000111

// console.log(1 | 2); // Bitwise OR
// console.log(1 & 2); // Bitwise AND

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;

myPermission = myPermission | readPermission | writePermission;

let message = myPermission & readPermission ? "yes" : "no";

console.log(message);
