import React from 'react';

// components
import { Navigation } from './navigation';
import MenuBar from './menu-bar';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex h-screen w-screen text-gray-700">
      <Navigation />

      {/** menu bar */}
      <div className="flex flex-grow flex-col">
        <MenuBar />

        {/** content */}
        <div className="flex flex-grow flex-col overflow-auto">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
