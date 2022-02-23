const Name = ({ name }) => {
  if (name === "B") {
    throw new Error("Not an Valid Name");
  }
  return <h1>{name}</h1>;
};

export default Name;
