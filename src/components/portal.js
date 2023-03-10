import { Component } from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal");

export default class Portal extends Component {
  constructor() {
    super();
    this.el = document.createElement("div");
    // this.mensaje = [{ mensaje: "web" }, { mensaje: "idiomas" }];
  }
  componentDidMount = () => {
    portalRoot.appendChild(this.el);
  };
  componentWillUnmount = () => {
    portalRoot.removeChild(this.el);
  };
  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}
