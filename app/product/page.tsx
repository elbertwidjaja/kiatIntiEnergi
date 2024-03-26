import React from "react";
import picture from "@/public/produksample.jpg";
import styles from "./styles.module.scss";
import Image from "next/image";
import MainLayout from "../components/MainLayout";

function Product() {
  return (
    <MainLayout>
      <div className={styles.productContainer}>
        <div className={`${styles.productItemContainer} ${styles.vision}`}>
          <div className={styles.imageContainer}>
            <Image src={picture} alt="picture" className={styles.imageStart} />
            <Image src={picture} alt="picture" className={`${styles.image} ${styles.imageEnd}`} />
          </div>
          <div className={styles.productText}>
          <h1>NEWEST PRODUCT OF 2024</h1>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos facilis distinctio sed numquam corporis voluptatum, voluptate non error. Atque, voluptatem explicabo ipsam saepe, quia vitae, tempore dolorem nulla aut facilis obcaecati hic illo? Incidunt deleniti aspernatur ut, ullam illum cum accusantium! Quae in dolorum magni delectus corrupti qui.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laborum neque sequi quibusdam. Facere, dolorum ducimus? Officiis reprehenderit perferendis consectetur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, recusandae?
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.productItemContainer} ${styles.reverse}`}>
          <div className={styles.productText}>
            <h1>NEW INOVATIVE FROM USA</h1>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos facilis distinctio sed numquam corporis voluptatum, voluptate non error. Atque, voluptatem explicabo ipsam saepe, quia vitae, tempore dolorem nulla aut facilis obcaecati hic illo? Incidunt deleniti aspernatur ut, ullam illum cum accusantium! Quae in dolorum magni delectus corrupti qui.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laborum neque sequi quibusdam. Facere, dolorum ducimus? Officiis reprehenderit perferendis consectetur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, recusandae?
              </li>
            </ul>
          </div>

          <div className={styles.imageContainer}>
            <Image src={picture} alt="picture" className={styles.imageEnd} />
            <Image src={picture} alt="picture" className={`${styles.imageStart}`} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Product;
