import React from "react";
import styles from "./Shop.module.css";
import ProductsPage from "../ProductPage/ProductsPage";

const Shop = ({ productsData }) => {
  return (
    <>
      <div className={styles.shopContainer}>
        <div className={styles.mobileViewPageName}>HOME | SHOP</div>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>Discover Our Products</h1>
          <h2 className={styles.heroDescription}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </h2>
        </div>
        
          <ProductsPage productsData={productsData} />

       
      </div>
    </>
  );
};

export default Shop;
