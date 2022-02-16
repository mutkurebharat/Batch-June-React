const FunctionClick = () => {
  const clickHandler = () => {
    alert("FUnction Clicked");
  };

  return <button onClick={clickHandler}>Function Click</button>;
};
export default FunctionClick;
