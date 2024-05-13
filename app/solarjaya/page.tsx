import React from "react";
import MainLayout from "../components/MainLayout";
import img from "../../public/Frame 35767.png";
import ProductHero from "../components/ProductHero";
import SOLARJAYA_DATA from "./data";
import styles from "./styles.module.scss";
import ProductCard from "../components/CardProduct/index";
import SocialMedia from "../components/SocialMedia";
import solarjaya_working_principle from "@/public/how-solarjaya-work.jpeg";
import Image from "next/image";

function SolarJaya() {
  return (
    <MainLayout>
      <ProductHero
        title="Solar Jaya"
        description=" SOLARJAYA adalah brand andalan kami dalam Solar Water Heater (Model Flat - Direct System) dengan standar Australia sejak 2005. Produk ini dibanggakan karena terbuat dari komponen berkualitas tinggi yang diproduksi secara lokal di Indonesia."
      />
      <h1 className={styles.principleTitle}>Bagaimana Solar Jaya Berkerja</h1>
      <section className={styles.principleContainer}>
        <div className={styles.principle}>
          <Image
            src={solarjaya_working_principle}
            alt="how solar jaya work"
            width={600}
          />
        </div>
        <div className={styles.principleDescription}>
          <ul>
            <li>Berkualitas & Berstandar Tinggi</li>
            <li>Garansi hingga 7 Tahun</li>
            <li>Asli Buatan Indonesia</li>
            <li>Australian Standard - Direct System</li>
            <li>Bisa Menghasilkan Panas hingga 80°C</li>
            <li>Anti-Karat (Inner Tank SS316L)</li>
          </ul>
        </div>
      </section>
      <div className={styles.productCardContainer}>
        {SOLARJAYA_DATA.map((data, index) => (
          <ProductCard key={index} data={data} img={img} />
        ))}
      </div>
      <SocialMedia
        tiktokUrl="https://www.tiktok.com/@solarjayaofficial"
        instagramUrl="https://www.instagram.com/solarjaya_official/"
        facebookUrl="https://www.facebook.com/officialsolarjaya/"
      />
    </MainLayout>
  );
}

export default SolarJaya;
