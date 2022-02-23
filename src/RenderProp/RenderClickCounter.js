import { Component } from "react";
class RenderClickCounter extends Component {
  render() {
    return (
      <>
        <h1>Count: {this.props.count}</h1>
        <button onClick={this.props.incrementCount}>
          Clicked {this.props.count} times
        </button>
      </>
    );
  }
}

export default RenderClickCounter;
