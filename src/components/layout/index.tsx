import React from 'react';
// components
import { Navigation } from './navigation';
import MenuBar from './menu-bar';
import { Command } from '@/features/command/components/command';
// import { AuthWrapper } from '../common/auth-wrapper';
import { Input } from '../common/input';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex h-screen w-screen font-inter text-gray-700 dark:bg-neutral-900 dark:text-gray-700">
      <Command />
      <Navigation />

      {/** menu bar */}
      <div className="flex flex-grow flex-col">
        <MenuBar />

          {/** content */}
          <div className="flex flex-grow flex-col overflow-auto">
            <Input />
            {children}
          </div>
        </div>
    </main>
  );
};

export default Layout;
