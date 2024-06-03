"use client";

import HorizontalSlider from "@/app/components/ProductSlider/HorizontalSlider";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const data = [
  {
    id: 1,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_VisiSolar%2FTeknologi%20Vacuum%20Tube.png?alt=media&token=7af198ab-5c72-4e4d-bedc-a15138ff49a6",
    description:
      "Vacuum Tube adalah kolektor penyerap panas energi matahari yang efisien dan efektif dalam segala kondisi cuaca, bahkan saat mendung. Prinsip kerjanya sederhana dan mirip dengan termos, terdiri dari dua lapisan kaca dengan ruang hampa di antaranya untuk meminimalkan kehilangan panas. Lapisan luar.",
  },
  {
    id: 2,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_VisiSolar%2FSistem%20Kerja%20Indirect.jpeg?alt=media&token=022e5ec2-1e05-4cc4-9771-b752b9116551",
    description:
      "VISI SOLAR menggunakan Indirect Pressurized System (bertekanan), di mana air dalam tangki dan vacuum tube dipanaskan langsung oleh matahari yang bisa mencapai hingga 90°C. Air panas ini kemudian memanaskan air dalam pipa spiral tembaga melalui proses perpindahan panas (Heat Transfer). Air dalam pipa tembaga kemudian didistribusikan ke saluran outlet.",
  },
  {
    id: 3,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_VisiSolar%2FPenerimaan%20Sinar%20Matahari.jpg?alt=media&token=17157bab-2296-4ffd-a1c7-21d63fb94181",
    description:
      "Dengan bentuk vacuum tube yang bulat dan melingkar, permukaan untuk menyerap energi panas matahari bisa dari berbagai sisi. Jadi, posisi matahari di pagi, siang dan sore hari, area penyerapan panas akan tetap efektif.",
  },
  {
    id: 4,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_VisiSolar%2FHeat%20Exchanger.jpg?alt=media&token=5fa124a3-a12b-4167-a835-ee3d0fe4f1ce",
    description:
      "VISI SOLAR menggunakan Copper Spiral Coil (Pipa Spiral Tembaga) sebagai Heat Exchanger yang bisa ditemukan di dalam tangki penyimpan air panas.",
  },
  {
    id: 5,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Product_VisiSolar%2FGaransi%205%20Tahun.png?alt=media&token=f0352964-50dc-433f-b767-5658e7bda4fd",
    description: "VISI SOLAR bergaransi 5 tahun untuk tangki dan vacuum tube.",
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
