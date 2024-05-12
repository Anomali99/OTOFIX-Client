import React from "react";
import styles from "./index.module.css";
import banner_bg from "../../../assets/banner-bg.png";
import banner_icon from "../../../assets/banner-icon.png";
import mas_mas from "../../../assets/mas-mas-otofix.png";
import otofix_logo from "../../../assets/otofix-logo.png";

const CustomBanner = () => {
  return (
    <div className={styles.container}>
      <img className={styles.banner_bg} src={banner_bg} alt="" />
      <img className={styles.banner_icon} src={banner_icon} alt="" />
      <img className={styles.mas_mas} src={mas_mas} alt="" />
      <img className={styles.otofix_logo} src={otofix_logo} alt="" />
    </div>
  );
};

export default CustomBanner;
