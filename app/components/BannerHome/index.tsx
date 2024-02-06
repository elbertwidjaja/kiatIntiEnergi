import React from "react";
import jumbotron from "../../../public/Website Homepage (Top).png";
import styles from "./styles.module.scss";
import Image from "next/image";

function BannerHome() {
  // Set a target height between 250px and 300px
  const targetHeight = Math.floor(Math.random() * 500) + 250;

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
      <div className={styles.bannerText}>Your Banner Text</div>
    </div>
  );
}

export default BannerHome;
