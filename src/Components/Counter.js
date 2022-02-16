import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });

    // this.setState((prevState) => {
    //   console.log(prevState);
    //   return { count: prevState.count + 1 };
    // });
    // this.setState((prevState) => {
    //   return { count: prevState.count + 1 };
    // });
    // this.setState((prevState) => {
    //   return { count: prevState.count + 1 };
    // });
    // this.setState((prevState) => {
    //   return { count: prevState.count + 1 };
    // });
    // this.setState((prevState) => {
    //   return { count: prevState.count + 1 };
    // });
  };

  render() {
    console.log("Rerendered");
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.increment}>Increment Count</button>
      </div>
    );
  }
}

export default Counter;
