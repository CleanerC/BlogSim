"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("../../api/auth/login", {
        method: "POST",
        header: { "content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Login Failed");
        return;
      }

      //updated to ensure full refresh
      window.location.href = "/";
    } catch (error) {
      setError("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              required
            />
            <button
              type="submit"
              className="w-full bg-gray-600 rounded-xl text-white p-2 hover:bg-blue-500 transition-all"
            >
              Login
            </button>
            <Link
              href="/auth/signup"
              className="block text-center text-sm text-gray-600 hover:text-gray-800 mt-4"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
