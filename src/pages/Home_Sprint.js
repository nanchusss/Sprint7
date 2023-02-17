import {
  StyledDiv,
  Producto,
  Total,
  Pretty2,
  Panel,
  OtherProducts,
} from "./Styled";
import { useState } from "react";

function CheckboxesExample() {
  const productos = [
    { id: 1, nombre: "Una página Web (500 E)", precio: 500 },
    { id: 2, nombre: "Una consultoría SEO (300 E)", precio: 300 },
    { id: 3, nombre: "Una campanya de Google Ads (200 E)", precio: 200 },
  ];

  const other = [
    { id: 4, nombre: "Cantidad de Páginas", precio: 30 },
    { id: 5, nombre: "Cantidad de Idiomes", precio: 30 },
  ];
  // const c = other[0].nombre;

  // const cPrecio = other[0].precio;

  // const i = other[1].nombre;

  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(1);

  // const calculoIdiomasYPaginas = (i) => {
  //   let newCount = count;
  //   console.log()
  //   if (i.target.value === 500) {
  //     console.log("estoy en web");
  //   }
  //   setTotal(newCount);
  // };
  const [cantidad, setCantidad] = useState(0);
  // const [pricePaginas, setTotalPricePaginas] = useState(0);
  // const [priceIdiomas, setTotalPriceIdiomas] = useState(0);

  const [cantidad2, setCantidad2] = useState(0);

  const calcularTotal = (e) => {
    let nuevoTotal = total;

    //parseInt((e.target.value = 500)) ? console.log("sí") : console.log("no");

    if (e.target.checked) {
      nuevoTotal += parseInt(e.target.value);
      //suma el valor del checked y si no lo resta
    } else {
      nuevoTotal -= parseInt(e.target.value);
    }
    setTotal(nuevoTotal);
  };
  const aumentar = (a) => {
    let valor = a.target.value;
    console.log(valor);
    let id = a.target.id;
    //acá llamo los valores pasados como props en los botones, los identifica según el id. Ahí puedo trabajar el condicional con los setState.
    let contador = cantidad;
    contador++;
    // console.log("funciona");
    setTotal(valor * contador);

    if (id === "4") {
      console.log("4");
      setCantidad(contador);
    }
    if (id === "5") {
      contador = cantidad2;
      contador++;
      console.log("este es el contador2", contador);
      setTotal(valor * contador);
      // let contador = cantidad;
      // contador++;

      // console.log("Cantidad de Idiomas: ", contador);
      // // setTotalPriceIdiomas(valor * contador);
      // setTotal(valor * contador);
      setCantidad2(contador);
    }

    // setTotal(valor * contador);
  };
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
      setTotal(valor * contador2);
      setCantidad2(contador2);
    }
  };

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
                    id={producto.id}
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
      <>
        {other.map((a) => {
          console.log(a.id);

          if (a.id === 4) {
            console.log("Va a renderizar todo una sola vez");
            return (
              <>
                <div>El total de páginas es: {cantidad}</div>
                <button value={a.precio} id={a.id} onClick={aumentar}>
                  {" "}
                  +
                </button>
                {/* <p>{pricePaginas} Este es el precio de páginas</p>{" "} */}
                <button value={a.precio} id="4" onClick={disminuir}>
                  {" "}
                  -{" "}
                </button>
                <div>El total de Idiomas es: {cantidad2}</div>
                <button value={a.precio} id="5" onClick={aumentar}>
                  {" "}
                  +
                </button>
                {/* <p>{pricePaginas} Este es el precio de páginas</p>{" "} */}
                <button value={a.precio} id="5" onClick={disminuir}>
                  {" "}
                  -{" "}
                </button>
                <div></div>
                <p>{total}</p>
              </>
            );
          }
          // if (a.id === 5) {
          //   return <div> El total de Idiomas es: {cantidadIdiomas}</div>;
          // // }
          // return (
          //   <OtherProducts>
          //     <div>
          //       {/* <input type="number" id={a.id} value={cantidad} />
          //     <p>{a.nombre}</p> */}
          //       <div>El total de páginas es: {cantidadPaginas}</div>
          //       <div>El total de Idiomas es: {cantidadIdiomas}</div>
          //       <button value={a.precio} id={a.id} onClick={aumentar}>
          //         {" "}
          //         +
          //       </button>
          //       {/* <p>{pricePaginas} Este es el precio de páginas</p>{" "} */}
          //       <button value={a.precio} id={a.id} onClick={disminuir}>
          //         {" "}
          //         -{" "}
          //       </button>

          //       {/* <p>{priceIdiomas} Este es el precio de Idiomas</p> */}
          //       {/* <p>{cantidad}</p> */}
          //       <p>{total}</p>
          //     </div>
          //   </OtherProducts>
          // );
        })}
      </>
    </>
  );
}

export default CheckboxesExample;
