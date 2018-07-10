const obj = {
  name: "mike",
  getName() {
    return this.name;
  }
};

const getName = obj.getName.bind(obj);

console.log(getName());


class IndecisionApp extends React.Component {
  render() {

      const title = "Indecision";
      const subtitle = "put your life in the hands of a machine";
      const options = ['thing 1', 'thing 2', 'thing 4'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}


class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }
  removeAll() {
    alert("removed all");
  }
  render() {
    return (
      <div>
      <button onClick={this.removeAll.bind(this)}>Remove all here</button>
        {this.props.options.map((option) => <Option key={option} optiontext={option} />)}
      </div>  
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Option: {this.props.optiontext}
      </div>
    )
  }
}


class AddOption extends React.Component {
  addedOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }
  render() {
  return (
   <div>     
    <form onSubmit={this.addedOption}>
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>
   </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));