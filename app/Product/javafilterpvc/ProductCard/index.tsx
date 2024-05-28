/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";

type Product = {
  id: number;
  name: string;
  image: string;
  ukuran: string;
  material: string;
  flowRate: string;
  maxPressure: string;
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
              <p>{currentProduct.ukuran}</p>
              <p>{currentProduct.material}</p>
            </div>
            <div className={styles.specs}>
              <p>{currentProduct.flowRate}</p>
              <p>{currentProduct.maxPressure}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
