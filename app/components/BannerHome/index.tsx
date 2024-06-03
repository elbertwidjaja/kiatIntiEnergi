import BannerSwiper from "../BannerSlider";
import styles from "./styles.module.scss";

const BannerHome = ({ section, className }) => {
  const renderBanner = () => {
    return (
      <BannerSwiper
        data={section.map((content) => ({
          id: content.id,
          name: content.name,
          image_urls: content.image_urls,
          detail_path: content.detail_path,
        }))}
      />
    );
  };

  return (
    <section className={[styles.bannerSection, className].join(" ")}>
      {renderBanner()}
    </section>
  );
};

export default BannerHome;
