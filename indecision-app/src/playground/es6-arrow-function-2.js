// arguments object is no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments)
  return a + b;
}

console.log(add(55, 10));

// this keyword - no longer bound

const user = {
  name: 'andrew',
  cities: ['philadelphia', 'new york', "dublin"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 5, 8],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

// numbers - array of numbers
// multiplyBy - single number
// mutiply - return a new array where the number have been multiplied

console.log(multiplier.multiply());