import React, { use } from "react";
import Image from "next/image";

// local components
import { Timeline } from "./components/timeline";

import useIntegrationStore from "./contexts/use-integration";

// icons
import {
  EllipsisVerticalIcon,
  HashtagIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export const Integration = () => {
  const step = useIntegrationStore((s) => s.step);
  const decrease = useIntegrationStore((s) => s.decrease);
  const increase = useIntegrationStore((s) => s.increase);
  const setOpen = useIntegrationStore((s) => s.setOpen);

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-neutral-900/70 flex items-center justify-center">
      <article className="relative shadow-xl rounded-xl">
        <div className="flex items-start gap-4 rounded-xl border bg-white w-[640px]">
          <div className="flex flex-col space-y-2 grow">
            {/** Info and Timeline  Slot */}
            <section className="flex flex-row justify-between pt-4 px-6">
              <h3 className="font-normal text-lg">
                <a href="#" className="hover:underline">
                  New Integration
                </a>
              </h3>

              <button type="button" onClick={() => setOpen(false)}>
                <XMarkIcon className="size-4" />
              </button>
            </section>

            <section className="pb-4 px-6">
              <Timeline />
            </section>

            <section className="flex flex-row divide-x w-full border-y">
              {/** Presentation Slot */}
              <div className="w-1/2 grow py-4 px-4 flex flex-col divide-y">
                {/** show integration */}
                <div className="flex flex-row py-2 pb-4 space-x-3">
                  <Image
                    src="https://storage.cerebase.com/integrations/slack.webp"
                    alt="Slack Logo"
                    width={45}
                    height={45}
                  />
                  <div className="flex flex-col -space-y-1">
                    <h3 className="text-lg font-normal">Slack</h3>
                    <small className="text-md font-light text-gray-500">
                      Basic
                    </small>
                  </div>
                </div>

                {/** integration description */}
                <p className="line-clamp-2 text-xs font-light text-gray-500 py-2">
                  See our documentation for more information on how to interact
                  with Slack.
                </p>

                {/** integration agents */}
                <div className="flex flex-row py-2">
                  <div>
                    <h4 className="text-sm font-semibold">Supported Agents</h4>
                    <small>Basic</small>
                  </div>
                </div>

                {/** integration example */}
                <div className="relative flex flex-col py-2">
                  <h3 className="text-md font-normal">example</h3>
                  <div className="relative w-full aspect-video">
                    <Image
                      src="https://storage.cerebase.com/integrations/slack/example.png"
                      alt="Slack Logo"
                      fill={true}
                      priority={false}
                      className="object-scale-down"
                    />
                  </div>
                </div>
              </div>

              {/** Form Slot */}
              <div className="w-1/2 grow py-4 px-4 flex flex-col divide-y">
                {/** 1. Choose workspace */}
                <div className="py-3">
                  <h3 className="text-sm font-semibold">1. Choose workspace</h3>
                  <small className="text-xs font-light text-neutral-500">
                    Authenticate with your Slack Workspace
                  </small>

                  <div className="relative">
                    <label htmlFor="Search" className="sr-only">
                      Search
                    </label>

                    <input
                      type="text"
                      id="Search"
                      placeholder="Search for..."
                      className="w-full rounded-md bg-gray-50 py-2 pl-2.5 pr-10 sm:text-sm"
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
                </div>

                {/** 2. Select Channel */}
                <div className="py-3">
                  <h3 className="text-sm font-semibold">2. Select Channel</h3>
                  <small className="text-xs font-light text-neutral-500">
                    Authenticate with your Slack Workspace
                  </small>

                  <div className="relative">
                    <label htmlFor="Search" className="sr-only">
                      Search
                    </label>

                    <input
                      type="text"
                      id="Search"
                      placeholder="Search for..."
                      className="w-full rounded-md bg-gray-50 py-2 pl-2.5 pr-10 sm:text-sm"
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

                  <small className="text-xs font-light text-neutral-500">
                    Or create new channel for project
                  </small>

                  <div className="relative">
                    <label htmlFor="Search" className="sr-only">
                      Search
                    </label>

                    <input
                      type="text"
                      id="Search"
                      placeholder="Search for..."
                      className="w-full rounded-md bg-gray-50 py-2 pl-2.5 pr-10 sm:text-sm"
                    />

                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                      <button
                        type="button"
                        className="text-gray-600 hover:text-gray-700"
                      >
                        <span className="sr-only">Search</span>
                        <HashtagIcon className="size-3" />
                      </button>
                    </span>
                  </div>
                </div>

                {/** 3. Select API-Key */}
                <div className="py-3">
                  <h3 className="text-sm font-semibold">3. Select API-Key</h3>
                  <small className="text-xs font-light text-neutral-500">
                    Authenticate with your Slack Workspace
                  </small>

                  <div className="relative">
                    <label htmlFor="Search" className="sr-only">
                      Search
                    </label>

                    <input
                      type="text"
                      id="Search"
                      placeholder="Search for..."
                      className="w-full rounded-md bg-gray-50 py-2 pl-2.5 pr-10 sm:text-sm"
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
                </div>
              </div>
            </section>

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
                type="button"
                onClick={increase}
              >
                Next
              </button>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
};
