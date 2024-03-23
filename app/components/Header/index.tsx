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
    console.log(navMenu)
    if (navMenu) {
      navMenu.style.transform = showMenu ? `translateY(4rem)` : `translateY(0rem)`;
    }
  };

  const MobileHeader = () => {
    return <div className="rightHeader"></div>;
  };

  const DesktopHeader = () => {
    return (
      <div>
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
      </div>
    );
  };

  return (
    <div className={styles.topnav} id="myTopnav">
      <header className={styles.header}>
        <div className={styles.leftHeader}>
          <a href="/">Inti Kiat Energi</a>
        </div>

        <div className={styles.rightHeader}>
          <button className={styles.menuButton} onClick={handleShowMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </button>

          <div className={styles.mask}></div>

          <div className={styles.navContainer} >
            <div className={styles.nav} id="nav">
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
              <a href="profile">About</a>
              <a href="profile">Dealers</a>
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
