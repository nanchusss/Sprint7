import CheckboxesExample from "./pages/Home_Sprint";
import Bienvenida from "./pages/welcome";
import { useState } from "react";

const App = () => {
  const [State, setInitialState] = useState(true);
  //const presupuestoGuardado = localStorage.getItem();

  function start() {
    setInitialState((a) => !a);
    console.log("cambio de estado  y pasamos a renderizar la página");
  }
  const renderizado = State ? (
    <Bienvenida iniciar={start} />
  ) : (
    <>
      <div>
        <CheckboxesExample />
      </div>
    </>
  );

  return <div className="App">{renderizado}</div>;
};

export default App;
