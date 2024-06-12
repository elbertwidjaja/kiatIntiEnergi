import React from "react";
import styles from "./styles.module.scss";
import MainLayout from "../components/MainLayout";
import SurveyCard from "./SurveyCard";
import Image from "next/image";

function layanan() {
  return (
    <MainLayout>
      <div className={styles.heroSection}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Hero%2FHero%20Layanan%20Kami.png?alt=media&token=54a66744-de15-4331-ab99-d42afec452ab"
          alt="Poster Layanan"
          layout="fill"
        />
      </div>
      <h2 className={styles.title}>Layanan Kami</h2>
      <div className={styles.surveyContainer}>
        <SurveyCard />
      </div>
      <h2 className={styles.title}>Gallery</h2>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/layanan%2F38.png?alt=media&token=698f4d7a-8c01-46dc-9b41-5d159b7461b0"
              alt="Layanan 1"
              width={500}
              height={300}
            />
          </div>
          <div className={styles.gridItem}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/layanan%2F39.png?alt=media&token=196875e6-cc40-4ebc-9561-a02e40c75b56"
              alt="Layanan 2"
              width={500}
              height={300}
            />
          </div>
          <div className={styles.gridItem}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/layanan%2F40.png?alt=media&token=18090e61-b96f-4546-a8f4-47ef5a867054"
              alt="Layanan 3"
              width={500}
              height={300}
            />
          </div>
          <div className={styles.gridItem}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/layanan%2F41.png?alt=media&token=a0071b61-8724-4e94-b4ec-fe94da796895"
              alt="Layanan 4"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default layanan;
