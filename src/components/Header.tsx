"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white border-b shadow-sm  items-center sticky top-0 z-50 ">
      <div className="max-w-7xl py-6 flex justify-between mx-auto  px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-gray-800">
          🛍 MyStore
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          {totalItems !== 0 && (
            <Link href="/cart" className="text-gray-600 hover:text-black">
              Cart ({totalItems})
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
