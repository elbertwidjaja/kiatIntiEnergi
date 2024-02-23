import React from "react";
import Image from "next/image";
import sample from "../../../public/produksample.jpg";
import styles from "./styles.module.scss";

function Gallery() {
  return (
    <div className={styles.galleryContainer}>
      <h2>Galeri Inti Solar</h2>
      <div className={styles.galleryPicture}>
        <Image src={sample} alt="produk sample" height={300} />
        <Image src={sample} alt="produk sample" height={300} />
        <Image src={sample} alt="produk sample" height={300} />
        <Image src={sample} alt="produk sample" height={300} />
      </div>
    </div>
  );
}

export default Gallery;
