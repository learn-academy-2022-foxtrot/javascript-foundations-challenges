// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile


// //input:
// //output: black coffee object
// class Coffee {
//   constructor(type, cream, sugar) {
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
    
//   }
  

//   coffeeProfile() {
//     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//   }

//   creams() {
//     if (this.cream > 1) {
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }

//   sugars() {
//     if (this.sugar > 1) {
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }

// // create a new object for black coffee then we want to create a new constructor for the object Coffee
// let blackCoffee = new Coffee("black", "none", "none")
// console.log(blackCoffee)

// let creamSugar = new Coffee("", "1", "2")
// console.log(creamSugar)


// Latte Maker: create a class for Latte

// class Latte {
// // Write a Latte class that takes a flavor, a milk type, and a number of shots
//     constructor(flavorString, milkTypeString, numberShotsNumber) {
//     this.flavor = flavorString,
//     this.milkType = milkTypeString
//     this.numberShots = numberShotsNumber
//     }
    
// }
// let latteProfile = new Latte ("regular", "whole milk", 1)
// // Write a method for your Latte class that outputs the latte's profile
// // Write the code that makes a regular, single shot latte
// // Log the regular, single shot latte's profile
// console.log(latteProfile)

// // Write the code that makes a double shot, hazelnut latte with almond milk.
// let newLatteProfile = new Latte ("hazelnut", "almond milk", 2)
// // Log the double shot, hazelnut latte with almond milk's profile.
// console.log(newLatteProfile)







// Volume of a Cylinder: create a class for Cylinder

// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
class Cylinder {
    constructor (radiusNumber, heightNumber) {
        this.radius = radiusNumber 
        
        this.height = heightNumber
    }

    
    
}

// let volume = newCylinder (this.radius * this.pi * this.height * 2)
let volume = new Cylinder (4,7)

// built in method for pi = Math.pi

console.log(volume)




// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects