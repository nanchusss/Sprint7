import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { Presu } from "../pages/Styled";

const ListaPresupuestos = ({ total, cantidad, cantidad2, checked }) => {
  const [inputPresupuesto, cambiarInputPresupuesto] = useState("");

  const handleInputPresupuesto = (e) => {
    cambiarInputPresupuesto(e.target.value);
  };
  const [inputCliente, cambiarInputCliente] = useState("");

  const handleInputCliente = (e) => {
    cambiarInputCliente(e.target.value);
  };
  const [lista, setLista] = useState([]);

  const agregarPresupuesto = (e) => {
    let date = new Date();

    console.log(date);
    e.preventDefault();
    setLista([
      ...lista,
      {
        id: uuidv4(),
        nombre: inputPresupuesto,
        cliente: inputCliente,
        total: `Precio Final: ${total}`,
        cantidadPaginas: `La cantidad de páginas es ${cantidad}`,
        cantidadIdiomas: `La cantidad de idiomas es ${cantidad2}`,
        elementos: `Elementos incluidos: ${checked}`,
        date: `Fecha: ${date.toString()}`,
      },
    ]);
    console.log(lista);
  };
  useEffect(() => {
    console.log("Cambio en total");
    localStorage.setItem("total", JSON.stringify(lista));
  }, [lista]);

  return (
    <div style={styles.bod}>
      <form action="" style={styles.form} onSubmit={agregarPresupuesto}>
        <input
          style={styles.input}
          type="text"
          placeholder="Nombre del Presupuesto"
          value={inputPresupuesto}
          onChange={(e) => handleInputPresupuesto(e)}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Nombre Cliente"
          value={inputCliente}
          onChange={(e) => handleInputCliente(e)}
        />
        <button type="submit" style={styles.btn}>
          <FontAwesomeIcon icon={faPlusSquare}> </FontAwesomeIcon>
        </button>
      </form>

      <ul style={styles.lista}>
        {lista.length > 0 ? (
          lista.map((a) => {
            return (
              <Presu>
                <div style={styles.input__container}>
                  <div style={styles.nombre}>{a.nombre}</div>
                  <div style={styles.nombre}>{a.cliente}</div>
                </div>
                <section style={styles.descripcionPresupuestos}>
                  <div>{a.total}</div>
                  <div>{a.elementos}</div>
                  <div>{a.cantidadPaginas}</div>
                  <div>{a.cantidadIdiomas}</div>
                  <div>{a.date}</div>
                </section>
                {/* <button id={a.id} onClick={borrarPresupuesto}>
                  x
                </button> */}
              </Presu>
            );
          })
        ) : (
          <div style={styles.nombre}>No hay presupuestos agregados</div>
        )}
      </ul>
    </div>
  );
};
const styles = {
  bod: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },

  btn: {
    width: "40px",
    height: "40px",
    opacity: "transparent",
    borderRadius: "5px",
    marginLeft: "0px",
    marginRight: "80px",
    border: "none",
  },
  input__container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr",
    gap: "5px",
    gridTemplateAreas: ". .",
  },
  nombre: {
    marginTop: "15px",
    marginBottom: "15px",
    width: "100%",
    fontWeight: "600",
    color: "#5F5E5F",
  },
  descripcionPresupuestos: {
    fontSize: "12px",
    borderRadius: "5px",
    padding: "10px",
    minWidth: "310px",
    boxShadow: " 10px 10px 27px -12px rgba(232,232,237,1)",
  },
  lista: {
    maxWidth: "300px",
    display: "flex",
    flexDirection: "column",
    marginRight: "auto",
    marginLeft: "0",
    marginTop: "0px",
    boxShadow: "none",
  },
  form: {
    position: "sticky",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "row",
    marginRight: "auto",
    marginLeft: "40px",
    marginTop: "-500px",
  },
  input: {
    position: "sticky",
    maxWidth: "300px",
    height: "40px",
    fontColor: "black",
    outline: "none",
    borderColor: "#eeeeed",
    borderRadius: "5px",
    marginRight: "5px",
    marginLeft: "auto",
  },
  section: {
    maxWidth: "500px",
    borderRadius: "5px",
    display: "flex",
    position: "relative",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "30px",
  },
};
export default ListaPresupuestos;
