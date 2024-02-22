import React from "react";
import picture from "@/public/Frame 35769.png";
import styles from "./styles.module.scss";
import Image from "next/image";
import MainLayout from "../components/MainLayout";

function Profile() {
  return (
    <MainLayout>
      <div className={styles.aboutUs}>
        <h1>Tentang Kami</h1>
        <p>
          Kami, PT. Kiat Inti Energi, mitra terpercaya Anda dalam solusi
          berbasis energi ramah lingkungan. Sebagai perusahaan yang berdedikasi
          tinggi untuk menjalani visi masa depan yang berkelanjutan, kami
          menawarkan rangkaian produk unggulan berupa Solar Water Heater
          (Pemanas Air Tenaga Surya), Water Filter (Filter Air) dan Reverse
          Osmosis (RO) untuk memenuhi kebutuhan air panas dan air bersih di
          perumahan, komersial, hingga industri. Komitmen kami juga melibatkan
          layanan purna jual yang profesional dan responsif untuk memastikan
          kepuasan pelanggan.
        </p>
      </div>
      <div className={`${styles.goalContainer} ${styles.vision}`}>
        <div>
          <h1>Visi Kami</h1>
          <p>
            Menjadi pemimpin solusi air bersih dan pemanas air berkelanjutan,
            inovatif, dan berkualitas tinggi dalam bidang solar water heater,
            water filter dan reverse osmosis.
          </p>
        </div>
        <div>
          <Image src={picture} alt="picture" />
        </div>
      </div>
      <div className={`${styles.goalContainer} ${styles.mission}`}>
        <div>
          <h1>Misi Kami</h1>
          <ul>
            <li>
              1. Menyediakan air panas melalui sumber energi terbarukan yang
              ramah lingkungan
            </li>
            <li>
              2. Meningkatkan kualitas air untuk mengatasi permasalahan kualitas
              air di Indonesia
            </li>
            <li>
              3. Memberikan layanan purna jual terbaik untuk memastikan
              kenyamanan dan kepuasan pelanggan kami
            </li>
            <li>
              4. Mendorong penggunaan sumber energi terbarukan untuk mendukung
              gaya hidup berkelanjutan
            </li>
            <li>
              5.Berkomitmen untuk terus berinovasi untuk menghasilkan produk
              berkualitas tinggi
            </li>
          </ul>
        </div>

        <div>
          <Image src={picture} alt="picture" />
        </div>
      </div>
    </MainLayout>
  );
}

export default Profile;
