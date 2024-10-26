console.log('Control Flows JS file is loaded....');

// Control Flows - JavaScript supports the following control flow statements:

// 1. Conditional Statements
// - if...else

let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// - if...else if...else

let marks = 70;

if (marks >= 90) {
    console.log("A Grade");
} else if (marks >= 80) {
    console.log("B Grade");
} else if (marks >= 70) {
    console.log("C Grade");
} else {
    console.log("D Grade");
}

// - switch...case

let day = 4;
let dayName;

switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Invalid Day';
}

console.log(dayName);

// 2. Looping Statements

// - for loop

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// - while loop

let j = 0;

while (j < 5) {
    console.log(j);
    j++;
}

// - do...while loop

let k = 0;

do {
    console.log(k);
    k++;
}
while (k < 5);

// - for...in loop

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

for (let key in person) {
    console.log(key, person[key]);
}

// - for...of loop

let colors = ['Red', 'Green', 'Blue'];

for (let color of colors) {
    console.log(color);
}

// 3. Jump Statements

// - break

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// - continue

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

// - return

function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

console.log('======================');

// - throw

function divides(a, b) {
    if (b === 0) {
        throw 'Division by zero is not allowed.';
    }
    return a / b;
}

try {
    console.log(divides(10, 0));
} catch (error) {
    console.log(error);
}

console.log('======================');

// - try...catch...finally

try {
    console.log('Try block');
    throw 'An error occurred';
} catch (error) {
    console.log('Catch block');
    console.log(error);
}

console.log('======================');

try {
    console.log('Try block');
    throw 'An error occurred';
}
catch (error) {
    console.log('Catch block');
    console.log(error);
}
finally {
    console.log('Finally block');
}
