import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

export const Pane: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="flex w-72 flex-shrink-0 flex-col border p-2 rounded-md">
      {/* Header */}
      <div className="flex h-10 flex-shrink-0 items-center px-2">
        <span className="block text-sm font-semibold">{title}</span>
        <span className="ml-2 flex h-5 w-5 items-center justify-center rounded bg-white bg-opacity-30 text-sm font-semibold text-indigo-500">
          6
        </span>
        <button className="ml-auto flex h-6 w-6 items-center justify-center rounded text-indigo-500 hover:bg-indigo-500 hover:text-indigo-100">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-col overflow-auto pb-2">{children}</div>
    </div>
  );
};
