interface Person {
  fullName: string;
  age: number;
  direction: Direction;
}

interface Direction {
    country: string;
    houseN: number;
}

const ObjetosLiterales = () => {
  const person: Person = {
    fullName: "Juan",
    age: 35,
    direction: {
      country: "Chile",
      houseN: 666,
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      {JSON.stringify(person, null, 2)}
    </>
  );
};

export default ObjetosLiterales;
