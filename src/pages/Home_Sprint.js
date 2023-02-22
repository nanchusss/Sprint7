import {
  StyledDiv,
  Producto,
  Total,
  Pretty2,
  Buttons,
  DivOculto,
  OtherProducts,
} from "./Styled";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import Modal from "../Modal";
import { ModalStyle } from "./Styled";

function CheckboxesExample({ productos }) {
  //MANEJO DEL POPUP MODAL

  const [active, setActive] = useState(false);

  const toggle = () => {
    console.log("se ejecuta toggle");
    console.log(active);
    setActive(!active);
    console.log(active);
  };
  // const [mensaje, setMensaje] = useState(
  //   "Este es el número de páginas de su Web"
  // );
  // const [mensaje2, setMensaje2] = useState(
  //   "Este es el número de Idiomas de su página Web"
  // );
  // const cambiarMensaje = () => {
  //   setMensaje("idiomas");
  // };
  const other = [
    { id: 4, nombre: "Cantidad de Páginas", precio: 30 },
    { id: 5, nombre: "Cantidad de Idiomes", precio: 30 },
  ];
  //LOCALSTORAGE Y DEFINICIÓN DE TOTAL

  // const totalGuardado = localStorage.getItem("total")
  //   ? JSON.parse(localStorage.getItem("total"))
  //   : [];
  // const [total, setTotal] = useState(totalGuardado);

  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [cantidad2, setCantidad2] = useState(0);
  const [mostrarComponente, setMostrarComponente] = useState(false);
  //const [carritoElemento, setCarritoElemento] = useState([]);

  //  CALCULAR TOTAL
  const calcularTotal = (e) => {
    let nuevoTotal = total;

    if (e.target.checked) {
      //let element = e.target.checked;
      console.log(e.target.checked);
      console.log(e.target.id);
      nuevoTotal += parseInt(e.target.value);
      //suma el valor del checked y si no lo resta

      //console.log(carritoElemento);
    } else {
      nuevoTotal -= parseInt(e.target.value);
    }
    setTotal(nuevoTotal);
  };

  // const setCarri = (id, nuevoElemento) => {
  //   let nuevoElemento = productos[id];
  //   console.log("estamos editando la tarea: ", id);
  //   setCarritoElemento(
  //     productos.map((producto) => {
  //       if (producto.id === id) {
  //         return {
  //           ...producto,
  //           id: nuevoElemento,
  //           //cambiando el valor de completado.
  //         };
  //       }
  //       return producto;
  //     })
  //   );
  // };
  // const settingCarrito = ({ productos }) => {
  //   // e.preventDefault();
  //   console.log("hola si funciono para setear el carrito");
  //   setCarritoElemento([
  //     ...carritoElemento,
  //     {
  //       productos,
  //     },
  //   ]);
  //   console.log(carritoElemento);
  // };
  //LOCALSTORAGE, ME GUARDA EL TOTAL DEL PRESUPUESTO
  useEffect(() => {
    console.log("Cambio en total");
    localStorage.setItem("total", JSON.stringify(total));
    //el almacenamiento solo puede ser en una cadena de texto y por ello, usamos json.stringify

    //código cada vez que hay un cambio en la página, pero queremos que solo sea cuando el estado cambie
  }, [total]);
  // useEffect(() => {
  //   console.log("Cambio de producto");
  //   localStorage.setItem("carrito", JSON.stringify(element));
  //   //el almacenamiento solo puede ser en una cadena de texto y por ello, usamos json.stringify
  //   console.log(
  //     JSON.stringify("Almacenamiento local del total, que es: ", {
  //       element,
  //     })
  //   );

  //   //código cada vez que hay un cambio en la página, pero queremos que solo sea cuando el estado cambie
  // }, [carritoElemento]);

  //AUMENTAR CONTADOR DE PAGINAS E IDIOMAS
  const aumentar = (a) => {
    console.log("Este es el total antes de entrar a los if,", total);
    //---------------------------CONSULTA ------------------------------
    //Pablo, una consulta, este console.log me muestra el total que es 500, pero luego se borra, porqué me está pasando eso?
    let valor = a.target.value;
    console.log(valor);
    let id = a.target.id;
    //acá llamo los valores pasados como props en los botones, los identifica según el id. Ahí puedo trabajar el condicional con los setState.
    let contador = cantidad;
    contador++;
    // console.log("funciona");
    setTotal(valor * contador);
    if (id === "4") {
      console.log("Este es el total entrando en el if de id 4", total);
      setTotal(30 + total);
      console.log(total);
      setCantidad(contador);
    }
    if (id === "5") {
      contador = cantidad2;
      contador++;
      console.log("este es el total entrando en el if id 5", total);
      setTotal(total + 30);
      setCantidad2(contador);
    }

    // setTotal(valor * contador);
  };

  //DISMINUIR EL CONTADOR DE PÁGINAS E IDIOMAS
  const disminuir = (a) => {
    //let valor = a.target.value;
    let contador = cantidad;
    let id = a.target.id;

    if (id === "4" && contador > 0) {
      contador--;
      setTotal(total - 30);
      console.log("el total es", total);
      setCantidad(contador);
    }
    let contador2 = cantidad2;
    if (contador2 > 0 && id === "5") {
      console.log("la chucha");
      contador2--;
      setCantidad2(contador2);
      setTotal(total - 30);
    }
  };

  // const guardar = () => {
  //   console.log("Se acciona guardar");
  // };

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
      {/* <button onClick={settingCarrito({ productos })}>Click</button> */}

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
                      <FontAwesomeIcon
                        icon={faCircleInfo}
                        onClick={toggle}
                      ></FontAwesomeIcon>
                      <Modal active={active} toggle={toggle}>
                        <ModalStyle>
                          <div>
                            Este valor indica el número de páginas de la Web
                          </div>
                        </ModalStyle>
                      </Modal>
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
                      <FontAwesomeIcon icon={faCircleInfo} onClick={toggle}>
                        <Modal active={active} toggle={toggle}>
                          <ModalStyle>
                            <div>
                              Este valor muestra el número de idiomas de su Web
                            </div>
                          </ModalStyle>
                        </Modal>
                      </FontAwesomeIcon>
                    </section>
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
