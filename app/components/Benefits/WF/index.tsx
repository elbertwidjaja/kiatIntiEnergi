/* eslint-disable @next/next/no-img-element */
import React from "react";
import { WF_DATA } from "./data";
import styles from "./styles.module.scss";

function WF() {
  return (
    <div className={styles.wfContainer}>
      <div className={styles.container}>
        <div className={styles.picture}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/swf%20wf%2Fwf.png?alt=media&token=da0e78f0-48fe-44ec-8575-59af843bbf2b"
            alt="Solar Water Heater"
          />
        </div>
        <div className={styles.gridContainer}>
          {WF_DATA.map((data) => (
            <div className={styles.gridItem} key={data.id}>
              {data.icon}
              <h2 className={styles.wfTitle}>{data.title}</h2>
              <p className={styles.wfDescription}>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WF;
