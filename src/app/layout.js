import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Link
          href="/auth/login"
          className="absolute top-4 right-4 px-4 py-2 cursor-pointer hover:text-blue-800 hover:font-extrabold"
        >
          Login
        </Link>
        <div className="w-full p-4 border-b-4 border-gray-700">
          <Link href="/" className="text-4xl font-bold tracking-wider">MYBLOG</Link>
        </div>

        {/* create button */}
        <button className="fixed rounded-full p-6 border-4 border-black bottom-4 right-4 shadow-xl cursor-pointer hover:scale-105 transition-all hover:font-bold">
          Create a Blog
        </button>

        {children}
      </body>
    </html>
  );
}
