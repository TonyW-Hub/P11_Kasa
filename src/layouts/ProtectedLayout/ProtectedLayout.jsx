import React from "react";
import { Outlet } from "react-router";
import styles from "./ProtectedLayout.module.scss";
import { ProtectedNavbar } from "../../components/Navbars/ProtectedNavbar/ProtectedNavbar";
import Footer from "../../components/Footers/Footer/Footer";

const ProtectedLayout = () => {
  return (
    <React.Fragment>
      <div className={styles.layout}>
        <ProtectedNavbar />
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ProtectedLayout;
