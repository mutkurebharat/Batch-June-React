import { Component } from "react";
class RenderHoverCounter extends Component {
  render() {
    return (
      <>
        <h1>Count: {this.props.count}</h1>
        <button onMouseOver={this.props.incrementCount}>
          Hovered {this.props.count} times
        </button>
      </>
    );
  }
}

export default RenderHoverCounter;
