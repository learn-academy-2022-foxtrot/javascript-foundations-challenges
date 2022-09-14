// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

//input 1: "tired"
//output 1: "drink coffee"
// input 2: "not tired"
// output 2: "keep working"

// Pseudocode
// create a function called coffeeDrinker that returns "drink coffee" if you are tired and "keep working" if you are not tired.
    // one parameter: "string"
    // Write a conditional to evaluate if string equals "tired"
        // return "drink coffee"
    // Otherwise evaluate if string equals "not tired"
        // return "keep working"
    
        describe("coffeeDrinker", () => {
            it("returns 'drink coffee' if you are tired and 'keep working' if you are not tired.", () => {
              expect(coffeeDrinker("tired")).toEqual("drink coffee")
              expect(coffeeDrinker("not tired")).toEqual("keep working")

            })
          })

        // GOOD FAIL! Yay!

        // const coffeeDrinker = (string) => {
        //     if(string === "tired") {
        //         return "drink coffee"
        //     } else if(string === "not tired") {
        //         return "keep working"
        //     } else {
        //         return "oops"
        //     }
        // }
        
        // Create the function that will make the test pass.

        const coffeeDrinker = (string) => {
            if(string === "tired") {
                return "drink coffee"
            } else if(string === "not tired") {
                return "keep working"
            } else {
                return "oops"
            }
        }


        
        // Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

            // Input 1: "stressed"
            // Output 1: "relax"
            // Input 2: "not stressed"
            // Output 2: "keep going"

            // Pseudocode: 
            // Create function called areYouStressed that returns "relax" if you are stressed and "keep going" if you are not stressed.
            // Write a conditional to evaluate if string equals "stressed"
                // return "relax"
            // Otherwise evaluate if string equals "not stressed"
                // return "keep going"

            describe("areYouStressed", (string) => {
                it("returns 'relax' if you are stressed and 'keep going' if you are not stressed.", () => {
                expect(areYouStressed("stressed")).toEqual("relax")
                expect(areYouStressed("not stressed")).toEqual("keep going")
                })
            })

            // GOOD FAIL! YAY!

        // Create the function that will make the test pass.

            const areYouStressed = (string) => {
                if(string === "stressed") {
                    return "relax"
                } else if(string === "not stressed") {
                    return "keep going"
                } else {
                    return "oops"
                }
            }

        // Write the test for a function that returns "in budget" if a price is lower than $300.

            // Input 1: # < 300
            // Output 1: "in budget"
            // Input 2: # > 300
            // Output 2: "not in budget"

            // Pseudocode:
            // Create a function called budget that takes in a value as an argument  that returns "in budget" if a price is lower than $300.
                // one parameter: value
                // Write a conditional to evaluate if value is lower than 300
                    // return "in budget"
                // Otherwise evaluate if value equals greater than or equal to 300
                    // return "not in budget"

                describe("budget", (value) => {
                    it("that returns 'in budget' if a price is lower than $300", () => {
                      expect(budget(250)).toEqual("in budget")
                      expect(budget(350)).toEqual("not in budget")
                    })
                  })                   

        // Create the function that will make the test pass.

                const budget = (value) => {
                    if(value < 300) {
                        return "in budget"
                    } else if(value >= 300) {
                        return "not in budget"
                    } else {
                        return "oops"
                    }
                }



        // Write the test for a function that takes in two numbers and returns the smaller number.
       

            //input 1: 3, 7
            //output 1: 3
            // input 2: 100, 5
            // output 2: 5

            // Pseudocode
            // create a function called smallerNumber that takes in two numbers and returns the smaller number.
                // two parameters: number1, number2
                // Write a conditional to evaluate if number1 is greater than number2 
                    // return number2
                // Otherwise evaluate if number2 is less than number1
                    // return number1
                // Otherwise if number2 equals number1
                    // return "numbers are equal"
                
                    describe("smallerNumber", () => {
                        it("takes in two numbers and returns the smaller number.", () => {
                        expect(smallerNumber(3, 7)).toEqual(3)
                        expect(smallerNumber(100, 5)).toEqual(5)
                        expect(smallerNumber(8, 8)).toEqual("numbers are equal")
                        })
                    })


         // Create the function that will make the test pass.

        const smallerNumber = (num1, num2) => {
            if(num1 > num2) {
                return num2
            } else if(num2 > num1) {
                return num1
            } else if(num1 === num2) {
                return "numbers are equal"
            } else {
                return "oops"
            }
        }


        // Write the test for a function that takes in one numbers and returns whether the number is odd.
                    
            //input 1: 3
            //output 1: "odd"
            // input 2: 2
            // output 2: "not odd"

            // Pseudocode
            // create a function called isItOdd that takes in one numbers and returns whether the number is odd.
                // one parameter: number
                // Write a conditional to evaluate if number is odd using modulo
                    // return "odd"
                // Otherwise evaluate if number is not odd
                    // return "not odd"
                
                    describe("isItOdd", () => {
                        it("takes in one numbers and returns whether the number is odd.", () => {
                        expect(isItOdd(3)).toEqual("odd")
                        expect(isItOdd(2)).toEqual("not odd")
                        })
                    })
                    
        
        // Create the function that will make the test pass.

        const isItOdd = (number) => {
            if(number % 2 !== 0) {
                return "odd"
            } else {
                return "not odd"
            }
        }


        // Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

        //input 1: "banna"
        //output 1: "yellow"
        // input 2: "apple"
        // output 2: "red"
          // input 3: "grape"
        // output 3: "purple"

        // Pseudocode
        // create a function called fruitCaller that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

            // one parameter: "string"
            // Write a conditional to evaluate if string equals "banana"
                // return "yellow"
            // Otherwise evaluate if string equals "apple"
                // return "red"
            // Otherwise evaluate if string equals "grape"
                // return "purple"
            
                describe("fruitCaller", () => {
                    it("takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape.", () => {
                    expect(fruitCaller("banana")).toEqual("yellow")
                    expect(fruitCaller("apple")).toEqual("red")
                    expect(fruitCaller("grape")).toEqual("purple")
                    })
                })


        // Create the function that will make the test pass.

        const fruitCaller = (string) => {
            if(string === "banana") {
                return "yellow"
            } else if(string === "apple") {
                return "red"
            } else if(string === "grape") {
                return "purple"
            } else {
                return "pick another fruit"
            }

        }


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
        