"use client";

import React from "react";
import useSWR from "swr";

// Services
import ProjectsService from "@/services/projects.service";

// components
import ProjectBlock from "@/features/project-block";
import { Button } from "@/components/common/button";

// mock
import { StatsCard } from "@/components/common/stats-card";
import { project } from "@/mock/project.ts";
import { Project } from "@/features/project-block/types/request";
import ProjectModal from "@/features/project-modal";
import useProjectStore from "@/features/project-modal/contexts/use-store";
import { ProjectSinkCard } from "@/components/dashboard/project-card";

export default function Projects() {
  const open = useProjectStore((s) => s.open);
  const setOpen = useProjectStore((s) => s.setOpen);
  const { data, error, isLoading } = useSWR(
    "/api/projects",
    ProjectsService.getProjects
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  if (data)
    return (
      <div className="p-4">
        {open && <ProjectModal show />}

        {/** Title */}
        <StatsCard stats={{ desc: "Projects", amount: 45, change: 43.23 }} />

        <div className="flex flex-row justify-between my-4">
          <h3 className="text-xl font-semibold">Projects</h3>
          <Button size="sm" func={() => setOpen(true)}>
            Add New
          </Button>
        </div>
        <section className="grid grid-cols-2 gap-4">
          {data.data.map((d: Project, i: React.Key) => {
            return <ProjectSinkCard project={d} key={i} />;
          })}
        </section>
      </div>
    );
}
