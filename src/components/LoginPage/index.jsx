import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import CustomBanner from "../assets/CustomBanner";
import google from "../../assets/Google.png";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const [login, setLogin] = React.useState(false);
  if (login) return <Navigate to="/maps" />;
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.form}>
          <div className={styles.login}>Log in</div>
          <input className={styles.input} placeholder="Email" type="text" />
          <input
            className={styles.input}
            placeholder="Password"
            type="password"
          />
          <div className={styles.text1}>Lupa sandi?</div>
          <div
            className={styles.btn}
            onClick={() => {
              setLogin(true);
            }}
          >
            Login
          </div>
          <Link className={styles.text2} to="/register">
            Belum punya akun
          </Link>
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
