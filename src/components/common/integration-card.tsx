import { FingerPrintIcon, FireIcon } from "@heroicons/react/24/solid";
import React from "react";

export type Integration = {
  id: number;
  name: string;
  description: string;
  icon_url: string;
};

interface Props {
  data: Integration;
  connected?: boolean;
}

export const IntegrationCard: React.FC<Props> = ({ data, connected = false }) => {
  return (
    <article className="flex items-end justify-between rounded-lg border bg-neutral-100 p-6">
      <div>
        <p className="text-xl font-medium text-neutral-700 mb-2">{data.name}</p>
        <p className="text-xs text-blue-700 font-normal">Completed Tasks</p>
      </div>

      <div className="inline-flex gap-1 rounded bg-blue-100 py-1 px-2 text-blue-600">
        {connected ? (
          <>
            <FireIcon className="size-4" />
            <span className="text-xs font-medium">Connected</span>
          </>
        ) : (
          <>
            <FingerPrintIcon className="size-4" />
            <span className="text-xs font-medium">Connect</span>
          </>
        )}
      </div>
    </article>
  );
};
