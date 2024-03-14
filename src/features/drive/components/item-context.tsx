import React from 'react';
import * as ContextMenu from '@radix-ui/react-context-menu';

interface props {
  children: React.ReactNode;
}

export const ItemContext: React.FC<props> = ({ children }) => {
  // const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  // const [urlsChecked, setUrlsChecked] = React.useState(false);
  // const [person, setPerson] = React.useState('pedro');

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>{children}</ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content className="min-w-[220px] overflow-hidden rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <ContextMenu.Item className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none">
            Item
            <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
              ⌘+[
            </div>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};
