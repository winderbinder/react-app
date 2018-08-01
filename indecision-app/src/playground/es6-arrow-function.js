const square = function(x) {
  return x * x;
};

console.log(square(3));

const squareArrow = (x) => {
  return x * x;
}

// this on top returns a value

const sqaureArrow = (x) => x * x;

// this on top explicitly returns a value no need for a return keyword
 
console.log(squareArrow(4))

const getFirstName = (fullName) => {
   return fullName.split(' ')[0];
}

const getFirstName = (fullname) => fullName.split(' ')[0];

console.log(getFirstName('andrew mead'));