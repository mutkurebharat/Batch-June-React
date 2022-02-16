// 1.ifELse
//2. element Variable
//3. Ternary Operator
//4. Short Circuit Operator

import { Component } from "react";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // return (
    //   <div>
    //     <h1>Welcome Class</h1>
    //     <h1>Welcome Other Class</h1>
    //   </div>
    // );

    // if/else
    // if (this.state.isLoggedIn) {
    //   return <h1>Welcome Class</h1>;
    // } else {
    //   return <h1>Welcome Other Class</h1>;
    // }

    // --------- element variable------------

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <h1>Welcome Class</h1>;
    // } else {
    //   message = <h1>Welcome Other Class</h1>;
    // }

    // return <div>{message}</div>;

    // --------------- ternary conditional Operator --------------------------

    // return this.state.isLoggedIn ? (
    //   <h1>Welcome Class</h1>
    // ) : (
    //   <h1>Welcome Other Class</h1>
    // );

    // ------------------- Short Circuit Operator ---------------------

    return this.state.isLoggedIn && <h1>Welcome Class</h1>;
  }
}

export default Auth;
