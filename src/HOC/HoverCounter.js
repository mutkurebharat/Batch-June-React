import { Component } from "react";
import UpdatedComponent from "./WithCounter";
class HoverCounter extends Component {
  render() {
    const { incrementCount, count } = this.props;
    return (
      <>
        <h1>Hover Count: {count}</h1>
        <button onMouseOver={incrementCount}>CLick {count} times</button>
      </>
    );
  }
}

export default UpdatedComponent(HoverCounter);
