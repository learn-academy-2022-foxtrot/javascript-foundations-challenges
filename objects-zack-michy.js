// const person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth",
//   hesFrom: "Arthur Dent is from planet Earth"
// }
// Write the code that accesses the first name of the person object.

// console.log(person.firstName)

// Write the code that accesses the last name of the person object.

// console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

// console.log(person.homePlanet)

// Update the person object with a method that logs "Arthur Dent is from planet Earth".

// console.log(person.hesFrom)

// const product = {
//   name: "chair",
//   price: 24.99,
//   description: "The product is a chair. It costs $24.99"
// }
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

// const describeProduct = (productArray) => {
//   return productArray.map(element => {
//     return element.description
//   })
// }
// console.log(product.description)

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7 % sales tax rounded to two decimals.
const product = {
  name: "chair",
  price: 24.99,
  description: "The product is a chair. It costs $24.99"
}
const totalWithTax = (productArgument) => {
  return productArgument.price * 7 % 2
}
console.log(totalWithTax(product))