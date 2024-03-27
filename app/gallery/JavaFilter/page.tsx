import React from "react";
import styles from "./styles.module.scss";
import MainLayout from "../../components/MainLayout";
import GalleryCard from "../../components/GalleryCard";
import sample from "../../../public/gallerySample.png";
import {javaFilter} from "../../../data/galleryImage"

function JavaFilter() {
  console.log(javaFilter)
  return (
    <MainLayout>
      <div className={styles.galleryContainer}>
        {javaFilter.map((imageData, index) => ( // Add parentheses instead of curly braces
          <GalleryCard key={index} imageURL={imageData.imageURL}>{imageData.desc}</GalleryCard>
        ))}
      </div>
    </MainLayout>
  );
}

export default JavaFilter;
