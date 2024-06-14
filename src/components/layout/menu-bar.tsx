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
        <ToggleGroup.Root
          className="inline-flex divide-x divide-neutral-800 overflow-hidden rounded-md border shadow-sm"
          type="single"
          aria-label="View Selection"
          value={selected}
          onValueChange={(value: string) => value && setSelected(value as View)}
        >
          {/* drive exclusive view */}
          <ToggleGroup.Item
            className={toggleStyle}
            value={View.drive}
            aria-label="Drive View"
          >
            <BorderLeftIcon className="size-4 text-neutral-200" />
          </ToggleGroup.Item>

          {/* split view */}
          <ToggleGroup.Item
            className={toggleStyle}
            value={View.split}
            aria-label="Split View"
          >
            <BorderAllIcon className="size-4 text-neutral-200" />
          </ToggleGroup.Item>

          {/* chat exclusive view */}
          <ToggleGroup.Item
            className={toggleStyle}
            value={View.chat}
            aria-label="Chat View"
          >
            <BorderRightIcon className="size-4 text-neutral-200" />
          </ToggleGroup.Item>
        </ToggleGroup.Root>

        <AlertsPopover>
          <BellIcon className="size-4 text-neutral-200" />
        </AlertsPopover>
      </div>
    </nav>
  );
};

export default MenuBar;
