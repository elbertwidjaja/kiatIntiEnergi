'use client'
import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";


interface InfoCardProps {
  name: ReactNode;
  logo: StaticImageData;
  image: StaticImageData;
  url: string;
}

function InfoCard({ name, image, logo, url }: InfoCardProps) {

  const handleClick = () => {
    window.location.href = url; // Corrected handling of href
  };

  return (
    <button className={styles["info-card"]} onClick={handleClick} >
      <Image
        src={logo}
        width={200}
        height={300}
        alt="logo jaya filter"
        loading="lazy"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <Image
        src={image}
        alt="product picture"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        loading="lazy"
      />
      {name}
    </button>
  );
}

export default InfoCard;
