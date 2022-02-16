// import React from 'react'
import { Component } from "react";
import SecondComponent from "./SecondComponent";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "Something",
      lName: "Else",
    };
  }

  changeState = () => {
    // this.state.fName = "Changed State";
    this.setState({fName: "Changed State"});
    console.log(this.state);
  };

  render() {
    //   console.log("Refreshing");
    //   console.log("Inside Render Method = ", this.state);
    return (
      <div>
        {/* <h1>{this.state.fName}</h1>
        <h2>{this.state.lName}</h2>
        <button onClick={this.changeState}>Change fName</button> */}
        <SecondComponent fName={this.state.fName} lName={this.state.lName}/>
      </div>
    );
  }
}

export default ClassComponent;
