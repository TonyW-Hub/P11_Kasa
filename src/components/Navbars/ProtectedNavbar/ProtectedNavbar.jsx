import React from "react";
import { APP_IMAGES_ASSETS } from "../../../project/appImagesAssets";
import styles from "./ProtectedNavbar.module.scss";
import { useNavigate } from "react-router";
import { APP_LINKS } from "../../../project/appLinks";

export const ProtectedNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.navbarContainer}>
      <img
        src={APP_IMAGES_ASSETS.logo.kasa}
        onClick={() => navigate(APP_LINKS.home)}
        alt="Logo Kasa"
      />
      <nav>
        <ul>
          <li
            className={
              window.location.pathname === APP_LINKS.home ? styles.active : ""
            }
            onClick={() => navigate(APP_LINKS.home)}
          >
            Accueil
          </li>
          <li
            className={
              window.location.pathname === APP_LINKS.about ? styles.active : ""
            }
            onClick={() => navigate(APP_LINKS.about)}
          >
            À Propos
          </li>
        </ul>
      </nav>
    </div>
  );
};
