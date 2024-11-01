console.log("TypeConversion.js loaded...");

// 1. Implicitly Type Conversion

let result = 'The answer is ' + 100;
console.log(typeof result);

console.log("=================");

let sum = '37' + 5;
console.log(sum);
console.log(typeof sum);

console.log("=================");

let diff = '37' - 5;
console.log(diff);
console.log(typeof diff);   

console.log("=================");

let multiply = '10' * 5;
console.log(multiply);
console.log(typeof multiply);

console.log("=================");

let divide = '10' / 5;
console.log(divide);
console.log(typeof divide);

console.log("=================");

let remainder = '12' % 5;
console.log(remainder);
console.log(typeof remainder);

console.log("=================");

// 2. Explicitly Type Conversion

let num1 = '100';
console.log(typeof num1);

let num2 = Number(num1);
console.log(num2); // 100
console.log(typeof num2); // number

console.log("=================");

let num3 = Number('40px');
console.log(num3); // NaN
console.log(typeof num3); // number

console.log("=================");

let num4 = Number('Hello');
console.log(num4); // NaN
console.log(typeof num4); // number

console.log("=================");

let num5 = Number(true);
console.log(num5); // 1
console.log(typeof num5); // number

console.log("=================");

let num6 = Number(false);
console.log(num6); // 0
console.log(typeof num6); // number

console.log("=================");

let num7 = Number(null);
console.log(num7); // 0
console.log(typeof num7); // number

console.log("=================");

let num8 = Number(undefined);
console.log(num8); // NaN
console.log(typeof num8); // number

console.log("=================");

let num9 = parseInt('100');
console.log(num9); // 100
console.log(typeof num9); // number

console.log("=================");

let num10 = parseInt('100.59');
console.log(num10); // 100
console.log(typeof num10); // number

