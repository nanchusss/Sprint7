import CheckboxesExample from "./pages/Home_Sprint";
import Bienvenida from "./pages/welcome";
import { useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

const App = () => {
  const [State, setInitialState] = useState(true);

  function start() {
    setInitialState((a) => !a);
    console.log("cambio de estado  y pasamos a renderizar la página");
  }
  const renderizado = State ? (
    <Bienvenida iniciar={start} />
  ) : (
    <BrowserRouter>
      <div>
        <CheckboxesExample>
          <header>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/PaginaPrincipal">Bienvenida</NavLink>
          </header>{" "}
        </CheckboxesExample>
      </div>
    </BrowserRouter>
  );

  return <div className="App">{renderizado}</div>;
};

export default App;
