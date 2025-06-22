import { useEffect, useState } from "react";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import SortDropdown from "../SortDropdown/SortDropdown";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductsPage.module.css";
import Image from "next/image";
import Head from "next/head";

export default function ProductsPage({ productsData }) {
  const [allProducts, setAllProducts] = useState(productsData || []);
  const [products, setProducts] = useState(productsData || []);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState("recommended");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    applyFiltersAndSorting();
  }, [selectedCategories, sortOption]);

  const applyFiltersAndSorting = () => {
    let filtered = [...allProducts];
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category.toLowerCase())
      );
    }
    switch (sortOption) {
      case "price_high_to_low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "price_low_to_high":
        filtered.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    setProducts(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleUnselectAll = () => setSelectedCategories([]);

  return (
    <>
      {/* For SEO optimization */}
      <Head>
        <title>Shop Eco-Friendly Products | Clothing, Jewelry & More</title>
        <meta
          name="description"
          content="Browse our curated product list of handmade fashion, sustainable electronics and more."
        />
      </Head>

      <div className={styles.productContainer}>
        <div className={styles.headerRow}>
          <div className={styles.countAndFiltertoggle}>
            {isMobile ? (
              <button
                onClick={() => setShowFilters(true)}
                className={styles.filterToggleMobile}
              >
                FILTER
              </button>
            ) : (
              <>
                <span className={styles.itemCount}>
                  {products.length} ITEMS
                </span>
                <button
                  onClick={() => setShowFilters((prev) => !prev)}
                  className={styles.toggleFilterBtn}
                >
                  {showFilters ? (
                    <>
                      <Image
                        src={"/icons/arrow-left.png"}
                        alt={"arrow-left"}
                        width={16}
                        height={16}
                      />
                      HIDE FILTER
                    </>
                  ) : (
                    <>
                      <Image
                        src={"/icons/arrow-right.png"}
                        alt={"arrow-right"}
                        width={16}
                        height={16}
                      />
                      SHOW FILTER
                    </>
                  )}
                </button>
              </>
            )}
          </div>
          <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
        </div>

        <div className={styles.mainContent}>
          {/* DESKTOP filter sidebar */}
          {!isMobile && showFilters && (
            <FilterSidebar
              selectedCategories={selectedCategories}
              handleCategoryChange={handleCategoryChange}
              handleUnselectAll={handleUnselectAll}
            />
          )}

          {/* MOBILE filter drawer */}
          {isMobile && showFilters && (
            <div className={styles.filterDrawer}>
              <div className={styles.drawerHeader}>
                <span className={styles.drawerTitle}>Filters</span>
                <button
                  className={styles.closeDrawer}
                  onClick={() => setShowFilters(false)}
                >
                  Close
                </button>
              </div>
              <FilterSidebar
                selectedCategories={selectedCategories}
                handleCategoryChange={handleCategoryChange}
                handleUnselectAll={handleUnselectAll}
              />
            </div>
          )}

          <div className={styles.productsGrid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
