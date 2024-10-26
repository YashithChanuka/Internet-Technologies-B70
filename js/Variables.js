console.log("Variables.js loaded");

// 1. var - function scope
var firstName = "John";
console.log(firstName);

function testVar() { 
    var x = 10;
    console.log(x);
    console.log(firstName);
}
// console.log(x); => getting error
testVar();

// 2. let - block scope
// function testLet() {
//     let y = 10;
//     console.log(y);
//     if (true) {
//         let z = 20;
//         console.log(z);
//         console.log(y);
//     }
//     // console.log(z);
// }
// // console.log(y);
// // console.log(z);
// testLet()

// 3. const - block scope
// if (true) {
//     const m = 10;
//     // m = 20;
//     console.log(m);
// }
// console.log(m);


