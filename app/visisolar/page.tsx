import React from "react";
import MainLayout from "../components/MainLayout";
import img from "../../public/Frame 35767.png";
import ProductHero from "../components/ProductHero";
import VISISOLAR_DATA from "./data";
import Image from "next/image";
import ProductCard from "../components/CardProduct/index";
import SocialMedia from "../components/SocialMedia";
import sistem_kerja_indirect from "@/public/sistem_kerja_indirect.jpeg";
import receiving_sunlight from "@/public/recieving_sunlight.jpeg";
import styles from "./styles.module.scss";

function SolarJaya() {
  return (
    <MainLayout>
      <ProductHero
        title="Visi Solar"
        description="VISI SOLAR adalah brand termuka di bidang Solar Water Heater (Model Vacuum Tube - Indirect System). Dengan berstandar Jerman, desain modern, dan metode Heat Exchanger - Spiral Copper Coil, VISI SOLAR bisa menyerap energi matahari lebih efisien dan meminimkan heat loss."
      />
      <h1 className={styles.principleTitle}>Bagaimana Visi Solar Berkerja</h1>
      <section className={styles.indirectSystemContainer}>
        <div className={styles.indirectSystem}>
          <Image
            src={sistem_kerja_indirect}
            alt="Sistem Kerja Indirect Visi Solar"
            width={800}
          />
        </div>
        <div className={styles.indirectSystemDescription}>
          <p>
            VISI SOLAR menggunakan Indirect System (Teknologi Jerman), dimana
            air yang ada di dalam tangki dan vacuum tube dipanaskan secara
            langsung oleh matahari yang bisa mencapai 90&deg;C. Kemudian air
            tersebut memanaskan air yang ada di dalam pipa spiral tembaha
            (terjadilah proses Heat Transfer). Air di dalam spiral tembaga akan
            didistribusikan ke saluran outlet.
            <br /> Namun, tidak perlu khawatir kalau tidak ada sinar matahari,
            karena ada Backup Electric Heater yang berkerja otomatis bila
            matahari redup dalam waktu yang lama, Jadi anda bisa menikmati air
            panas kapan saja.
          </p>
        </div>
      </section>
      <section className={styles.indirectSystemContainer}>
        <div className={styles.indirectSystem}>
          <Image
            src={receiving_sunlight}
            alt="Receiving Sunlight Visi Solar"
            width={250}
          />
        </div>
        <div className={styles.indirectSystemDescription}>
          <h1>Keunggulan Teknologi Vacuum Tube</h1>
          <li>
            1. Vacuum Tube dibuat berdasarkan prinsip tabung thermos dan terdiri
            dari dua tabung berbeda dengan ruang hampa diantarany. Ruang ini
            bertujuan untuk meminimalkan Hear Loss.
          </li>
          <li>2. Penerimaan sinar matahari dari berbagi sisi.</li>
          <li>
            3. Lapisan penyerap tabung bagian dalam dipilih secara khusus untuk
            memaksimalkan proses penyerapan
          </li>
        </div>
      </section>
      <div className={styles.productCardContainer}>
        {VISISOLAR_DATA.map((data, index) => (
          <ProductCard key={index} data={data} img={img} />
        ))}
      </div>
      <SocialMedia
        tiktokUrl="https://www.tiktok.com/@visisolar"
        instagramUrl="https://www.instagram.com/visisolar/"
        facebookUrl="https://www.facebook.com/visisolar/"
      />
    </MainLayout>
  );
}

export default SolarJaya;
