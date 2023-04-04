import React from "react";
import styles from "./Card.module.scss";

export const Card = ({ bgImage, className, children }) => {
  return (
    <div
      className={`${styles.card} ${className}`}
      style={bgImage && { backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.children}>{children}</div>
      <div className={styles.filter}></div>
    </div>
  );
};
