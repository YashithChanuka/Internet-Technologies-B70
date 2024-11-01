console.log("DynamicTyping.js loaded...");

// Dynamic Typing - avaScript is a dynamically typed language, which means that you don't have to specify the data type of a variable when declaring it. The data type of a variable can change during the execution of a program and JavaScript will automatically convert the variable to the correct data type.

let x = 10;
console.log(typeof x);

x = "Hellow world!!!";
console.log(typeof x); 

x = true;
console.log(typeof x);

x = null;
console.log(typeof x);

x = {
    name: "John",
    age: 30
}
console.log(typeof x);

x = [1, 2, 3, 4, 5];
console.log(typeof x);
console.log(Array.isArray(x));
