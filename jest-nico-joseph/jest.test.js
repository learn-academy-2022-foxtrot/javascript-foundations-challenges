// 💻 Challenges
// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

//Input: String dataType (yes or no)
//Output: Returns a response of "drink coffee" Or "keep working"
describe("doYouNeedCoffee", () => {
    it("Returns a response of 'drink coffee' or 'keep working'.", () => {
        expect(doYouNeedCoffee('yes')).toEqual('drink coffee')
        expect(doYouNeedCoffee('no')).toEqual('keep working')
    })
})


// Create the function that will make the test pass.
const doYouNeedCoffee = (string) => {
    if (string.toLowerCase() === 'yes') {
        return 'drink coffee'
    }
    else if (string.toLowerCase() === 'no') {
        return 'keep working'
    }
    else {
        return 'Give me a yes or no answer'
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

//Input: String dataType (yes or no)
//Output: Returns a response of 'relax' or 'keep going'
describe("areYouStressed", () => {
    it("Returns a response of 'relax' or 'keep going'.", () => {
        expect(areYouStressed('yes')).toEqual('relax')
        expect(areYouStressed('no')).toEqual('keep going')
    })
})

// Create the function that will make the test pass.
const areYouStressed = (string) => {
    if (string.toLowerCase() === 'yes') {
        return 'relax'
    }
    else if (string.toLowerCase() === 'no') {
        return 'keep going'
    }
    else {
        return 'Give me a yes or no answer'
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.

//Input: Number dataType
//Output: Returns a response of 'in budget' or 'out of budget'
describe("withinBudget", () => {
    it("Returns a response of 'in budget' or 'out of budget'.", () => {
        let cheap = 299
        let expensive = 300
        expect(withinBudget(cheap)).toEqual('in budget')
        expect(withinBudget(expensive)).toEqual('out of budget')
    })
})

// Create the function that will make the test pass.
const withinBudget = (num) => {
    if (num < 300) {
        return 'in budget'
    }
    else if (num >= 300) {
        return 'out of budget'
    }
    else {
        return 'Give me a dollar cost of item'
    }
}


// Write the test for a function that takes in two numbers and returns the smaller number.

//Input: Number dataType
//Output: Returns the smaller number
describe("findSmallerNum", () => {
    it("Returns the smaller number", () => {
        //First pair of test numbers to test (5, 10) --> 5 being smallest num
        let test1Num1 = 5
        let test1Num2 = 10
        //Second pair of test numbers to test (12, 3) --> 3 being smallest num
        let test2Num1 = 12
        let test2Num2 = 3
        expect(findSmallerNum(test1Num1, test1Num2)).toEqual('Num1 is the smallest')
        expect(findSmallerNum(test2Num1, test2Num2)).toEqual('Num2 is the smallest')
    })
})

// Create the function that will make the test pass.
const findSmallerNum = (num1, num2) => {
    if (num1 < num2) {
        console.log(num1 < num2)
        return 'Num1 is the smallest'
    }
    else if (num1 > num2) {
        return 'Num2 is the smallest'
    }
    else {
        return 'Please give 2 valid numbers and try again'
    }
}

// Write the test for a function that takes in one numbers and returns whether the number is odd or the number is not odd

//Input: Boolean dataType
//Output: Returns a response of the number is odd
describe("isOdd", () => {
    let oddNum = 3
    let evenNum = 2
    it("Returns a response of the number is odd or the number is not odd", () => {
        expect(isOdd(oddNum)).toEqual('The number is odd')
        expect(isOdd(evenNum)).toEqual('The number is not odd')
    })
})

// Create the function that will make the test pass.
const isOdd = (num) => {
    if (num % 2 === 1) {
        return 'The number is odd'
    }
    else if (num % 2 === 0) {
        return 'The number is not odd'
    }
    else {
        return 'Please give a valid number and try again'
    }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

//Input: String dataType ('banana', 'red', 'purple')
//Output: Returns a response of 'yellow' for banana, 'red' for apple, and 'purple' for grape.
describe("fruitColor", () => {
    it("Returns a response of 'yellow' for banana, 'red' for apple, and 'purple' for grape.", () => {
        expect(fruitColor('banana')).toEqual('is yellow')
        expect(fruitColor('apple')).toEqual('is red')
        expect(fruitColor('grape')).toEqual('is purple')
    })
})

// Create the function that will make the test pass.
const fruitColor = (fruit) => {
    if (fruit === 'banana') {
        return 'is yellow'
    }
    else if (fruit === 'apple') {
        return 'is red'
    }
    else if (fruit === 'grape') {
        return 'is purple'
    }
    else {
        return 'Please input a different fruit'
    }
}

// Write the test for a function called rick that returns "Morty".

//Input: None
//Output: Returns the response 'Morty'
describe("rick", () => {
    it("Returns the response 'Morty'.", () => {
        expect(rick('rick')).toEqual('Morty')
    })
})

// Create the function that will make the test pass.
const rick = (name) => {
    if (name.toLowerCase() === 'rick') {
        return 'Morty'
    }
    else {
        return 'Please insert the correct character name'
    }
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

//Input: String dataType (user name)
//Output: Returns a greeting with the user's name
describe("greeter", () => {
    it("Returns a greeting with the user's name", () => {
        let userName = 'Bob'
        expect(greeter(userName)).toEqual(`Hello ${userName}. Have a wonderful day!`)
    })
})

// Create the function that will make the test pass.
const greeter = (name) => {
    return `Hello ${name}. Have a wonderful day!`
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

//Input: Number dataType
//Output: Returns a response of is an Even Number or is an Odd Number
describe("oddOrEven", () => {
    it("Returns a response of is an Even Number or is an Odd Number", () => {
        let oddNum = 3
        let evenNum = 2
        expect(oddOrEven(oddNum)).toEqual(`${oddNum} is an odd number`)
        expect(oddOrEven(evenNum)).toEqual(`${evenNum} is an even number`)
    })
})

// Create the function that will make the test pass.
const oddOrEven = (num) => {
    if (num % 2 === 1) {
        return `${num} is an odd number`
    }
    else if (num % 2 === 0) {
        return `${num} is an even number`
    }
    else {
        return 'Please provide a valid number'
    }
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

//Input: Number dataType
//Output: Returns the input number * 2
describe("doubler", () => {
    it("Returns the input number * 2", () => {
        let num = 25
        expect(doubler(num)).toEqual(num * 2)
    })
})

// Create the function that will make the test pass.
const doubler = (num) => {
    return num * 2
}

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

//Input: 2 nums
//Output: Returns the response of num1 * num2
describe("multiply", () => {
    it("Returns the response of num1 * num2", () => {
        let num1 = 2
        let num2 = 5
        expect(multiply(num1, num2)).toEqual(num1 * num2)
    })
})

// Create the function that will make the test pass.
const multiply = (num1, num2) => {
    return num1 * num2
}

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

//Input: 2 nums
//Output: Returns a string response if num1 is evenly divisible by num2
describe ("divisibleBy", () => {
    it("Returns a string response if num1 is evenly divisible by num2", () => {
        //2 variables to test if num1 is divisible (num1%num2) by num2 evenly
        let test1Num1 = 10
        let test1Num2 = 5
        //2 variables to test if num1 is NOT divisible (num1%num2) by num2 evenly
        let test2Num1 = 11
        let test2Num2 = 2
        expect(divisibleBy(test1Num1, test1Num2)).toEqual(`${test1Num1} is evenly divisible by ${test1Num2}`)
        expect(divisibleBy(test2Num1, test2Num2)).toEqual(`${test2Num1} is NOT evenly divisible by ${test2Num2}`)
    })
})

// Create the function that will make the test pass.
const divisibleBy = (num1, num2) => {
    if (num1 % num2 === 0) {
        return `${num1} is evenly divisible by ${num2}`
    }
    else if (num1 % num2 !== 0) {
        return `${num1} is NOT evenly divisible by ${num2}`
    }
}

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".

//Input: Number dataType
//Output: Returns a response of 'fizz' if num is multiple of 3, 'buzz' if num is multiple of 5, and 'fizzbuzz' if num is multiple of 3 and 5
describe ("fizzbuzz", () => {
    it("Returns a response of 'fizz' if num is multiple of 3, 'buzz' if num is multiple of 5, and 'fizzbuzz' if num is multiple of 3 and 5", () => {
        let num1 = 6    //num to test divisible by 3
        let num2 = 10   //num to test divisible by 5
        let num3 = 15   //num to test divisible by 3 and 5
        expect(fizzbuzz(num1)).toEqual('fizz')
        expect(fizzbuzz(num2)).toEqual('buzz')
        expect(fizzbuzz(num3)).toEqual('fizzbuzz')
    })
})

// Create the function that will make the test pass.
const fizzbuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz'
    }
    else if (num % 3 === 0) {
        return 'fizz'
    }
    else if (num % 5 === 0) {
        return 'buzz'
    }
    else {
        return 'Please input a valid number and try again'
    }
}