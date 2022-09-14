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

describe("fruitColor", () => {
  it("takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape.", () => {
    expect(fruitColor("banana")).toEqual("yellow");
    expect(fruitColor("apple")).toEqual("red");
    expect(fruitColor("grape")).toEqual("purple");
  });
});

//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------
// create the function that will make the test pass
const fruitColor = (fruit) => {
  if (fruit === "banana") {
    return "yellow";
  } else if (fruit === "apple") {
    return "red";
  } else {
    return "purple";
  }
};

//==============================================================================
//==============================================================================
// 7. Write the test for a function called `rick` that returns "Morty".
//==============================================================================

describe("rick", () => {
  it("returns 'Morty'", () => {
    expect(rick()).toEqual("Morty");
  });
});

//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------

// create function that will pass test
const rick = () => {
  // return "Morty"
  return "Morty";
};

//==============================================================================
// 8. Write the test for a function called `greeter` that takes a name as an
// argument and returns a greeting with that name to the screen.
//==============================================================================

describe("greeter", () => {
  it("takes a name as an argument and returns a greeting with that name to the screen.", () => {
    expect(greeter("Jeremy")).toEqual("Hello Jeremy!");
    expect(greeter("Goran")).toEqual("Hello Goran!");
  });
});

//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
const greeter = (name) => {
  // return greeting with input name
  return `Hello ${name}!`;
};

//==============================================================================
//==============================================================================
// 9. Write the test for a function called `oddOrEven` that takes a number as an
// argument and logs whether the number is odd or even.
//==============================================================================

describe("oddOrEven", () => {
  it("returns whether the number is odd or even.", () => {
    expect(oddOrEven(33)).toEqual("odd");
    expect(oddOrEven(20)).toEqual("even");
  });
});

//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------

//create functions that will make the test pass
const oddOrEven = (number) => {
  // if the number is odd
  if (number % 2 !== 0) {
    // return "odd"
    return "odd";
    // else return even
  } else {
    return "even";
  }
};

//==============================================================================
//==============================================================================
// 10. Write the test for a function called `doubler` that takes a number and
// returns the result of the number multiplied by 2.
//==============================================================================

describe("doubler", () => {
  it("takes a number and returns the result of the number multiplied by 2.", () => {
    expect(doubler(33)).toEqual(66);
    expect(doubler(1)).toEqual(2);
  });
});

//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------

//create functions that will make the test pass
const doubler = (number) => {
  // multiply number by 2
  return number * 2;
};

//==============================================================================
//==============================================================================
// 11. Write the test for a function called `multiply` that takes two numbers as
// arguments and logs the result of one of the numbers multiplied by the other.
//==============================================================================

describe("multiply", () => {
  it("takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.", () => {
    expect(multiply(2, 3)).toEqual(6);
    expect(multiply(12, 4)).toEqual(48);
  });
});

//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
const multiply = (num1, num2) => {
  // multiply num1 by num2
  return num1 * num2;
};

//==============================================================================
//==============================================================================
// 12. Write the test for a function called `divisibleBy` that takes two numbers
// as arguments and returns whether the first number is evenly divisible by the
// second so that `divisibleBy(10, 5)` logs "10 is evenly divisible by 5".
//==============================================================================

describe("divisibleBy", () => {
  it("returns whether the first number is evenly divisible by the second", () => {
    expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5");
    expect(divisibleBy(4, 3)).toEqual("4 is NOT evenly divisible by 3");
    expect(divisibleBy(3, 5)).toEqual(undefined);
  });
});

//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
const divisibleBy = (num1, num2) => {
  // number one is greater than number two then proceed
  if (num1 > num2) {
    // if num1 is evenly divisible by num2 then..
    if (num1 % num2 === 0) {
      // return that its evenly divisible by number 2
      return `${num1} is evenly divisible by ${num2}`;
      // else return that it is NOT evenly divisible by number2
    } else {
      return `${num1} is NOT evenly divisible by ${num2}`;
    }
  }
};

//==============================================================================
//==============================================================================
// 13. Write the test for a function called `fizzbuzz`. If a number is a
// multiple of 3, replace it with the word "fizz". If a number is a multiple of
// five, replace it with the word "buzz". If a number is a multiple of both 3
// and 5, replace it with "fizzbuzz".
//==============================================================================

describe("fizzbuzz", () => {
  it("return 'fizz', 'buzz', or 'fizzbuzz' depending on the number", () => {
    expect(fizzbuzz(3)).toEqual("fizz");
    expect(fizzbuzz(15)).toEqual("fizzbuzz");
    expect(fizzbuzz(10)).toEqual("buzz");
  });
});

//------------------------------------------------------------------------------
// * Create the function that will make the test pass.
//------------------------------------------------------------------------------
//   * Create the function that will make the test pass.
const fizzbuzz = (number) => {
  // if the number is divisible by three and 5 then then...
  if (number % 5 === 0 && number % 3 === 0) {
    // return 'fizzbuzz'
    return "fizzbuzz";
    //else if the number is divisible by five then...
  } else if (number % 5 === 0) {
    //return 'buzz'
    return "buzz";
    // else if the number is divisible by three then...
  } else if (number % 3 === 0) {
    //return 'fizz'
    return "fizz";
  }
};

//==============================================================================
