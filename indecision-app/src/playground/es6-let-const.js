var nameVar = "Andrew";
nameVar = "Mike";
console.log("nameVar", nameVar);

// var defines a global variable
// let defines unique variables
// const creates a variable that is unique and cannot be modified

let count = 0;
const addOne= () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

<h1>hello there</h1>


const renderCounterApp = () => {
  const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);