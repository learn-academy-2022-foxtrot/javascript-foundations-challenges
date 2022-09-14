// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.


describe("areTired", () => {
    it("returns 'drink coffee' if you are tired and 'keep working' if you are not tired.", () => {
        expect(areTired("yes")).toEqual("drink coffee")
        expect(areTired("no")).toEqual("keep working")
    })
})
// Good failure- output: ReferenceError: exportAllDeclaration is not defined

const areTired = (string) => {
    if(string === "yes") {
        return "drink coffee"
    } else if(string === "no") {
        return "keep working"
    } else {
        return "error"
    }
}
// output: pass

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.

describe("ifStressed", () => {
    it("returns 'relax' if you are stressed and 'keep going' if you are not stressed.", () => {
        expect(ifStressed("yes")).toEqual("relax")
        expect(ifStressed("no")).toEqual("keep going")
    })
})
//output: Good failure "ReferenceError: ifStressed is not defined"

const ifStressed = (string) => {
    if(string === "yes") {
        return "relax"
    } else if(string === "no") {
        return "keep going"
    } else {
        return "error"
    }
}
//output: pass

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.

describe("inBudget", () => {
    it("returns 'in budget' if a price is lower than $300.", () => {
        expect(inBudget(299)).toEqual("in budget")
        expect(inBudget(301)).toEqual("not in budget")
    })
})
//Output - good error: ReferenceError: inBudget is not defined

const inBudget = (value) => {
    if(value < 300) {
        return "in budget"
    } else if(value >= 300) {
        return "not in budget"
    } else {
        return "error"
    }
}

//output: pass 
// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.

describe("smallNum", () => {
    it("takes in two numbers and returns the smaller number", () => {
        expect(smallNum(10,5)).toEqual(5)
       
    })
})
//output: good error smallNum is not defined

const smallNum = (num1, num2) => {
    if(num1 >= num2) {
        return num2
    } else {
        return num1
    }
    }

//output: pass

// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.

describe("oddNum", () => {
    it("that takes in one numbers and returns whether the number is odd" , () => {
        expect(oddNum(5)).toEqual("odd")
    })
})
//output: oddNums not defined good error

const oddNum = (number) => {
    if(number % 2 !== 0) {
        return "odd"
    } else {
        return "even"
    }
}
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.
