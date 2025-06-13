"use client";
import { categories } from "@/lib/data";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const CategoryFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const handleSelect = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId === selectedCategory) {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex gap-3 flex-wrap mb-6">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`px-4 py-1 rounded hover:cursor-pointer ${
            selectedCategory === cat.id
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => handleSelect(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
