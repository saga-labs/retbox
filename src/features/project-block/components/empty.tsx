import React from "react";

// icons
import { FolderPlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const Empty = () => {
  return (
    <Link href={"/projects"}>
      <article className="cursor-pointer border border-dashed p-4 sm:p-6 lg:p-8 flex grow h-full rounded-lg items-center justify-center">
        <FolderPlusIcon className="size-8 text-neutral-600" />
      </article>
    </Link>
  );
};
