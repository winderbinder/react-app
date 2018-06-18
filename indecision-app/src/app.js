console.log("app.js is running");

// JSX - JavaScript XML

const app = {
  title: "Indecision App!",
  subTitle: "This is some info for you!",
  options: ["One", "Two"]
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>list 1</li>
      <li>list 2</li>
    </ol>
  </div>
);

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

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();