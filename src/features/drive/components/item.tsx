import { FileObject } from '@supabase/storage-js';
import React from 'react';
import { ItemContext } from './item-context';

interface props {
  file: FileObject;
}

export const Item: React.FC<props> = ({ file }) => {
  return (
    <ItemContext>
      <div
        className="min-w-[75px] group relative flex max-w-[225px] cursor-pointer flex-col items-start rounded-lg border border-neutral-700 bg-neutral-800 bg-opacity-90 p-0 hover:bg-opacity-100"
        draggable="true"
      >
        <img
          className="h-24 w-full rounded-lg"
          alt={file.name}
          src={`https://images.unsplash.com/photo-1611764553921-437fb44f747a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        />
      </div>
    </ItemContext>
  );
};
