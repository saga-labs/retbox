"use client";

import React from "react";

import { Objective } from "@/types/objective";

interface Props {
  project: Objective;
  status: boolean;
}

export const View: React.FC<Props> = ({ project, status }) => {
  return (
    <a href="/projects/01j0ebhv9w2y7ma8eb1rkdcmpq">
      <article className="cursor-pointer  border-b p-4 sm:p-6 lg:p-8">
        <div className="flex items-start sm:gap-8">
          <div
            className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-blue-500"
            aria-hidden="true"
          >
            <div className="flex items-center gap-1">
              <span className="h-8 w-0.5 rounded-full bg-blue-500"></span>
              <span className="h-6 w-0.5 rounded-full bg-blue-500"></span>
              <span className="h-4 w-0.5 rounded-full bg-blue-500"></span>
              <span className="h-6 w-0.5 rounded-full bg-blue-500"></span>
              <span className="h-8 w-0.5 rounded-full bg-blue-500"></span>
            </div>
          </div>

          <div>
            <strong className="rounded border border-blue-500 bg-blue-500 px-3 py-1.5 text-[10px] font-medium text-white">
              Active
            </strong>

            <h3 className="mt-4 text-lg font-medium sm:text-xl">
              <p className="hover:underline"></p>
            </h3>

            <p className="mt-1 text-md text-gray-700">spring-webshop-2024</p>
            <p className="mt-1 text-sm text-gray-700">{project.objective}</p>

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
                  {project.timeline.start_date} - {project.timeline.end_date}
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
  );
};

// projects overview:               https://app.cerebase.com/projects
// projct detail (need id):         https://app.cerebase.com/projects/01j0c82ay5pmhk09vxw61s12np
// project task view (pid & eid)    https://app.cerebase.com/projects/01j0c82ay5pmhk09vxw61s12np/epic/01j0ebhv9w2y7ma8eb1rkdcmpq
