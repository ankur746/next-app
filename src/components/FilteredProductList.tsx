"use client";
import { products } from "@/lib/data";
import { useSearchParams } from "next/navigation";
import React from "react";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";

const FilteredProductList = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredProducts = category
    ? products.filter((p) => p.categoryId === category)
    : products;

  return (
    <>
      <CategoryFilter />
      <div className="flex gap-2">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default FilteredProductList;
