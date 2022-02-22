import { Component, PureComponent } from "react";
import PureeComponent from "./PureComponent";
import RegularComponent from "./ReguarComponent";

// class ParentComponent extends Component {
    class ParentComponent extends PureComponent {
      constructor(props) {
        super(props);

        this.state = {
          name: "Unknown",
        };
      }

      componentDidMount() {
        setInterval(() => {
          this.setState({
            name: "Unknown",
          });
        }, 2000);
      }
      render() {
        console.log(
          "****************** Parent Component *************************"
        );
        return (
          <>
            <h1>Parent Component</h1>
            <RegularComponent name={this.state.name} />
            <PureeComponent name={this.state.name} />
          </>
        );
      }
    }

export default ParentComponent;
