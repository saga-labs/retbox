import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <main className="flex h-screen w-screen bg-neutral-50 font-inter text-gray-700">
          {/** menu bar */}
          <Navigation />

          <div className="flex flex-grow flex-col">
            {/** content */}
            <div className="flex flex-grow flex-col overflow-auto">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
