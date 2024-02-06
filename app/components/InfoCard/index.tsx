import React from "react";
import javaFilter from "../../../public/JAVA FILTER.png";
import styles from "./styles.module.scss";
import Image from "next/image";

interface InfoCardProps {
  name: string;
}

function InfoCard({ name }: InfoCardProps) {
  return (
    <div className={styles["info-card"]}>
      <Image
        src={javaFilter}
        alt="product picture"
        width={450}
        height={250}
        loading="lazy"
      />
      <button>JAVA FILTER</button>
      <h1>{name}</h1>
      <p>🔥Recommended</p>
    </div>
  );
}

export default InfoCard;
