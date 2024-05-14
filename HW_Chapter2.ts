// Task 1. Create variables, then add them up and output the result to the developer console.


let x = 20
let y = 58
let z = 42
console.log("Sum =", x + y + z);

let sum = x + y + z
console.log("Sum =", sum);


// Task 2. Create variables. Calculate your age in seconds and put the result in the variable **`myAgeInSeconds`**

const secondsInMinute = 60
const minutesPerHour = 60
const hoursPerDay = 24
const daysPerYear = 360
let MyAge = 42
let myAgeInSeconds = MyAge * daysPerYear * hoursPerDay * minutesPerHour * secondsInMinute 
console.log("My age in seconds =", myAgeInSeconds)


// Task 3. Create two variables. Put the variable **`count`** in them and turn it into a string, and **`userName`** on the contrary
// into a number. Try to implement the task in two different ways.


let count = 42
let userName = '42'
let str = String(count)
let number = Number(userName)
console.log(typeof(str), str, typeof(number), number);


let count2 = 42
let userName2 = '42'
let str2 = count2.toString()
let number2 = parseInt(userName2)

console.log(typeof(str2), str2, typeof(number2), number2)




// Task 4. There are three variables. Add the variables so that the result is the expression: **`12 polar bears`** and
// output the result to the console.


let a = 1
let b = 2
let c = " polar bears"

let bears = a.toString() + b.toString() + c;
console.log(bears)

console.log(`${a}${b}${c}`)

let bears2 = String(a) + String(b) + c;
console.log(bears2)


// Task 5. Create 3 variables of different types and output the following string to the console for each of them:
// `Variable: %variable name% have type: %type variable%`

let VariableNumber = 42;
let VariableString = "fucking polar bears)))";
let Variableboolean = false;

console.log(`Variable: VariableNumber have type: ${typeof VariableNumber}`)
console.log('Variable: VariableString have type:', typeof(VariableString))
console.log('Variable: Variableboolean have type:', typeof(Variableboolean))
console.log(`Variable: ${VariableNumber.constructor.name} have type: ${VariableNumber.constructor.name}`);// несколько возможных вариантов


// Task 6. Create variables and assign values to them:Then use the **`typeof`** operator to output all types
// of created variable values to the console.

let str1 = 'true'
let bool2 = false
let num1 = 17
let und1 = undefined
let null1 = null
console.log(typeof str1, typeof bool2, typeof num1, typeof und1, typeof null1)


// Task 7. Two variables are given. > Use the conditions to output the largest number to the developer console.


let height = 15
let width = 20

if(height > width) {
    console.log("The largest number -", height)
} else {console.log("The largest number -", width)}


// Task 8. Write a search from 1 to 20, where all the numbers are multiples of three.
// To calculate the multiplicity, pay attention to the operator %


for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}



// Task 9. Write a program that performs the following operations:

// #######################################################
// версия с консольным вводом

// let prompt = require('prompt-sync')();
// let ageInput:any = prompt("How old are you? ");
// let age:number = parseInt(ageInput);

// if (!isNaN(age)) {
//     if (age >= 18) {
//         console.log("Have a beer");
//     } else if (age >= 16 && age < 18) {
//         console.log("You can smoke a cigarette, just don't tell your mother");
//     } else {
//         console.log("Drink a Coke");
//     }
// } else {
//     console.log("Please enter a valid number for your age");
// }
// №№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№


let age = 20

if (age >= 18) {
    console.log("Have a beer");
} else if (age >= 16 && age < 18) {
    console.log("You can smoke a cigarette, just don't tell your mother");
} else {
    console.log("Drink a Coke");
}



// Task 10. Let's write a program for the tourist terminal. 

// #######################################################
// версия с консольным вводом

// let prompt = require('prompt-sync')();
// let destination = prompt("Select destination (south, north, west, east)");

// if (destination === "south") {
//     console.log("You will go to the south and find happiness");
// } else if (destination === "north") {
//     console.log("You will find a lot of money going north");
// } else if (destination === "west") {
//     console.log("You will go to the west and find a faithful friend");
// } else if (destination === "east") {
//     console.log("You will go to the east and become a developer");
// } else {
//     console.log("Incorrect destination. Please try again");
// }

// №№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№

let destination = "east";

if (destination === "south") {
    console.log("You will go to the south and find happiness");
} else if (destination === "north") {
    console.log("You will find a lot of money going north");
} else if (destination === "west") {
    console.log("You will go to the west and find a faithful friend");
} else if (destination === "east") {
    console.log("You will go to the east and become a developer");
} else {
    console.log("Incorrect destination. Please try again");
}