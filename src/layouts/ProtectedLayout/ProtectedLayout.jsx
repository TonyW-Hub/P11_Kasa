import React from "react";
import { Outlet } from "react-router";
import styles from "./ProtectedLayout.module.scss";
import { ProtectedNavbar } from "../../components/Navbars/ProtectedNavbar/ProtectedNavbar";

const ProtectedLayout = () => {
  return (
    <div className={styles.layout}>
      <ProtectedNavbar />
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
