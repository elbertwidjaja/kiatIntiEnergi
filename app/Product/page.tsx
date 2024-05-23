import React from "react";
import Image from "next/image";
import PRODUCT_CARD_DATA from "./data";
import styles from "./styles.module.scss";
import ArrowRight from "../icons/ArrowRight";
import MainLayout from "../components/MainLayout";
import Link from "next/link";

type ProductCardData = {
  id: number;
  imgUrl: string;
  company: string;
  description: string;
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
      <Link href={"#"}>
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
      <div>ProductPageHeader</div>
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
