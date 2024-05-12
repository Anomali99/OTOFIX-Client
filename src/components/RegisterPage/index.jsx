import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import CustomBanner from "../assets/CustomBanner";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.form}>
          <div className={styles.login}>Daftar</div>
          <div className={styles.text1}>
            Silahkan isi data berikut dengan benar !
          </div>
          <div className={styles.input_row}>
            <div className={styles.input_container}>
              <label className={styles.label} htmlFor="name">
                Nama Lengkap
              </label>
              <input
                className={styles.input}
                id="name"
                placeholder="Nama Lengkap"
                type="text"
              />
            </div>
            <div className={styles.input_container}>
              <label className={styles.label} htmlFor="no">
                Nomer HP
              </label>
              <input
                className={styles.input}
                id="no"
                placeholder="Nomer HP"
                type="number"
              />
            </div>
          </div>
          <div className={styles.input_row}>
            <div className={styles.input_container}>
              <label className={styles.label} htmlFor="pass1">
                Password
              </label>
              <input
                className={styles.input}
                id="pass1"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className={styles.input_container}>
              <label className={styles.label} htmlFor="pass2">
                Confirm password
              </label>
              <input
                className={styles.input}
                id="pass2"
                placeholder="Confirm password"
                type="password"
              />
            </div>
          </div>
          <div className={styles.btn}>Daftar</div>
          <div className={styles.text2}>
            Sudah punya akun ? <Link to="/login">Masuk</Link>
          </div>
        </div>
      </div>
      <CustomBanner />
    </div>
  );
};

export default RegisterPage;
