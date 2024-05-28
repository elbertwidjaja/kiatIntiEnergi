import Hotel from "@/app/icons/Hotel";
import House from "@/app/icons/House";
import Industry from "@/app/icons/Industry";
import Salon from "@/app/icons/Salon";
import Spa from "@/app/icons/Spa";
import React from "react";
import styles from "./styles.module.scss";
import Apartment from "@/app/icons/Apartment";
import Villa from "@/app/icons/Villa";

const SATISFACTORY_DATA = [
  {
    id: 1,
    title: "Perumahan",
    icon: <House />,
  },
  {
    id: 2,
    title: "Hotel",
    icon: <Hotel />,
  },
  {
    id: 3,
    title: "Spa",
    icon: <Spa />,
  },
  {
    id: 4,
    title: "Salon",
    icon: <Salon />,
  },
  {
    id: 5,
    title: "Kost",
    icon: <Apartment />,
  },
  {
    id: 6,
    title: "Villa",
    icon: <Villa />,
  },
  {
    id: 7,
    title: "Industri",
    icon: <Industry />,
  },
];

function Satisfactory() {
  return (
    <div className={styles.satisfactoryContainer}>
      <p className={styles.fitFor}>Cocok Untuk</p>
      <div className={styles.iconBenefitsContainer}>
        {SATISFACTORY_DATA.map((item) => (
          <div key={item.id} className={styles.iconWrapper}>
            <div className={styles.iconContainer}>{item.icon}</div>
            <p className={styles.iconTitle}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Satisfactory;
