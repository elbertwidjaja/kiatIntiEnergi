import React from "react";
import styles from "./styles.module.scss";
import MainLayout from "../../components/MainLayout";
import GalleryCard from "../../components/GalleryCard";
import { solarJayaImage } from "@/data/galleryImage";

function SolarJaya() {
  return (
    <MainLayout>
      <div className={styles.galleryContainer}>
        {solarJayaImage.map((imageData, index) => (
          <GalleryCard key={index} imageURL={imageData.imageURL}>{imageData.desc}</GalleryCard>
        ))}
      </div>

    </MainLayout>
  );
}

export default SolarJaya;
