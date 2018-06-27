// console.log("app.js is running");

// // JSX - JavaScript XML

// const app = {
//   title: "Indecision App!",
//   subTitle: "This is some info for you!",
//   options: []
// };

// const onFormSubmit = (e) => {
//   e.preventDefault();

//   const option = e.target.elements.option.value;

//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = "";
//     render();
//   }
// };

// const onRemoveAll = () => {
//   app.options = [];
//   render();
// };

// const onMakeDecision = () => {
//   const randomNum = Math.floor(Math.random() * app.options.length);
//   const option = app.options[randomNum];
//   alert(option);
// };



// const appRoot = document.getElementById('app');

// const numbers = [55, 101, 1000];

// const render = () => {
//   const template = (
//   <div>
//     <h1>{app.title}</h1>
//     {app.subTitle && <p>{app.subTitle}</p>}
//     <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
//     <button disabled={app.options.length === 0} onClick={onMakeDecision}>what should I do?</button>
//     <button onClick={onRemoveAll}>Remove All</button>
//     <ol>
//       {
//         app.options.map((option) => <p key={option}>{option}</p>)
//       }
//     </ol>
//     <form onSubmit={onFormSubmit}>
//       <input type="text" name="option" />
//       <button>Add Option</button>
//     </form>
//   </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();

let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};


const render = () => {
  const jsx = (
    <div>
      <h1>toggle visibility</h1>
      <button onClick={toggleVisibility}>
        {visibility ? "hide details" : "show details"}
      </button>
      {visibility && (
        <div>
          <p>hey this is some stuff you want to see</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById("app"));
};

render();



