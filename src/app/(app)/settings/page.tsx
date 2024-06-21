"use client";

import React from "react";

// components
import { Integration } from "@/features/integration";
import useIntegrationStore from "@/features/integration/contexts/use-integration";
import Image from "next/image";
import { Button } from "@/components/common/button";

export default function Settings() {
  const open = useIntegrationStore((s) => s.open);
  const setOpen = useIntegrationStore((s) => s.setOpen);

  return (
    <>
      {open && <Integration />}
      <div className="p-4">
        <div className="flex flex-row justify-between">
          <h3 className="text-xl font-semibold">Settings</h3>
          <Button size="sm" func={() => setOpen(true)}>
            Add New
          </Button>
        </div>

        {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

        <div>
          <div className="sm:hidden">
            <label htmlFor="Tab" className="sr-only">
              Tab
            </label>

            <select id="Tab" className="w-full rounded-md border-gray-200">
              <option>Settings</option>
              <option>Messages</option>
              <option>Archive</option>
              <option selected>Notifications</option>
            </select>
          </div>

          <div className="hidden sm:block">
            <nav className="flex gap-6" aria-label="Tabs">
              <a
                href="#"
                className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
                Settings
              </a>

              <a
                href="#"
                className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
                Teams
              </a>

              <a
                href="#"
                className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
                Payments
              </a>

              <a
                href="#"
                className="shrink-0 rounded-lg bg-blue-100/70 px-4 py-2 text-sm font-medium text-blue-700"
                aria-current="page"
              >
                Notifications
              </a>
            </nav>
          </div>
        </div>

        <div className="flex flex-col space-y-2 divide-y">
          {[...Array(3)].map((_, i: React.Key) => {
            return (
              <div className="grid grid-cols-5 gap-4 py-4" key={i}>
                <div className="col-span-2 flex flex-col -space-y-0.5">
                  <h3 className="font-medium">Interface theme</h3>
                  <small className="text-xs">
                    Select or Customize your UI theme.
                  </small>
                </div>

                <OptionCard title={"System Preference"} />
                <OptionCard title={"Light Mode"} />
                <OptionCard title={"Dark Mode"} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const OptionCard = ({ title }: { title: string }) => (
  <div className="group block overflow-hidden">
    <div className="relative">
      <Image
        src="https://storage.cerebase.com/integrations/slack.webp"
        alt=""
        width={258}
        height={258}
        className="object-cover aspect-square rounded-md border"
      />
    </div>

    <div className="relative pt-3">
      <h3 className="text-sm tracking-wide text-gray-900 group-hover:underline group-hover:underline-offset-4">
        {title}
      </h3>
    </div>
  </div>
);
