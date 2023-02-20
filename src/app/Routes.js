import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckboxesExample from "../pages/Home_Sprint";
import Bienvenida from "../pages/welcome";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Bienvenida />} />
      <Route path="/PaginaPrincipal" element={<CheckboxesExample />} />
      {/* Element hace referencia al componente que estamos importando path: creo que es lo que se va a mostrar en la ruta de enlace.Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
      <Route path="*" element={<div>Error 404</div>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
