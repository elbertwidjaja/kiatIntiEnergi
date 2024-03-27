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
          <h2 className={styles.titleText}>Navigation</h2>
          <Link href="/about">
            <span className={styles.labelText}>About Us</span>
          </Link>

          <h2 className={`${styles.titleText} ${styles.marginTop}`}>Address</h2>
          <div className={styles.labelText}>Rukan Paris Golf Lake Residence Blok A No.27, RT.10/RW.14, Cengkareng Tim., Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730</div>
        </section>

        <section className={styles.sectionContainer}>
          <h2 className={styles.titleText}>Social Media</h2>
          <a
            href="https://twitter.com"
            className={styles.labelText}
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp
          </a>
          <a
            href="https://instagram.com"
            className={styles.labelText}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <h2 className={`${styles.titleText} ${styles.marginTop}`}>Phone Number</h2>
          <div className={styles.labelText}>(021) 5437-6429</div>

          <h2 className={`${styles.titleText} ${styles.marginTop}`}>Email</h2>
          <div className={styles.labelText}>kiatintienergi@gmail.com</div>

        </section>

        <section className={styles.sectionContainer}>
          <h2 className={styles.titleText}>Operational Hour </h2>
          <div className={styles.labelText}>Monday - Friday (08:00 - 17:00)</div>
          <div className={styles.labelText}>Saturday (08:00 - 17:00)</div>
          <div className={styles.labelText}>Sunday (Close)</div>
          
        </section>
      </div>
      <div className={styles.rightContainer}>
        <Image src={logo} alt="" className={styles.logo} />

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
