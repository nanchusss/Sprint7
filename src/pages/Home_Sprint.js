import { StyledDiv, Producto, Total, Pretty2 } from "./Styled";
import { useState } from "react";

function CheckboxesExample() {
  const productos = [
    { id: 1, nombre: "Una página Web (500 E)", precio: 500 },
    { id: 2, nombre: "Una consultoría SEO (300 E)", precio: 300 },
    { id: 3, nombre: "Una campanya de Google Ads (200 E)", precio: 200 },
  ];

  const [total, setTotal] = useState(0);

  const calcularTotal = (e) => {
    let nuevoTotal = total;
    if (e.target.checked) {
      nuevoTotal += parseInt(e.target.value);
      //suma el valor del checked y si no lo resta
    } else {
      nuevoTotal -= parseInt(e.target.value);
    }
    setTotal(nuevoTotal);
  };
  // const sumar = (i) => {
  //   console.log("holis si me ejecuto y estoy sumando:");
  //   setTotal((a) => {
  //     i += a;
  //   });
  // };
  return (
    <>
      <Pretty2>
        {" "}
        <h4> Qué quieres hacer? </h4>
      </Pretty2>
      <StyledDiv>
        <div>
          {productos.map((producto, index) => {
            return (
              <Producto>
                <p>
                  <input
                    type="checkBox"
                    name={producto.nombre}
                    value={producto.precio}
                    onChange={calcularTotal}
                    // Cambio de estado del checkbox
                  />
                </p>
                <p>{producto.nombre}</p>
              </Producto>
            );
          })}
        </div>
      </StyledDiv>
      <Total>Total: {total}</Total>
    </>
  );
}

export default CheckboxesExample;
