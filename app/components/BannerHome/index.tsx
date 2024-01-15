import React from "react";
import jumbotron from "../../../public/jumbotron.jpeg";
import styles from "./styles.module.scss";
import Image from "next/image";

function BannerHome() {
  return (
    <div className={styles.overlay}>
      <Image
        src={jumbotron}
        alt="Banner"
        // height={500}
        // width={500}
        loading="lazy"
        fill={true}
      />
      <div className={styles.bannerText}>Your Banner TextI</div>
    </div>
  );
}

export default BannerHome;
