
const TiposBasicos = () => {
  let name: string = "Juan";
  const age: number = 35;
  const isActive: boolean = true;

  // Declarando un arreglo de solamente string, puede ser de boolean, number o any(lo que sea) de lo que tu quieras.
  const powers: string[] = [];

  return (
    <>
      <h3>Tipos Básicos en Ts</h3>
      <p>
        {name} - {age} - {(isActive) ? 'Active' : 'No'}
        <br/>
        {powers.join(',')}
      </p>
    </>
  );
};

export default TiposBasicos;
