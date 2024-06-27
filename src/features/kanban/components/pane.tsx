import { Link1Icon } from "@radix-ui/react-icons";
import { useDroppable } from "@dnd-kit/core";
import React from "react";
import { cn } from "@/utils/cn";

interface Props {
  title: string;
  amount: number;
  children: React.ReactNode | React.ReactNode[];
}

export const Pane: React.FC<Props> = ({ title, amount, children }) => {
  const { isOver, setNodeRef } = useDroppable({ id: "droppable" });
  return (
    <div
      ref={setNodeRef}
      className={cn(
        "flex flex-shrink-0 grow flex-col rounded-md border p-2",
        isOver && "animate-bounce"
      )}
    >
      {/* Header */}
      <div className="flex h-10 flex-shrink-0 items-center px-2 justify-between">
        <div className="flex">
          <span className="block text-sm font-semibold">{title}</span>
          <span className="ml-2 flex h-5 w-5 items-center justify-center rounded text-sm font-semibold text-indigo-500">
            {amount}
          </span>
        </div>
        <button className="flex h-6 w-6 items-center justify-center rounded text-indigo-500 hover:bg-indigo-500 hover:text-indigo-100">
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
