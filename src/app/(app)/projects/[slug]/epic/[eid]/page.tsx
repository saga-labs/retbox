"use client";

import React from "react";
import useSWR from "swr";

// contexts
import useTaskList from "@/features/kanban/context/use-tasks";

// components
import { Pane } from "@/features/kanban/components/pane";
import { Card } from "@/features/kanban/components/card";
import { AgentTaskCard } from "@/components/common/agent-card"; //! fix names in comps

// icons
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

// types
import type { Task } from "@/types/objective";
import type { Agent } from "@/types/agent";

// mock data
import project from "@/mock/project.json";
import agents from "@/mock/agents.json";

const fetcher = () =>
  fetch("http://localhost:8787/agents").then((res) => res.json());

interface Props {
  params: { slug: string; eid: string };
}

export default function ProjectsEpicDetail({ params }: Props) {
  const tasks = useTaskList((state) => state.tasks);
  const inProgress = useTaskList((state) => state.inProgress);
  const done = useTaskList((state) => state.done);

  const [showMoreTeam, setShowMoreTeam] = React.useState(false);
  const [showProject, setShowProject] = React.useState(true);

  return (
    <div className="flex flex-col h-screen justify-between space-x-2 px-8 py-8 2xl:flex-row">
      {/** Task Workers */}
      <section className="flex flex-col 3xl:w-1/5">
        {/** Title */}
        <div className="flex">
          <h1 className="mr-2 text-3xl font-bold text-blue-700">Team</h1>

          {showMoreTeam ? (
            <button onClick={() => setShowMoreTeam(!showMoreTeam)}>
              <ChevronUpIcon className="size-4" />
            </button>
          ) : (
            <button onClick={() => setShowMoreTeam(!showMoreTeam)}>
              <ChevronDownIcon className="size-4" />
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-shrink-0 flex-col rounded-md border p-2 grow">
          {/* Header */}
          <div className="flex h-10 flex-shrink-0 items-center px-2">
            <span className="block text-sm font-semibold">Members</span>
            <span className="ml-2 flex h-5 w-5 items-center justify-center rounded text-sm font-semibold tracking-widest text-indigo-500">
              2
            </span>
          </div>

          {/* Body */}
          <div className="flex flex-col overflow-auto pb-2">
            {/** List */}
            {showMoreTeam ? (
              <section className="mt-0 grid grid-cols-4 gap-2 3xl:grid-cols-1">
                {agents.slice(0, 8).map((agent: Agent, index: number) => (
                  <AgentTaskCard agent={agent} key={index} />
                ))}
              </section>
            ) : (
              <section className="mt-0 grid grid-cols-4 gap-2 3xl:grid-cols-1">
                {agents.slice(0, 4).map((agent: Agent, index: number) => (
                  <AgentTaskCard agent={agent} key={index} />
                ))}
              </section>
            )}
          </div>
        </div>
      </section>

      {/** Task Board*/}
      <section className="mt-0 flex flex-col overflow-auto 2xl:mt-0 2xl:w-4/5">
        <div className="flex">
          <h1 className="mr-2 text-3xl font-bold text-blue-700">Project Tasks</h1>
          {showProject ? (
            <button onClick={() => setShowProject(!showProject)}>
              <ChevronUpIcon className="size-4" />
            </button>
          ) : (
            <button onClick={() => setShowProject(!showProject)}>
              <ChevronDownIcon className="size-4" />
            </button>
          )}
        </div>

        {/** Task Board Content*/}
        {showProject && (
          <div className="mt-4 grid grow grid-cols-4 space-x-2 overflow-auto">
            <Pane title="Backlog" amount={tasks.length}>
              {tasks.map((task, index) => (
                <Card key={index} task={task} index={index} />
              ))}
            </Pane>

            <Pane title="In progress" amount={inProgress.length}>
              {inProgress.map((task, index) => (
                <Card key={index} task={task} index={index} />
              ))}
            </Pane>

            <Pane title="Done" amount={done.length}>
              {done.map((task, index) => (
                <Card key={index} task={task} index={index} />
              ))}
            </Pane>

            <Pane title="Blocking" amount={tasks.length}>
              {tasks.map((task, index) => (
                <Card key={index} task={task} index={index} />
              ))}
            </Pane>
          </div>
        )}
      </section>
    </div>
  );
}
