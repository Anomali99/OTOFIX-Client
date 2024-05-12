import React from "react";
import CustomNavbar from "../assets/CustomNavbar";
import styles from "./index.module.css";
import otofix_icon from "../../assets/otofix-icon.png";
import otofix_car from "../../assets/otofix-car.png";
import mas_mas from "../../assets/mas-mas-otofix.png";
import derek_icon from "../../assets/derek-icon.png";
import map_icon from "../../assets/map-icon.png";
import com_icon from "../../assets/com-icon.png";

const LandingPage = () => {
  return (
    <>
      <CustomNavbar />
      <div className={styles.sesion}>
        <img className={styles.img_bg} src={otofix_icon} alt="" />
        <img className={styles.img_car} src={otofix_car} alt="" />
        <div className={styles.caption}>
          Temukan Bengkel Terdekat, Perbaiki Kendaraan Anda dengan Cepat!
        </div>
        <div className={styles.btn}>Mulai Sekarang</div>
      </div>
      <div className={styles.sesion_intro}>
        <img className={styles.mas_mas} src={mas_mas} alt="" />
        <div className={styles.mas_mas_caption}>
          Kenalin nih, Otofix. Menyelesaikan masalah kendaraan anda
        </div>
        <div className={styles.text}>
          Kami memahami bahwa waktu adalah hal yang berharga. Dengan Otofix,
          Anda dapat menghemat waktu dengan mengakses informasi tentang bengkel
          terdekat dan progres perbaikan kendaraan Anda{" "}
        </div>
      </div>
      <div className={styles.why}>
        <div className={styles.why_title}>Kenapa Otofix?</div>
        <div className={styles.list}>
          <div className={styles.container}>
            <img src={com_icon} alt="" />
            <div className={styles.title}>
              Monitoring Progres Perbaikan Kendaraan
            </div>
            <div className={styles.ket}>
              Dengan fitur pencarian bengkel. Anda dapat dengan mudah menemukan
              bengkel yang sesuai dengan kebutuhan Anda, baik itu untuk
              perbaikan darurat maupun servis berkala
            </div>
          </div>
          <div className={styles.container}>
            <img src={map_icon} alt="" />
            <div className={styles.title}>
              Membatu Menemukan Bengkel Terdekat{" "}
            </div>
            <div className={styles.ket}>
              Anda dapat mengikuti setiap langkah perbaikan mulai dari
              penerimaan kendaraan hingga penyelesaian, memberikan Anda rasa
              tenang dan kepercayaan bahwa kendaraan Anda dalam perawatan yang
              tepat.
            </div>
          </div>
          <div className={styles.container}>
            <img src={derek_icon} alt="" />
            <div className={styles.title}>Layanan Penjemputan Kendaraan </div>
            <div className={styles.ket}>
              Kami mengerti bahwa kendaraan Anda kadang mengalami masalah di
              lokasi yang sulit dijangkau bengkel. Oleh karena itu, kami siap
              dengan layanan penjemputan, memastikan perbaikan kendaraan Anda
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
