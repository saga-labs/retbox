"use client";

import React from "react";

// components
import { Integration } from "@/features/integration";
import useIntegrationStore from "@/features/integration/contexts/use-integration";

export default function Settings() {
  const open = useIntegrationStore((s) => s.open);
  const setOpen = useIntegrationStore((s) => s.setOpen);

  return (
    <div className="p-4">
      <h3>Settings</h3>
      <button onClick={() => setOpen(true)}>Add New</button>
      {open && <Integration />}
    </div>
  );
}
