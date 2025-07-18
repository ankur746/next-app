"use client";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();
  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  const handleCheckout = () => {
    if (!user) {
      router.push("/login");
    } else {
      router.push("/checkout");
    }
  };

  return (
    <div className="py-10 px-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price} x {item.quantity}
                <button
                  className="ml-4 text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold">Total: ${total.toFixed(2)}</p>
          <div className="flex space-x-4 mt-4">
            <button
              className="px-4 py-2 bg-red-500 text-white"
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <button
              className="px-4 py-2 bg-green-600 text-white"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
