const ChildComponent = (props) => {
  console.log("props = ", props);
  return (
    <div>
      <button onClick={() => props.readName("Child Component")}>
        Read Name
      </button>
    </div>
  );
};

export default ChildComponent;
