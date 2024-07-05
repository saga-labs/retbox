"use client";

import React from "react";
import useSWR from "swr";

// services
import ProjectsService from "@/services/projects.service";

// components & features
import Kanban from "@/features/kanban";
// import { StatsCard } from "@/components/common/stats-card";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  LockClosedIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";
import { Project } from "@/features/project-block/types/request";
import Head from "next/head";

interface Props {
  params: { slug: string };
}

export default function ProjectsDetail({ params }: Props) {
  const { data, error, isLoading } = useSWR(
    params.slug,
    ProjectsService.getProjectById
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <div className="flex flex-col h-screen justify-between space-x-2 px-4 py-4 2xl:flex-row">
      <section className="mt-0 flex flex-col grow overflow-auto 2xl:mt-0 2xl:w-4/5">
        {/** Page Header */}
        <Header project={data.data} />

        <section className="flex flex-row justify-between mt-4 w-full">
          <div className="flex flex-row space-x-4">
            <span className="text-xs inline-flex rounded bg-neutral-100 dark:bg-neutral-500/70 p-1 text-neutral-600 dark:text-blue-50">
              <LockClosedIcon className="size-4 mr-2" /> Private Project
            </span>

            <span className="text-xs inline-flex rounded bg-neutral-100 dark:bg-blue-500/70 p-1 text-neutral-600 dark:text-blue-50">
              <ShareIcon className="size-4 mr-2" /> Share
            </span>

            <p className="text-xs text-neutral-600 p-1">
              Last updated: {new Date(data.data.updated_at).toDateString()}
            </p>
          </div>

          <div className="flex flex-row space-x-4">
            <span className="text-xs inline-flex rounded bg-neutral-100 dark:bg-blue-500/70 p-1 text-neutral-600 dark:text-blue-50">
              <AdjustmentsVerticalIcon className="size-4 mr-2" /> Filter
            </span>

            <span className="text-xs inline-flex rounded bg-neutral-100 dark:bg-blue-500/70 p-1 text-neutal-600 dark:text-blue-50">
              <ShareIcon className="size-4 mr-2" /> View
            </span>
          </div>
        </section>

        {/** Task Board Content*/}
        <Kanban />
      </section>
    </div>
  );
}

const Header: React.FC<{ project: Project }> = ({ project }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  if (collapsed)
    return (
      <article className="flex w-full items-end justify-between rounded-lg border border-gray-50 dark:border-0 bg-blue-100/70 dark:bg-blue-700 px-6 py-4">
        <div>
          <p className="text-xl font-medium text-blue-700 dark:text-blue-100">
            # {project.title}
          </p>
        </div>

        <button
          onClick={() => setCollapsed(false)}
          className="inline-flex gap-2 rounded bg-blue-100 dark:bg-blue-500/70 p-1 text-blue-600 dark:text-blue-50"
        >
          <ChevronDownIcon className="size-4" />
        </button>
      </article>
    );

  return (
    <>
      <article className="flex flex-col w-full items-start justify-between rounded-lg border border-gray-50 dark:border-0 bg-blue-100/70 dark:bg-blue-700 px-6 py-4">
        <section className="flex flex-row justify-between items-start w-full">
          <div>
            <small className="text-xs text-blue-700 dark:text-blue-100  font-normal mb-2">
              {project._id}
            </small>

            <h3 className="text-xl font-medium text-blue-700 dark:text-blue-100">
              # {project.title}
            </h3>
          </div>

          <button
            onClick={() => setCollapsed(true)}
            className="inline-flex gap-2 rounded bg-blue-100 dark:bg-blue-500/70 p-1 text-blue-600 dark:text-blue-50"
          >
            <ChevronUpIcon className="size-4" />
          </button>
        </section>
      </article>
    </>
  );
};
