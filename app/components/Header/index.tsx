"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

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
          <a href="/">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Logo%2Fkiatintienergi_logo.png?alt=media&token=db0737db-d932-414e-b3d1-40a1a17d8dee"
              alt="Kiat inti energi Logo"
              width={300}
              height={300}
            />
          </a>
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
              <a href="/profile">Tentang Kami</a>
              <a href="/Product">Produk</a>

              {/* <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Produk</button>
                <div className={styles.dropdownContent}>
                  <a href="/visisolar">Visi Solar</a>
                  <a href="/solarjaya">Solar Jaya</a>
                  <a href="/javafilter">Java Filter</a>
                </div>
              </div> */}
              <a href="#">Layanan</a>
              <a href="#">Blog</a>
              <a href="#">Hubungi Kami</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
