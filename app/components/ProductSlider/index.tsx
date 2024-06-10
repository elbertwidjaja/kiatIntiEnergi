"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import HorizontalSlider from "./HorizontalSlider";
import styles from "./styles.module.scss";

const DATA = [
  {
    id: 1,
    name: "VT-100 PR",
    location: "Jakarta Timur",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/ProductSlider%2FVT-100%20PR%20-%20Duren%20Sawit%2C%20Jakarta%20Timur%20(08%20Feb%20_24)(1).jpg?alt=media&token=b71a9171-72fe-4fd3-81a4-774e6c3f7d2b",
  },
  {
    id: 2,
    name: "VT-200 PR",
    location: "Jakarta Utara",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/ProductSlider%2FVT-200%20PR%20(2)(1).png?alt=media&token=106a66be-a462-42a2-9ab4-bff0e07f5f17",
  },
  {
    id: 3,
    name: "JF 10 P",
    location: "Jakarta Barat",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/ProductSlider%2FJF%2010%20P%20%3D%20Kembangan%2C%20Jakarat%20Barat.png?alt=media&token=747e5feb-b4ce-487b-bfd4-07e100e12b9b",
  },
  {
    id: 4,
    name: "JF 10 FRP",
    location: "Jakarta Barat",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/ProductSlider%2FJF%2010%20FRP%20Matic%20x2%20%3D%20Joglo%2C%20Jakarta%20Barat%20(31%20Aug%20_23).png?alt=media&token=22ed064f-e5f3-485f-8513-3e9a11dadd5d",
  },
  {
    id: 5,
    name: "JS 151 S",
    location: "Jakarta Timur",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/ProductSlider%2FJS%20151%20S%20Cakung%2C%20Jakarta%20Timur.png?alt=media&token=235131a8-581c-4251-8d61-d5f34af95a04",
  },
  {
    id: 6,
    name: "JS 302 S",
    location: "Lampung",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/ProductSlider%2FJS%20302%20S%20Bandar%20Lampung%2C%20Lampung.png?alt=media&token=7ef06124-683e-40c9-a5a6-4b11a5c93c3a",
  },
];

const ProductSlider = () => {
  const renderItem = ({ item }) => (
    <div className={styles.card}>
      <img src={item.imgUrl} alt={item.title} className={styles.image} />
      <p className={styles.name}>{item.name}</p>
      <p className={styles.name}>{item.location}</p>
    </div>
  );

  return (
    <div className={styles.HorizontalSliderContainer}>
      <HorizontalSlider
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        gap={24}
      />
    </div>
  );
};

export default ProductSlider;
