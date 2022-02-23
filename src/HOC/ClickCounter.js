import { Component } from "react";
import UpdatedComponent from "./WithCounter";

class ClickCounter extends Component {
  render() {
    const { incrementCount, count } = this.props;
    console.log("Props from ClickCounter = ", this.props);
    return (
      <>
        <h1>Click Count: {count}</h1>
        <button onClick={incrementCount}>CLick {count} times</button>
        <h1>{this.props.name}</h1>
      </>
    );
  }
}

export default UpdatedComponent(ClickCounter);
