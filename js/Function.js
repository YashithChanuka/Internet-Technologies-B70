console.log('Function.js loaded...');

// Functions - A function is a block of code that performs a specific task. You can define a function using the function keyword followed by the function name, a list of parameters, and the function body enclosed in curly braces.

// 1. Function Declaration
function greet(firstName) { 
    if (typeof firstName === 'undefined') {
        console.log('Hello, World!');
    } else { 
        console.log(`Hello, ${firstName}`);
    }
}
greet('Yashith');

// 2. Function Expression - A function can also be defined as an expression and assigned to a variable.

let greet2 = function (firstName) {
    console.log(`Hello, ${firstName}`);
}
greet2('John');

// 3. Arrow Function - A shorter syntax introduced in ES6, useful for anonymous functions and simplifying code.
let greet3 = firstName => {
    console.log(`Hello, ${firstName}`);
}
greet3('Doe');

let greet4 = firstName => console.log(`Hello, ${firstName}`);
greet4('Doe');

// 4. Default Parameters - You can assign default values to function parameters.
let greet5 = (firstName = 'Chanuka') => { 
    console.log(`Hello, ${firstName}`);
}
greet5('Kamal');

// 5. Rest Parameters - You can use the rest parameter syntax to represent an indefinite number of arguments as an array.
let sum = (...numbers) => { 
    numbers.forEach(number => console.log(number));
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


