import React, { ReactNode } from "react";

// Components
import { MainNav } from "./NavMain";
// import { OffsideNav } from "./OffsideNav";
// import { SecondaryNav } from "./NavSecondary";

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex h-screen max-h-screen w-screen text-gray-700">
      {/** Sidebar */}
      <MainNav />

      {children}
    </main>
  );
};
