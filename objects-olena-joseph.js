// Consider this variable:

// const person = {
//   firstName: "Arthur",
//   lastName: "Dent"
// }
// Write the code that accesses the first name of the person object.
//console.log(person.firstName)

// Write the code that accesses the last name of the person object.
//console.log(person.lastName)
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// const person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth"
//   }

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// const person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth",
//     update: function () {
//         return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
//     }
//   }
// console.log(person.update())

// Consider this variable:

// const product = {
//   name: "chair",
//   price: 24.99
// }
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// const describeProduct = (objProduct) => {
//     return  `The product is a ${product.name}. It costs ${product.price}`
// }
// console.log(describeProduct(product))

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
// const product = {
//     name: "chair",
//     price: 24.99, 
//     total: function () {
//         return this.price * 0.07 + this.price
//     }
//   }
// const totalWithTax = (objProduct) => {
//     return objProduct
// }
// console.log(totalWithTax(product.total().toFixed(2)))
// Consider this variable:

// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }
// Write the code that accesses the ingredients property.
// console.log(lunch.ingredients)

// Write the code that access the third ingredient of the lunch object.
// console.log(lunch.ingredients[2])
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// const pbb = (lunchObj) => {
//     return `The ingredients for a PB and Banana sandwich are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, ${lunch.ingredients[2]}.`
// }
// console.log(pbb(lunch))

// const lunch = {
//     name: "PB and Banana",
//     type: "sandwich",
//     ingredients: ["bread", "peanut butter", "banana"],
//     update: function () {
//         return `The ingredients for a PB and Banana sandwich are ${this.ingredients[0]}, ${this.ingredients[1]}, ${this.ingredients[2]}.`
//     }

//   }
//   console.log(lunch.update())

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// Consider this variable:

// const animals = [
//   { name: "Waffles", type: "dog", age: 7 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 }
// ]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
// const cats = (animalArray) => {
//     let result = []
//     result = animalArray.filter((value) => value.type === "cat")
//     return result
// }
// console.log(cats(animals))

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
const namesOnly = (animalArray) => {
    let result = []
    result = animalArray.map(({name}) => ({name}))
    return result
}
// console.log(namesOnly(animals))


// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.

const animals = [
    { name: "Waffles", type: "dog", age: 7 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 }
  ]
const tenOnly = (animalArray) => {
    let newArray = []
    // iterate over animalArray 
    for (let i=0; i<animalArray.length; i++) {
        // use a conditional statement to check if the ages are more than 10
        if (animalArray[i].age > 10) {
            // push a new array
            newArray.push(animalArray[i].name)
        }
    }
    return newArray 
    }
    console.log(tenOnly(animals)) 
// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
// Consider this variable:

// const author = {
//   name: "H. G. Wells",
//   genre: "science fiction"
// }
// Write the code that destructures the author object so that the following code snippet will run successfully:
// console.log(`${name} is a ${genre} author`)
// // output: "H. G. Wells is a science fiction author"
// Consider this variable:

// const pokeOne = {
//   species: "Charmandar",
//   pokemon_type: "Fire"
// }

// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
// console.log(describePokemon(pokeOne))
// // output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"
// Consider this variable:

// const triangleDimensions = {
//   base: 2,
//   height: 5
// }
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
// Write the code that will update the base to be the value of 6.
