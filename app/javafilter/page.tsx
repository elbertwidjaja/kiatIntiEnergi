import React from "react";
import MainLayout from "../components/MainLayout";
import img from "../../public/Frame 35767.png";
import ProductHero from "../components/ProductHero";
import JAVAFILTER_DATA from "./data";
import styles from "./styles.module.scss";
import ProductCard from "../components/CardProduct/index";
import SocialMedia from "../components/SocialMedia";

function SolarJaya() {
  return (
    <MainLayout>
      <ProductHero />
      <div className={styles.productCardContainer}>
        {JAVAFILTER_DATA.map((data, index) => (
          <ProductCard key={index} data={data} img={img} />
        ))}
      </div>
      <SocialMedia
        tiktokUrl="httpshttps://www.tiktok.com/@javafilter_official"
        instagramUrl="https://www.instagram.com/javafilter/"
        facebookUrl="https://www.instagram.com/javafilter/"
      />
    </MainLayout>
  );
}

export default SolarJaya;
