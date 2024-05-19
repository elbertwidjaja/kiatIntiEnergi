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
            image="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Brand%20Kami%2Fsolar_jaya_productMain.png?alt=media&token=03cb7d95-e93f-4b95-8ed9-3c287cc0b735"
            url="/gallery/SolarJaya"
          />
          <InfoCard
            logo={visiSolarLogo}
            image="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Brand%20Kami%2Fvisi_solar_productMain.png?alt=media&token=a707fdc5-1ada-4f38-b072-4d274bf2c91f"
            url="/gallery/VisiSolar"
          />
          <InfoCard
            image="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Brand%20Kami%2Fjava_filter_productMain.png?alt=media&token=51fbfddc-da1a-4712-bc0b-1563fec93e81"
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
