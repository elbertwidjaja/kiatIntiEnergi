import React from "react";
import styles from "./styles.module.scss";
import MainLayout from "@/app/components/MainLayout";
import Satisfactory from "@/app/components/Satisfactory/index";
import ProductCard from "./ProductCard";
import Image from "next/image";
import Overcome from "@/app/components/Overcome";
import Downloadpdf from "@/app/components/Downloadpdf";

const products = [
  {
    id: 1,
    name: "JF 8 P",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_JavaFilter_PVC%2FJF%208%20P.png?alt=media&token=bbab7b1a-04f3-4438-89f7-e39b3e789242",
    ukuran: "Ukuran: 21 x 110",
    material: "Material: PVC",
    flowRate: "Flow Rate (Ltr/min): 30 - 40",
    maxPressure: "Max Pressure (Bar): 2",
  },
  {
    id: 2,
    name: "JF 10 P",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_JavaFilter_PVC%2FJF%2010%20P.png?alt=media&token=eba1e4cb-f673-40fe-8482-108e16c5ca5e",
    ukuran: "Ukuran: 26 x 120",
    material: "Material: PVC",
    flowRate: "Flow Rate (Ltr/min): 40 - 60",
    maxPressure: "Max Pressure (Bar): 2.5",
  },
  {
    id: 3,
    name: "JF 12 P",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_JavaFilter_PVC%2FJF%2012%20P.png?alt=media&token=ee8b86e5-65da-49f7-a9fa-ba7c96863f3a",
    ukuran: "Ukuran: 31 x 130",
    material: "Material: PVC",
    flowRate: "Flow Rate (Ltr/min): 50 - 70",
    maxPressure: "Max Pressure (Bar): 3",
  },
  {
    id: 4,
    name: "JF 14 P",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_JavaFilter_PVC%2FJF%2014%20P.png?alt=media&token=ceb59386-5032-46e8-a68a-bee339debed3",
    ukuran: "Ukuran: 36 x 130",
    material: "Material: PVC",
    flowRate: "Flow Rate (Ltr/min): 70 - 90",
    maxPressure: "Max Pressure (Bar): 3.5",
  },
];

function JavaFilter() {
  return (
    <>
      <MainLayout>
        <div className={styles.fullWidthBg}>
          <div className={styles.heroContainer}>
            <Image
              alt="Java Filter PVC Product"
              src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_JavaFilter_PVC%2FPVC.png?alt=media&token=bb36d708-fe21-4e10-92c0-14401c578a29"
              width={500}
              height={500}
            />
            <div className={styles.heroDescriptionContainer}>
              <h1 className={styles.productMainTitle}>WATER FILTER - PVC</h1>
              <h2 className={styles.prodcutSecondTitle}>
                AIR BERSIH, <br />
                HIDUP OPTIMAL
              </h2>
              <p className={styles.productDescription}>
                Java Filter dirancang untuk mengatasi masalah air umum seperti
                bau, warna kuning, kandungan zat kapur, zat besi, dan endapan.
                Filter ini efektif meningkatkan kualitas air untuk rumah tangga
                dan industri. Dengan sistem 2-way backwash, filter PVC
                menawarkan penyaringan yang sangat efektif dan mudah
                perawatannya berkat tutup tangki sistem baut.
              </p>
              <div className={styles.buttonFlagContainer}>
                <Downloadpdf url="JavaFilter-Catalogue.pdf" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Satisfactory />
        <div className={styles.benefitsContainer}>
          <div className={styles.benefitList}>
            <ul>
              <li>Manual Backwash</li>
              <li>Tutup Tangki Sistem Baut</li>
            </ul>
          </div>
          <div className={styles.benefitList}>
            <ul>
              <li>Easy Maintenance</li>
              <li>2-Way Backwash System</li>
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
