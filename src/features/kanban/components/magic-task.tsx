import Image from "next/image";
import React from "react";

// icons
import { RowSpacingIcon } from "@radix-ui/react-icons";

// types & interfaces
import type { Task as TaskType } from "../types/local";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export const MagicTask: React.FC<{ task: TaskType }> = ({ task }) => {
  return (
    <div
      className="group relative flex cursor-pointer flex-col items-start rounded-lg border bg-opacity-90 p-4 hover:bg-opacity-100
      dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800"
      draggable="true"
      onClick={() => console.log("hello")}
    >
      <a className="absolute right-0 top-0 mr-2 mt-3 flex h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
        <RowSpacingIcon className="size-3" />
      </a>
      <span className="flex items-center rounded py-1 px-2 text-xs font-semibold  bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100">
        XL
      </span>
      
      <h4 className="mt-3 text-sm font-medium">{task.title}</h4>
      <p className="text-xs text-neutral-400 line-clamp-2  break-words">{task.description}</p>

      <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400 justify-between">
        <div className="flex items-center">
          <span className="ml-1 font-normal leading-none">Dec 12</span>
        </div>

        <button
          onClick={() => console.log("test")}
          className="flex h-6 w-6 items-center justify-center rounded bg-blue-100/70 text-blue-700 hover:bg-blue-500 hover:text-blue-100"
        >
          <ArrowRightIcon className="size-4" />
        </button>
      </div>
    </div>
  );
};
