// Coffee maker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile
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
let myCoffee = new Coffee ("black", "1", "2")
// console.log(myCoffee)
console.log(myCoffee.coffeeProfile())
// console.log(myCoffee)

// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.
class Latte {
    constructor(flavor, milk, shots) {
      this.flavor = flavor
      this.milk = milk
      this.shot = shots
    }
  
      latteProfile() {
      return `A ${this.flavor} latte with ${this.milk} milk, and ${this.shots()}`
    }
    shots() {
      if (this.shots > 1) {
        return `${this.shot} shots`
      } else {
        return `${this.shot} shot`
      }
    }
  } 
  let regLatte = new Latte("regular", "whole", "1")
  let hazLatte = new Latte("hazelnut", "almond",2)
  console.log(regLatte.latteProfile())
  console.log(hazLatte.latteProfile())


// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

class Cylinder {
    constructor(radius, height, volume) {
        this.radius = radius 
        this.height = height
        this.volume = volume
    } 
    cylinderProfile() {
        return `The volume of this cyclinder is ${this.volumeCalc()}.`
    }
    volumeCalc() {
        let totalVolume = Math.PI * this.radius ** 2 * this.height
        return totalVolume.toFixed(4)
    }
}
let myCylinder = new Cylinder ("4", "3")
console.log(myCylinder.cylinderProfile())