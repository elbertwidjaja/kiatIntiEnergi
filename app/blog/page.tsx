import React from "react";
import Image from "next/image";
import MainLayout from "../components/MainLayout";
import styles from "./styles.module.scss";

function blog() {
  return (
    <MainLayout>
      <div className={styles.heroSection}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Hero%2FHero%20Blog.png?alt=media&token=b41eb002-7dc3-499f-8636-951b3ec60527"
          alt="Poster Blog"
          layout="fill"
        />
      </div>
      <h1 className={styles.showCase}>Pameran</h1>
      <div className={styles.blogCard}>
        <h2 className={styles.blogTitle}>INDO BUILD TECH 2023</h2>
        <h3 className={styles.blogTitle}>
          Indonesia Convention Exhibition - ICE BSD City, Tangerang
        </h3>
        <p className={styles.blogDate}>05 - 09 Juli 2023</p>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Blog%2FIndo%20Build%20Tech.png?alt=media&token=e56410e1-1880-4256-9a9a-0ee2895bec72"
              alt="IndoBuild Tech 1"
              width={500}
              height={300}
            />
          </div>
          <div className={styles.gridItem}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Blog%2FIndo%20Build%20Tech%20(2).png?alt=media&token=b4883b46-7021-4a59-963e-db6e0e4cc8c3"
              alt="IndoBuild Tech 2"
              width={500}
              height={300}
            />
          </div>
          <div className={styles.gridItem}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Blog%2FIndo%20Build%20Tech%20(3).png?alt=media&token=dc4ca471-88cf-45e1-8468-aeaf7031800d"
              alt="IndoBuild Tech 3"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>

      <div className={styles.blogCard}>
        <h2 className={styles.blogTitle}>PAMERAN</h2>
        <h3 className={styles.blogTitle}>
          Food Plaza Fresh Market - PIK, Jakarta Utara
        </h3>
        <p className={styles.blogDate}>20 - 26 November 2023</p>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Blog%2FFresh%20Market%20PIK.png?alt=media&token=b81246ae-c938-4504-bf38-b9efbc247e2e"
              alt="Fresh Market 1"
              width={500}
              height={300}
            />
          </div>
          <div className={styles.gridItem}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Blog%2FFresh%20Market%20PIK%20(2).png?alt=media&token=ceb2a501-849e-4c00-9fd2-95fd3d4a033d"
              alt="Fresh Market 2"
              width={500}
              height={300}
            />
          </div>
          <div className={styles.gridItem}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Blog%2FFresh%20Market%20PIK%20(3).png?alt=media&token=9e2f3ddd-73f9-4699-bb4c-bef1f17c118d"
              alt="Fresh Market 3"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default blog;
