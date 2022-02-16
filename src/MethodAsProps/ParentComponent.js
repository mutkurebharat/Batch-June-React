import ChildComponent from "./ChildComponent";

const { Component } = require("react");

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Parent Component",
    };
  }

  readName = (val) => {
    this.setState({ name: val });
    // alert(`I am from ${this.state.name}`);
  };

  render() {
    return (
      <div>
          <h1>Value = {this.state.name}</h1>
        <ChildComponent readName={this.readName} />
      </div>
    );
  }
}

export default ParentComponent;
