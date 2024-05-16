import React from "react";
import { SWH_DATA } from "./data";
import styles from "./styles.module.scss";

function SWH() {
  return (
    <div className={styles.swhContainer}>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          {SWH_DATA.map((data) => (
            <div className={styles.gridItem} key={data.id}>
              {data.icon}
              <h2 className={styles.swhTitle}>{data.title}</h2>
              <p className={styles.swhDescription}>{data.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.picture}>
          <img src="/path/to/your/image.jpg" alt="Solar Water Heater" />
        </div>
      </div>
    </div>
  );
}

export default SWH;
