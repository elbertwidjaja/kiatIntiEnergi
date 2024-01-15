import React from "react";
import styles from "./styles.module.scss";

function BannerHome() {
  return (
    <div className={styles.overlay}>
      <img src={} alt="Banner" className={styles.bannerImage} />
      <div className={styles.bannerText}>Your Banner Text</div>
    </div>
  );
}

export default BannerHome;
