"use client";

import React from "react";

// components
import ProjectBlock from '@/features/project-block';

// mock
import { project } from '@/mock/project.ts';

export default function Projects() {
  return (
    <section className="flex flex-col space-y-8 p-8">
      <ProjectBlock project={project} />
      <ProjectBlock project={project} />
      <ProjectBlock project={project} />
    </section>
  );
}
