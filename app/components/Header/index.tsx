import React from "react";
import Link from "next/link";
import kiatIntiEnergi from "../../../public/KiatIntiEnergi_Logo.png";
import styles from "./styles.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src={kiatIntiEnergi}
          alt="kiat Inti Energi"
          loading="lazy"
          height={60}
        />
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">Profil</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/services">Produk</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">Galeri</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">Dealers</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">Kontak</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
