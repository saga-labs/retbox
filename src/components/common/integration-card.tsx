import { FingerPrintIcon } from "@heroicons/react/24/solid";
import React from "react";

export const IntegrationCard = () => {
  return (
    <article className="flex items-end justify-between rounded-lg border bg-neutral-100 p-6">
      <div>
        <p className="text-xl font-medium text-neutral-700 mb-2">Slack</p>
        <p className="text-xs text-blue-700 font-normal">Completed Tasks</p>
      </div>

      <div className="inline-flex gap-2 rounded bg-blue-100 p-1 text-blue-600">
        <FingerPrintIcon className="size-4" />
        <span className="text-xs font-medium"> Connect </span>
      </div>
    </article>
  );
};
