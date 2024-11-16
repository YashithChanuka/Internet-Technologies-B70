console.log("Prototype.js loaded...");

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.age = 25;
Person.prototype.sayHello = function () {
    return `Hello ${this.firstName} ${this.lastName}`;
}

let person1 = new Person("John", "Doe");

console.log(person1);
console.log(person1.age);
console.log(person1.sayHello());
