console.log("DataTypes.js loaded...");

// 1. Primitive Data Types

// 1.1. Number - Represents both integer and floating-point numbers.
let num1 = 10;
console.log(num1);
console.log(typeof num1);

let num2 = 10.59;
console.log(typeof num2);

console.log("======================");

// 1.2 String - Represents a sequence of characters.
let customerName = "John";
console.log(typeof customerName);

console.log("======================");

// 1.3 Boolean - Represents a logical entity and can have two values: true or false.
let isCustomer = true;
let isEmployee = false;

console.log(typeof isCustomer);
console.log(typeof isEmployee);

console.log("======================");

// 1.4 Undefined - Represents unassigned values.
let x;
console.log(x);
console.log(typeof x);

console.log("======================");

// 1.5 - Null - nRepresents an intentional absence of any object value.
let y = null;
console.log(y);
console.log(typeof y);

console.log("======================");

// 1.6 - Symbol - Represents a unique value.
let symbol = Symbol('Symbol');
console.log(symbol);
console.log(typeof symbol);

console.log("======================");

// 2. Reference Data Types (Non-primitive Data types)

// 2.1 Object - Represents a collection of key-value pairs.
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}
console.log(person);
console.log(typeof person);

console.log("======================");

// 2.2 Array - Represents a list of elements.
let colors = ['Red', 'Green', 'Blue'];
console.log(colors);
console.log(typeof colors);
console.log(Array.isArray(person));

console.log("======================");

// 2.3 Function - Represents a function.
function greet() {
    console.log("Hello World!");
}
greet();
console.log(typeof greet);

console.log("======================");

// 2.4 Date - Represents a date and time.
let today = new Date();
console.log(today);
console.log(typeof today);




