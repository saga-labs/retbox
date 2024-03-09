import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

// Icons

// Components
import {
  NavSecondaryContainers,
  NavSecondaryStrategies,
  NavSecondaryServices,
} from "./NavSecondaryBlocks";


export const SecondaryNav = () => {
  const { data: session } = useSession();

  return (
    <div className="flex w-64 flex-shrink-0 flex-col border-r border-gray-300 bg-gray-100">
      {/** Dropdown */}
      <button className="group relative flex-shrink-0 text-sm focus:outline-none">
        <div className="flex h-16 w-full items-center justify-between border-b border-gray-300 px-4 hover:bg-gray-300">
          <span className="font-medium">{session?.user?.name}</span>
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute z-10 hidden w-full flex-col items-start bg-white pb-1 shadow-lg group-focus:flex">
          <Link
            className="w-full px-4 py-2 text-left hover:bg-gray-300"
            href="/"
          >
            Menu Item 1
          </Link>
          <Link
            className="w-full px-4 py-2 text-left hover:bg-gray-300"
            href="/"
          >
            Menu Item 1
          </Link>
          <Link
            className="w-full px-4 py-2 text-left hover:bg-gray-300"
            href="/"
          >
            Menu Item 1
          </Link>
        </div>
      </button>

      {/** Menubars */}
      <div className="h-0 flex-grow overflow-auto">
        {/** Containers */}
        <NavSecondaryContainers />

        {/** Strategies */}
        <NavSecondaryStrategies />

        {/** Services */}
        <NavSecondaryServices />
      </div>
    </div>
  );
};
