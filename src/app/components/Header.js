"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LogoutButton = ({ onLogout }) => {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch("../api/auth/signout/", {
      method: "POST",
    });

    if (res.ok) {
      onLogout();
      router.push("/auth/login");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default function Header() {
  const [session, setSession] = useState(null);

  const checkSession = () => {
    const sessionCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("session="));

    if (sessionCookie) {
      const sessionData = JSON.parse(
        decodeURIComponent(sessionCookie.split("=")[1])
      );
      setSession(sessionData);
    } else {
      setSession(null);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <div className="w-full p-4 border-b-4 border-gray-700 flex justify-between items-center">
      <Link href="/" className="text-4xl font-bold tracking-wider">
        MYBLOG
      </Link>

      <div className="flex items-center gap-4">
        {session ? (
          <>
            <span className="text-gray-800">Hi, {session.name}</span>
            <LogoutButton onLogout={() => setSession(null)} />
          </>
        ) : (
          <Link
            href="/auth/login"
            className="px-4 py-2 cursor-pointer hover:text-blue-800 hover:font-extrabold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
