import React from "react";
import MainLayout from "../components/MainLayout";
import img from "../../public/Frame 35767.png";
import ProductHero from "../components/ProductHero";
import VISISOLAR_DATA from "./data";
import styles from "./styles.module.scss";
import ProductCard from "../components/CardProduct/index";
import SocialMedia from "../components/SocialMedia";

function SolarJaya() {
  return (
    <MainLayout>
      <ProductHero />
      <div className={styles.productCardContainer}>
        {VISISOLAR_DATA.map((data, index) => (
          <ProductCard key={index} data={data} img={img} />
        ))}
      </div>
      <SocialMedia
        tiktokUrl="https://www.tiktok.com/@visisolar"
        instagramUrl="https://www.instagram.com/visisolar/"
        facebookUrl="https://www.facebook.com/visisolar/"
      />
    </MainLayout>
  );
}

export default SolarJaya;
