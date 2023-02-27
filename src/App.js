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
  const other = [
    { id: 4, nombre: "Cantidad de Páginas", precio: 30 },
    { id: 5, nombre: "Cantidad de Idiomes", precio: 30 },
  ];

  const [total, setTotal] = useState(0);
  const [mostrarComponente, setMostrarComponente] = useState(false);
  const [cantidad, setCantidad] = useState(0);
  const [cantidad2, setCantidad2] = useState(0);
  const [checked, setChecked] = useState([]);
  const [active, setActive] = useState(false);

  const toggle = () => {
    console.log("se ejecuta toggle");
    setActive(!active);
  };
  const toggle1 = () => {
    console.log("se ejecuta toggle 1");
    setActive(!active);
  };

  const [State, setInitialState] = useState(true);
  function start() {
    setInitialState((a) => !a);
    console.log("cambio de estado  y pasamos a renderizar la página");
  }

  const renderizado = State ? (
    <Bienvenida iniciar={start} />
  ) : (
    <>
      <divOculto
        toggle={toggle}
        toggle1={toggle1}
        total={total}
        other={other}
        setTotal={setTotal}
        cantidad={cantidad}
        setCantidad={setCantidad}
        cantidad2={cantidad2}
        setCantidad2={setCantidad2}
        checked={checked}
        setChecked={setChecked}
        mostrarComponente={mostrarComponente}
        setMostrarComponente={setMostrarComponente}
      ></divOculto>
      <div>
        <Presupuesto
          toggle={toggle}
          productos={productos}
          total={total}
          setTotal={setTotal}
          other={other}
          cantidad={cantidad}
          setCantidad={setCantidad}
          cantidad2={cantidad2}
          setCantidad2={setCantidad2}
          checked={checked}
          setChecked={setChecked}
          mostrarComponente={mostrarComponente}
          setMostrarComponente={setMostrarComponente}
        />
      </div>
      <div>
        <ListaPresupuestos
          toggle={toggle}
          total={total}
          setTotal={setTotal}
          other={other}
          cantidad={cantidad}
          setCantidad={setCantidad}
          cantidad2={cantidad2}
          setCantidad2={setCantidad2}
          checked={checked}
        />
      </div>
    </>
  );

  return <div className="App">{renderizado}</div>;
};

export default App;
