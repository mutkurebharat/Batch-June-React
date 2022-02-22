import { Component } from "react";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "memo",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "memo",
      });
    }, 2000);
  }
  render() {
    console.log(
      "*********************** Parent Component ************************"
    );
    return (
      <>
        <h1>Parent Component</h1>
        <MemoComp name={this.state.name} />
      </>
    );
  }
}

export default ParentComp;
