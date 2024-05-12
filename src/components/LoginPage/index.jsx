import React from "react";
import styles from "./index.module.css";
import CustomBanner from "../assets/CustomBanner";
import google from "../../assets/Google.png";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.form}>
          <div className={styles.login}>Log in</div>
          <input className={styles.email} placeholder="Email" type="text" />
          <input
            className={styles.password}
            placeholder="Password"
            type="password"
          />
          <div className={styles.text1}>Lupa sandi?</div>
          <div className={styles.btn}>Login</div>
          <div className={styles.text2}>Belum punya akun</div>
          <div className={styles.btn_google}>
            <img className={styles.google} src={google} alt="" />
            <div> Sign in with google</div>
          </div>
        </div>
      </div>
      <CustomBanner />
    </div>
  );
};

export default LoginPage;
