import { Component } from "react";
import UpdatingLifecycleB from "./LifeCycleB";
class UpdatingLifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Person",
    };
    console.log("LifecycleA Constructor");
    // this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextProps = ", nextProps);
    console.log("nextState = ", nextState);
    console.log("LifecycleA shouldComponentUpdate");
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Person_1",
    });
  };

  render() {
    /* LifecycleA getDerivedStateFromProps
LifeCycleA.js:23 LifecycleA shouldComponentUpdate
LifeCycleA.js:43 LifecycleA Render
LifeCycleB.js:16 LifecycleB getDerivedStateFromProps
LifeCycleB.js:21 LifecycleB shouldComponentUpdate
LifeCycleB.js:35 LifecycleB Render
LifeCycleB.js:26 LifecycleB getSnapshotBeforeUpdate
LifeCycleA.js:28 LifecycleA getSnapshotBeforeUpdate
LifeCycleB.js:31 LifecycleB componentDidUpdate
LifeCycleA.js:33 LifecycleA componentDidUpdate */
    console.log("LifecycleA Render");
    return (
      <div>
        {/* <h1>Lifecycle A</h1> */}
        <button onClick={this.changeState}>Change State</button>
        <UpdatingLifecycleB />
      </div>
    );
  }
}

export default UpdatingLifecycleA;
