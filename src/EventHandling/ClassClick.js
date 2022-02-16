import { Component } from "react";

class ClassClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ABC",
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }
  //   clickHandler() {
  //     console.log("this = ", this);
  //     this.setState({ name: "DEF" });
  //   }

  clickHandler = () => {
    console.log("this = ", this);
    this.setState({ name: "DEF" });
  };

  render() {
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <button onClick={this.clickHandler}>Class Click</button>
        {/* <button onClick={this.clickHandler.bind(this)}>Class Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Class Click</button> */}
      </div>
    );
  }
}

export default ClassClick;
