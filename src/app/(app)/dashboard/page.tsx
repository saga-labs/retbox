"use client";

import React from "react";
import useSWR from "swr";

// Services
import ProjectsService from "@/services/projects.service";

// components
import ProjectBlock from "@/features/project-block";

// mock
import { project } from "@/mock/project.ts";
import { Project } from "@/types/project";
import { StatsCard } from "@/components/common/stats-card";
import { Button } from "@/components/common/button";
import { IntegrationCard } from "@/components/common/integration-card";

export default function Dashboard() {
  const betaFlag = false;
  const { data, error, isLoading } = useSWR(
    "/api/dashboard",
    ProjectsService.getProjects
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="grid grid-cols-12 p-4 gap-4">
      {betaFlag && (
        <div className="col-span-12">
          <div className="relative flex items-center justify-between gap-4 rounded-lg bg-neutral-200/70 px-4 py-3 text-neutral-600">
            <p className="text-sm font-medium">
              Welcome to Cerebese, please remember this is
              <a href="#" className="inline-block underline">
                Early Beta
              </a>
            </p>

            <button
              aria-label="Close"
              className="shrink-0 rounded-lg bg-blue-100 p-1 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/** Stat Cards */}
      <section className="col-span-4">
        <StatsCard />
      </section>
      <section className="col-span-4">
        <StatsCard />
      </section>
      <section className="col-span-4">
        <StatsCard />
      </section>

      {/** Recent Projects */}
      <div className="col-span-12 flex flex-row justify-between">
        <h3 className="text-lg text-blue-700">Projects</h3>
        <Button size="sm" func={() => console.log("japan")}>
          Create
        </Button>
      </div>

      <section className="col-span-4">
        <ProjectBlock objective={project} project={data.data[0]} />
      </section>

      <section className="col-span-4">
        <ProjectBlock objective={project} project={data.data[0]} />
      </section>

      <section className="col-span-4">
        <ProjectBlock objective={project} project={data.data[0]} />
      </section>

      {/** Integrations */}
      <div className="col-span-12 flex flex-row justify-between">
        <h3 className="text-lg text-blue-700">Integrations</h3>
        <Button size="sm" func={() => console.log("japan")}>
          See more
        </Button>
      </div>

      <section className="col-span-3">
        <IntegrationCard />
      </section>

      <section className="col-span-3">
        <IntegrationCard />
      </section>

      <section className="col-span-3">
        <IntegrationCard />
      </section>

      <section className="col-span-3">
        <IntegrationCard />
      </section>

      <section className="col-span-3">
        <IntegrationCard />
      </section>

      <section className="col-span-3">
        <IntegrationCard />
      </section>

      <section className="col-span-3">
        <IntegrationCard />
      </section>

      <section className="col-span-3">
        <IntegrationCard />
      </section>
    </div>
  );
}
