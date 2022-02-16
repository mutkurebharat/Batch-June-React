const { Component } = require("react");

class FormHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  changeHandler = (e) => {
      console.log(e);
    // this.setState({
    //   name: e.target.value,
    // });
  };

  render() {
    console.log("Name = ", this.state.name);
    return (
      <form>
        <div>
          <label htmlFor="fName">Name</label>
          <input
            type="text"
            id="fName"
            value={this.state.name}
            onChange={this.changeHandler}
          />
        </div>
      </form>
    );
  }
}

export default FormHandle;
