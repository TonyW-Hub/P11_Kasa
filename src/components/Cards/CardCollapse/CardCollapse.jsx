import React, { useState } from "react";
import styles from "./CardCollapse.module.scss";
import { APP_IMAGES_ASSETS } from "../../../project/appImagesAssets";

const CardCollapse = ({ title, className, open = false, children }) => {
  const [openCollapse, setOpenCollapse] = useState(open);

  const handleClick = () => {
    setOpenCollapse((prev) => !prev);
  };

  return (
    <article className={`${styles.card} ${className}`}>
      <header
        className={styles.cardHeader}
        onClick={() => {
          handleClick();
        }}
      >
        <p>{title}</p>
        <img
          src={APP_IMAGES_ASSETS.icon.angle}
          className={openCollapse ? styles.angleOpen : ""}
          alt="Icone d'angle"
        />
      </header>
      {openCollapse && <div className={styles.content}>{children}</div>}
    </article>
  );
};

export default CardCollapse;
