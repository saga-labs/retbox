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
          <Button size="sm" func={() => setOpen(true)}>Add New</Button>
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
                <OptionCard title={"Light Mode"}/>
                <OptionCard title={"Dark Mode"}/>
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
        { title }
      </h3>
    </div>
  </div>
);
