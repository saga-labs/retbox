import React from 'react';
// components
import { Navigation } from './navigation';
import MenuBar from './menu-bar';
import { Command } from '@/features/command/components/command';
import { AuthWrapper } from '../common/auth-wrapper';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <AuthWrapper>
      <div className="flex h-screen w-screen font-inter text-gray-700 dark:bg-neutral-900 dark:text-gray-700">
        <Command />
        <Navigation />

        {/** menu bar */}
        <div className="flex flex-grow flex-col">
          <MenuBar />

          {/** content */}
          <div className="flex flex-grow flex-col overflow-auto">
            {children}
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Layout;
