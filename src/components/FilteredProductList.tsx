"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { PRODUCTS_ENDPOINTS } from "@/constants/Endpoints";
import { Product } from "@/types/product";
import { PRODUCTS_SELECTION_QUERY } from "@/constants/products";

const LIMIT = 30;
const FilteredProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const isFetchingRef = useRef(false);

  const fetchProducts = useCallback(async () => {
    if (isFetchingRef.current || !hasMore) return;

    isFetchingRef.current = true;

    setIsLoading(true);
    try {
      const res = await fetch(
        `${PRODUCTS_ENDPOINTS}?limit=${LIMIT}&skip=${skip}&${PRODUCTS_SELECTION_QUERY}`
      );
      const data = await res.json();
      const { products } = data;
      if (products.length < LIMIT) setHasMore(false);
      setProducts((prev) => [...prev, ...data.products]);
      setSkip((prev) => prev + LIMIT);
    } catch (error) {
      console.error("Failed to load products", error);
    } finally {
      setIsLoading(false);
      isFetchingRef.current = false;
    }
  }, [hasMore, skip]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        !isFetchingRef.current &&
        hasMore
      ) {
        fetchProducts();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchProducts, hasMore]);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 justify-evenly">
        {products?.length > 0 &&
          products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      {isLoading && (
        <div className="text-center py-4 text-gray-500">
          Loading more products...
        </div>
      )}
      {!hasMore && (
        <div className="text-center py-4 text-gray-400">
          No more products to load.
        </div>
      )}
    </>
  );
};

export default FilteredProductList;
