import {
  StyledDiv,
  Producto,
  Total,
  Pretty2,
  Buttons,
  DivOculto,
  OtherProducts,
  MyBody,
} from "./Styled";
import { useState } from "react";

function CheckboxesExample(props) {
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
  const [cantidad, setCantidad] = useState(0);
  const [cantidad2, setCantidad2] = useState(0);
  const [mostrarComponente, setMostrarComponente] = useState(false);

  //  CALCULAR TOTAL
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

  //AUMENTAR CONTADOR DE PAGINAS E IDIOMAS
  const aumentar = (a) => {
    console.log(total);
    //---------------------------CONSULTA ------------------------------
    //Pablo, una consulta, este console.log me muestra el total que es 500, pero luego se borra, porqué me está pasando eso?
    let valor = a.target.value;
    console.log(valor);
    let id = a.target.id;
    //acá llamo los valores pasados como props en los botones, los identifica según el id. Ahí puedo trabajar el condicional con los setState.
    let contador = cantidad;
    contador++;
    // console.log("funciona");
    setTotal(total + valor * contador);
    if (id === "4") {
      console.log("4");
      setCantidad(contador);
    }
    if (id === "5") {
      contador = cantidad2;
      contador++;
      console.log("este es el contador2", contador);
      setTotal(valor * contador);
      setCantidad2(contador);
    }

    // setTotal(valor * contador);
  };

  //DISMINUIR EL CONTADOR DE PÁGINAS E IDIOMAS
  const disminuir = (a) => {
    let valor = a.target.value;
    let contador = cantidad;
    let id = a.target.id;

    if (id === "4" && contador > 0) {
      contador--;
      setTotal(valor * contador);
      console.log("el total es", total);
      setCantidad(contador);
    }
    let contador2 = cantidad2;
    if (contador2 > 0 && id === "5") {
      console.log("la chucha");
      contador2--;
      setCantidad2(contador2);
      setTotal(valor * contador2);
    }
  };

  //MOSTRAR DIV OCULTO
  const mostrarDiv = (a) => {
    let id = a.target.id;

    if (id === "1") {
      setMostrarComponente(!mostrarComponente);
      console.log("si funciona mostrar div");
    }
  };

  //RENDERIZADO DE LA PÁGINA
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
              <Producto key={index}>
                <p>
                  <input
                    type="checkBox"
                    id={producto.id}
                    name={producto.nombre}
                    value={producto.precio}
                    onChange={calcularTotal}
                    onClick={mostrarDiv}
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

      <div className={mostrarComponente ? "Mostrar" : null}>
        {mostrarComponente && (
          <DivOculto>
            {other.map((a) => {
              console.log(a.id);

              if (a.id === 4) {
                console.log("Va a renderizar todo una sola vez");
                return (
                  <OtherProducts>
                    <section>
                      <div>El total de páginas es:</div>{" "}
                      <Buttons value={a.precio} id={a.id} onClick={aumentar}>
                        +
                      </Buttons>
                      <div>{cantidad}</div>
                      <Buttons value={a.precio} id="4" onClick={disminuir}>
                        {" "}
                        -
                        {/* <p>{pricePaginas} Este es el precio de páginas</p>{" "} */}
                      </Buttons>
                    </section>
                    <section>
                      <div>El total de Idiomas es:</div>
                      <Buttons value={a.precio} id="5" onClick={aumentar}>
                        +
                      </Buttons>
                      <div> {cantidad2}</div>

                      {/* <p>{pricePaginas} Este es el precio de páginas</p>{" "} */}
                      <Buttons value={a.precio} id="5" onClick={disminuir}>
                        -
                      </Buttons>
                    </section>

                    <div>Importe: {total}</div>
                  </OtherProducts>
                );
              }
            })}
          </DivOculto>
        )}
      </div>
    </>
  );
}

export default CheckboxesExample;
