// Task 1. Write a function **getSum** that will calculate the sum of numbers from zero to the parameter that we pass to it.


function getSum(value: number) {
    let sum = 0
    for (let i = 0; i <= value; i++) {
        sum = sum + i
    }
    return sum
}

console.log(getSum(100))


// Task 2. Write a function **getSumNumbers** that will take a number and calculate the sum of the digits that make up the number.


function getSumNumbers(valueNew: number) {
    let sum = 0
    let numStr = valueNew.toString()
    
    for (let char of numStr) {
        sum = sum + parseInt(char)
    }
    
    return sum
}

console.log(getSumNumbers(2021))


// Task 3. Write a function **`getSum`** that takes two integers a and b, which can be positive or negative,
// find the sum of all the numbers between them, including them, and return it. If two numbers are equal, return a or b.

function getSum2(h:number, p:number) {
    if (h === p) {
        return p
    }
    
    let minValue = Math.min(h, p)
    let maxValue = Math.max(h, p)
    
    let sum = 0
    
    for (let i = minValue; i <= maxValue; i++) {
        sum = sum + i
    }
    
    return sum
}

console.log(getSum2(1, 0))
console.log(getSum2(1, 2))
console.log(getSum2(0, 1))
console.log(getSum2(1, 1))
console.log(getSum2(-1, 0))
console.log(getSum2(-1, 2))


// Task 4. Write a function counting the factorial of a number: the number must be passed as a parameter of the function

function factorial(n:number) {
    let range = 1

    for (let i = 2; i <= n; i++) {
        range = range * i
    }

    return range
}

console.log(factorial(5))
