import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import otofix_logo from "../../../assets/otofix-logo.png";
import indo_flag from "../../../assets/indonesia-flag.png";

const CustomNavbar = () => {
  return (
    <div className={styles.navbar}>
      <img className={styles.img} src={otofix_logo} alt="" />
      <div className={styles.menu_container}>
        <div className={styles.menu}>Beranda</div>
        <div className={styles.menu}>Gabung jadi Mitra</div>
        <div className={styles.menu}>Bantuan</div>
        <div className={styles.grid}>|</div>
        <Link className={styles.menu} to="/login">
          Masuk
        </Link>
        <Link className={styles.menu} to="/register">
          Daftar
        </Link>
        <img src={indo_flag} alt="" />
      </div>
    </div>
  );
};

export default CustomNavbar;
