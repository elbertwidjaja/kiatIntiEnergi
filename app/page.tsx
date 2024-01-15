import "./styles/theme.scss";
import Header from "./components/Header";
import styles from "./page.module.css";
import BannerHome from "./components/BannerHome";
import InfoCard from "./components/InfoCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <BannerHome />
      <InfoCard name="Solar Panel" />
      <h1>Energy on a Mission</h1>
      <Footer />
    </main>
  );
}
