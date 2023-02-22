import Presupuesto from "./pages/presupuesto";
import Bienvenida from "./pages/welcome";
import { useState } from "react";
import ListaPresupuestos from "./components/listaPresupuestos";

const App = () => {
  const productos = [
    { id: 1, nombre: "Una página Web (500 E)", precio: 500 },
    { id: 2, nombre: "Una consultoría SEO (300 E)", precio: 300 },
    { id: 3, nombre: "Una campanya de Google Ads (200 E)", precio: 200 },
  ];
  const [total, setTotal] = useState(0);

  const [State, setInitialState] = useState(true);
  function start() {
    setInitialState((a) => !a);
    console.log("cambio de estado  y pasamos a renderizar la página");
  }

  const renderizado = State ? (
    <Bienvenida iniciar={start} />
  ) : (
    <>
      <div>
        <Presupuesto productos={productos} total={total} setTotal={setTotal} />
      </div>
      <div>
        <ListaPresupuestos total={total} setTotal={setTotal} />
      </div>
    </>
  );

  return <div className="App">{renderizado}</div>;
};

export default App;
