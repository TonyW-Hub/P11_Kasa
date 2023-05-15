import React from "react";
import styles from "./CardThumb.module.scss";
import { useNavigate } from "react-router";
import { APP_LINKS } from "../../../project/appLinks";

export const CardThumb = ({ house, children }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${house.pictures[0]})` }}
      onClick={() => navigate(`${APP_LINKS.house}/${house.id}`)}
    >
      <div className={styles.children}>{children}</div>
      <div className={styles.filter}></div>
    </div>
  );
};
