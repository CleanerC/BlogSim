import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <button className="fixed top-4 right-4 px-4 py-2 hover:bg-blue-500">
          Login
        </button>
        <div className="w-full p-4 border-b-4 border-gray-700">
          <h1 className="text-4xl font-bold tracking-wider">MYBLOG</h1>
        </div>
        {children}
      </body>
    </html>
  );
}
