import React from 'react';

// components
import { Select } from '@/components/common/select';
import { BellIcon } from '@radix-ui/react-icons';

const values = [
  {
    value: '373d0ca3-6527-4a59-a0ec-36c6a4d1f828',
    text: 'Personal',
  },
  {
    value: '373d0ca3-6527-4a59-a0ec-36c6a4d1f828',
    text: 'Saga Labs',
  },
];

const MenuBar: React.FC = () => {
  return (
    <nav className="flex h-14 flex-shrink-0 items-center justify-between border-b border-neutral-800 px-4">
      <section className="flex divide-x">
        <Select descriptor="Accounts" values={values} />
        <Select descriptor="Accounts" values={values} />
      </section>

      <div>
        <BellIcon />
      </div>
    </nav>
  );
};

export default MenuBar;
