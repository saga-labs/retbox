"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";

// contexts
import useProjectStore from "./contexts/use-store";

// icons
import {
  EllipsisVerticalIcon,
  HashtagIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

enum Status {
  Open = "open",
  Completed = "completed",
  Delayed = "delayed",
  Archived = "archived",
}

type Timeline = {
  start_date: string;
  end_date: string;
};

type FormValues = {
  title: string;
  description: string;
};

export default function ProjectModal({ show }: { show: boolean }) {
  const { register, handleSubmit } = useForm<FormValues>({});

  // modal handlers
  const step = useProjectStore((s) => s.step);
  const decrease = useProjectStore((s) => s.decrease);
  const increase = useProjectStore((s) => s.increase);
  const setOpen = useProjectStore((s) => s.setOpen);

  // form handler
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-neutral-900/70 flex items-center justify-center">
      <article className="relative">
        <div className="flex items-start gap-4 rounded-md border bg-white w-[640px]">
          <div className="flex flex-col space-y-2 grow">
            {/** Info and Timeline  Slot */}
            <section className="flex flex-row justify-between pt-4 px-6">
              <h3 className="font-normal text-lg">
                <a href="#" className="hover:underline">
                  New Project
                </a>
              </h3>

              <button type="button" onClick={() => setOpen(false)}>
                <XMarkIcon className="size-4" />
              </button>
            </section>

            <section className="pb-4 px-6">
              <Timeline />
            </section>

            {/** Form Slot */}
            <form
              className="grow py-4 px-4 flex flex-col divide-y"
              onSubmit={onSubmit}
            >
              {/** 1. Project Information */}
              <div className="py-3 space-y-3">
                <h3 className="text-sm font-semibold">
                  1. Project Information
                </h3>

                <small className="text-xs font-light text-neutral-500">
                  A repository contains all project files, including the
                  revision history. Already have a project repository elsewhere?
                  Import a repository.
                </small>

                <div className="relative">
                  <label htmlFor="title" className="sr-only">
                    Title
                  </label>

                  <input
                    type="text"
                    id="title"
                    placeholder="ACME Summer Campaign"
                    className="w-full rounded-md bg-gray-50 py-2 pl-2.5 pr-10 sm:text-sm"
                    {...register("title")}
                  />

                  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button
                      type="button"
                      className="text-gray-600 hover:text-gray-700"
                    >
                      <span className="sr-only">Search</span>
                      <EllipsisVerticalIcon className="size-4" />
                    </button>
                  </span>
                </div>

                <div className="relative">
                  <label htmlFor="describe" className="sr-only">
                    Describe
                  </label>

                  <textarea
                    id="describe"
                    placeholder="Project description..."
                    className="w-full rounded-md bg-gray-50 py-2 pl-2.5 pr-10 sm:text-sm"
                    {...register("description")}
                  />

                  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button
                      type="button"
                      className="text-gray-600 hover:text-gray-700"
                    >
                      <span className="sr-only">Search</span>
                      <EllipsisVerticalIcon className="size-4" />
                    </button>
                  </span>
                </div>

                <div className="relative">
                  <label htmlFor="status" className="sr-only">
                    Describe
                  </label>

                  <select
                    defaultValue={Status.Delayed}
                    className="w-full rounded-md bg-gray-50 py-2 px-2.5 sm:text-sm"
                  >
                    <option value={Status.Open}>Open</option>
                    <option value={Status.Archived}>Paused</option>
                    <option value={Status.Delayed}>Delayed</option>
                  </select>
                </div>
              </div>

              {/** 2. Project Timeline */}
              <div className="py-3">
                <h3 className="text-sm font-semibold">2. Project Timeline</h3>
                <small className="text-xs font-light text-neutral-500">
                  Estimate a timeline for your project? (dont worry you can
                  always extend)
                </small>

                <div className="relative">
                  <label htmlFor="Search" className="sr-only">
                    Search
                  </label>

                  <input
                    type="datetime-local"
                    id="Search"
                    placeholder="Search for..."
                    className="w-full rounded-md bg-gray-50 py-2 px-2.5 sm:text-sm"
                  />
                </div>

                <small className="text-xs font-light text-neutral-500">
                  Or create new channel for project
                </small>

                <div className="relative">
                  <label htmlFor="Search" className="sr-only">
                    Search
                  </label>

                  <input
                    type="date"
                    id="Search"
                    placeholder="Search for..."
                    className="w-full rounded-md bg-gray-50 py-2 px-2.5 sm:text-sm"
                  />
                </div>
              </div>
            </form>

            {/** Navigation Slot */}
            <section className="py-4 px-6 flex flex-row justify-between">
              {step == 0 ? (
                <button
                  className="inline-block rounded border border-blue-600 px-4 py-1 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              ) : (
                <button
                  className="inline-block rounded border border-blue-600 px-4 py-1 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500"
                  type="button"
                  onClick={decrease}
                >
                  Cancel
                </button>
              )}

              <button
                className="inline-block rounded border border-blue-600 bg-blue-600 px-4 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                type="submit"
              >
                Next
              </button>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}

export const Timeline: React.FC = () => {
  return (
    <div className="my-0">
      <h2 className="sr-only">Steps</h2>

      <div>
        <p className="text-xs font-medium text-gray-500">2/3 - Address</p>
        <div className="mt-2 overflow-hidden rounded-full bg-gray-200">
          <div className="h-2 w-2/3 rounded-full bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
};
