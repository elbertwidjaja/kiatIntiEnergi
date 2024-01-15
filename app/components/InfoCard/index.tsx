/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";

interface InfoCardProps {
  name: string;
}

function InfoCard({ name }: InfoCardProps) {
  return (
    <div className={styles["info-card"]}>
      <img
        src="https://images.bisnis.com/thumb/posts/2018/02/16/739535/solar-cell.jpg?w=450&h=237"
        alt=""
      />
      <button>Click me</button>
      <h1>{name}</h1>
      <p>🔥Recommended</p>
    </div>
  );
}

export default InfoCard;
