import React from "react";
import styles from "./Pill.module.scss";

const Pill = ({ className, children }) => {
  return <span className={`${styles.pill} ${className}`}>{children}</span>;
};

export default Pill;
