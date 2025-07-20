import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  // const context = useCart();
  // const { addToCart, cart } = context;
  // const isAdded = cart.find((item) => item.id === product.id);

  return (
    <div className="border p-1 rounded w-60">
      {/* <h3 className="text-lg font-bold">{product.id}</h3> */}
      <div className="flex items-center justify-center">
        <Image
          alt="Product Image"
          src={product.thumbnail}
          width={200}
          height={100}
        />
      </div>
      <div>
        <h6 className="font-bold">{product.title}</h6>
        <p>${product.price}</p>
        {/* <button
          className="bg-blue-500 text-white px-3 py-1 mt-2 hover:cursor-pointer"
          onClick={() => addToCart(product)}
        >
          {isAdded ? "Added" : "Add to Cart"}
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard;


