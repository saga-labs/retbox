import Image from "next/image";
import React from "react";

// icons
import { RowSpacingIcon } from "@radix-ui/react-icons";

// types & interfaces
import type { Task as TaskType } from "../types/local";

export const Task: React.FC<{ task: TaskType }> = ({ task }) => {
  return (
    <div
      className="group relative flex cursor-pointer flex-col items-start bg-neutral-100 rounded-lg border bg-opacity-90 p-4 hover:bg-opacity-100"
      draggable="true"
      onClick={() => console.log("hello")}
    >
      <a className="absolute right-0 top-0 mr-2 mt-3 flex h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
        <RowSpacingIcon className="size-3" />
      </a>
      <span className="flex h-6 items-center rounded-full bg-pink-100 px-3 text-xs font-semibold text-pink-500">
        {task.title}
      </span>
      <h4 className="mt-3 text-sm font-medium">
        {task.description}
      </h4>
      <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400 justify-between">
        <div className="flex items-center">
          <span className="ml-1 font-normal leading-none">Dec 12</span>
        </div>

        <Image
          className="ml-auto h-6 w-6 rounded-full"
          src="https://storage.cerebase.com/128x128/pixel.webp"
          alt="Card"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};
