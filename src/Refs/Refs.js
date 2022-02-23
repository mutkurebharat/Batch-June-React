import React, { Component } from "react";

class Refs extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // console.log(this.inputRef);
    // this.inputRef.current.focus();

    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  getValue = () => {
    console.log(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.getValue}>Get Value</button>
      </div>
    );
  }
}

export default Refs;
