import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const context = useCart();
  const { addToCart, cart } = context;
  const isAdded = cart.find((item) => item.id === product.id);
  console.log("isAdded", isAdded);
  return (
    <div className="border p-4 rounded mb-2 w-60">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <div className="flex items-center justify-center h-40">
        <Image
          alt="Product Image"
          className="object-contain"
          src={product.image}
          width={100}
          height={100}
        />
      </div>
      <div>
        <p>${product.price}</p>
        <button
          className="bg-blue-500 text-white px-3 py-1 mt-2 hover:cursor-pointer"
          onClick={() => addToCart(product)}
        >
          {isAdded ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
