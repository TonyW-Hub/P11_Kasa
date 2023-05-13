import React from "react";
import styles from "./Loader.module.scss";

const Loader = ({ className, absolute, children }) => {
  return (
    <div
      className={`${styles.container} ${className} ${
        absolute ? styles.absolute : ""
      }`}
    >
      <div className={styles.loader}></div>
      {children && <p style={{ marginTop: 5 }}>{children}</p>}
    </div>
  );
};

export default Loader;
