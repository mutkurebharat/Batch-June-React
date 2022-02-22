import React, { Component } from "react";

class Refs extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputRef);
    this.inputRef.current.focus();
  }

  getValue = () => {
    console.log(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.getValue}>Get Value</button>
      </div>
    );
  }
}

export default Refs;
