import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

// components
import { AlertsPopover } from '../common/popover';
import { Breadcrumbs } from '../common/breadcrumbs';

// contexts
import useViewStore, { View } from '@/contexts/use-view';

// icons
import {
  BellIcon,
  BorderAllIcon,
  BorderLeftIcon,
  BorderRightIcon,
} from '@radix-ui/react-icons';

const MenuBar: React.FC = () => {
  const selected = useViewStore((state) => state.selected);
  const setSelected = useViewStore((state) => state.setSelected);
  const toggleStyle =
    'data-[state=on]:bg-neutral-800 data-[state=on]:text-black inline-block p-3 hover:bg-gray-300 focus:relative';
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
