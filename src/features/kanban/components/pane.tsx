import { Link1Icon } from '@radix-ui/react-icons';
import React from 'react';

interface Props {
  title: string;
  amount: number;
  children: React.ReactNode | React.ReactNode[];
}

export const Pane: React.FC<Props> = ({ title, amount, children }) => {
  return (
    <div className="flex flex-shrink-0 grow flex-col rounded-md border p-2">
      {/* Header */}
      <div className="flex h-10 flex-shrink-0 items-center px-2">
        <span className="block text-sm font-semibold">{title}</span>
        <span className="ml-2 flex h-5 w-5 items-center justify-center rounded bg-white bg-opacity-30 text-sm font-semibold text-indigo-500">
          {amount}
        </span>
        <button className="ml-auto flex h-6 w-6 items-center justify-center rounded text-indigo-500 hover:bg-indigo-500 hover:text-indigo-100">
          <Link1Icon className="size-4" />
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-col space-y-2 overflow-auto pb-2">
        {children}
      </div>
    </div>
  );
};
