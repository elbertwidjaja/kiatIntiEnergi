import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../public/KiatIntiEnergi_Logo.png";

const Footer = () => (
  <footer className={styles.footerContainer}>
    <div className={styles.flexContainer}>
      <div className={styles.leftContainer}>
        <section className={styles.sectionContainer}>
          <Link href="/">
            <span className={styles.labelText}>Home</span>
          </Link>
          <Link href="/profil">
            <span className={styles.labelText}>Tentang Kami</span>
          </Link>
          <Link href="/#">
            <span className={styles.labelText}>Produk</span>
          </Link>
          <Link href="#">
            <span className={styles.labelText}>Layanan</span>
          </Link>
          <Link href="#">
            <span className={styles.labelText}>Blog</span>
          </Link>
          <Link href="#">
            <span className={styles.labelText}>Hubungi Kami</span>
          </Link>

          <h2 className={`${styles.titleText} ${styles.marginTop}`}>Address</h2>
          <div className={styles.labelText}>
            Rukan Paris Golf Lake Residence Blok A No.27, RT.10/RW.14,
            Cengkareng Tim., Kecamatan Cengkareng, Kota Jakarta Barat, Daerah
            Khusus Ibukota Jakarta 11730
          </div>
        </section>

        <section className={styles.sectionContainer}>
          <h2 className={styles.titleText}>Social Media</h2>
          <a
            href="https://twitter.com"
            className={styles.labelText}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://instagram.com"
            className={styles.labelText}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            className={styles.labelText}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tiktok
          </a>
          <a
            href="https://instagram.com"
            className={styles.labelText}
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>

          <h2 className={`${styles.titleText} ${styles.marginTop}`}>
            Info Kontak
          </h2>
          <div className={styles.labelText}>(021) 5437-6429</div>
          <div className={styles.labelText}>kiatintienergi@gmail.com</div>
        </section>

        <section className={styles.sectionContainer}>
          <h2 className={styles.titleText}>Operational Hour </h2>
          <div className={styles.labelText}>
            Monday - Friday (08:00 - 17:00)
          </div>
          <div className={styles.labelText}>Saturday (08:00 - 17:00)</div>
          <div className={styles.labelText}>Sunday (Close)</div>
        </section>
      </div>
      <div className={styles.rightContainer}>
        {/* <Image
          src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Logo%2Fkiatintienergi_logo.png?alt=media&token=db0737db-d932-414e-b3d1-40a1a17d8dee"
          alt="Kiat inti energi Logo"
          width={250}
          height={250}
        /> */}
      </div>
    </div>

    <hr className={styles.line} />

    <div className={styles.bottomContainer}>
      <div className={styles.leftContainer}>
        <p className={styles.footerText}>
          Copyright {new Date().getFullYear()} PT. Kiat Inti Energi | All Rights
          Reserved
        </p>
      </div>
      <div className={styles.rightContainer}>
        <p>#SOLUSIAIRBERSIHDANBERKUALITAS</p>
      </div>
    </div>
  </footer>
);

export default Footer;
