import { Component } from "react";
class UpdatingLifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Person",
    };
    console.log("LifecycleB Constructor");
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
  }

  render() {
    console.log("LifecycleB Render");
    return (
      <div>
        <h1>Lifecycle B</h1>
      </div>
    );
  }
}

export default UpdatingLifecycleB;
