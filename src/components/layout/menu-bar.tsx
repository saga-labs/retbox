import React from 'react';

const MenuBar: React.FC = () => {
  return (
    <nav className="flex h-14 flex-shrink-0 items-center justify-between border-b border-gray-300 bg-white px-4">
      <div>
        <h1 className="text-sm font-semibold leading-none">Saga Labs</h1>
      </div>

      <div>
        <h1 className="text-sm font-semibold leading-none">
          #council-of-elrond
        </h1>
      </div>
    </nav>
  );
};

export default MenuBar;
