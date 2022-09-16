// Coffee marker: copy the given Coffee class into a text editor

// Write the code that makes a black coffee object

// Write the code that outputs the black coffee's profile

// Write the code that makes a coffee object with 1 cream and 2 sugars

// Write the code that outputs the 1 cream and 2 sugars coffee profil

// class Coffee {
//   constructor(type, cream, sugar) {
//     this.type = type.toLowerCase(),
//     this.cream = cream,
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
// let myCoffee = new Coffee("black", 1, 2)  
// let yourCoffee = new Coffee("black", 1, 2) 
// console.log(yourCoffee)
// console.log(myCoffee.coffeeProfile())

// Latte Maker: create a class for Latte

// Write a Latte class that takes a flavor, a milk type, and a number of shots

// Write a method for your Latte class that outputs the latte's profile

// Write the code that makes a regular, single shot latte

// Log the regular, single shot latte's profile

// Write the code that makes a double shot, hazelnut latte with almond milk.

// Log the double shot, hazelnut latte with almond milk's profile.

// class Latte {
//     constructor(flavorString, milkTypeString, numOfShotsNumber) {
//         this.flavor = flavorString,
//         this.milkType = milkTypeString,
//         this.shots = numOfShotsNumber
// }
// latteProfile() {
//     return `A ${this.flavor} latte with ${this.milkType} milk, and ${this.shots} shots`
// }
// shots() {
//     if (this.numOfShots > 1) {
//       return `${this.numOfShots} shots`
//     } else {
//       return `${this.numOfShots} shot`
//     }
//   }
// }


// let newLatte = new Latte ("Regular","none", 0)
// let myLatte = new Latte ("Hazelnut", "almond", 2)

// // console.log(newLatte)
// // console.log(newlatte)
// console.log(myLatte)
// console.log(myLatte.latteProfile())



// Volume of a Cylinder: create a class for Cylinder

// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)

// Write the code that rounds the volume of the cylinder to four decimal places

// Write the code that creates three unique cylinder objects

class Cylinder {
    constructor (radius, height) {
        this.radius = radius,
        this.height = height
    }
    cylinderProfile () {
        return `volume = 3.14 * ${this.radius} * ${this.radius} * ${this.height}`
    }
}

let newCylinder = new Cylinder ( )
console.log(newCylinder.cylinderProfile())









