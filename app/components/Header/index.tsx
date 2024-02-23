// import React from "react";
// import Link from "next/link";
// import kiatIntiEnergi from "../../../public/KiatIntiEnergi_Logo.png";
// import styles from "./styles.module.scss";
// import Image from "next/image";

// const Header = () => {
//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <Image
//           src={kiatIntiEnergi}
//           alt="kiat Inti Energi"
//           loading="lazy"
//           height={60}
//         />
//       </div>
//       <nav className={styles.navbar}>
//         <ul className={styles.navList}>
//           <li className={styles.navItem}>
//             <Link href="/">Home</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="/profile">Profil</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="/services">Produk</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="/contact">Galeri</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="/contact">Dealers</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="/contact">Kontak</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const Header = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div
      className={`${styles.topnav} ${
        isResponsive ? `${styles.responsive}` : ""
      }`}
      id="myTopnav"
    >
      <a href="/">Inti Kiat Energi</a>
      <Image />
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>
          Dropdown
          <i className="fa fa-caret-down"></i>
        </button>
        <div className={styles.dropdownContent}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <a href="profile">Profil</a>
      <a
        style={{ fontSize: "15px" }}
        className={styles.icon}
        onClick={toggleResponsive}
      >
        &#9776;
      </a>
    </div>
  );
};

export default Header;
