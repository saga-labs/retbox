import React, { use } from "react";
import Image from "next/image";

// local components
// import { Timeline } from "./components/timeline";
// import useIntegrationStore from "./contexts/use-integration";

// icons
import {
  EllipsisVerticalIcon,
  HashtagIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export const Integration = () => {
  const setOpen = useIntegrationStore((s) => s.setOpen);

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-neutral-900/70 flex items-center justify-center">
      <article className="relative">
        <div className="flex items-start gap-4 rounded-md border bg-white w-[640px]">
          <p>Hello</p>
        </div>
      </article>
    </div>
  );
};
