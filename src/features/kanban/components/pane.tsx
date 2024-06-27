import React from "react";

import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { verticalListSortingStrategy } from "@dnd-kit/sortable";

// components
import { Task } from "./task";

// icons
import { Link1Icon } from "@radix-ui/react-icons";

// types & interfaces
import type { Task as TaskType } from "../types/local";

import { cn } from "@/utils/cn";
import { TaskSortable } from "./task-sortable";

interface Props {
  id: string;
  title: string;
  tasks: TaskType[];
}

export const Pane: React.FC<Props> = ({ id, title, tasks }) => {
  const { setNodeRef } = useDroppable({ id });
  return (
    <div
      ref={setNodeRef}
      className={cn("flex flex-shrink-0 grow flex-col rounded-md border p-2")}
    >
      {/* Header */}
      <div className="flex h-10 flex-shrink-0 items-center px-2 justify-between">
        <div className="flex">
          <span className="block text-sm font-semibold">{title}</span>
          <span className="ml-2 flex h-5 w-5 items-center justify-center rounded text-sm font-semibold text-indigo-500">
            {tasks.length}
          </span>
        </div>
        <button className="flex h-6 w-6 items-center justify-center rounded text-indigo-500 hover:bg-indigo-500 hover:text-indigo-100">
          <Link1Icon className="size-4" />
        </button>
      </div>

      {/* Body */}
      <SortableContext
        id={id}
        items={tasks}
        strategy={verticalListSortingStrategy}
      >
        <div
          className="flex flex-col space-y-2 overflow-auto pb-2"
          ref={setNodeRef}
        >
          {tasks.map((task) => (
            <TaskSortable id={task.id} key={task.id}>
              <Task task={task} />
            </TaskSortable>
          ))}
        </div>
      </SortableContext>
    </div>
  );
};
