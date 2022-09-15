// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.

describe("coffee", (string) => {
    it("returns drink coffee if you are tired and keep working if you are not tired", () => {
        expect(coffee("tired")).toEqual("drink coffee")
        expect(coffee("not tired")).toEqual("keep working")
    })
})
const coffee = (string) => {
    if (string === "tired") {
        return "drink coffee"
    }
    else if (string === "not tired") {
        return "keep working"
    } else {
        return "error"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("rest", (string) => {
    it("function that returns relax if you are stressed and keep going if you are not stressed", () => {
        expect(rest("stressed")).toEqual("relax")
        expect(rest("not stressed")).toEqual("keep going")
    })
})
const rest = (string) => {
    if (string === "stressed") {
        return "relax"
    }
    else if (string === "not stressed") {
        return "keep going"
    } else {
        return "error"
    }
}
// Create the function that will make the test pass.
// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.

describe("finance", () => {

    it("returns in budget if a price is lower than 300$", () => {
        const price1 = 200
        const price2 = 305
        const price3 = 300
        expect(finance(price1)).toEqual("in budget")
        expect(finance(price2)).toEqual("not in budget")
        expect(finance(price3)).toEqual("not in budget")

    })
})

const finance = (price) => {

    if (price < 300) {
        return "in budget"
    }
    else if (price >= 300) {
        return "not in budget"
    }
    else {
        return "bankrupt"
    }

}


// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.

describe("smallNum", () => {
    it("function that returns smaller number of the two", () => {
        const num1 = 0
        const num2 = 7

        const num3 = 33
        const num4 = 4
        expect(smallNum(num1,num2)).toEqual(num1)
        // expect would be like console.log and toEqual would be the terminal output we know the outcome would be true
        expect(smallNum(num3, num4)).toEqual(num4 )
    })
})

const smallNum = (num1, num2) => {
    if (num1>num2) {
        return num2
    }
    else if (num1<num2) {
        return num1
    } else {
        return "error"
    }
}


// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.

describe("oddCheck",() => {
    it("function that checks for odd numbers", () => {
        const num1 =2
        const num2 =7

      expect(oddCheck(num2)).toEqual("odd")
      expect(oddCheck(num1)).toEqual("even")
    })
  })
  const oddCheck = (num0) => {
    if(num0 % 2 !== 0) {
        return "odd"
    }
    else if(num0 % 2 === 0) {
        return "even"
    } else {
        return "error"
    }
  }

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.



// describe("coffee", () => {
//     it("returns a generic greeting", () => {
//       expect(greeter()).toEqual("Hello, LEARN student!")
//     })
//   })