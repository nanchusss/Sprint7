import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const ListaPresupuestos = ({ total, cantidad, cantidad2, checked }) => {
  const [inputPresupuesto, cambiarInputPresupuesto] = useState("");

  const handleInputPresupuesto = (e) => {
    cambiarInputPresupuesto(e.target.value);
  };
  const [lista, setLista] = useState([
    {
      nombre: "value que viene del input",
      total: "total que viene de total",
      elemento: "elementos que vienen checkeados",
    },
  ]);

  const agregarPresupuesto = (e) => {
    e.preventDefault();
    setLista([
      ...lista,
      {
        id: uuidv4(),
        nombre: inputPresupuesto,
        total: total,
        cantidadPaginas: `La cantidad de páginas es ${cantidad}`,
        cantidadIdiomas: `La cantidad de idiomas es ${cantidad2}`,
        elementos: checked,
      },
    ]);
    console.log(lista);
  };
  useEffect(() => {
    console.log("Cambio en total");
    localStorage.setItem("total", JSON.stringify(lista));
  }, [lista]);

  return (
    <form action="" onSubmit={agregarPresupuesto}>
      <input
        style={styles.input}
        type="text"
        placeholder="Nombre del Presupuesto"
        value={inputPresupuesto}
        onChange={(e) => handleInputPresupuesto(e)}
      />
      <button type="submit" style={styles.btn}>
        <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
      </button>
    </form>
  );
};
const styles = {
  btn: {
    width: "100%",
    height: "auto",
    backgroundColor: "#343030",
  },
  input: {
    minWidth: "350px",
    minHeight: "40px",
    fontColor: "black",
    outline: "none",
    borderColor: "blue",
    borderRadius: "5px",
    display: "flex",
    position: "relative",
    alignItems: "right",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "30px",
  },
};
export default ListaPresupuestos;
