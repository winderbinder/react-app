import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp options={["option 1", "option 2"]}/>, document.getElementById("app"));

class OldSyntax {
  constructor() {
    this.name = "Mike";
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `hi my name is ${this.name}.`;
  }
}

const oldSyntax = new OldSyntax();
const getOldGreeting = oldSyntax.getGreeting;
console.log(getOldGreeting());

class NewSyntax {
  name = 'jen';
  getGreeting = () => {
    return `hi my name is ${this.name}.`;
  }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());

