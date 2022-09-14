// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

/*
------------- TEST TEMPLATE -------------
describe("", () => {
  it(``, () => {
    expect().toEqual()
  })
})
------------- REFERENCE: -------------
// describe("functionName", () => {
//   it("What the function does", () => {
//     expect(functionName(parameter)).toEqual(Expected Output)
//   })
// })
// */

// //------------- PSEUDOCODE TEMPLATE -------------
// /*
// --------- FUNCTION INFORMATION:
// What will the function do:
// Function Name:
// Function Parameter(s):
// --------- INPUT / OUTPUT:
// input 1:
// output 1:

// input 2:
// output 2:
// --------- STEPS:
// Steps:
// 1.
// 2.
// 3.
// 4.
// */

// // 1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// // Create the function that will make the test pass.

// describe("areYouTired", () => {
//   it("returns drink coffee if you are tired and keep working if you are not tired.", () => {
//     let isTired = "yes";
//     let notTired = "no";
//     let result1 = "drink coffee";
//     let result2 = "keep working";
//     expect(areYouTired(isTired)).toEqual(result1);
//     expect(areYouTired(notTired)).toEqual(result2);
//   });
// });

// const areYouTired = (string) => {
//   if (string === "yes") {
//     return "drink coffee";
//   } else if (string === "no") {
//     return "keep working";
//   } else {
//     return "Error";
//   }
// };

// // 2. Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// // Create the function that will make the test pass.

// describe("areYouStressed", () => {
//   it(`returns "relax" if you are stressed and "keep going" if you are not stressed.`, () => {
//     let notStressed = "no";
//     let isStressed = "yes";
//     let result1 = "keep going";
//     let result2 = "relax";
//     expect(areYouStressed(notStressed)).toEqual(result1);
//     expect(areYouStressed(isStressed)).toEqual(result2);
//   });
// });

// const areYouStressed = (string) => {
//   if (string === "yes") {
//     return "relax";
//   } else if (string === "no") {
//     return "keep going";
//   } else {
//     return "Error";
//   }
// };

// // 3. Write the test for a function that returns "in budget" if a price is lower than $300.
// // Create the function that will make the test pass.

// describe("budgetCheck", () => {
//   it(`returns "in budget" if a price is lower than $300.`, () => {
//     let price1 = 200;
//     let price2 = 300;
//     let price3 = 400;
//     result1 = "in budget";
//     result2 = "out of budget";
//     expect(budgetCheck(price1)).toEqual(result1);
//     expect(budgetCheck(price2)).toEqual(result1);
//     expect(budgetCheck(price3)).toEqual(result2);
//   });
// });

// const budgetCheck = (number) => {
//   if (number <= 300) {
//     return "in budget";
//   } else if (number > 300) {
//     return "out of budget";
//   } else {
//     return "Error";
//   }
// };

// // 4. Write the test for a function that takes in two numbers and returns the smaller number.
// // Create the function that will make the test pass.

// describe("smallerNumber", () => {
//   it(`Takes in two numbers and returns the smaller number`, () => {
//     expect(smallerNumber(5, 10)).toEqual("is smaller");
//     expect(smallerNumber(10, 5)).toEqual("is larger");
//     expect(smallerNumber(10, 10)).toEqual("is the same");
//   });
// });

// const smallerNumber = (num1, num2) => {
//   if (num1 > num2) {
//     return "is larger";
//   } else if (num2 > num1) {
//     return "is smaller";
//   } else if (num1 === num2) {
//     return "is the same";
//   } else {
//     return "Error";
//   }
// };

// console.log(smallerNumber(5, 10));

// // 5. Write the test for a function that takes in one numbers and returns whether the number is odd.
// // Create the function that will make the test pass.

// describe("oddFinder", () => {
//   it(`Takes in one number and returns whether the number is odd.`, () => {
//     let number1 = 10;
//     let number2 = 5;
//     let result1 = "even";
//     let result2 = "odd";

//     expect(oddFinder(number1)).toEqual(result1);
//     expect(oddFinder(number2)).toEqual(result2);
//   });
// });

// const oddFinder = (number) => {
//   if (number % 2 !== 0) {
//     return "odd";
//   } else if (number % 2 === 0) {
//     return "even";
//   } else {
//     return "Error";
//   }
// };

// // 6. Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// // Create the function that will make the test pass.

// describe("fruitColor", () => {
//   it(`returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.`, () => {
//     let fruit1 = "banana";
//     let fruit2 = "apple";
//     let fruit3 = "grape";
//     let result1 = "yellow";
//     let result2 = "red";
//     let result3 = "purple";
//     expect(fruitColor(fruit1)).toEqual(result1);
//     expect(fruitColor(fruit2)).toEqual(result2);
//     expect(fruitColor(fruit3)).toEqual(result3);
//   });
// });

// const fruitColor = (fruit) => {
//   if (fruit === "banana") {
//     return "yellow";
//   } else if (fruit === "apple") {
//     return "red";
//   } else if (fruit === "grape") {
//     return "purple";
//   } else {
//     return "No fruit";
//   }
// };

// // 7. Write the test for a function called rick that returns "Morty".
// // Create the function that will make the test pass.

// describe("rick", () => {
//   it(`returns "Morty"`, () => {
//     expect(rick()).toEqual("Morty");
//   });
// });

// const rick = () => {
//   return "Morty";
// };

// // 8. Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// // Create the function that will make the test pass.

// describe("greeting", () => {
//   it(`Takes a name as an argument and returns a greeting with that name to the screen.`, () => {
//     expect(greeting("name")).toEqual(`Greetings, ${"name"}!`);
//   });
// });

// const greeting = (name) => {
//   return `Greetings, ${name}!`;
// };

// // 9. Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// // Create the function that will make the test pass.

// describe("oddOrEven", () => {
//   it(`Takes a number as an argument and logs whether the number is odd or even.`, () => {
//     expect(oddOrEven(10)).toEqual(`${10} is even!`);
//     expect(oddOrEven(7)).toEqual(`${7} is odd!`);
//   });
// });

// const oddOrEven = (number) => {
//   if (number % 2 === 0) {
//     return `${number} is even!`;
//   } else if (number % 2 !== 0) {
//     return `${number} is odd!`;
//   } else {
//     ("Error");
//   }
// };

// 10. Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.

// describe("doubler", () => {
//   it(`Takes a number and returns the result of the number multiplied by 2.`, () => {
//     expect(doubler(2)).toEqual(4);
//   });
// });

// const doubler = (number) => {
//   return number * 2;
// };

// 11. Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.

describe("multiply", () => {
  it(`result of one of the numbers multiplied by the other.`, () => {
    expect(multiply(2, 2)).toEqual(4)
  })
})

const multiply = (number1, number2) => {
  return number1 * number2
}

// 12. Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.

describe("divisibleBy", () => {
  it(`returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".`, () => {
    expect(divisibleBy(10, 2)).toEqual(`${10} is evenly divisble by ${2}`)
    expect(divisibleBy(11, 3)).toEqual(`${11} is not divisble by ${3}`)
  })
})

const divisibleBy = (number1, number2) => {
  if (number1 % number2 === 0) {
    return `${number1} is evenly divisble by ${number2}`
  } else if (number1 % number2 !== 0) {
    return `${number1} is not divisble by ${number2}`
  } else {
    return "Error"
  }
}

// 13. Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.
