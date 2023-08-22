import React from "react";
import styles from "./SocketMouse.module.css";

export const SocketMouse = ({ x, y, color }) => {
  return (
    <div
      className={styles.mouse}
      style={{ transform: `translate(${x}px, ${y}px)`, backgroundColor: color }}
    />
  );
};
