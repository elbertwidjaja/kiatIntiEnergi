/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";

type Product = {
  id: number;
  name: string;
  image: string;
  kapasitas: string;
  pemakaian: string;
  dimensi: string;
  innerTank: string;
  insulasi: string;
  backupHeater: string;
  kolektorPanel: string;
  jumlahPanel: string;
  materialBox: string;
  aksesoris: string;
};

type ProductCardProps = {
  products: Product[];
};

const ProductCard = ({ products }: ProductCardProps) => {
  const [currentProduct, setCurrentProduct] = useState(products[0]);

  const handleButtonClick = (product: Product) => {
    setCurrentProduct(product);
  };

  return (
    <div className={styles.productCard}>
      <img
        src={currentProduct.image}
        alt="Product"
        className={styles.productCardImage}
      />
      <div className={styles.productCardContent}>
        <div className={styles.productCardButtons}>
          {products.map((product) => (
            <button key={product.id} onClick={() => handleButtonClick(product)}>
              {product.name}
            </button>
          ))}
        </div>
        <div className={styles.productCardSpecs}>
          <p className={styles.productName}>{currentProduct.name}</p>
          <div className={styles.specsLayoutContainer}>
            <div className={styles.specs}>
              <p>{currentProduct.kapasitas}</p>
              <p>{currentProduct.pemakaian}</p>
              <p>{currentProduct.dimensi}</p>
            </div>
            <div className={styles.specs}>
              <p>{currentProduct.innerTank}</p>
              <p>{currentProduct.insulasi}</p>
              <p>{currentProduct.backupHeater}</p>
            </div>
            <div className={styles.specs}>
              <p>{currentProduct.kolektorPanel}</p>
              <p>{currentProduct.jumlahPanel}</p>
              <p>{currentProduct.materialBox}</p>
            </div>
          </div>
          <p className={styles.specs}>{currentProduct.aksesoris}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
