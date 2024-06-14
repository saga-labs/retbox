import React from 'react';
// components
import { Navigation } from './navigation';
import MenuBar from './menu-bar';
import { Command } from '@/features/command/components/command';
import { Input } from '../common/input';

import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

interface Props {
  search?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children, search = false }) => {
  //const { isAuthenticated, isLoading } = useAuth0();
  //const navigate = useNavigate();

  return (
    <main className="flex h-screen w-screen bg-neutral-50 font-inter text-gray-700">
      <Command />
      <Navigation />

      {/** menu bar */}
      <div className="flex flex-grow flex-col">
        <MenuBar />

        {/** content */}
        <div className="flex flex-grow flex-col overflow-auto">
          {search && <Input />}
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
