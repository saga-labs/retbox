"use client";

import React from "react";
import useSWR from "swr";

// Services
import ProjectsService from "@/services/projects.service";

// components
import ProjectBlock from "@/features/project-block";

// mock
import { project } from "@/mock/project.ts";
import { Project } from "@/features/project-block/types/request";

export default function Projects() {
  const { data, error, isLoading } = useSWR(
    "/api/projects",
    ProjectsService.getProjects
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  if (data)
    return (
      <section className="flex flex-col space-y-8 p-8">
        {data.data.map((d: Project, i: React.Key) => {
          return <ProjectBlock objective={project} project={d} key={i} />;
        })}
      </section>
    );
}
