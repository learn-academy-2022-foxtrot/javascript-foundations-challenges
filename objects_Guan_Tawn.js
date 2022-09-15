
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

person.locatePer = function (){
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

const animalName = (arr) => {
    catFilt = arr.filter((val) => val.type === 'cat')
    return catFilt
}

console.log(animalName(animals))

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.