import { Fragment } from "react";

const Column = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {/* {items.map((item) => (
        <Fragment key={item}>
            <h1>{item}</h1>
        </Fragment>
      ))} */}
      <td>First</td>
      <td>Second</td>
    </>
  );
};

export default Column;
