class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count
    };
  }

handleAddOne() {
  this.setState((prevState) => {
    return {
      count: prevState.count + 1
    };
  });
};

handleMinusOne() {
  this.setState((prevState) => {
    return {
      count: prevState.count - 1
    };
  });
};

handleReset() {
  this.setState(() => { 
    return {
      count: 0
    }
  });
};


  render() {
    return(
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}
  Counter.defaultProps = {
    count: 0
  }

ReactDOM.render(<Counter count={[25]}/>, document.getElementById("app"))



// var nameVar = "Andrew";

// nameVar = "Mike";
// console.log("nameVar", nameVar);

// var defines a global variable
// let defines unique variables
// const creates a variable that is unique and cannot be modified

// let count = 0;
// const addOne= () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// <h1>hello there</h1>


// const renderCounterApp = () => {
//   const templateTwo = (
//   <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>reset</button>
//   </div>
// );