import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo1 from "../../../public/Frame 35764.png";
import logo2 from "../../../public/Frame 35765.png";
import logo3 from "../../../public/Frame 35766.png";

const Footer = () => (
  <footer className={styles.footerContainer}>
    <div className={styles.flexContainer}>
      <div className={styles.leftContainer}>
        <section className={styles.sectionContainer}>
          <h2 className={styles.titleText}>Navigation</h2>
          <Link href="/about">
            <span className={styles.labelText}>About Us</span>
          </Link>
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
        </section>
      </div>
      <div className={styles.rightContainer}>
        <Image src={logo1} alt="" className={styles.logo} />
        <Image src={logo2} alt="" className={styles.logo} />
        <Image src={logo3} alt="" className={styles.logo} />
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
