console.log("OOPConcepts.js loaded...");    

class Vehicle { 
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayInformation() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
}

let vehicle = new Vehicle("Toyota", "Corolla", 2019);
console.log(vehicle.displayInformation());

class Car extends Vehicle {
    constructor(make, model, year, color) {
        super(make, model, year);
        this.color = color;
    }
    displayInformation() {
        return `${super.displayInformation()}, Color: ${this.color}`;
    }
}

let car = new Car("Toyota", "Corolla", 2019, "Red");
console.log(car.displayInformation());