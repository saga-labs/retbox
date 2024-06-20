"use client";

import React from "react";

// Services
import ProjectsService from "@/services/projects.service";

// components
import ProjectBlock from "@/features/project-block";

// mock
import { project } from "@/mock/project.ts";
import useSWR from "swr";

export default function Projects() {
  const { data, error, isLoading } = useSWR(
    "/api/projects",
    ProjectsService.getProjects
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  if (data)
    return (
      <section className="flex flex-col space-y-8 p-8">
        <ProjectBlock project={project} />
        <ProjectBlock project={project} />
        <ProjectBlock project={project} />
      </section>
    );
}
