import React from "react";
import { Component } from "react";

class SecondComponent extends Component {
  // constructor(props){
  //     super(props);
  // }

  render() {
    // console.log(this.props);
    // this.props.fName = "ABC"
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.fName}</h1>
        <h1>{this.props.lName}</h1>
      </div>

      //   React.createElement(
      //     "div",
      //     { id: "1234", class: "abcd" },
      //     React.createElement("h1", null, "Bharat")
      //   )
    );
  }
}

export default SecondComponent;
