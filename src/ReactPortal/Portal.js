import React from "react";
import ReactDOM from "react-dom";

const Portal = () => {
  //   return <h1>Portal</h1>;

  return ReactDOM.createPortal(<h1>Portal</h1>, document.getElementById("portal-root"));
};

export default Portal;
