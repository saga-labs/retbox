import React from 'react';
import { Command as Cmdk } from 'cmdk';

// context
import useCommandStore from '@/contexts/use-command';

export const Command = () => {
  const open = useCommandStore((state) => state.open);
  const setOpen = useCommandStore((state) => state.setOpen);

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  });

  return (
    <div className="raycast">
      <Cmdk.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className=" w-full max-w-[650px] overflow-y-auto rounded-lg border border-gray-200 bg-neutral-900 shadow-lg backdrop-blur"
      >
        <Cmdk.Input className="w-full border-b border-gray-800 bg-transparent px-4 py-2 focus:border-blue-500 focus:outline-none" />
        <Cmdk.List className="mt-2">
          <Cmdk.Empty className="p-4 text-gray-500">
            No results found.
          </Cmdk.Empty>

          <Cmdk.Group heading="Letters" className="border-t border-gray-200">
            <Cmdk.Item className="px-4 py-2 hover:bg-gray-100">a</Cmdk.Item>
            <Cmdk.Item className="px-4 py-2 hover:bg-gray-100">b</Cmdk.Item>
            <Cmdk.Separator className="border-t border-gray-200" />
            <Cmdk.Item className="px-4 py-2 hover:bg-gray-100">c</Cmdk.Item>
          </Cmdk.Group>

          <Cmdk.Item className="px-4 py-2 hover:bg-gray-100">Apple</Cmdk.Item>
        </Cmdk.List>
      </Cmdk.Dialog>
    </div>
  );
};
