import BannerHome from "./components/BannerHome";
import InfoCard from "./components/InfoCard";
import styles from "./styles.module.scss";
import Benefits from "./components/Benefits";
import Survey from "./components/Survey";
import BANNERS_HOME_DATA from "./Data/bannerhome";
import MainLayout from "./components/MainLayout";
import ProductSlider from "./components/ProductSlider";

function Home() {
  return (
    <main>
      <MainLayout>
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
              logo="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Logo%2FLOGO%20SOLARJAYA.png?alt=media&token=abfdc398-b254-497a-a2df-9288546ccadf"
              image="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Brand%20Kami%2Fsolar_jaya_productMain.png?alt=media&token=03cb7d95-e93f-4b95-8ed9-3c287cc0b735"
              url="/Product/solarjaya"
            />
            <InfoCard
              logo="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Logo%2Flogo%20visi%20solar.png?alt=media&token=14258829-c8ca-4518-a818-cc95ec5dd859"
              image="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Brand%20Kami%2Fvisi_solar_productMain.png?alt=media&token=a707fdc5-1ada-4f38-b072-4d274bf2c91f"
              url="/Product/visisolar"
            />
            <InfoCard
              image="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Brand%20Kami%2Fjava_filter_productMain.png?alt=media&token=51fbfddc-da1a-4712-bc0b-1563fec93e81"
              logo="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Logo%2FLOGO%20JAVA%20FILTER.png?alt=media&token=7049c40c-e90d-4a50-8464-ff31d6d7eb5e"
              url="/Product/javafilter"
            />
          </div>
        </div>
        <Survey />
        <div className={styles.productSliderContainer}>
          <ProductSlider />
        </div>
      </MainLayout>
    </main>
  );
}

export default Home;
