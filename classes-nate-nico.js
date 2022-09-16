// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile

// class Coffee {
//     constructor(type, cream, sugar) {
//       this.type = type.toLowerCase()
//       this.cream = cream
//       this.sugar = sugar
//     }
  
//     coffeeProfile() {
//       return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//     }
  
//     creams() {
//       if (this.cream > 1) {
//         return `${this.cream} creams`
//       } else {
//         return `${this.cream} cream`
//       }
//     }
  
//     sugars() {
//       if (this.sugar > 1) {
//         return `${this.sugar} sugars`
//       } else {
//         return `${this.sugar} sugar`
//       }
//     }
//   }
// let newCoffee = new Coffee ("black", "no", "no")
// console.log(newCoffee)
// console.log(newCoffee.coffeeProfile())
// let newSugarCoffee = new Coffee ("sugary", 1, 2)
// console.log(newSugarCoffee)
// console.log(newSugarCoffee.coffeeProfile())



// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.

// class Latte {
//     constructor(flavor, milk, shots) {
//       this.flavor = flavor.toLowerCase()
//       this.milk = milk
//       this.shots = shots
//     }
// latteProfile() {
//     return `A latte with ${this.flavor}, ${this.milk}, ${this.shots}`
//   }
// }
// let newLatte = new Latte ("flavor", "milk", "shots")
// console.log(newLatte)
// let regularLatte = new Latte ("regular", "milk", "single")
// console.log(regularLatte)
// console.log(regularLatte.latteProfile())
// let hazelnutLatte = new Latte ("hazelnut", "almond milk", "double")
// console.log(hazelnutLatte)
// console.log(hazelnutLatte.latteProfile())



// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

// class Cylinder
// {
//   constructor(r, h) {
//     this.r = r;
//     this.h = h
//     this.v = Math.PI * Math.pow(this.r, 2) * this.h;
//   }

//    get volume() {
//     return this.v.toFixed(4);
//   }

// }
// let newCylinder = new Cylinder (6, 3)
// console.log(newCylinder.v.toFixed(4))
// let newCylinderBig = new Cylinder (12, 6)
// console.log(newCylinderBig.v.toFixed(4))
// let newCylinderBigger = new Cylinder (24, 12)
// console.log(newCylinderBigger.v.toFixed(4))



