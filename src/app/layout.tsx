import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

// components
import MenuBar from "@/components/layout/menu-bar";
import { Navigation } from "@/components/layout/navigation";

export const metadata: Metadata = {
  title: "Cerebase",
  description: "Multi agent collaboration platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
