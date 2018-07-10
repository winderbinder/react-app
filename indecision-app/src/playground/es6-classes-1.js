class Person {
  constructor(name = "test", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `hi I am ${this.name} how are you`;
  }

  getDescription() {
    return `hi my name is ${this.name} and I am ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
  super(name, age);
  this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` their major is ${this.major}. `;
    }

    return description
  }
}

class Traveler extends Student {
  constructor (name, age, location = "unknown") {
  super(name, age);
  this.location = location;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.location) {
      greeting += ` I am from ${this.location}`;
    }

    return greeting;
  }
} 

let me = new Traveler('Alonso Hernandez', 15, );
console.log(me.getGreeting());

let other = new Traveler("suh dude", 15, 'milky way' );
console.log(other.getGreeting());

