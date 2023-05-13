import React from "react";
import styles from "./Footer.module.scss";
import { APP_IMAGES_ASSETS } from "../../../project/appImagesAssets";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={APP_IMAGES_ASSETS.logo.kasa} alt="Logo Kasa" />

      <p className={styles.copyright}>
        &#169; {new Date().getFullYear()} Kasa. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
