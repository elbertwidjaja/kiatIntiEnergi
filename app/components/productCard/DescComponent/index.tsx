import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";

interface DescComponentProps {
  title: string;
  desc: string;
}

function DescComponent({title, desc}: DescComponentProps) {
  return (
    <div className={styles.descComponentContainer}>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
}

export default DescComponent;
