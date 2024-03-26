"use strict";
//Q.24) Equality and Inequality Test 1
console.log("Equality test with strings:", "Grapes" === "Grapes");
// Equality and Inequality Test 2
console.log("Inequality test with strings:", "Apple" !== "Apple");
// Tests using the lower case function
console.log("Lower Case function test:", "HELLO".toLowerCase() === "hello");
// Numerical tests involving equality and inequality
console.log("Equality test with numbers:", 26 === 26);
// Numerical tests involving inequality
console.log("Inequality test with numbers:", 26 === 35);
// greater than test
console.log("Greater than test:", 10 > 5);
// greater less than test
console.log("Less than test:", 10 < 5);
// greater than or equal to
console.log("Greater than and equal to test:", 5 >= 10);
// less than or equal to
console.log("less than or equal to test:", 5 <= 10);
// Tests using "and" and "or" operator
console.log("And operator test:", 5 === 5 && 5 > 10);
// Tests using "and" and "or" operator
console.log("Or operator test:", 5 === 5 || 20 > 10);
// Test whether an item is in a array
const fruits = ['orange', 'Apple', 'Grapes'];
console.log('Test "Apple" in the array:', fruits.includes('Apple'));
// Test whether an item is not in a array
console.log('Testing "Banana" is not in array: ', fruits.includes('Banana'));
