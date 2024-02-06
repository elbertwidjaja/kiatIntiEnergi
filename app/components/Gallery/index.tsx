import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

function Gallery() {
  return (
    <div className={styles.galleryContainer}>
      <h2>Galeri Inti Solar</h2>
      <p>Pemanas air real estate ,perumahan, industri dan komersial</p>
      <div className={styles.galleryPicture}>
        <Image />
      </div>
    </div>
  );
}

export default Gallery;
