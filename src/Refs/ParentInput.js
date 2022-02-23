import React, { Component } from "react";
import Input from "./Input";

class ParentInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  clickHandler = () => {
      console.log(this.componentRef.current);
    this.componentRef.current.focusInput();
  }
  render() {
    return (
      <>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </>
    );
  }
}

export default ParentInput;
