// Coffee marker: copy the given Coffee class into a text editor

class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile() {
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}


// Write the code that makes a black coffee object

let blackCoffee = new Coffee("black", 0, 0)
console.log(blackCoffee)

// Write the code that outputs the black coffee's profile
console.log(blackCoffee.coffeeProfile())

// Write the code that makes a coffee object with 1 cream and 2 sugars
let creamCoffee = new Coffee("brown", 1, 2)

// Write the code that outputs the 1 cream and 2 sugars coffee profile
console.log(creamCoffee.coffeeProfile())
// ----------------------------------------------------------------------------------------
// Latte Maker: create a class for Latte
class Latte {
    constructor(flavor, milkType, shots) {
      this.flavor = flavor.toLowerCase()
      this.milkType = milkType.toLowerCase()
      this.shots = shots
    }
    numOfShots() {
        if (this.shots > 1) {
          return "shots"
        } else {
          return "shot"
        }
      }
    describeLatte() {
        return `A ${this.flavor} latte with ${this.milkType} milk and has ${this.shots} ${this.numOfShots()} of expresso.`
    }
}
// lower case to make readable 



// Write a Latte class that takes a flavor, a milk type, and a number of shots

// Write a method for your Latte class that outputs the latte's profile


// Write the code that makes a regular, single shot latte
let latte = new Latte("regular", "whole", 1)
// let latte is object that inherits properties from the class Latte (these are parameter values)
console.log(latte.describeLatte())
// Log the regular, single shot latte's profile


// Write the code that makes a double shot, hazelnut latte with almond milk.
let hazelNut = new Latte("hazelnut", "almond", 2)

// Log the double shot, hazelnut latte with almond milk's profile.

console.log(hazelNut.describeLatte())
// ------------------------------------------------------------------------------------------------
// Volume of a Cylinder: create a class for Cylinder
class Cylinder {
    constructor(radius, height) {
        this.radius = radius
        this.height = height
    } 
    getVolume() {
       // v = (PIr^2h)
        Math.PI * this.radius
    }
}

// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects  