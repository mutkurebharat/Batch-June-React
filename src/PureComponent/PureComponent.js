import { Component, PureComponent } from "react";

class PureeComponent extends PureComponent {
// class PureeComponent extends Component {
  render() {
    console.log("****************** Pure Component *************************");
    return <h1>Pure Component {this.props.name}</h1>;
  }
}

export default PureeComponent;
