// Task 1. Create the Car class. Create two child classes SportCar and LuxuryCar. The parent class construct
// takes the variables car maker and engine type. The child classes should have methods that output the maximum
// speed and price for the corresponding car types. The output text should be like this: `This is <carName>.
// It has <engineType> engine and max speed equal to <maxSpeed>. Approximetly cost of the car is <carCost>`.



class Car {
    constructor(carMaker, engineType) {
        this.carMaker = carMaker;
        this.engineType = engineType;
    }
}

class SportCar extends Car {
    constructor(carMaker, engineType) {
        super(carMaker, engineType)
    }

    maxSpeed() {
        return "300 km/h"
    }

    carCost() {
        return "$250,000"
    }

    carInfo() {
        return `This is ${this.carMaker}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed()}.
        Approximately cost of the car is ${this.carCost()}.`
    }
}

class LuxuryCar extends Car {
    constructor(carMaker, engineType) {
        super(carMaker, engineType)
    }
    maxSpeed() {
        return "250 km/h"
    }

    carCost() {
        return "$100,000,000"
    }

    carInfo() {
        return `This is ${this.carMaker}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed()}.
        Approximately cost of the car is ${this.carCost()}.`
    }
}


const sportCar = new SportCar("Bugatti", "Diesel 5.0")
console.log(sportCar.carInfo())

const luxuryCar = new LuxuryCar("Bentley", "Gas")
console.log(luxuryCar.carInfo())



// Task 2. Create two people objects. Implement a method that outputs the string `My name is <name>`.


class People {
    constructor(name) {
        this.name = name
    }

    introduce() {
        return(`My name is ${this.name}.`)
    }
}

const name1 = new People("Dima")
const name2 = new People("Anton")

console.log(name1.introduce())
console.log(name2.introduce())


// Task 3. Create two objects of cars. Implement a method that outputs the number of car doors,
// and which side the steering wheel is on. Depending on the context of execution, this method should output the
// appropriate information about the cars. For example `This car has 3 doors and this is left-hand drive car`.


class Cars {
    constructor(doors, side) {
        this.doors = doors
        this.side = side
    }

    info() {
        console.log(`This car has ${this.doors} doors and this is ${this.side}-hand drive car.`)
    }
}

const audi = new Cars(4, "left")
const citroen = new Cars(5, "right")

console.log(audi.info())
console.log(citroen.info())


