import React from "react";

// icons
import { FolderPlusIcon } from "@heroicons/react/24/solid";

export const Empty = () => {
  return (
    <article className="cursor-pointer border border-dashed p-4 sm:p-6 lg:p-8 flex grow h-full rounded-lg items-center justify-center">
      <FolderPlusIcon className="size-8 text-neutral-600" />
    </article>
  );
};
