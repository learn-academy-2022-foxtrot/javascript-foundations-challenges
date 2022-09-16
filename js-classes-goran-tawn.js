// class Coffee {
//   constructor(type, cream, sugar) {
//     this.type = type.toLowerCase();
//     this.cream = cream;
//     this.sugar = sugar;
//   }

//   coffeeProfile() {
//     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`;
//   }

//   creams() {
//     if (this.cream > 1) {
//       return `${this.cream} creams`;
//     } else {
//       return `${this.cream} cream`;
//     }
//   }

//   sugars() {
//     if (this.sugar > 1) {
//       return `${this.sugar} sugars`;
//     } else {
//       return `${this.sugar} sugar`;
//     }
//   }
// }

// Write the code that makes a black coffee object
// const blackCoffee = new Coffee(
//   (type = "black"),
//   (cream = "no"),
//   (sugar = "no")
// );

// Write the code that outputs the black coffee's profile

// console.log(blackCoffee.coffeeProfile());

// Write the code that makes a coffee object with 1 cream and 2 sugars
// const newCoffee = new Coffee((type = "morning"), (cream = 1), (sugar = 2));

// console.log(`${newCoffee.creams()} and ${newCoffee.sugars()}`);

// Write the code that outputs the 1 cream and 2 sugars coffee profile
// console.log(newCoffee.coffeeProfile());

// Latte Maker: create a class for Latte
// class Latte {
//   constructor(flavor, milk, shot) {
//     this.flavor = flavor;
//     this.milk = milk;
//     this.shot = shot;
//   }

//   latteProfile() {
//     return `You ordered ${this.flavor} latte with ${this.milk} and ${this.shot}.`;
//   }
// }

// Write a Latte class that takes a flavor, a milk type, and a number of shots

// Write a method for your Latte class that outputs the latte's profile

// Write the code that makes a regular, single shot latte
// const newLatte = new Latte(
//   (flavor = "regular"),
//   (milk = "2% milk"),
//   (shot = "single shot")
// );

// Log the regular, single shot latte's profile
// console.log(newLatte.latteProfile());

// Write the code that makes a double shot, hazelnut latte with almond milk.
// const newLatte = new Latte(
//   (flavor = "hazelnut"),
//   (milk = "almond milk"),
//   (shot = "double shot")
// );
// console.log(newLatte);

// Log the double shot, hazelnut latte with almond milk's profile.
// console.log(newLatte.latteProfile());

// Volume of a Cylinder: create a class for Cylinder
// class Cylinder {
//   constructor(radius, height) {
//     this.radius = radius;
//     this.height = height;
//     this.pi = 3.14;
//   }

//   volume() {
//     let vol = (this.pi * (this.radius * this.radius) * this.height).toFixed(4);
//     console.log(typeof vol);
//     return `Volume is ${vol}`;
//   }
// }

// const newCyl = new Cylinder((radius = 5), (height = 2));
// console.log(newCyl);
// console.log(newCyl.volume());

// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)

// Write the code that rounds the volume of the cylinder to four decimal places
// console.log(newCyl.volume());

// Write the code that creates three unique cylinder objects

// const newCyl1 = new Cylinder((radius = 5), (height = 14));
// const newCyl2 = new Cylinder((radius = 7), (height = 24));
// const newCyl3 = new Cylinder((radius = 8), (height = 333));
// console.log(newCyl1);
// console.log(newCyl2);
// console.log(newCyl3);
