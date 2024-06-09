// Task 1 . An array is given. Output its length to the console.


    const colors = ['red', 'green', 'blue']

    console.log(colors.length)


// Task 2. An array is given. Output its last element to the console, regardless of its length.
    
     const animals = ['monkey', 'dog', 'cat']

     console.log(animals[animals.length - 1])


// Task 3. An array is given. 
// + Delete the last element of the array, then add the student `Borya` to the array instead.
// + Delete the first element of the array, then add the student `Andrey` to the array instead.
// + Do not forget to output the result to the console.
   
    
    const students = ['Polina', 'Dasha', 'Masha']

    students.pop()
    students.push('Borya')
    students.shift()
    students.unshift('Andrey')
    console.log(students)


// Task 4. An array is given. Output all the array elements to the console. First through the loop **`for`**, then **`for of`**.

    
    const cats = ['Gachito', 'Tom', 'Batman']
    
    for (let i=0; i < cats.length; i++) { 
        console.log(cats[i]) 
        }

    for (const iterator of cats) { 
            console.log(iterator) 
         }


// Task 5. Connect two arrays of numbers into one. In the resulting array, try to find the index of the number **`8`**

    const evenNumbers = [2, 4, 6, 8, 10]
    const oddNumbers = [1, 3, 5, 7, 9]
     
    const mergedArray = evenNumbers.concat(oddNumbers)

    console.log(mergedArray)
     
    console.log(mergedArray.indexOf(8))
    

// Task 6. Output all the array elements to the console using the **`forEach` method**
    

    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
    
    fibonacci.forEach(function(arrElements) {
        console.log(arrElements);
    })


// Task 7. Using the **`map`** method, create a new array based on the **`users`** array, in which each element
// of the array will contain a string of the form: ['member 1: Darya', 'member 2: Masha', ... etc]
       
    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
    
    const newUsers = users.map(function(user, index) {
        return `member ${index + 1}: ${user}`
    });
    
    console.log(newUsers)


// Task 8. Using the **`filter`** method, create a new array that will not contain negative numbers.
    
    const numbers = [7, -4, 32, -90, 54, 32, -21]
    
    const noMinusNumbers = numbers.filter(function(number) {
        return number >= 0
    })
    
    console.log(noMinusNumbers)


// Task 9. Using the **`reduce`** method, get the sum of all the numbers in the array.
    
    const fibonacciNew = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
    
    const sum = fibonacciNew.reduce(function(element, accum) { 
        return element + accum 
    }) 

    console.log(sum)


// Task 10. Using the **`find`** method, find the first even number in the array.
    
    const num = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

    const evenNuber = num.find(function(number) {
        return number % 2 === 0;
    })
    
    console.log(evenNuber)
    

// Task 11. Using the **`some`** method, check if there is an element in the array that is a multiple of 3 and 5.

    const multipleOf3And5 = num.some(function(number) {
        return number % 3 === 0 && number % 5 === 0
    })
    
    console.log(multipleOf3And5)