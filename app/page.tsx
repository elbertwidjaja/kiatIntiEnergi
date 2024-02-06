import "./styles/theme.scss";
import Header from "./components/Header";
import styles from "./styles.module.scss";
import BannerHome from "./components/BannerHome";
import InfoCard from "./components/InfoCard";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <main>
      <Header />
      <BannerHome />
      <InfoCard name="Solar Panel" />
      <div className={styles.descriptionContainer}>
        <h1>Transisi Menuju Green Energy</h1>
        <p>
          Kami bersedia untuk memberikan solusi hemat energi yang tidak hanya
          menghemat biaya dalam
          <br /> jangka panjang tetapi juga mendukung perubahan positif terhadap
          lingkungan.
        </p>
      </div>
      <Gallery />
      <Footer />
    </main>
  );
}
