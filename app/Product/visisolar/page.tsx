import React from "react";
import styles from "./styles.module.scss";
import MainLayout from "@/app/components/MainLayout";
import Satisfactory from "@/app/components/Satisfactory/index";
import ProductCard from "@/app/components/ProductCard";
import Image from "next/image";
import ProductPageSlider from "./ProductPageSlider";
import PictureGrid from "./PictureGrid";
import Downloadpdf from "@/app/components/Downloadpdf";

const products = [
  {
    id: 1,
    name: "VT-100 PR",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_VisiSolar%2FVT-100%20PR.png?alt=media&token=38d449cd-6549-41ea-8c85-dce0b4ce9e52",
    kapasitas: "Kapasitas: 100 Liter",
    pemakaian: "Pemakaian ±: 2-3 Orang",
    dimensi: "Dimensi (cm): 95 x 190",
    innerTank: "Inner Tank: Stainless Steel SUS304 2B",
    outerTank: "Outer Tank: Galvanised Steel",
    Insulasi: "Insulasi: Polyurethane",
    StrukturRangka: "Struktur Rangka: Galvanised Steel",
    BackupHeater: "Backup Heater: 500W",
    aksesoris: "Aksesoris: ELCB",
  },
  {
    id: 2,
    name: "VT-120 PR",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_VisiSolar%2FVT-120%20PR.png?alt=media&token=9929132a-93e4-418b-aafd-6037f403eef1",
    kapasitas: "Kapasitas: 120 Liter",
    pemakaian: "Pemakaian ±: 2-4 Orang",
    dimensi: "Dimensi (cm): 100 x 190",
    innerTank: "Inner Tank: Stainless Steel SUS304 2B",
    outerTank: "Outer Tank: Galvanised Steel",
    Insulasi: "Insulasi: Polyurethane",
    StrukturRangka: "Struktur Rangka: Galvanised Steel",
    BackupHeater: "Backup Heater: 500W",
    aksesoris: "Aksesoris: ELCB",
  },
  {
    id: 3,
    name: "VT-150 PR",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_VisiSolar%2FVT-150%20PR.png?alt=media&token=9adf500e-37b7-4aa6-8888-1aac2debac51",
    kapasitas: "Kapasitas: 150 Liter",
    pemakaian: "Pemakaian ±: 3-5 Orang",
    dimensi: "Dimensi (cm): 125 x 190",
    innerTank: "Inner Tank: Stainless Steel SUS304 2B",
    outerTank: "Outer Tank: Galvanised Steel",
    Insulasi: "Insulasi: Polyurethane",
    StrukturRangka: "Struktur Rangka: Galvanised Steel",
    BackupHeater: "Backup Heater: 800W",
    aksesoris: "Aksesoris: ELCB",
  },
  {
    id: 4,
    name: "VT-200 PR",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_VisiSolar%2FVT-200%20PR.png?alt=media&token=0c883805-9141-45e3-8b52-c15d7e906b3f",
    kapasitas: "Kapasitas: 200 Liter",
    pemakaian: "Pemakaian ±: 4-6 Orang",
    dimensi: "Dimensi (cm): 160 x 200",
    innerTank: "Inner Tank: Stainless Steel SUS304 2B",
    outerTank: "Outer Tank: Galvanised Steel",
    Insulasi: "Insulasi: Polyurethane",
    StrukturRangka: "Struktur Rangka: Galvanised Steel",
    BackupHeater: "Backup Heater: 1000W",
    aksesoris: "Aksesoris: ELCB",
  },
  {
    id: 5,
    name: "VT-300 PR",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_VisiSolar%2FVT-300%20PR.png?alt=media&token=3ab4574e-2c52-46ef-9224-d017d9fe2877",
    kapasitas: "Kapasitas: 300 Liter",
    pemakaian: "Pemakaian ±: 6-8 Orang",
    dimensi: "Dimensi (cm): 240 x 220",
    innerTank: "Inner Tank: Stainless Steel SUS304 2B",
    outerTank: "Outer Tank: Galvanised Steel",
    Insulasi: "Insulasi: Polyurethane",
    StrukturRangka: "Struktur Rangka: Galvanised Steel",
    BackupHeater: "Backup Heater: 1500W",
    aksesoris: "Aksesoris: ELCB",
  },
];

function VisiSolar() {
  return (
    <>
      <MainLayout>
        <div className={styles.fullWidthBg}>
          <div className={styles.heroContainer}>
            <Image
              alt="Visi Solar Product"
              src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Brand%20Kami%2Fvisi_solar_productMain.png?alt=media&token=a707fdc5-1ada-4f38-b072-4d274bf2c91f"
              width={500}
              height={500}
            />
            <div className={styles.heroDescriptionContainer}>
              <h1 className={styles.productMainTitle}>
                SOLAR WATER HEATER - VACUUM TUBE
              </h1>
              <h2 className={styles.prodcutSecondTitle}>
                MANDI AIR PANAS TANPA LISTRIK
              </h2>
              <p className={styles.productDescription}>
                VISI SOLAR adalah merek pemanas air tenaga surya sistem indirect
                (spiral coil) dengan efisiensi penyerapan panas tinggi dan minim
                heat loss melalui teknologi vacuum tube. Menggunakan inner tank
                stainless steel 304, desain modern, dan standar kualitas Jerman,
                serta garansi 5 tahun.
              </p>
              <div className={styles.buttonFlagContainer}>
                <Downloadpdf url="VisiSolar-Catalogue.pdf" />
                <div className={styles.flagContainer}>
                  <Image
                    width={100}
                    height={100}
                    alt="Germany Flag"
                    src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Logo%2F27101.jpg?alt=media&token=1e6f14a1-dde7-4f20-81e4-311c5e80ebf8"
                  />
                  <p className={styles.germanStandard}>German Standard</p>
                </div>
              </div>
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
              <li>Heat loss sangat minim</li>
              <li>Inner tank - Stainless Steel 304</li>
              <li>Efisiensi penyerapan tinggi</li>
            </ul>
          </div>
          <div className={styles.benefitList}>
            <ul>
              <li>Bisa menghasilkan panas hingga 90°C</li>
              <li>
                Bisa menyerap energi matahari walaupun cuaca tidak terlalu panas
              </li>
              <li>Bisa pasang di dak atau genteng</li>
            </ul>
          </div>
        </div>
        <ProductCard products={products} />
        <PictureGrid />
      </MainLayout>
    </>
  );
}

export default VisiSolar;
