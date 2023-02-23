import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { Presu } from "../pages/Styled";

const ListaPresupuestos = ({
  total,
  cantidad,
  cantidad2,
  checked,
  lista,
  setLista,
}) => {
  const [inputPresupuesto, cambiarInputPresupuesto] = useState("");

  const handleInputPresupuesto = (e) => {
    cambiarInputPresupuesto(e.target.value);
  };

  const agregarPresupuesto = (e) => {
    let date = new Date();

    console.log(date);
    e.preventDefault();
    setLista([
      ...lista,
      {
        id: uuidv4(),
        nombre: inputPresupuesto,
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
        <button type="submit" style={styles.btn}>
          <FontAwesomeIcon icon={faPlusSquare}> </FontAwesomeIcon>
        </button>
      </form>

      <ul style={styles.lista}>
        {lista.length > 0 ? (
          lista.map((a) => {
            return (
              <Presu>
                <div style={styles.nombre}>{a.nombre}</div>
                <section style={styles.descripcionPresupuestos}>
                  <div>{a.total}</div>
                  <div>{a.elementos}</div>
                  <div>{a.cantidadPaginas}</div>
                  <div>{a.cantidadIdiomas}</div>
                  <div>{a.date}</div>
                </section>
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
  nombre: {
    fontSize: "16px",
    borderRadius: "5px",
    boxShadow: "none",
    margin: "10px",
    width: "100%",
    marginRight: "80px",
  },
  descripcionPresupuestos: {
    fontSize: "12px",
    border: "1px solid #cbcbcb",
    borderRadius: "5px",
    padding: "10px",

    minWidth: "310px",
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
    minWidth: "300px",
    height: "40px",
    fontColor: "black",
    outline: "none",
    borderColor: "#eeeeed",
    borderRadius: "5px",
    marginRight: "5px",
    marginLeft: "auto",
    marginBottom: "30px",
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
