import React from "react";
import styles from "./styles.module.scss";
import MainLayout from "../../components/MainLayout";
import GalleryCard from "../../components/GalleryCard";
import { javaFilter } from "../../../data/galleryImage";

function JavaFilter() {
  return (
    <MainLayout>
      <div className={styles.galleryContainer}>
        {javaFilter.map((imageData, index) => (
          <GalleryCard
            key={index}
            imageURL={imageData.imageURL}
            title={imageData.desc}
          />
        ))}
      </div>
    </MainLayout>
  );
}

export default JavaFilter;
