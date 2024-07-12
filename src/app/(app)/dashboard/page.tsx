"use client";

import React from "react";
import useSWR from "swr";
import { useLocalStorage } from "usehooks-ts";

// contexts
import useFlagStore from "@/contexts/use-flags";

// services
import ProjectsService from "@/services/projects.service";

// components:features
import ProjectBlock from "@/features/project-block";

// components:common
import { StatsCard } from "@/components/common/stats-card";
import { Button } from "@/components/common/button";
import { IntegrationCard } from "@/components/common/integration-card";
import {
  ProjectCard,
  ProjectSinkCard,
} from "@/components/dashboard/project-card";

// mock
import integrations from "@/mock/integrations.json";
import { Project } from "@/features/project-block/types/request";
import { Empty } from "@/features/project-block/components/empty";

const TAVILY = process.env.NEXT_PUBLIC_TAVILY_SEARCH;

export type Integration = {
  id: number;
  name: string;
  description: string;
  icon_url: string;
};

export default function Dashboard() {
  const { flags } = useFlagStore();
  const [value, setValue] = useLocalStorage("integration-tavily", "");
  const [beta, setBeta] = useLocalStorage("beta_notification", true);

  const {
    data: projects,
    error: projectsError,
    isLoading: projectsLoading,
  } = useSWR("/api/dashboard", ProjectsService.getDashboardProjects);

  if (projectsError) return <div>failed to load</div>;
  if (projectsLoading) return <div>loading...</div>;

  return (
    <div className="grid grid-cols-12 p-4 gap-4">
      {flags.featureBeta && beta && (
        <div className="col-span-12">
          <div className="relative flex items-center justify-between gap-4 rounded-lg bg-neutral-200/70 px-4 py-3 text-neutral-600">
            <p className="text-sm font-medium">
              Thank you for joining our{" "}
              <a href="#" className="inline-block underline">
                early beta!
              </a>{" "}
              We&apos;re helping good people do good things, and we appreciate
              your patience as we grow.
            </p>

            <button
              aria-label="Close"
              className="shrink-0 rounded-lg bg-blue-100 p-1 transition"
              onClick={() => setBeta(false)}
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
        <StatsCard stats={{ desc: "Completed", amount: 45, change: 43.23 }} />
      </section>
      <section className="col-span-4">
        <StatsCard stats={{ desc: "Backlog", amount: 75, change: 43.23 }} />
      </section>
      <section className="col-span-4">
        <StatsCard stats={{ desc: "Retention", amount: 8, change: 43.23 }} />
      </section>

      {/** Recent Projects */}
      <div className="col-span-12 flex flex-row justify-between">
        <h3 className="text-lg text-blue-700">Projects</h3>
        <Button size="sm" func={() => console.log("japan")}>
          Create
        </Button>
      </div>

      {/** Projects: sorted by updated_at & limited to three */}
      {projects.data.map((project: Project) => (
        <section className="col-span-4" key={project._id}>
          <ProjectSinkCard project={project} />
        </section>
      ))}

      {/** Projects: display empty state for remainders */}
      {[...Array(3 - projects.data.length)].map((i: React.Key) => (
        <section className="col-span-4" key={i}>
          <Empty />
        </section>
      ))}

      {/** Integrations */}
      <div className="col-span-12 flex flex-row justify-between items-end">
        <h3 className="text-lg text-blue-700">Integrations</h3>
        <Button size="sm" func={() => setValue(btoa(TAVILY!))}>
          See more
        </Button>
      </div>

      {integrations.map((int: Integration, i: React.Key) => {
        return (
          <section className="col-span-3" key={i}>
            {value !== "" ? (
              <IntegrationCard data={int} connected />
            ) : (
              <IntegrationCard data={int} />
            )}
          </section>
        );
      })}
    </div>
  );
}
