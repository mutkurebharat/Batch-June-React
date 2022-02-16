import { Component } from "react";
class MountingLifecycleB extends Component {
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

  render() {
    console.log("LifecycleB Render");
    return (
      <div>
        <h1>Lifecycle B</h1>
      </div>
    );
  }
}

export default MountingLifecycleB;
