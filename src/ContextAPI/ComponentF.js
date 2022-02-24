import { Component } from "react";
import { UserConsumer } from "./context";

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(val) => {
          return <h1>{val}</h1>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
