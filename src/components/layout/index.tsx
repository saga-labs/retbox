import React from "react";

// local components
import Header from "./header";
import Sidebar from "./sidebar";

// ui components
import { ThemeProvider } from "../theme-provider";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="retbox-theme">
      <div className="flex flex-row h-screen overflow-hidden">
        <Sidebar />

        <section className="flex grow flex-col">
          <Header />
          {children}
        </section>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
