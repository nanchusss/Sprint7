import { Link } from "react-router-dom";

const NavBar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/page2">Page2</Link>
    </li>
    <li>
      <Link to="/ajksdfkjhasdk">Error en la url</Link>
    </li>
  </ul>
);

export default NavBar;
