"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type User = { email: string; name?: string; token: string } | null;

interface AuthContextType {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  //   const router = useRouter();

  useEffect(() => {
    const stored = sessionStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Login failed");

      const data = await res.json(); // { access_token: "...", refresh_token?: "..." }

      // Optionally fetch user profile with token
      const profileRes = await fetch(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${data.access_token}`,
          },
        }
      );

      const profile = await profileRes.json(); // { email, name, ... }

      const userData = {
        email: profile.email,
        name: profile.name,
        token: data.access_token,
      };

      setUser(userData);
      sessionStorage.setItem("user", JSON.stringify(userData));
      //   router.push("/checkout");
    } catch (err) {
      alert("Invalid credentials or login failed.");
      console.error(err);
    }
  };

  const logout = async () => {
    setUser(null);
    sessionStorage.removeItem("user");
    // router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
