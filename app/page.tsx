import "./styles/theme.scss";
import Header from "./components/Header";
import BannerHome from "./components/BannerHome";
import InfoCard from "./components/InfoCard";
import Footer from "./components/Footer";
import javaFilterLogo from "../public/Frame 35764.png";
import javaFilter from "../public/Frame 35768.png";
import solarjayaLogo from "../public/Frame 35765.png";
import solarJaya from "../public/Frame 35767.png";
import visiSolarLogo from "../public/Frame 35766.png";
import visiSolar from "../public/Frame 35769.png";
import styles from "./styles.module.scss";
import Benefits from "./components/Benefits";
import Survey from "./components/Survey";

export default function Home() {
  return (
    <main>
      <Header />
      {/* <BannerHome /> */}
      <div className={styles.homeIntoductionContainer}>
        <span className={styles.welcome}>
          Selamat datang di Kiat Inti Energi
        </span>
        <p className={styles.homeIntroduction}>
          Pemimpin dalam solusi energi bersih dan pemurnian air. <br /> Kami
          berdedikasi untuk menyediakan pemanas air tenaga surya dan penyaring
          air berkualitas tinggi <br />
          yang dirancang untuk meningkatkan keberlanjutan dan kualitas hidup
          Anda.
        </p>
      </div>
      <Benefits />
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
          url="/gallery/SolarJaya"
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
          url="/gallery/VisiSolar"
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
          url="/gallery/JavaFilter"
        />
      </div>
      <Survey />
      <Footer />
    </main>
  );
}
