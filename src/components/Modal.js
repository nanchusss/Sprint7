import { Component } from "react";
import Portal from "./portal";

export default class Modal extends Component {
  render() {
    const { children, toggle, active } = this.props;
    return (
      <Portal>
        {active && (
          <div style={styles.wrapper} onClick={toggle}>
            <div style={styles.window}>
              <div>{children}</div>
            </div>
          </div>
        )}
        {/* {active1 && (
          <div style={styles.wrapper} onClick={toggle2}>
            <div style={styles.window}>
              <div>{children}</div>
            </div>
          </div>
        )} */}
      </Portal>
    );
  }
}

//estilos del componente.

const styles = {
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#9b999999",
    opacity: 1,
    height: "100%",
    minHeight: "1000px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  window: {
    position: "relative",
    background: "#ffffff",
    borderRadius: 5,
    padding: 20,
    boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
    zIndex: 10,
    minWidth: 420,
    minHeight: 80,
  },
};
