import React from "react";
import picture from "@/public/Frame 35769.png";
import styles from "./styles.module.scss";
import Image from "next/image";
import MainLayout from "../components/MainLayout";
import ProductCard from "../components/productCard";
import img from "../../public/Frame 35767.png"
import DescComponent from "../components/productCard/DescComponent";
import { solarjaya } from "@/data/productData";


function SolarJaya() {
  return (
    <MainLayout>
      <div className={styles.productContainer}>
        <div className={styles.firstContent}>
          <h1>Our Popular Product</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            quisquam dolore molestiae sint ex sunt odit dolores debitis omnis
            nisi!
          </p>

          <div className={styles.imageContainer}>
            <div className={styles.productCardContainer}>
              <Image src={img} alt="pic" className={styles.image}></Image>

              <div className={styles.spec}>
                <div className={styles.descComponent}>
                  {solarjaya.map(({ title, desc }, index) => {
                    return (
                      <DescComponent key={index} title={title} desc={desc} />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className={styles.productCardContainer}>
              <Image src={img} alt="pic" className={styles.image}></Image>

              <div className={styles.spec}>
                <div className={styles.descComponent}>
                  {solarjaya.map(({ title, desc }, index) => {
                    return (
                      <DescComponent key={index} title={title} desc={desc} />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className={styles.productCardContainer}>
              <Image src={img} alt="pic" className={styles.image}></Image>

              <div className={styles.spec}>
                <div className={styles.descComponent}>
                  {solarjaya.map(({ title, desc }, index) => {
                    return (
                      <DescComponent key={index} title={title} desc={desc} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default SolarJaya;
