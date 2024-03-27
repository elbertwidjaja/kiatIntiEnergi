import "./styles/theme.scss";
import Header from "./components/Header";
import BannerHome from "./components/BannerHome";
import InfoCard from "./components/InfoCard";
import Footer from "./components/Footer";
import Gallery from "./components/GalleryCard";
import javaFilterLogo from "../public/Frame 35764.png";
import javaFilter from "../public/Frame 35768.png";
import solarjayaLogo from "../public/Frame 35765.png";
import solarJaya from "../public/Frame 35767.png";
import visiSolarLogo from "../public/Frame 35766.png";
import visiSolar from "../public/Frame 35769.png";
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
              SOLAR JAYA <br />
              (DIRECT SYSTEM)
            </h1>
          }
          logo={solarjayaLogo}
          image={solarJaya}
        />
        <InfoCard
          name={
            <h1>
              VISI SOLAR <br />
              (INDIRECT SYSTEM)
            </h1>
          }
          logo={visiSolarLogo}
          image={visiSolar}
        />
        <InfoCard
          name={
            <h1>
              JAVA FILTER
              <br /> (PVC & FRP)
            </h1>
          }
          image={javaFilter}
          logo={javaFilterLogo}
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
