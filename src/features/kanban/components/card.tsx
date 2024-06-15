import React from 'react';

// contexts
import useTaskList from '../context/use-tasks';

// types & interfaces
import { Task } from '../types/task';
import { RowSpacingIcon } from '@radix-ui/react-icons';

interface Props {
  task: Task;
  index: number;
}

export const Card: React.FC<Props> = ({ task, index }) => {
  const moveTaskToDone = useTaskList((state) => state.moveTaskToDone);
  return (
    <div
      className="group relative flex cursor-pointer flex-col items-start bg-neutral-100 rounded-lg border bg-opacity-90 p-4 hover:bg-opacity-100"
      draggable="true"
      onClick={() => moveTaskToDone(index)}
    >
      <button className="absolute right-0 top-0 mr-2 mt-3 flex h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
        <RowSpacingIcon className="size-3" />
      </button>
      <span className="flex h-6 items-center rounded-full bg-pink-100 px-3 text-xs font-semibold text-pink-500">
        {task.title}
      </span>
      <h4 className="mt-3 text-sm font-medium">
        This is the title of the card for the thing that needs to be done.
      </h4>
      <div className="mt-3 flex w-full items-center text-xs font-medium text-gray-400">
        <div className="flex items-center">
          <svg
            className="h-4 w-4 fill-current text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="ml-1 font-normal leading-none">Dec 12</span>
        </div>
        {/* <div className="relative ml-4 flex items-center">
          <svg
            className="relative h-4 w-4 fill-current text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="ml-1 leading-none">4</span>
        </div>
        <div className="ml-4 flex items-center">
          <svg
            className="h-4 w-4 fill-current text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
              clip-rule="evenodd"
            />
          </svg> 
          <span className="ml-1 leading-none">1</span>
        </div>*/}
        <img className="ml-auto h-6 w-6 rounded-full" src="pixel.png" />
      </div>
    </div>
  );
};
