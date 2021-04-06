// import TiposBasicos from './typescript/TiposBasicos';
// import ObjetosLiterales from "./typescript/ObjetosLiterales";
// import Funciones from "./typescript/Funciones";
// import Counter from "./components/Counter"

import CounterWithHook from "./components/CounterWithHook";

// import TiposBasicos from "./typescript/TiposBasicos"
const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TypeScript-React</h1>
      <hr />
      {/* <TiposBasicos/> */}
      {/* <ObjetosLiterales/> */}
      {/* <Funciones /> */}
      {/*<Counter/>*/}
      <CounterWithHook />
    </div>
  );
};

export default App;
