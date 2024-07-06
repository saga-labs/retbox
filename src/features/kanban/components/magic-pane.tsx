import React from "react";

import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { verticalListSortingStrategy } from "@dnd-kit/sortable";

// services
import OpenAIServices from "../services";

// components
import { MagicTask as Task } from "./magic-task";

// icons
import { MagicWandIcon } from "@radix-ui/react-icons";

// types & interfaces
import type { Task as TaskType } from "../types/local";
import { TaskSortable } from "./task-sortable";

interface Props {
  id: string;
  title: string;
  tasks: TaskType[];
}

export const MagicPane: React.FC<Props> = ({ id, title, tasks }) => {
  const { setNodeRef } = useDroppable({ id });
  const [ideas, setIdeas] = React.useState<any>();

  return (
    <div
      ref={setNodeRef}
      className={"flex flex-shrink-0 grow flex-col rounded-md border p-2 dark:border-neutral-700"}
    >
      {/* Header */}
      <div className="flex h-10 flex-shrink-0 items-center px-2 justify-between">
        <div className="flex">
          <span className="block text-sm font-semibold">{title}</span>
          <span className="ml-2 flex h-5 w-5 items-center justify-center rounded text-sm font-semibold text-blue-500">
            {tasks.length}
          </span>
        </div>
        <button
          onClick={OpenAIServices.generateTask}
          className="flex h-6 w-6 items-center justify-center rounded bg-blue-100/70 dark:bg-blue-700/70 text-blue-700 dark:text-blue-100 hover:bg-blue-500 hover:text-blue-100"
        >
          <MagicWandIcon className="size-4" />
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
