import React from "react";
import { APP_IMAGES_ASSETS } from "../../../project/appImagesAssets";
import styles from "./ProtectedNavbar.module.scss";
import { useLocation, useNavigate } from "react-router";
import { APP_LINKS } from "../../../project/appLinks";
import { Link } from "react-router-dom";

export const ProtectedNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
              location.pathname === APP_LINKS.home ? styles.active : ""
            }
          >
            <Link to={APP_LINKS.home}>Accueil</Link>
          </li>
          <li
            className={
              location.pathname === APP_LINKS.about ? styles.active : ""
            }
          >
            <Link to={APP_LINKS.about}>À Propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
