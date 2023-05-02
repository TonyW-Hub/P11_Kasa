import React from "react";
import styles from "./CardToggle.module.scss";
import { APP_IMAGES_ASSETS } from "../../../project/appImagesAssets";

export const CardToggle = ({ title, className, open = false, children }) => {
  return (
    <details className={`${styles.card} ${className}`} open={open}>
      <summary className={styles.cardHeader}>
        {title} <img src={APP_IMAGES_ASSETS.icon.angle} alt="Icone d'angle" />
      </summary>
      {children && <div className={styles.content}>{children}</div>}
    </details>
  );
};
