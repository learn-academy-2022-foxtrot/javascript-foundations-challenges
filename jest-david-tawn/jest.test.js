// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// Pseudocode

describe("areYouTired", () => {
  it("returns 'drink coffee' if you are tired or 'keep working' if you are not tired", () => {
    expect(areYouTired("yes")).toEqual("drink coffee")
    expect(areYouTired("no")).toEqual("keep working")
  })
  })


// Create the function that will make the test pass.

// Pseudocode

const areYouTired = (string) => {
  if(string === "yes") {
    return "drink coffee"
  } else if(string === "no") {
    return "keep working"
  } else {
    return "something went wrong"
  }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// 1. describe "areYouStressed" and map function structure.
// 2. it returns "'relax' if you are stressed, 'keep going' if you are not stressed"
// 3. write out expect outcomes
// 4. run in terminal, $ yarn jest

describe("areYouStressed", () => {
  it("returns 'relax' if you are stressed, 'keep going' if you are not stressed", () => {
    expect(areYouStressed("yes")).toEqual("relax")
    expect(areYouStressed("no")).toEqual("keep going")
  })
})
// ReferenceError: areYouStressed is not defined

// Create the function that will make the test pass.
  // 1. Declare a function areYouStressed a string and structure function.
  // 2. use if/else if conditional statements to determine if string is strictly yes or no and return a cooresponding outcome.
  // 3. retes, $ yarn jest

const areYouStressed = (string) => {
  if(string === "yes") {
    return "relax"
  } else if(string === "no") {
    return "keep going"
  } else {
    return "you're brokeneth"
  }
}
//  PASS  ./jest.test.js


// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("inBudget", () => {
  it("returns 'it is in budget' if it is less that $300 , 'not in budget' if it is greater than $300", () => {
    expect(inBudget(300)).toEqual("it is in budget")
    expect(inBudget(301)).toEqual("not in budget")
  })
})

// Create the function that will make the test pass.

const inBudget = (number) => {
  if(number <= 300) {
    return "it is in budget"
  } else if(number > 300) {
    return "not in budget"
  } else {
    return "you're brokeneth"
  }
}


// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.
// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.
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
