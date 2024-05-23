"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";

const products = [
  {
    id: 1,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Brand%20Kami%2Fjava_filter_productMain.png?alt=media&token=51fbfddc-da1a-4712-bc0b-1563fec93e81",
    specs: "Specs for product 1",
  },
  {
    id: 2,
    image:
      "https://firebasestorage.googleapis.com/v0/b/bun-homeserver.appspot.com/o/Brand%20Kami%2Fsolar_jaya_productMain.png?alt=media&token=03cb7d95-e93f-4b95-8ed9-3c287cc0b735",
    specs: "Specs for product 2",
  },
  // Add more products as needed
];

const ProductCard = () => {
  const [currentProduct, setCurrentProduct] = useState(products[0]);

  const handleButtonClick = (product) => {
    setCurrentProduct(product);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productCardButtons}>
        {products.map((product) => (
          <button key={product.id} onClick={() => handleButtonClick(product)}>
            Product {product.id}
          </button>
        ))}
      </div>
      <div className={styles.productCardContent}>
        <img
          src={currentProduct.image}
          alt="Product"
          className="product-card-image"
        />
        <div className={styles.productCardSpecs}>{currentProduct.specs}</div>
      </div>
    </div>
  );
};

export default ProductCard;
