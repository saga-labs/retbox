"use client";

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import { Button } from "@/components/common/button";
import { cn } from "@/utils/cn";
import { SettingsNav } from "@/components/layout/settings-nav";

export default function BillingPage() {
  // const open = useIntegrationStore((s) => s.open);
  // const setOpen = useIntegrationStore((s) => s.setOpen);

  return (
    <div className="p-4">
      <div className="flex flex-col space-y-2 divide-y">
        {[...Array(3)].map((_, i: React.Key) => {
          return (
            <div className="grid grid-cols-5 gap-4 py-4" key={i}>
              <p>Hello</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
