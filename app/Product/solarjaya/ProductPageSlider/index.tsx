"use client";

import HorizontalSlider from "@/app/components/ProductSlider/HorizontalSlider";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const data = [
  {
    id: 1,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_SolarJaya%2FCara%20Kerja%20Sistem%20Direct.png?alt=media&token=f2bd785c-06ab-4568-ab62-c12306aaf377",
    description:
      "SOLARJAYA menggunakan sistem direct di mana air langsung dipanaskan oleh sinar matahari tanpa menggunakan perantara seperti heat exchanger. Dalam sistem ini, air dingin dialirkan langsung ke dalam tangki pemanas yang terpapar sinar matahari, dan kemudian dipanaskan sebelum didistribusikan ke saluran air panas.",
  },
  {
    id: 2,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Frame%2035778.png?alt=media&token=41d06a2e-9a34-493c-a414-6947ea7bb213",
    description:
      "Prinsip thermosiphon pada solar water heater bekerja dengan aliran alami air karena perbedaan suhu. Saat air dalam kolektor surya dipanaskan oleh sinar matahari, air panas naik ke atas ke tangki penyimpanan, sementara air dingin dari tangki turun ke kolektor untuk dipanaskan lagi. Proses ini terjadi tanpa memerlukan pompa atau listrik, membuat sistem lebih sederhana dan hemat energi.",
  },
  {
    id: 3,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_SolarJaya%2FGaransi%207%20Tahun.png?alt=media&token=76dd6147-96c5-4279-a80a-7c1a3af2e249",
    description: "SOLARJAYA bergaransi hingga 7 tahun untuk tangki dan panel.",
  },
];

function ProductPageSlider() {
  const renderItem = (item) => {
    return (
      <div className={styles.productCardContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={item.image}
            width={500}
            height={500}
            alt="Product Image"
          />
        </div>
        <div className={styles.productDescription}>
          <p>{item.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.productSliderContainer}>
      <HorizontalSlider
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem(item)}
        data={data}
      />
    </div>
  );
}

export default ProductPageSlider;
