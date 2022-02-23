import { Component } from "react";

class Admin extends Component {
  render() {
    return (
      <>
        <h1>{this.props.name(false)}</h1>
      </>
    );
  }
}

export default Admin;
