import Image from "next/image";
import React from "react";

// icons
import { RowSpacingIcon } from "@radix-ui/react-icons";

// types & interfaces
import type { Task as TaskType } from "../types/local";

export const Task: React.FC<{ task: TaskType }> = ({ task }) => {
  return (
    <div
      className="group relative flex cursor-pointer flex-col items-start rounded-lg border bg-opacity-90 p-0 hover:bg-opacity-100
      dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800"
      draggable="true"
      onClick={() => console.log("hello")}
    >
      <div className="p-3">
        <a className="absolute right-0 top-0 mr-2 mt-3 flex h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
          <RowSpacingIcon className="size-3" />
        </a>

        <h3 className="mb-2 text-md text-neutral-400 font-medium line-clamp-1">{task.title}</h3>
        <p className="text-sm text-neutral-500  line-clamp-2 break-words">{task.description}</p>


      </div>

      <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400 justify-between border-t p-3 dark:border-neutral-600">
        <div>
          <Image
            className="h-6 w-6 rounded-full"
            src="https://storage.cerebase.com/128x128/pixel.webp"
            alt="Card"
            width={24}
            height={24}
          />
        </div>

        <div className="flex items-center space-x-1">
          <span className="flex items-center rounded py-1 px-2 text-xs font-semibold  bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100">
            LG
          </span>
          <span className="flex items-center rounded py-1 px-2 text-xs font-semibold  bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100">
            YG
          </span>
        </div>
      </div>
    </div>
  );
};
