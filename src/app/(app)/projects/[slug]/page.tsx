"use client";

import React from "react";
import useSWR from "swr";

// services
import ProjectsService from "@/services/projects.service";

// mock data
import project from "@/mock/project.json";
import { Task } from "@/types/objective";
import Link from "next/link";
import Kanban from "@/features/kanban";
import { StatsCard } from "@/components/common/stats-card";


interface Props {
  params: { slug: string };
}

export default function ProjectsDetail({ params }: Props) {
  const eid = "01J0S3E69Y36YXXSG2JFCSATEF";

  const { data, error, isLoading } = useSWR(
    "/projects",
    ProjectsService.getProjects
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <div className="flex flex-col h-screen justify-between space-x-2 px-4 py-4 2xl:flex-row">
      <section className="mt-0 flex flex-col grow overflow-auto 2xl:mt-0 2xl:w-4/5">
        {/** Title */}
        <StatsCard stats={{ desc: params.slug, amount: 45, change: 43.23 }} />

        {/** Task Board Content*/}
        <Kanban />
      </section>
    </div>
  );
}
