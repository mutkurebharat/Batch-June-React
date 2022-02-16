const Person = ({ person }) => {
    console.log(person);
  return (
    <h2>
      I am {person.name}. I am {person.age} years old. I have an knowledge of
       {person.tech}.
    </h2>
  );
};

export default Person;
