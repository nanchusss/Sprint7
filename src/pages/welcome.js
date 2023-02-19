import { Welcome } from "./Styled";

const Bienvenida = (props) => {
  return (
    <Welcome>
      <h1> Bienvenido</h1>
      <p> Haz click y recibe tu presupuesto sin cargo</p>
      <button onClick={props.iniciar}>Inicia!</button>
    </Welcome>
  );
};
export default Bienvenida;
