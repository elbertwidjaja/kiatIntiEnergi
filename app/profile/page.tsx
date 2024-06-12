import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import MainLayout from "../components/MainLayout";
import ProductSlider from "../components/ProductSlider";

const sliderImageUrl = [
  {
    url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
  },
];

function Profile() {
  return (
    <MainLayout>
      <section className={styles.section}>
        <div className={styles.profilePoster}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Profil%2FHero%20Tentang%20Kami.png?alt=media&token=c50400e6-9897-4865-a115-b25a9608b34f"
            alt="Poster Tentang Kami"
            fill
          />
        </div>
        <div className={styles.aboutUsContainer}>
          <div>
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Logo%2FkiatIntiEnergi_Logo.png?alt=media&token=92f61f98-4005-4785-bff8-145a48f2ed93"
              }
              alt="Company Logo"
              width={800}
              height={800}
              objectFit="cover"
            />
          </div>
          <h1 className={styles.aboutUsDescription}>
            berkomitmen untuk menjadi pelopor dalam teknologi pemanas air tenaga
            surya dan penyaring air. Berbekal pengalaman puluhan tahun dan
            dedikasi, kami sekarang telah melayani ribuan pelanggan yang puas di
            seluruh Indonesia.
          </h1>
        </div>
        <div className={styles.goalContainer}>
          <div className={styles.goalContent}>
            <span className={styles.goal}>Visi dan Misi</span>
            <h2 className={styles.mission}>
              Misi kami adalah menyediakan solusi energi terbarukan dan
              pemurnian air berkualitas tinggi yang berkontribusi pada
              lingkungan yang lebih bersih dan kesehatan masyarakat yang lebih
              baik. Kami berkomitmen untuk memberikan layanan terbaik dan
              inovasi yang terus-menerus untuk memenuhi kebutuhan pelanggan
              kami.
            </h2>
            <h2 className={styles.vision}>
              Visi kami adalah menjadi perusahaan terkemuka di bidang energi
              terbarukan dan pemurnian air di Indonesia, dengan fokus pada
              keberlanjutan, teknologi mutakhir, dan kepuasan pelanggan. Kami
              bercita-cita untuk menciptakan dunia di mana setiap orang memiliki
              akses ke energi bersih dan air murni.
            </h2>
          </div>
        </div>
        <h2 className={styles.joinUs}>
          BERGABUNGLAH DENGAN KAMI DALAM MENCIPTAKAN <br /> MASA DEPAN YANG
          LEBIH HEMAT dan SEHAT
        </h2>
        <div className={styles.productSliderContainer}>
          <ProductSlider />
        </div>
      </section>
    </MainLayout>
  );
}

export default Profile;
