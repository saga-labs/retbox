import React from 'react';

// components
import { Navigation } from './navigation';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex h-screen w-screen text-gray-700">
      <Navigation />

      {/** menu bar */}
      <div className="flex flex-grow flex-col">
        <div className="flex h-14 flex-shrink-0 items-center justify-between border-b border-gray-300 bg-white px-4">
          <div>
            <h1 className="text-sm font-semibold leading-none">
              Saga Labs
            </h1>
          </div>

          <div>
            <h1 className="text-sm font-semibold leading-none">
              #council-of-elrond
            </h1>
          </div>
        </div>

        {/** content */}
        <div className="flex flex-grow flex-col overflow-auto">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
