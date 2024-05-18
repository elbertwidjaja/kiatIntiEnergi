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
import BANNERS_HOME_DATA from "./Data/bannerhome";
import ProductSlider from "./components/ProductSlider";

export default function Home() {
  return (
    <main>
      <Header />
      <BannerHome section={BANNERS_HOME_DATA} className={undefined} />
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
      <div className={styles.ourProduct}>
        <p className={styles.brandKami}>Brand Kami</p>
        <div className={styles.infoCardContainer}>
          <InfoCard
            logo={solarjayaLogo}
            image={solarJaya}
            url="/gallery/SolarJaya"
          />
          <InfoCard
            logo={visiSolarLogo}
            image={visiSolar}
            url="/gallery/VisiSolar"
          />
          <InfoCard
            image={javaFilter}
            logo={javaFilterLogo}
            url="/gallery/JavaFilter"
          />
        </div>
      </div>
      <Survey />
      {/* <ProductSlider /> */}
      <Footer />
    </main>
  );
}
