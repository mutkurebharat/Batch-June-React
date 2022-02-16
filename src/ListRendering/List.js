import Person from "./Person";

const List = () => {
  //   const names = ["A", "B", "C", "D", "E"];

  const persons = [
    {
      id: 1,
      name: "Abhishek",
      age: 24,
      tech: "React",
    },
    {
      id: 2,
      name: "Akshay",
      age: 30,
      tech: "Webpack",
    },
    {
      id: 3,
      name: "Shubham",
      age: 27,
      tech: "Java",
    },
    {
      id: 4,
      name: "Ronak",
      age: 28,
      tech: "DevOps",
    },
    {
      id: 4,
      name: "Lokesh",
      age: 35,
      tech: "Agile",
    },
  ];
  // const nameList = names.map((name) => <li>{name}</li>);
  //   const nameList = persons.map((person) => <li>{person.name}</li>);
  const nameList = persons.map((person, index) => (
    <Person person={person} key={index} />
  ));
//   return <ul>{nameList}</ul>;
  return(
      <div>
          {nameList}
      </div>
  );
};

export default List;
