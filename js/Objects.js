console.log("Objects.js loaded...");

// Objects - fundamental concept in JavaScript, providing a way to store collections of data and more complex entities.

//  creating object using Object Literal
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
    },
    getBirthYear: function() {
        return 2024 - this.age;
    }
}

console.log("PERSON : ", person);

console.log("====================================");

// Accessing Object Properties

// 1. Dot notation
console.log("First Name : ", person.firstName);
console.log("Last Name : ", person.lastName);
console.log("Age : ", person.age);
console.log("City : ", person.address.city);
console.log("Birth Year : ", person.getBirthYear());

console.log("====================================");

// 2. Bracket notation
console.log("First Name : ", person['firstName']);
console.log("Last Name : ", person['lastName']);
console.log("Age : ", person['age']);
console.log("City : ", person['address']['city']);
console.log("Birth Year : ", person['getBirthYear']());

console.log("====================================");

// Adding Properties
person.phone = '0772637283';
console.log("PERSON : ", person);

console.log("====================================");

// Modifying Properties
person.firstName = 'Yashith';
person.lastName = 'Chanuka';
console.log("PERSON : ", person);

console.log("====================================");

// Deleting Properties
delete person.phone;
console.log("PERSON : ", person);

console.log("====================================");

let car = {
    brand: "Toyota",
    model: "Corolla",
    getDescription: function () {
        return `${this.brand} - ${this.model}`;
        // return this.brand + " - " + this.model + " - " + this.year + " - " + this.getDescription();
    }
}

console.log(car.getDescription()); // Toyota - Corolla

console.log("====================================");

// Object as function parameters
function displayName(student) { 
    console.log(student.firstName + " " + student.lastName);
}
displayName({ firstName: "John", lastName: "Doe" });

console.log("====================================");

// Looping object proerties
for (let key in person) { 
    console.log(key, person[key]);
}

console.log("====================================");

// Object Destructuring
let { firstName, lastName, age, address, hobbies } = person;

console.log(firstName, lastName, age);
console.log(address);
console.log(hobbies);

console.log("====================================");

// Built-in Object functions

// 1. Object.keys()
console.log(Object.keys(person));

console.log("====================================");

// 2. Object.values()
console.log(Object.values(person));

console.log("====================================");

// 3. Object.entries()
console.log(Object.entries(person));

console.log("====================================");

// Constructor Function
function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

// creating object using Constructor Function
let student = new Student("John", "Doe", 20);
console.log(student);
console.log(typeof student);

console.log("====================================");

// From ES6

class Person1 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person1 = new Person1('John', 'Doe', 30);
console.log(person1);
console.log(typeof person1);



