import React from "react";
import MainLayout from "../components/MainLayout";
import img from "../../public/Frame 35767.png";
import ProductCard from "../components/ProductCard";
import ProductHero from "./ProductHero";
import SOLARJAYA_DATA from "./data";
import styles from "./styles.module.scss";

function SolarJaya() {
  return (
    <MainLayout>
      <ProductHero />
      <div className={styles.productCardContainer}>
        {SOLARJAYA_DATA.map((data, index) => (
          <ProductCard key={index} data={data} img={img} />
        ))}
      </div>
    </MainLayout>
  );
}

export default SolarJaya;
