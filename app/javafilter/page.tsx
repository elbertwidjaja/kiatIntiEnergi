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
      <ProductHero
        title={"Java Filter"}
        description={
          "JAVA FILTER, hasil rebranding dari JAYA FRESH, adalah brand kami yang berfokus pada Water Filter, Water Treatment, dan Reverse Osmosis. Kami berkomitmen untuk mengatasi masalah air seperti Zat Besi (Fe), Mangan (Mn), Zat Kapur, kotoran, bau, rasa, serta mengurangi kontaminan dalam air dengan menyesuaikan media filter air dengan kondisi air pelanggan."
        }
      />
      <SocialMedia
        tiktokUrl="httpshttps://www.tiktok.com/@javafilter_official"
        instagramUrl="https://www.instagram.com/javafilter/"
        facebookUrl="https://www.instagram.com/javafilter/"
      />
    </MainLayout>
  );
}

export default SolarJaya;
