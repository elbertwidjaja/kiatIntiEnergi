import React from "react";
import jumbotron from "../../../public/Website Homepage (Top).png";
import styles from "./styles.module.scss";
import Image from "next/image";

function BannerHome() {
  const targetHeight = Math.floor(Math.random() * 500) + 350;

  return (
    <div className={styles.overlay}>
      <div
        className={styles.imageContainer}
        style={{ height: `${targetHeight}px` }}
      >
        <Image
          src={jumbotron}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className={styles.bannerText}>
        <h1>Temukan Solusi Air Panas & Air Bersih</h1>
        <span>Cocok untuk kebutuhan rumah, komersial, industri</span>
      </div>
    </div>
  );
}

export default BannerHome;
