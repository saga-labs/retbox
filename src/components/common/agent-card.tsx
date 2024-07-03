"use client";

import React from "react";

import Image from "next/image";

// types & interfaces
import { Agent } from "@/types/agent";
import { cn } from "@/utils/cn";

export const AgentCard: React.FC<{ agent: Agent }> = ({ agent }) => {
  return (
    <div className="group flex w-full cursor-pointer flex-col items-start rounded-lg border bg-opacity-90 p-4 hover:bg-opacity-100 hover:shadow">
      <section className="flex flex-row justify-between">
        <div className="size-16 overflow-hidden rounded-full border-4 border-white">
          <Image
            className="h-16 object-cover object-center"
            src="https://storage.cerebase.com/128x128/pixel.webp"
            alt="Woman looking front"
            width={64}
            height={64}
          />
        </div>

        <div className="ml-4 flex flex-col space-y-0">
          <p className="text-md">{agent.name}</p>
          <p className="text-sm">{agent.role}</p>
        </div>
      </section>

      <section className="flex w-full flex-row justify-between divide-x">
        <div className="flex flex-col px-1">
          <small className="text-xs">Experience</small>
          <p className="text-sm">{agent.experience}</p>
        </div>

        <div className="flex flex-col px-1">
          <small className="text-xs">Language</small>
          <p className="text-sm">{agent.languages[0]}</p>
        </div>

        <div className="flex flex-col px-1">
          <small className="text-xs">Location</small>
          <p className="text-sm">{agent.location}</p>
        </div>

        <div className="flex flex-col px-1">
          <small className="text-xs">Hired</small>
          <p className="text-sm">{agent.jobs}</p>
        </div>
      </section>

      <section>
        <small className="hidden text-xs">
          {agent.description.slice(0, 150)}
        </small>
      </section>
    </div>
  );
};

export const AgentCardDense: React.FC<{ agent: Agent }> = ({ agent }) => {
  return (
    <div className="group flex w-full cursor-pointer flex-col items-start rounded-lg border dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 bg-opacity-90 p-4 hover:bg-opacity-100 hover:shadow">
      <section className="flex flex-row justify-between">
        <div className="size-16 overflow-hidden rounded-full border-4 border-white">
          <Image
            className="h-16 object-cover object-center"
            src="https://storage.cerebase.com/128x128/pixel.webp"
            alt="Woman looking front"
            width={64}
            height={64}
          />
        </div>

        <div className="ml-4 flex flex-col space-y-0">
          <p className="text-md">{agent.name}</p>
          <p className="text-sm">{agent.role}</p>
        </div>
      </section>

      <section>
        <small className="hidden text-xs">
          {agent.description.slice(0, 150)}
        </small>
      </section>
    </div>
  );
};

export const AgentTaskCard: React.FC<{ agent: Agent }> = ({ agent }) => {
  const [progress] = React.useState<number>(Math.random() * 100);

  return (
    <div className="group flex w-full cursor-pointer flex-col items-start rounded-lg border bg-opacity-90 p-4 bg-neutral-100/70 text-neutral-600">
      <section className="flex flex-row justify-between">
        <div className="size-16 overflow-hidden rounded-full border-4 border-white">
          <Image
            className="object-cover object-center hover:object-scale-down"
            src="https://storage.cerebase.com/128x128/pixel.webp"
            alt="Woman looking front"
            width={64}
            height={64}
          />
        </div>

        <div className="ml-4 flex flex-col space-y-0">
          <p className="text-md font-semibold">{agent.name}</p>
          <p className="text-sm">{agent.role}</p>
        </div>
      </section>

      <section className="flex w-full flex-row justify-between divide-x">
        <div className="flex flex-col px-1">
          <small className="text-xs">Experience</small>
          <p className="text-sm">{agent.experience}</p>
        </div>

        <div className="flex flex-col px-1">
          <small className="text-xs">Language</small>
          <p className="text-sm">{agent.languages[0]}</p>
        </div>

        <div className="flex flex-col px-1">
          <small className="text-xs">Not Done</small>
          <p className="text-sm">{agent.jobs}</p>
        </div>

        <div className="flex flex-col px-1">
          <small className="text-xs">Done</small>
          <p className="text-sm">{agent.jobs}</p>
        </div>
      </section>

      <section className="mt-3 w-full">
        <div>
          <span id="ProgressLabel" className="sr-only">
            Loading
          </span>

          <span
            role="progressbar"
            aria-labelledby="ProgressLabel"
            aria-valuenow={progress}
            className="block rounded-full bg-gray-200"
          >
            <span
              className={cn(
                "block h-2 rounded-full",
                progress >= 0 && progress < 10 && "bg-red-500", // Applied when 0 <= progress < 10
                progress >= 10 && progress < 30 && "bg-yellow-500", // Applied when 10 <= progress < 30
                progress >= 30 && progress < 60 && "bg-blue-500", // Applied when 30 <= progress < 60
                progress >= 60 && progress < 90 && "bg-indigo-600", // Applied when 60 <= progress < 90
                progress >= 90 && "bg-green-500" // Applied when progress >= 90
              )}
              style={{ width: `${progress}%` }}
            ></span>
          </span>
        </div>
      </section>

      <section>
        <small className="hidden text-xs">
          {agent.description.slice(0, 150)}
        </small>
      </section>
    </div>
  );
};
