class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase();
    this.cream = cream;
    this.sugar = sugar;
  }

  coffeeProfile() {
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`;
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`;
    } else {
      return `${this.cream} cream`;
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`;
    } else {
      return `${this.sugar} sugar`;
    }
  }
}
// 1. Write the code that makes a black coffee object
let blackCoffee = new Coffee("black", 0, 0);
console.log(blackCoffee);
// 2. Write the code that outputs the black coffee's profile
console.log(blackCoffee.coffeeProfile());
// 3. Write the code that makes a coffee object with 1 cream and 2 sugars
let newCoffee = new Coffee("black", 1, 2);
console.log(newCoffee);
// 4. Write the code that outputs the 1 cream and 2 sugars coffee profile
console.log(newCoffee.coffeeProfile());

// Latte Maker: create a class for Latte

class Latte {
  constructor(flavorString, milkTypeString, numberOfShots) {
    (this.flavor = flavorString),
      (this.milkType = milkTypeString),
      (this.shots = numberOfShots);
  }
  latteProfile() {
    return `A ${this.flavor} latte with ${this.milkType} milk, and ${this.shots} shots.`;
  }
}

// 1. Write a Latte class that takes a flavor, a milk type, and a number of shots
// 2. Write a method for your Latte class that outputs the latte's profile
// 3. Write the code that makes a regular, single shot latte
let basicLatte = new Latte("regular", "whole", 1);
console.log(basicLatte);
// 4. Log the regular, single shot latte's profile
console.log(basicLatte.latteProfile());
// 5. Write the code that makes a double shot, hazelnut latte with almond milk.
let hazelnutLatte = new Latte("hazelnut", "almond", 2);
console.log(hazelnutLatte);
// 6. Log the double shot, hazelnut latte with almond milk's profile.
console.log(hazelnutLatte.latteProfile());

// Volume of a Cylinder: create a class for Cylinder

class Cylinder {
  constructor(radiusNumber, heightNumber) {
    this.radius = radiusNumber;
    this.height = heightNumber;
  }
  calcVolume() {
    let volume = Math.PI * this.radius ** 2 * this.height;
    return volume.toFixed(4);
  }
}

let cylinder = new Cylinder(23, 34);
console.log(cylinder);
console.log(cylinder.calcVolume());

// 1. Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// 2. Write the code that rounds the volume of the cylinder to four decimal places
// 3. Write the code that creates three unique cylinder objects

let cylinder2 = new Cylinder(5, 10);
console.log(cylinder2);
let cylinder3 = new Cylinder(42, 8);
console.log(cylinder3);
