"use client";
import { CHECK_LOGIN } from "@/constants/NextEndPoints";
import { useAppDispatch } from "@/hook/useAppDispatch";
import { setUser } from "@/redux/features/auth/authSlice";
import React, { ReactNode, useEffect } from "react";

function AppInitializer({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const fetchUsers = async () => {
    const response = await fetch(CHECK_LOGIN);
    const data = await response.json();
    if (data.user) {
      dispatch(setUser(data.user));
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return <div>{children}</div>;
}

export default AppInitializer;
