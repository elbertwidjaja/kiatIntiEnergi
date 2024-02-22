import React, { ReactNode } from "react";
import javaFilter from "../../../public/JAVA FILTER.png";
import javaFilterLogo from "../../../public/LOGO JAVA FILTER.png";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";

interface InfoCardProps {
  name: ReactNode;
  logo: StaticImageData;
  image: StaticImageData;
}

function InfoCard({ name, image, logo }: InfoCardProps) {
  return (
    <div className={styles["info-card"]}>
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
    </div>
  );
}

export default InfoCard;
