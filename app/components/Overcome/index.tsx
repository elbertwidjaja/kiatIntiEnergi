import React from "react";
import styles from "./styles.module.scss";
import OVERCOME_DATA from "./data";

function Overcome() {
  const overcomeCard = (item) => {
    return (
      <div className={styles.overcomeCard} key={item.id}>
        {item.icon}
        <p className={styles.overcomeTitle}>{item.title}</p>
        <p className={styles.overcomeDescription}>{item.description}</p>
      </div>
    );
  };

  return (
    <div className={styles.backgroundOvercome}>
      <div className={styles.overcomeContaier}>
        <h2 className={styles.effective}>Efektif Mengatasi</h2>
        <div className={styles.overcomeCardContainer}>
          {OVERCOME_DATA.map((item) => overcomeCard(item))}
        </div>
      </div>
    </div>
  );
}

export default Overcome;
