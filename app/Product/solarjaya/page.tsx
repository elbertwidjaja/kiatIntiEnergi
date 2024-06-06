import React from "react";
import styles from "./styles.module.scss";
import MainLayout from "@/app/components/MainLayout";
import Satisfactory from "@/app/components/Satisfactory/index";
import ProductCard from "./ProductCard";
import Image from "next/image";
import ProductPageSlider from "./ProductPageSlider";

const products = [
  {
    id: 1,
    name: "JS 131 S",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_SolarJaya%2FJS%20131%20S.png?alt=media&token=e695450e-d102-45f7-a9b9-07f806edbdee",
    kapasitas: "Kapasitas: 130 Liter",
    pemakaian: "Pemakaian ±: 2-4 Orang",
    dimensi: "Dimensi (cm): 240 x 105 x 46",
    innerTank: "Inner Tank: Stainless Steel 316 L",
    insulasi: "Insulasi: High Density Polyurethane",
    backupHeater: "Backup Electric Heater: 500 W",
    kolektorPanel: "Kolektor Panel: Ice Tempered Glass",
    jumlahPanel: "Jumlah Panel: 1 Panel",
    materialBox: "Material Box Panel: Galvalum",
    aksesoris: "Aksesoris: ELCB, Check Valve",
  },
  {
    id: 2,
    name: "JS 151 S",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_SolarJaya%2FJS%20151%20S.png?alt=media&token=f046a446-34d4-429b-8c28-f085ddfccbc0",
    kapasitas: "Kapasitas: 150 Liter",
    pemakaian: "Pemakaian ±: 4-5 Orang",
    dimensi: "Dimensi (cm): 240 x 120 x 46",
    innerTank: "Inner Tank: Stainless Steel 316 L",
    insulasi: "Insulasi: High Density Polyurethane",
    backupHeater: "Backup Electric Heater: 800 W",
    kolektorPanel: "Kolektor Panel: Ice Tempered Glass",
    jumlahPanel: "Jumlah Panel: 1 Panel",
    materialBox: "Material Box Panel: Galvalum",
    aksesoris: "Aksesoris: ELCB, Check Valve",
  },
  {
    id: 3,
    name: "JS 302 S",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_SolarJaya%2FJS%20302%20S.png?alt=media&token=df703fbf-56d1-43df-8fbe-d1952b349129",
    kapasitas: "Kapasitas: 300 Liter",
    pemakaian: "Pemakaian ±: 5-9 Orang",
    dimensi: "Dimensi (cm): 250 x 220 x 46",
    innerTank: "Inner Tank: Stainless Steel 316 L",
    insulasi: "Insulasi: High Density Polyurethane",
    backupHeater: "Backup Electric Heater: 1500 W",
    kolektorPanel: "Kolektor Panel: Ice Tempered Glass",
    jumlahPanel: "Jumlah Panel: 2 Panel",
    materialBox: "Material Box Panel: Galvalum",
    aksesoris: "Aksesoris: ELCB, Check Valve",
  },
];

function VisiSolar() {
  return (
    <>
      <MainLayout>
        <div className={styles.fullWidthBg}>
          <div className={styles.heroContainer}>
            <Image
              alt="Solar Jaya Product"
              src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_SolarJaya%2FSOLARJAYA.png?alt=media&token=0063139c-6b4e-4feb-b75a-0ec621e2f379"
              width={500}
              height={500}
            />
            <div className={styles.heroDescriptionContainer}>
              <h1 className={styles.productMainTitle}>
                SOLAR WATER HEATER - FLAT PANEL
              </h1>
              <h2 className={styles.prodcutSecondTitle}>
                AIR PANAS GRATIS, <br />
                HEMAT BIAYA LISTRIK
              </h2>
              <p className={styles.productDescription}>
                SOLARJAYA adalah merek pemanas air tenaga surya berkualitas
                tinggi, asli buatan Indonesia, dengan model flat direct system
                yang berstandar Australia. Memiliki efisiensi penyerapan panas
                yang tinggi, menggunakan inner tank anti karat dari stainless
                steel 316 yang kokoh, dan dilengkapi garansi hingga 7 tahun.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.productPageCenter}>
          <ProductPageSlider />
        </div>
        <Satisfactory />
        <div className={styles.benefitsContainer}>
          <div className={styles.benefitList}>
            <ul>
              <li>Asli buatan Indonesia</li>
              <li>Inner tank - Stainless Steel 316</li>
              <li>Efisiensi penyerapan tinggi</li>
            </ul>
          </div>
          <div className={styles.benefitList}>
            <ul>
              <li>Bisa menghasilkan panas hingga 80°C</li>
              <li>Material tahan lama</li>
              <li>Bisa pasang di dak atau genteng</li>
            </ul>
          </div>
        </div>
        <ProductCard products={products} />
      </MainLayout>
    </>
  );
}

export default VisiSolar;
