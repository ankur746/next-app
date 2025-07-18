"use client";
import React, { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import { PRODUCTS_ENDPOINTS } from "@/constants/Endpoints";

const FilteredProductList = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch(PRODUCTS_ENDPOINTS);
    const resInJson = await res.json();
    const { products } = resInJson;
    setProducts(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <CategoryFilter />
      <div className="grid grid-cols-4 gap-4 justify-evenly">
        {products?.length > 0 &&
          products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default FilteredProductList;
