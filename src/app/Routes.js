import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Page2 from "../pages/Page_2";
import Page1 from "../pages/Page_1";
import Product from "../pages/product";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Page2" element={<Page2 />} />
      <Route path="/Page1" element={<Page1 />} />
      <Route path="/Product/:id" element={<Product />} />
      {/* Element hace referencia al componente que estamos importando path: creo que es lo que se va a mostrar en la ruta de enlace.Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
      <Route path="*" element={<div>Error 404</div>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
