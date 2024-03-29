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
  const [showMenu, setShowMenu] = useState(true);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);

    const navMenu = document.getElementById("nav");
    const menuButton = document.getElementById("menuButton");

    if (navMenu && menuButton) {
      if (window.innerWidth < 510) {
        menuButton.style.transform = showMenu
          ? "rotate(90deg)"
          : "rotate(0deg)";
        navMenu.style.transform = showMenu
          ? "translateY(8rem)"
          : "translateY(0rem)";
      } else if (window.innerWidth < 768) {
        menuButton.style.transform = showMenu
          ? "rotate(90deg)"
          : "rotate(0deg)";
        navMenu.style.transform = showMenu
          ? "translateY(4rem)"
          : "translateY(0rem)";
      }
    }
  };

  return (
    <div className={styles.topnav} id="myTopnav">
      <header className={styles.header}>
        <div className={styles.leftHeader}>
          <a href="/">Inti Kiat Energi</a>
        </div>

        <div className={styles.rightHeader}>
          <button
            className={styles.menuButton}
            id="menuButton"
            onClick={handleShowMenu}
          >
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </button>

          <div className={styles.mask}></div>

          <div className={styles.navContainer}>
            <div className={styles.nav} id="nav">
              <a href="/">Home</a>
              <a href="/profile">Profil</a>

              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Gallery</button>
                <div className={styles.dropdownContent}>
                  <a href="#">Visi Solar</a>
                  <a href="#">Solar Jaya</a>
                  <a href="/gallery/JavaFilter">Java Filter</a>
                </div>
              </div>

              <a href="profile">Dealers</a>
              <a href="/product">Product</a>
            </div>
          </div>
        </div>
      </header>

      {/* <a
        style={{ fontSize: "15px" }}
        className={styles.icon}
        onClick={toggleResponsive}
      >
        &#9776;
      </a> */}
    </div>
  );
};

export default Header;
