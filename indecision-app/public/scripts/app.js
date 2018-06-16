'use strict';

// arguments object is no longer bound with arrow functions

var add = function add(a, b) {
  // console.log(arguments)
  return a + b;
};

console.log(add(55, 10));

// this keyword - no longer bound

var user = {
  name: 'andrew',
  cities: ['philadelphia', 'new york', "dublin"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    this.cities.forEach(function (city) {
      console.log(_this.name + ' has lived in ' + city);
    });
  }
};
user.printPlacesLived();
