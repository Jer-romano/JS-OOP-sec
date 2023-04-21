/**
 * OOP Javascript Exercises
 */
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep";
    }

    toString() {
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }

}

//console.log(new Vehicle("Honda", "Accord", "2005").toString());

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!!";
    }
}
let mc = new Motorcycle("Honda", "Nighthawk", "2001");
//console.log(mc.constructor.name);
// console.log(mc.toString());
// console.log(mc.revEngine());
// console.log(mc.numWheels);

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(vehicle) {
        if(this.vehicles.length == this.capacity) return "Sorry, we're full.";

        if(vehicle instanceof Vehicle) this.vehicles.push(vehicle);
        else return "Sorry, only vehicles are allowed in here!"
    }
}

let grg = new Garage(2);
console.log(grg.add("hello"));
grg.add(new Car("Ford", "Fiesta", "2011"));
console.log(grg.vehicles);
grg.add(new Motorcycle("Ducati", "Superleggera", "2008")); //garage is now full
console.log(grg.vehicles);
console.log(grg.add(new Car("Chevy", "Silverado", "2008"))); //will be rejected bc full
console.log(grg.add(true));
