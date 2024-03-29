import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";

interface GalleryCardProps {
  imageURL: string;
  title: string;
}

function GalleryCard({ imageURL, title }: GalleryCardProps) {
  return (
    <div className={styles.galleryCardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={imageURL}
          alt={title}
          className={styles.image}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2>{title}</h2>
    </div>
  );
}

export default GalleryCard;
