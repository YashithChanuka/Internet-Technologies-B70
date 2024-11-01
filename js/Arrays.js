console.log('Arrays.js loaded...');

// Arrays - used to store multiple values in a single variable. An array is a special type of object in JavaScript that can hold a list of items, which can be of any data type, including numbers, strings, objects.

// 1. Creating an Array

// 1.1. Using Array Literal
let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];
console.log(fruits);

console.log("====================================");

// 1.2. Using Array Constructor
let cars = new Array('BMW', 'Audi', 'Toyota', 'Honda', 'Nissan');
console.log(cars);

console.log("====================================");

let myArray = [10, 'ddd', true, null, undefined, { name: 'John', age: 30 }, [1, 2, 3, 4, 5]];
// console.log(myArray);

// 2. Accessing Elements of an Array
console.log(fruits[0]);
console.log(fruits[1]);
console.log(cars[2]);

console.log("====================================");

// 3. Modifying Elements of an Array
fruits[0] = 'Grapes';
console.log(fruits);

console.log("====================================");

// 4. Built-in array functions

console.log(fruits);

// 4.1. push() - Adds new elements to the end of an array
fruits.push('Strawberry');
console.log(fruits);

// let items = [
//     { itemId: 1, name: 'Item1' },
//     { itemId: 2, name: 'Item2' }
// ];

// let newItem = { itemId: 3, name: 'Item3' };
// items.push(newItem);

// console.log(items);

console.log("====================================");

// 4.2. pop() - Removes the last element from an array
console.log(fruits);
let poppedFruit = fruits.pop();
console.log(poppedFruit);
console.log(fruits);

console.log("====================================");

// 4.3 shift() - Removes the first element from an array
console.log(fruits);
let shiftedFruit = fruits.shift();
console.log(shiftedFruit);
console.log(fruits);

console.log("====================================");

// 4.4 unshift() - Adds new elements to the beginning of an array
console.log(fruits);
fruits.unshift('Apple');
console.log(fruits);

console.log("====================================");

// 4.5 splice() - Adds or removes elements from an array
console.log(fruits);
fruits.splice(1, 3);
console.log(fruits);

console.log("====================================");

console.log(fruits);
fruits.splice(1, 0, 'Banana', 'Mango', 'Orange');
console.log(fruits);

console.log("====================================");

// 4.6 slice() - Extracts a section of an array and returns a new array
console.log(fruits);
let selectedFruits = fruits.slice(1, 4);
console.log(selectedFruits);
console.log(fruits);

console.log("====================================");

// 4.7 concat() - Merges two or more arrays and returns a new array

let concatArray = fruits.concat(cars);
console.log(concatArray);

console.log("====================================");

// 4.8 forEach() - Calls a function for each element in an array
fruits.forEach(function (fruit) { 
    console.log(fruit);
})

// 4.9 map() - Creates a new array with the results of calling a provided function on every element in the array
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);

console.log("====================================");

// 4.10 filter() - Creates a new array with all elements that pass the test implemented by the provided function
let lengthyFruitNames = fruits.filter(fruit => fruit.length > 5);
console.log(lengthyFruitNames);




