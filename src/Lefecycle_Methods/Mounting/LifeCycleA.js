import { Component } from "react";
import MountingLifecycleB from "./LifeCycleB";
class MountingLifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Person",
    };
    console.log("LifecycleA Constructor");
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("LifecycleA Render");
    return (
      <div>
        {/* <h1>Lifecycle A</h1> */}
        <MountingLifecycleB />
      </div>
    );
  }
}

export default MountingLifecycleA;
