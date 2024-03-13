import { FileObject } from '@supabase/storage-js';
import React from 'react';

interface props {
  file: FileObject;
}

export const Item: React.FC<props> = ({ file }) => {
  return (
    <div
      className="min-w-[75px] group relative flex max-w-[225px] cursor-pointer flex-col items-start rounded-lg border border-neutral-700 bg-neutral-800 bg-opacity-90 p-0 hover:bg-opacity-100"
      draggable="true"
    >
      <img
        className="h-24 w-full rounded-lg"
        src={`https://images.unsplash.com/photo-1611764553921-437fb44f747a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
      />
      {/* <div className="p-2">
        <span className="flex h-6 items-center rounded-full bg-pink-100 px-3 text-xs font-semibold text-pink-500">
          free
        </span>
        <h4 className="mt-3 text-sm font-medium">{file.name}</h4>
        <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
          <div className="flex items-center">
            <span className="ml-1 leading-none">Dec 12</span>
          </div>
          <div className="relative ml-4 flex items-center">
            <span className="ml-1 leading-none">4</span>
          </div>
          <div className="ml-4 flex items-center">
            <span className="ml-1 leading-none">1</span>
          </div>
          <img
            className="ml-auto h-6 w-6 rounded-full"
            src="https://randomuser.me/api/portraits/women/26.jpg"
          />
        </div>
      </div> */}
    </div>
  );
};
