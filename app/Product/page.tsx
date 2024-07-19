import React from "react";
import Image from "next/image";
import PRODUCT_CARD_DATA from "./data";
import styles from "./styles.module.scss";
import ArrowRight from "../icons/ArrowRight";
import MainLayout from "../components/MainLayout";
import Link from "next/link";
import Head from "next/head";

type ProductCardData = {
  id: number;
  imgUrl: string;
  company: string;
  description: string;
  url: string;
};

const { SOLARWATER_HEATER_DATA, WATERFILTER_DATA } = PRODUCT_CARD_DATA;

const renderItem = (item: ProductCardData): JSX.Element => {
  return (
    <div className={styles.productCard} key={item.id}>
      <div>
        <Image
          src={item.imgUrl}
          width={300}
          height={300}
          alt="Product Card Picture"
        />
      </div>

      <p className={styles.productCardName}>{item.company}</p>
      <p className={styles.productCardDescription}>{item.description}</p>
      <Link href={item.url}>
        <div className={styles.seeMore}>
          <p>See More</p>
          <ArrowRight color="#045ca6" />
        </div>
      </Link>
    </div>
  );
};

function ProductPage() {
  return (
    <MainLayout>
      <Head>
        <title>
          Solar Water Heater, Solar Panel, Water Filter, Reverse Osmosis
        </title>
        <meta
          name="description"
          content="Discover high-quality solar water heaters, solar panels, water filters, and reverse osmosis systems at Kiat Inti Energi."
        />
        <meta
          name="keywords"
          content="Solar Water Heater, Solar Panel, Water Filter, Reverse Osmosis, "
        />
        <meta
          property="og:title"
          content="Solar Water Heater, Solar Panel, Water Filter, Reverse Osmosis"
        />
        <meta
          property="og:description"
          content="Discover high-quality solar water heaters, solar panels, water filters, and reverse osmosis systems at Kiat Inti Energi."
        />
        <meta property="og:url" content="https://kiatintienergi.com/Product" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Brand%20Kami%2FHero%20Produk%20Kami.png?alt=media&token=9be92584-78ed-446f-8998-ad50af9162a5"
        />
        <link rel="canonical" href="https://kiatintienergi.com/Product" />
      </Head>
      <div className={styles.heroSection}>
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Brand%20Kami%2FHero%20Produk%20Kami.png?alt=media&token=9be92584-78ed-446f-8998-ad50af9162a5"
          }
          width={1920}
          height={620}
          alt="Hero Picture"
        />
      </div>
      <div className={styles.productCardContainer}>
        {SOLARWATER_HEATER_DATA.map(renderItem)}
      </div>
      <div className={styles.productCardContainer}>
        {WATERFILTER_DATA.map(renderItem)}
      </div>
    </MainLayout>
  );
}

export default ProductPage;
