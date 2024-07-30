// Task 1. Create any object with two keys and any values in them, and then check if there is a specific key
//  in the object and if there is, output to the console **true*

const Tester = {
    name: 'Vadik',
    experience: '3'
}

console.log('name' in Tester)


// Task 2. The object is given. Using the **for in** loop, output all the keys to the console first, then the values of the object's keys. 

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for(const key in student) {
    console.log(key)
}

for(const key in student) {
    console.log(student[key])
}


// Task 3. The object is given. Print the word red and blue to the console


const colors = {
    'ru pum pu ru rum': {
        red: 'red',
        green: 'green',
        blue: 'blue'
    },
}

console.log(colors['ru pum pu ru rum'].red) 
console.log(colors['ru pum pu ru rum'].blue)


// Task 4. The object is given. Calculate the average salary of employees and put the result in the appropriate variable


    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        alexandra: 199
    }

    let Salary = 0;
    for (let key in salaries) {
        Salary += salaries[key]
    }
    
    let averageSalary = Salary / 4
    
    console.log("Average salary is", averageSalary);
    