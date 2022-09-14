// ### 💻 Challenges

// **Process**: Write the test FIRST. Ensure the test fails correctly. Then
// write the code that will make the test pass.

// **Note**: You do not need to comment out the old tests or functions. The
// purpose of tests are to be AUTOMATED. Commenting them out defeats that
// purpose.

//==============================================================================
//==============================================================================
// 1.  Write the test for a function that returns "drink coffee" if you are
// tired and "keep working" if you are not tired.
//==============================================================================
describe("areYouTired", () => {
  it(" returns 'drink coffee' if you are tired and 'keep working' if you are not tired.", () => {
    expect(areYouTired("yes")).toEqual("drink coffee");
    expect(areYouTired("no")).toEqual("keep working");
  });
});

//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------

// create function that will be tested
const areYouTired = (answer) => {
  // if answer is yes then..
  if (answer.toLowerCase() === "yes") {
    // "drink coffee"
    return "drink coffee";
    // else if answer is no then..
  } else if (answer.toLowerCase() === "no") {
    // "keep working"
    return "keep working";
    // else
  } else {
    // error
    return "Error, wrong input";
  }
};

//==============================================================================
//==============================================================================
// 2.  Write the test for a function that returns "relax" if you are stressed
// and "keep going" if you are not stressed.
//==============================================================================
describe("areYouStressed", () => {
  it("returns 'relax' if you are stressed and 'keep going' if you are not stressed.", () => {
    expect(areYouStressed("yes")).toEqual("relax");
    expect(areYouStressed("no")).toEqual("keep going");
  });
});

//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------

// create function that will be tested
const areYouStressed = (answer) => {
  // if answer is yes then..
  if (answer.toLowerCase() === "yes") {
    // "relax"
    return "relax";
    // else if answer is no then..
  } else if (answer.toLowerCase() === "no") {
    // "keep going"
    return "keep going";
    // else
  } else {
    // error
    return "Error, wrong input";
  }
};

//==============================================================================
//==============================================================================
// 3. Write the test for a function that returns "in budget" if a price is lower
// than $300.
//==============================================================================

describe("areYouinBudget", () => {
  it("returns 'in budget' if a price is lower than $300.", () => {
    expect(areYouinBudget(100)).toEqual("in budget");
    expect(areYouinBudget(500)).toEqual(null);
  });
});

//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------
// Create the function that will make the test pass
const areYouinBudget = (number) => {
  // if number < $300, then..
  if (number < 300) {
    // "in budget"
    return "in budget";
    // else ..
  } else {
    // return null cd ..
    return null;
  }
};

//==============================================================================
//==============================================================================
// 4. Write the test for a function that takes in two numbers and returns the
// smaller number.
//==============================================================================

describe("smallerNumber", () => {
  it("returns the smaller number.", () => {
    expect(smallerNumber(1, 2)).toEqual(1);
    expect(smallerNumber(55, 65)).toEqual(55);
  });
});

//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------
// Create the function that will make the test pass
const smallerNumber = (num1, num2) => {
  // in number 1 us greeter than number 2..
  if (num1 > num2) {
    // return number 2
    return num2;
    // else return number 1
  } else {
    return num1;
  }
};

//==============================================================================
//==============================================================================
// 5. Write the test for a function that takes in one numbers and returns
// whether the number is odd.
//==============================================================================

describe("oddNumber", () => {
  it("returns whether the number is odd.", () => {
    expect(oddNumber(33)).toEqual("odd");
    expect(oddNumber(20)).toEqual(null);
  });
});

//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------

//create functions that will make the test pass
const oddNumber = (number) => {
  // if the number is odd
  if (number % 2 !== 0) {
    // return "odd"
    return "odd";
    // else return null
  } else {
    return null;
  }
};

//==============================================================================
//==============================================================================
// 6. Write the test for a function that takes in a fruit and returns "yellow"
// if the argument is banana, "red" if apple and "purple" if grape.
//==============================================================================
// describe("testName", () => {
//   it("describe the test", () => {
//     expect(function(inputVariable1)).toEqual("expected result 1")
//     expect(function(inputVariable2)).toEqual("expected result 3")
//   })
// })
//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------

//==============================================================================
//==============================================================================
// 7. Write the test for a function called `rick` that returns "Morty".
//==============================================================================
// describe("testName", () => {
//   it("describe the test", () => {
//     expect(function(inputVariable1)).toEqual("expected result 1")
//     expect(function(inputVariable2)).toEqual("expected result 3")
//   })
// })
//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------

//==============================================================================
// 8. Write the test for a function called `greeter` that takes a name as an
// argument and returns a greeting with that name to the screen.
//==============================================================================
// describe("testName", () => {
//   it("describe the test", () => {
//     expect(function(inputVariable1)).toEqual("expected result 1")
//     expect(function(inputVariable2)).toEqual("expected result 3")
//   })
// })
//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------

//==============================================================================
//==============================================================================
// 9. Write the test for a function called `oddOrEven` that takes a number as an
// argument and logs whether the number is odd or even.
//==============================================================================
// describe("testName", () => {
//   it("describe the test", () => {
//     expect(function(inputVariable1)).toEqual("expected result 1")
//     expect(function(inputVariable2)).toEqual("expected result 3")
//   })
// })
//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------

//==============================================================================
//==============================================================================
// 10. Write the test for a function called `doubler` that takes a number and
// returns the result of the number multiplied by 2.
//==============================================================================
// describe("testName", () => {
//   it("describe the test", () => {
//     expect(function(inputVariable1)).toEqual("expected result 1")
//     expect(function(inputVariable2)).toEqual("expected result 3")
//   })
// })
//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------

//==============================================================================
//==============================================================================
// 11. Write the test for a function called `multiply` that takes two numbers as
// arguments and logs the result of one of the numbers multiplied by the other.
//==============================================================================
// describe("testName", () => {
//   it("describe the test", () => {
//     expect(function(inputVariable1)).toEqual("expected result 1")
//     expect(function(inputVariable2)).toEqual("expected result 3")
//   })
// })
//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------

//==============================================================================
//==============================================================================
// 12. Write the test for a function called `divisibleBy` that takes two numbers
// as arguments and returns whether the first number is evenly divisible by the
// second so that `divisibleBy(10, 5)` logs "10 is evenly divisible by 5".
//==============================================================================
// describe("testName", () => {
//   it("describe the test", () => {
//     expect(function(inputVariable1)).toEqual("expected result 1")
//     expect(function(inputVariable2)).toEqual("expected result 3")
//   })
// })
//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------

//==============================================================================
//==============================================================================
// 13. Write the test for a function called `fizzbuzz`. If a number is a
// multiple of 3, replace it with the word "fizz". If a number is a multiple of
// five, replace it with the word "buzz". If a number is a multiple of both 3
// and 5, replace it with "fizzbuzz".
//==============================================================================
// describe("testName", () => {
//   it("describe the test", () => {
//     expect(function(inputVariable1)).toEqual("expected result 1")
//     expect(function(inputVariable2)).toEqual("expected result 3")
//   })
// })
//------------------------------------------------------------------------------
// * Create the function that will make the test pass.
//------------------------------------------------------------------------------

//==============================================================================
