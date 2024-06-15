import React from 'react';

// components
import { AlertsPopover } from '../common/popover';
import { Breadcrumbs } from '../common/breadcrumbs';

// contexts

// icons
import { BellIcon } from '@radix-ui/react-icons';

const MenuBar: React.FC = () => {
  return (
    <nav className="flex h-14 flex-shrink-0 items-center justify-between border-b  px-4">
      <section className="flex divide-x">
        <Breadcrumbs />
      </section>

      <div className="">
        <AlertsPopover>
          <BellIcon className="size-4 text-neutral-400" />
        </AlertsPopover>
      </div>
    </nav>
  );
};

export default MenuBar;
