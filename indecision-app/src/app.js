class IndecisionApp extends React.Component {
  constructor(props) {
   super(props);
   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
   this.handlePick = this.handlePick.bind(this);
   this.state = {
    options: ['thing 1', 'thing 2', 'thing 3']
   };
}
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);  
  }

  render() {

      const title = "Indecision";
      const subtitle = "put your life in the hands of a machine";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
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
  render() {
    return (
      <div>
        <button onClick={this.props.handlePick}
        disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}


class Options extends React.Component {
  render() {
    return (
      <div>
      <button onClick={this.props.handleDeleteOptions}>Remove all here</button>
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


