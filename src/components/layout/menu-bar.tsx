import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

// contexts
import useViewStore from '@/contexts/use-view';
import { View } from '@/contexts/use-view';

// components
import { Select } from '@/components/common/select';

// icons
import {
  BellIcon,
  BorderAllIcon,
  BorderLeftIcon,
  BorderRightIcon,
} from '@radix-ui/react-icons';

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
  const setSelected = useViewStore((state) => state.setSelected);
  const toggleStyle = 'data-[state=on]:bg-white data-[state=on]:text-black';
  return (
    <nav className="flex h-14 flex-shrink-0 items-center justify-between border-b border-neutral-800 px-4">
      <section className="flex divide-x">
        <Select descriptor="Accounts" values={values} />
        <Select descriptor="Accounts" values={values} />
      </section>

      <div className="flex flex-row space-x-2">
        <ToggleGroup.Root
          className=""
          type="single"
          defaultValue="center"
          aria-label="Text alignment"
          onValueChange={(value: string) => setSelected(value as View)}
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

        <button
          onClick={() => alert('You got mail')}
          className="rounded p-2 hover:bg-neutral-700"
        >
          <BellIcon />
        </button>
      </div>
    </nav>
  );
};

export default MenuBar;
