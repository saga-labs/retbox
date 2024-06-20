"use client";

import React from "react";

// components
import { AlertsPopover } from "@/components/common/popover";

// contexts

// icons
import { BellIcon } from "@radix-ui/react-icons";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const MenuBar: React.FC = () => {
  return (
    <nav className="flex h-14 flex-shrink-0 items-center justify-between border-b  px-4">
      <section className="flex divide-x">
      <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-gray-600">
        <li>
          <a
            href="/projects"
            className="block font-mono text-indigo-600 transition hover:text-gray-700"
          >
            projects
          </a>
        </li>

        <li className="rtl:rotate-180">
          <ChevronRightIcon className="size-4" />
        </li>

        <li>
          <a
            href="/projects/01j0c82ay5pmhk09vxw61s12np"
            className="block font-mono text-blue-600 transition hover:text-gray-700"
          >
            spring-webshop-2024
          </a>
        </li>

        <li className="rtl:rotate-180">
          <ChevronRightIcon className="size-4" />
        </li>

        <li>
          <a
            href="/projects/01j0c82ay5pmhk09vxw61s12np/epic/01j0c82ay5pmhk09vxw61s12np"
            className="block font-mono transition hover:text-gray-700"
          >
            tasks
          </a>
        </li>
      </ol>
    </nav>
      </section>

      <div className="">
        <AlertsPopover>
          <BellIcon className="size-4 text-neutral-400" />
        </AlertsPopover>
      </div>
    </nav>
  );
};

export default MenuBar;
