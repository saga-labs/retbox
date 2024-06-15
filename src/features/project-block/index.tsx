import React from 'react';

// types & interfaces
import { Objective, Task } from '@/types/objective';

export default function ProjectBlock({ project }: { project: Objective }) {
  return (
    <section className="rounded border">
      {/** Head */}
      <div className="flex p-4">
        <h1>{project.objective}</h1>
      </div>

      {/** collapse */}
      <details>
        <summary>Details</summary>

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
              {project.tasks.map((t: Task, k: React.Key) => {
                return (
                  <tr key={k}>
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
                            style={{ width: '75%' }}
                          ></span>
                        </span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <a
                        href="#"
                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </details>
    </section>
  );
}
