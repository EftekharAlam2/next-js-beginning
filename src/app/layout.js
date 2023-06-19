import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Practice",
  description: "Next.js Practice",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      {/* Global Pages can be added */}
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
