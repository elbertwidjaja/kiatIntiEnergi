import React from "react";
import MainLayout from "../components/MainLayout";
import ProductHero from "../components/ProductHero";
import styles from "./styles.module.scss";
import SocialMedia from "../components/SocialMedia";
import java_filter_advantage from "@/public/java_filter_advantage.jpeg";
import Image from "next/image";

function SolarJaya() {
  return (
    <MainLayout>
      <ProductHero
        title={"Java Filter"}
        description={
          "JAVA FILTER, hasil rebranding dari JAYA FRESH, adalah brand kami yang berfokus pada Water Filter, Water Treatment, dan Reverse Osmosis. Kami berkomitmen untuk mengatasi masalah air seperti Zat Besi (Fe), Mangan (Mn), Zat Kapur, kotoran, bau, rasa, serta mengurangi kontaminan dalam air dengan menyesuaikan media filter air dengan kondisi air pelanggan."
        }
      />
      <h1 className={styles.advantageTitle}>
        Keunggulan Menggunakan Java Filter
      </h1>
      <section className={styles.principleContainer}>
        <div className={styles.principle}>
          <Image
            src={java_filter_advantage}
            alt="Java Filter Advantage"
            width={600}
          />
        </div>
        <div className={styles.principleDescription}>
          <ul>
            <li>Berkualitas & Berstandar Tinggi</li>
            <li>Garansi hingga 1 Tahun</li>
            <li>Asli Buatan Indonesia</li>
            <li>Easy Maintenance</li>
            <li>Menyediakan Solusi Air Sesuai dengan Kondisi Air Pelanggan</li>
          </ul>
        </div>
      </section>
      <SocialMedia
        tiktokUrl="httpshttps://www.tiktok.com/@javafilter_official"
        instagramUrl="https://www.instagram.com/javafilter/"
        facebookUrl="https://www.instagram.com/javafilter/"
      />
    </MainLayout>
  );
}

export default SolarJaya;
