import React from "react";

const MemoComp = ({ name }) => {
  console.log("************************** MemoComp **************************");
  return <h1>Memo Component</h1>;
};

export default React.memo(MemoComp);
