console.log("Operators.js loaded...");

// 1. Arithmetic Operators

let x = 10;
let y = 20;

console.log(x + y); // addition
console.log(x - y); // subtraction
console.log(x * y); // multiplication
console.log(x / y); // division
console.log(x % y); // modulus

console.log("=====================");

// 2. Assignment Operators

let a = 10; // = assignment operator
let b = 20;

a += b; // a = a + b
console.log(a);

console.log("=====================");

a -= b; // a = a - b
console.log(a);

console.log("=====================");

// 3. Comparison Operators

let p = 10;
let q = 20;

console.log(p == q);

console.log("==================");

let r = '10';
console.log(typeof r);
let s = 10;
console.log(typeof s);

// 3.1. == (Equal to) - Compares the equality of two values without considering the type.
console.log(r == s);

// 3.2. === (Strict Equal to) - Compares the equality of two values with considering the type.
console.log(r === s);

console.log("==================");

console.log(p != q); // Not equal to

console.log("==================");

console.log(r !== s); // Strict not equal to

console.log("==================");

console.log(p > q); // Greater than

console.log("==================");

console.log(p < q); // Less than

console.log("==================");

console.log(p >= q); // Greater than or equal to

console.log("==================");

// 4. Logical Operators

let t = true;
let u = false;

// 4.1. && (Logical AND) - Returns true if both operands are true.
console.log(t && u);

console.log("==================");

// 4.2. || (Logical OR) - Returns true if one of the operands is true.
console.log(t || u);

console.log("==================");

// 4.3. ! (Logical NOT) - Returns true if the operand is false.
console.log(!t);
