"use client";

import { useAppDispatch } from "@/hook/useAppDispatch";
import { useAppSelector } from "@/hook/useAppSelector";
import { logout } from "@/redux/features/auth/authSlice";
import Link from "next/link";
import React from "react";

const Header = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl py-6 flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-gray-800">
          🛍 MyStore
        </Link>

        <nav className="space-x-4 flex items-center">
          {user ? (
            <>
              <div className="flex items-center space-x-2">
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-700 font-medium">
                  {user.firstName} {user.lastName}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:underline ml-4"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/auth/login" className="text-gray-600 hover:text-black">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
