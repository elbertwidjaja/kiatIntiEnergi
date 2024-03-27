import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

function GalleryCard({imageURL, children}) {
  return (
    <div className={styles.galleryCardContainer}>
      <div className={styles.galleryCardPicture}>
        <Image src={imageURL} alt="produk sample" className={styles.image}/>
      </div>
      <h2>{children}</h2>
    </div>
  );
}

export default GalleryCard;
