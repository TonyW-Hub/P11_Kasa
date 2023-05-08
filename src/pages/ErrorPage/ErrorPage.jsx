import React from "react";
import styles from "./ErrorPage.module.scss";
import { ProtectedNavbar } from "../../components/Navbars/ProtectedNavbar/ProtectedNavbar";
import { Link } from "react-router-dom";
import { APP_LINKS } from "../../project/appLinks";

const ErrorPage = () => {
  return (
    <div className={styles.errorLayout}>
      <ProtectedNavbar />

      <section className={styles.error}>
        <p className={styles.errorNumber}>404</p>
        <p className={styles.errorMessage}>
          Oups! La page que vous demandez n'existe pas.
        </p>
      </section>

      <Link to={APP_LINKS.home} className={styles.link}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default ErrorPage;
