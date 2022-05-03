import React from "react";

import Navbar from "../Navbar";

import { NavLink } from "react-router-dom";

import styles from "../../styles/layout/sidebar.module.css";

export default function SideBar() {
  return (
    <aside className={`${styles.sidebar}`}>
      <div className="container h-100">
        <div className={`h-100 d-flex flex-column ${styles.sidebarContent}`}>
          <NavLink to="/" className={`${styles.toggleSidebar}`}>
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
          </NavLink>
          <Navbar />
        </div>
      </div>
    </aside>
  );
}
