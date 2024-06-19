"use client";

import React from "react";
import useSWR from "swr";

// services
import ProjectsService from "@/services/projects.service";

// mock data
import project from "@/mock/project.json";
import { Task } from "@/types/objective";
import Link from "next/link"

interface Props {
  params: { slug: string };
}

export default function ProjectsDetail({ params }: Props) {
  const eid = "01J0S3E69Y36YXXSG2JFCSATEF";

  const { data, error, isLoading } = useSWR("/projects", ProjectsService.getProjects);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <>
      <div>teams-detail {params.slug}</div>

      {/** Project Epics */}
      <article className="rounded-xl border border-gray-300  p-4 max-w-3xl">
        <div className="flex items-center gap-4">
          <div>
            <h3 className="text-lg font-medium text-gray-700">Project Epics</h3>

            <div className="flow-root">
              <ul className="-m-1 flex flex-wrap">
                <li className="p-1 leading-none">
                  <a href="#" className="text-xs font-medium text-gray-300">
                    {" "}
                    Twitter{" "}
                  </a>
                </li>

                <li className="p-1 leading-none">
                  <a href="#" className="text-xs font-medium text-gray-300">
                    {" "}
                    GitHub{" "}
                  </a>
                </li>

                <li className="p-1 leading-none">
                  <a href="#" className="text-xs font-medium text-gray-300">
                    Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          {project.tasks.map((epic: Task, key: React.Key) => {
            return (
              <li
                key={key}
                className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
              >
                <strong className="font-medium text-gray-900">
                  {epic.task}
                </strong>
                <p className="mt-1 text-xs font-medium text-gray-600">
                  {epic.description}
                </p>

                <Link href={`/projects/${params.slug}/epic/${eid}`}>
                  See more
                </Link>
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
}
