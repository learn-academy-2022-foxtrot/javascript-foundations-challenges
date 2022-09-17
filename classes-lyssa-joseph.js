// Challenges
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
// let order1 = new Coffee ('black', 'no', 'no')

// Write the code that outputs the black coffee's profile
// console.log(order1.coffeeProfile())

// Write the code that makes a coffee object with 1 cream and 2 sugars
// let order1 = new Coffee ('coffee', 1, 2)

// Write the code that outputs the 1 cream and 2 sugars coffee profile
// console.log(order1.coffeeProfile())

// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
class Latte {
    constructor(flavor, milkType, shot) {
        this.flavor = flavor.toLowerCase(),
        this.milkType = milkType,
        this.shot = shot
    }
    latteProfile() {
        return `A ${this.flavor} latte with ${this.milkTypes()}, ${this.shots()}`
    }
    // flavors() {
    //     if (typeof this.flavor === 'String') {
    //     return `${this.flavor} flavor`
    //     } else {
    //   return 'no flavor'
    //     }
    // }
    milkTypes() {
        if (this.milkType > 1) {
          return `${this.milkType} milk`
        } else {
          return `${this.milkType} milk`
        }
      }
    
      shots() {
        if (this.shot > 1) {
          return `${this.shot} shots`
        } else {
          return `${this.shot} shot`
        }
      }
}
// Write the code that makes a regular, single shot latte
let order3 = new Latte('no flavor', 'regular', 1)

// Log the regular, single shot latte's profile
console.log(order3.latteProfile())

// Write the code that makes a double shot, hazelnut latte with almond milk.
let order4 = new Latte('hazelnut', 'almond', 2)

// Log the double shot, hazelnut latte with almond milk's profile.
console.log(order4.latteProfile())

// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
class Cylinder {
    constructor(radius, height){
        this.radius = radius,
        this.height = height
    }
    calculator() {
        return (Math.PI * this.radius * 2 * this.height).toFixed(4)
    }
}

// Write the code that creates three unique cylinder objects
let cylinder1 = new Cylinder(5, 10)
console.log('Cylinder 1: ' + cylinder1.calculator())

let cylinder2 = new Cylinder(25, 8)
console.log('Cylinder 2: ' + cylinder2.calculator())

let cylinder3 = new Cylinder(18, 15)
console.log('Cylinder 3: ' + cylinder3.calculator())