import "./styles/theme.scss";
import Header from "./components/Header";
import BannerHome from "./components/BannerHome";
import InfoCard from "./components/InfoCard";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import javaFilterLogo from "../public/LOGO JAVA FILTER.png";
import javaFilter from "../public/JAVA FILTER.png";
import solarjayaLogo from "../public/LOGO SOLARJAYA.png";
import solarJaya from "../public/SOLARJAYA Product.png";
import visiSolarLogo from "../public/logo visi solar.png";
import visiSolar from "../public/VISI SOLAR Product.png";
import greenEnergy from "../public/greenEnergy.png";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <main>
      <Header />
      <BannerHome />
      <p className={styles.brandKami}>Brand Kami</p>
      <div className={styles.infoCardContainer}>
        <InfoCard
          name={
            <h1>
              JAVA FILTER
              <br /> WATER FILTER &amp; RO
            </h1>
          }
          image={javaFilter}
          logo={javaFilterLogo}
        />
        <InfoCard
          name={<h1>SOLAR JAYA</h1>}
          logo={solarjayaLogo}
          image={solarJaya}
        />
        <InfoCard
          name={<h1>VISI SOLAR</h1>}
          logo={visiSolarLogo}
          image={visiSolar}
        />
      </div>
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
