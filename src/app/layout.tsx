"use client";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Montserrat({ subsets: ["latin"] });

// components
import { useLocalStorage } from "usehooks-ts";

// export const metadata: Metadata = {
//   title: "Cerebase",
//   description: "Multi agent collaboration platform",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme] = useLocalStorage("theme", "");

  if (theme === "dark") {
    return (
      <html lang="en" className="dark">
        <UserProvider>
          <body className={inter.className}>{children}</body>
        </UserProvider>
      </html>
    );
  }

  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  );
}

// ! missing check on theme key
// (!("theme" in localStorage) &&
// window.matchMedia("(prefers-color-scheme: dark)").matches)
