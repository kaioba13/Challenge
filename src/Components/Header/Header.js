import React from "react";
import styles from "./Header.module.css";
import logoSvg from "../../assets/logo.svg";
import { FiSearch } from "react-icons/fi";

export default function Header() {
  return (
    <div className={styles.container}>
      <header className={styles.HeaderNav}>
        <div>
          <img src={logoSvg} alt="Logo" />
        </div>
        <button className={styles.ButtonSearch}>
          <FiSearch />
        </button>
      </header>
    </div>
  );
}
