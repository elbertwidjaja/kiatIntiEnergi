import React from "react";
import styles from "./styles.module.scss";

function Gallery() {
  return (
    <div className={styles.galleryContainer}>
      <h2>Galeri Inti Solar</h2>
      <p>Pemanas air real estate ,perumahan, industri dan komersial</p>
      <div className={styles.galleryPicture}></div>
    </div>
  );
}

export default Gallery;
