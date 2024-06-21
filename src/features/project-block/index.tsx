"use client";

import React from "react";

import * as Collapsible from "@radix-ui/react-collapsible";
// import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';

// components
import { View } from "./components/view";

// types & interfaces
import { Objective, Task } from "@/types/objective";
import { Project } from "@/types/project";

interface Props {
  project: Project;
  objective: Objective;
}

export default function ProjectBlock({ project, objective }: Props) {
  const [open, setOpen] = React.useState(false);
  return (
    <section className="rounded border">
      <Collapsible.Root className="w-full" open={open} onOpenChange={setOpen}>
        {/** Head */}
        <View project={objective} status={open} />

        <a href={`/projects/${project.id}`}>
          <article className="cursor-pointer  border-b p-4 sm:p-6 lg:p-8">
            <div className="flex items-start sm:gap-8">
              <div
                className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                aria-hidden="true"
              >
                <div className="flex items-center gap-1">
                  <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                  <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                  <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                  <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                  <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                </div>
              </div>

              <div>
                <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                  Active
                </strong>

                <h3 className="mt-4 text-lg font-medium sm:text-xl">
                  <p className="hover:underline"></p>
                </h3>

                <p className="mt-1 text-md text-gray-700">
                  spring-webshop-2024
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  {objective.objective}
                </p>

                <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                  <div className="flex items-center gap-1 text-gray-500">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>

                    <p className="text-xs font-medium">
                      {objective.timeline.start_date} -{" "}
                      {objective.timeline.end_date}
                    </p>
                  </div>

                  <span className="hidden sm:block" aria-hidden="true">
                    &middot;
                  </span>

                  <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                    Featuring Barry, Sandra and August
                  </p>
                </div>
              </div>
            </div>
          </article>
        </a>

        {/** peak */}
        <Collapsible.Trigger asChild>
          <div className="p-4">
            <span className="">See more</span>
          </div>
        </Collapsible.Trigger>

        {/** Body */}
        <Collapsible.Content>
          {/** Sub Tasks */}
          <div className="overflow-x-auto border-t">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="text-left">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    priority
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    status
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    timeline
                  </th>
                  <th className="px-4 py-2">tasks</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {objective.tasks.map((t: Task, k: React.Key) => {
                  return <Epic t={t} key={k} />;
                })}
              </tbody>
            </table>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </section>
  );
}

const Epic: React.FC<{ t: Task }> = ({ t }) => (
  <tr>
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
      {t.task}
    </td>
    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
        Live
      </span>
    </td>
    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
        Live
      </span>
    </td>
    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
      <div>
        <span id="ProgressLabel" className="sr-only">
          Loading
        </span>

        <span
          role="progressbar"
          aria-labelledby="ProgressLabel"
          aria-valuenow={75}
          className="relative block rounded-full bg-gray-200"
        >
          <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
            <span className="font-bold text-white">75%</span>
          </span>

          <span
            className="block h-3 rounded-full bg-indigo-600 text-center"
            style={{ width: "75%" }}
          ></span>
        </span>
      </div>
    </td>
    <td className="whitespace-nowrap px-4 py-2">
      <a
        href="/projects/01j0c82ay5pmhk09vxw61s12np/epic/01j0c82ay5pmhk09vxw61s12np"
        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
      >
        View
      </a>
    </td>
  </tr>
);
