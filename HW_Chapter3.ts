// Task 1. The user passes his last name and first name through the variable. Print the greeting `Hello <First name> <Last Name>`

import { parse } from "path"


let firstName = "Dmitry"
let lastName = "Verbalovich"

console.log(`Hello ${firstName} ${lastName}`)

console.log("Hello ".concat(firstName, " ", lastName))

let greeting = "Hello ".concat(firstName, " ", lastName)

console.log(greeting)



// Task 2. The string 'I'm learning typescript!' is given. Check if the given word is in the string: if there is,
// print the position of the substring 'I'm learning', if not, print the string `There is no given substring`


let string = "I'm learning typescript!"
let substring = "I'm learning"
let substringPosition = string.indexOf(substring)
if (substringPosition !== -1) {
    console.log(`The position of the substring '${substring}' is ${substringPosition}`)
} else {
    console.log("There is no given substring")
}

// Task 3. An arbitrary string is given. Implement a method that checks whether a sentence ends with a dot or not.
// If it ends, print the sentence - `This sentence is finished`, if not, then `There is a missing dot at the end of the sentence`

let arbitraryString = "Why the fuck is there a full stop missing"
if (arbitraryString.endsWith(".")) {
    console.log(`This sentence is finished`)
} else {
console.log(`There is a missing dot at the end of the sentence`)
}


// Task 4. The string 'I'm learning typescript!' is given. Cut out the word 'I'm learning' and the word 'typescript'
// from it in different ways (via substring, slice).

// let string = "I'm learning typescript!"

console.log(string.substring(0, 13))
console.log(string.substring(14))

console.log(string.slice(0, 13))
console.log(string.slice(13))

// Не понял разницы, пробавал и так и сяк, работают одинаково


// Task 5. The string 'I'm learning typescript!' is given. Use the split method to write each word of this string into
// a separate element of the array.

console.log(string.split(" "))

let newArray = (string.split(" "))
console.log(newArray)


// Task 6. The string is given '                I'm learning typescript!                '. Print a line without leading
// and spaces at the end of the line.

let string2 = "              I'm learning typescript!                "
console.log(string2.trim())


// Task 7. An arbitrary number is given. Implement a method that raises a number to a power.
// The degree of elevation is specified as a parameter to the method.

let number3 = 5
console.log(Math.pow(number3, 2))


// Task 8. Implement a method for obtaining a random integer in a given range.

const randomInteger = Math.round(Math.random() * 51)
console.log(randomInteger)



// Task 9.  Print the date of today in the format: "current date: month/year/day.
// The current time is the clock:minutes:seconds.". Use only internal Date methods.


const now = new Date()

const month = now.getMonth() + 1
const year = now.getFullYear()
const day = now.getDate()

const hours = now.getHours()
const minutes = now.getMinutes()
const seconds = now.getSeconds()



const result = `current date: ${month}/${year}/${day}. The current time is the ${hours}:${minutes}:${seconds}`

console.log(result)