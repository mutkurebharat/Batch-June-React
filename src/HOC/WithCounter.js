import { Component } from "react";

const UpdatedComponent = (OrignalCOmponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      console.log("Props from HOC = ", this.props);
      return (
        <OrignalCOmponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return NewComponent;
};

export default UpdatedComponent;
