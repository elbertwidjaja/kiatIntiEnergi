import React from "react";
import styles from "./styles.module.scss";
import MainLayout from "@/app/components/MainLayout";
import Satisfactory from "@/app/components/Satisfactory/index";
import ProductCard from "./ProductCard";
import Image from "next/image";
import Overcome from "@/app/components/Overcome";

const products = [
  {
    id: 1,
    name: "JF 10 FRP Manual",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_JavaFilter_FRP%2FJF%2010%20FRP%20-%20Manual.png?alt=media&token=6dce8ade-fe1d-45f6-a437-7e807e244b3e",
    ukuran: "Ukuran: 25 x 135",
    material: "Material: FRP",
    flowRate: "Flow Rate (Ltr/min): 35 - 40",
    maxPressure: "Max Pressure (Bar): 4",
  },
  {
    id: 2,
    name: "JF 12 FRP Manual",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_JavaFilter_FRP%2FJF%2012%20FRP%20-%20Manual.png?alt=media&token=b7474075-a518-4e57-b1ab-f42e5511ea5c",
    ukuran: "Ukuran: 30 x 130",
    material: "Material: FRP",
    flowRate: "Flow Rate (Ltr/min): 50 - 70",
    maxPressure: "Max Pressure (Bar): 5",
  },
  // {
  //   id: 3,
  //   name: "JF 14 FRP Manual",
  //   image: "",
  //   ukuran: "Ukuran: 35 x 165",
  //   material: "Material: FRP",
  //   flowRate: "Flow Rate (Ltr/min): 70 - 80",
  //   maxPressure: "Max Pressure (Bar): 5",
  // },
  {
    id: 4,
    name: "JF 10 FRP Matic",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_JavaFilter_FRP%2FJF%2010%20FRP%20-%20Matic.png?alt=media&token=a6736f9a-85bd-4872-b49e-c1591219bc77",
    ukuran: "Ukuran: 25 x 135",
    material: "Material: FRP",
    flowRate: "Flow Rate (Ltr/min): 35 - 40",
    maxPressure: "Max Pressure (Bar): 4",
  },
  {
    id: 5,
    name: "JF 12 FRP Matic",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_JavaFilter_FRP%2FJF%2012%20FRP%20-%20Matic.png?alt=media&token=cbfa3676-7ef8-4152-ada2-c0ccb605a1a6",
    ukuran: "Ukuran: 30 x 130",
    material: "Material: FRP",
    flowRate: "Flow Rate (Ltr/min): 50 - 70",
    maxPressure: "Max Pressure (Bar): 5",
  },
  // {
  //   id: 6,
  //   name: "JF 14 FRP Matic",
  //   image: "",
  //   ukuran: "Ukuran: 35 x 165",
  //   material: "Material: FRP",
  //   flowRate: "Flow Rate (Ltr/min): 70 - 80",
  //   maxPressure: "Max Pressure (Bar): 5",
  // },
];

function JavaFilter() {
  return (
    <>
      <MainLayout>
        <div className={styles.fullWidthBg}>
          <div className={styles.heroContainer}>
            <Image
              alt="Java Filter FRP Product"
              src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_JavaFilter_FRP%2FFRP.png?alt=media&token=767e545e-df27-4ddc-918d-406f0567f3d4"
              width={500}
              height={500}
            />
            <div className={styles.heroDescriptionContainer}>
              <h1 className={styles.productMainTitle}>WATER FILTER - FRP</h1>
              <h2 className={styles.prodcutSecondTitle}>
                AIR BERSIH, <br />
                HIDUP OPTIMAL
              </h2>
              <p className={styles.productDescription}>
                Java Filter dirancang untuk mengatasi masalah air yang umum
                seperti air bau dan kuning, mengandung zat kapur, besi, dan
                endapan. Filter ini efektif untuk meningkatkan kualitas air di
                rumah tangga dan industri. FRP adalah Fiberglass Reinforced
                Plastic (FRP) yang dikenal mempunyai kekuatan, dan daya tahan
              </p>
            </div>
          </div>
        </div>
        <hr />
        <Satisfactory />
        <div className={styles.benefitsContainer}>
          <div className={styles.benefitList}>
            <ul>
              <li>Automatic / Manual Backwash</li>
              <li>Tahan Tekanan Tinggi</li>
            </ul>
          </div>
          <div className={styles.benefitList}>
            <ul>
              <li>Easy Maintenance</li>
              <li>Penyaringan Efektif</li>
            </ul>
          </div>
        </div>
        <Overcome />
        <ProductCard products={products} />
      </MainLayout>
    </>
  );
}

export default JavaFilter;
