"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Errors = {
  userName: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("emilys");
  const [password, setPassword] = useState<string>("emilyspass");

  const [errors, setErrors] = useState<Errors>({
    userName: "",
    password: "",
  });

  const validateField = (name: keyof Errors, value: string): string => {
    if (!value.trim())
      return `${name === "userName" ? "Username" : "Password"} is required`;
    if (value.length < 6)
      return `${
        name === "userName" ? "Username" : "Password"
      } must be at least 6 characters`;
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "userName") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
    }

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name as keyof Errors, value),
    }));
  };

  const validateAll = (): boolean => {
    const userNameError = validateField("userName", userName);
    const passwordError = validateField("password", password);

    setErrors({
      userName: userNameError,
      password: passwordError,
    });

    return !userNameError && !passwordError;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateAll()) return;

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Login failed");
        return;
      }

      router.push("/");
    } catch (err) {
      console.error("Login error", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border shadow">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={handleChange}
            placeholder="User Name"
            className="w-full border px-3 py-2"
          />
          {errors.userName && (
            <p className="text-red-600 text-sm mt-1">{errors.userName}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border px-3 py-2"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
