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
      <Image src={logo} alt="logo jaya filter" loading="lazy" />
      <Image
        src={image}
        alt="product picture"
        width={450}
        height={250}
        loading="lazy"
      />
      {name}
    </div>
  );
}

export default InfoCard;
