import Header from "@/app/components/Header";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {/* create button */}
        <Link
          href="/create-blog"
          className="fixed rounded-full p-6 border-4 border-black bottom-4 right-4 shadow-xl cursor-pointer hover:scale-105 transition-all hover:font-bold"
        >
          Create a Blog
        </Link>

        {children}
      </body>
    </html>
  );
}
