const { kMaxLength } = require("buffer")
const { arrayBuffer } = require("stream/consumers")

const person = {
  firstName: "Arthur",
  lastName: "Dent"
}

//   Write the code that accesses the first name of the person object.

console.log(person.firstName)

// Write the code that accesses the last name of the person object.

console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

person.homePlanet = 'Earth'

console.log(person)

// Update the person object with a method that logs "Arthur Dent is from planet Earth".

person.locatePer = function () {
  return ` ${this.firstName} ${this.lastName} is from ${this.homePlanet}`
}

console.log(person.locatePer())

const product = {
  name: "chair",
  price: 24.99
}

//   Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

const discribeProduct = (obj) => {
  return `The product is a ${obj.name}. It cost $${obj.price}.`
}
console.log(discribeProduct(product))

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

const totalWithTax = (obj) => {
  taxNum = obj.price * 1.07
  roundNum = taxNum.toFixed(2)
  return roundNum
}

console.log(totalWithTax(product))

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}

//   Write the code that accesses the ingredients property.

console.log(lunch.ingredients)

// Write the code that access the third ingredient of the lunch object.

console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

const lunchString = (obj) => {
  return `The ingredients ${obj.name} ${obj.type} are ${obj.ingredients.join(", ")}.`
}

console.log(lunchString(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
//   Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.

// const animalName = (arr) => {
//     catFilt = arr.filter((val) => val.type === 'cat')
//     return catFilt
// }

// console.log(animalName(animals))

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.

// const petNames = (petArray) => {
//   return petArray.map(element => {
//       return element.name
//   })
// }
// console.log(petNames(animals))


// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
// Create a function and map function structure
// input: Array
// output: new array of name of animals aged >= 10


// Declared function name that takes in (arr)
const oldAnimals = (arr) => {
// Created new empty array newArr = []
  let newArr = []
// Create new variable and filter given array to meet the condition of >= 10
  ageFilt = arr.filter((val) => val.age >= 10)
  // console.log(ageFilt.length)
  // Create For Loop to iterate over the new variable/object ageFilt to extract the key/name of the animals.
  for (i = 0; i < ageFilt.length; i++) {
// push the names of the animals that meet the conditions to newArr
    newArr.push(ageFilt[i].name)
  }
// return newArr  
  return newArr
}
// console log
console.log(oldAnimals(animals))
// --> [ 'Fluffy', 'Hank' ]



// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.

// Create a function and map structure
// input: animal array
// output: "`${name}` is a `${type}` and is `${age} years` old"

// Create a function takes in an array of animals
const animalSentence = (arr) => {
  // created new array to store the list of animal sentences.
  let newArr = []
  // used For Loop to iterate over the given array
  for (i = 0; i < arr.length; i++) {
  // access individual array elements and push it into the created empty array newArr in a sentence structure,
    newArr.push(`${arr[i].name} is a ${arr[i].type} and is ${arr[i].age} years old`)
  }
  // return newArr that was created and logged 
  return newArr
}
// console log
console.log(animalSentence(animals))