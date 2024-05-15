"use client";

import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import HorizontalSlider from "../HorizontalSlider";

type ItemType = {
  id: number;
  src: string;
  alt: string;
};

const data = [
  {
    id: 1,
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Hero%20Background%20Contoh%20(1).jpg?alt=media&token=6b6e9b0e-3800-478f-a1b3-783848206760",
    alt: "testing_1",
  },
  {
    id: 2,
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Hero%20Background%20Contoh%20(1).jpg?alt=media&token=6b6e9b0e-3800-478f-a1b3-783848206760",
    alt: "testing_2",
  },
  {
    id: 2,
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Hero%20Background%20Contoh%20(1).jpg?alt=media&token=6b6e9b0e-3800-478f-a1b3-783848206760",
    alt: "testing_2",
  },
  {
    id: 2,
    src: "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Hero%20Background%20Contoh%20(1).jpg?alt=media&token=6b6e9b0e-3800-478f-a1b3-783848206760",
    alt: "testing_2",
  },
];

function BannerHome() {
  return (
    <div className={styles.overlay}>
      <HorizontalSlider
        gap={16}
        data={data}
        keyExtractor={(item: ItemType) => item.id}
        renderItem={({ item }: { item: ItemType }) => (
          <Image width={1920} height={1080} src={item.src} alt={item.alt} />
        )}
      />
    </div>
  );
}

export default BannerHome;
