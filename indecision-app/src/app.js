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

const user = {
  name: "Andrew",
  age: 26,
  location: "Philadelphia"
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
const template2 = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);