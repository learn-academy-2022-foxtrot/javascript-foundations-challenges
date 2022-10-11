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
let coffee = new Coffee ("Black",false, true)
console.log(coffee)
// Write the code that outputs the black coffee's profile
console.log(coffee)
// Write the code that makes a coffee object with 1 cream and 2 sugars
coffee = new Coffee ("Latte", 1, 2)
console.log(coffee)
// Write the code that outputs the 1 cream and 2 sugars coffee profile
console.log(coffee.coffeeProfile("Latte", 1, 2))
// Latte Maker: create a class for Latte
class Latte {
    constructor(makeSize, makeMilkType, makeSweetness, makeNumShots){
        this.makeSize = makeSize.toLowerCase()
        this.makeMilkType = makeMilkType.toLowerCase()
        this.makeSweetness = makeSweetness
        this.makeNumShots = makeNumShots
    }
    latteProfile () {
        return `I want my ${this.makeSize} latte, cold please with ${this.makeSweetness} out of 10 sweetness, and ${this.makeMilkType}, and ${this.makeNumShots} shots of expresso.`
    }
}

let latte = new Latte ("Small", "Whole Milk", 5, 3)
console.log(latte)
// Write a Latte class that takes a flavor, a milk type, and a number of shots
latte = new Latte ("Large", "Oat", 2, 4)
console.log(latte)
// Write a method for your Latte class that outputs the latte's profile
latte = new Latte ("Medium", "No Milk", 0, 1)
console.log(latte.latteProfile())
// Write the code that makes a regular, single shot latte
latte = new Latte ("Regular", "Whole Milk", 0, 1)
console.log(latte.latteProfile())
// Log the regular, single shot latte's profile
latte = new Latte ("Regular", "Goat Milk", 0, 1)
console.log(latte.latteProfile())
// Write the code that makes a double shot, hazelnut latte with almond milk.
latte = new Latte ("Hazelnut", "Almond milk", 10, 2)
console.log(latte.latteProfile())
// Log the double shot, hazelnut latte with almond milk's profile.


class Cylinder {
  constructor(height,radius){
    this.height = height
    this.radius = radius
  }
  cylVolume (){
    const roundVol = ((3.14) * this.radius * 2 * this.height).toFixed(4)
    return roundVol
  }
}
// Volume of a Cylinder: create a class for Cylinder

let cylinder = new Cylinder(4.2,6.9)
console.log(cylinder.cylVolume())
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)

cylinder = new Cylinder(6.9,4.21)
console.log(cylinder.cylVolume())
// Write the code that rounds the volume of the cylinder to four decimal places

console.log(cylinder.cylVolume())


// Write the code that creates three unique cylinder objects

let newCylinder = new Cylinder(3,4)
let newCylinder1 = new Cylinder(5,6)
let newCylinder2 = new Cylinder(8,7)

console.log(newCylinder,newCylinder1,newCylinder2)