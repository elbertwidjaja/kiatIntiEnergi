import React from "react";
import Image from "next/image";
import picture from "@/public/produksample.jpg";
import styles from "./styles.module.scss";

type ProductHeroType = {
  title: string;
  description: string;
};

function ProductHero({ title, description }: ProductHeroType) {
  return (
    <div className={styles.productContainer}>
      <div className={`${styles.productItemContainer} ${styles.vision}`}>
        <div className={styles.imageContainer}>
          <Image src={picture} alt="picture" className={styles.imageStart} />
          <Image
            src={picture}
            alt="picture"
            className={`${styles.image} ${styles.imageEnd}`}
          />
        </div>
        <div className={styles.productText}>
          <h1>{title}</h1>
          <ul>
            <li>{description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductHero;
