"use client";

import React from "react";
import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";

// utils
import { cn } from "@/utils/cn";

export default function Settings() {
  const [theme, setTheme, removeTheme] = useLocalStorage("theme", "");

  return (
    <div className="p-4">
      <div className="flex flex-col space-y-2 divide-y">
        {[...Array(3)].map((_, i: React.Key) => {
          return (
            <div className="grid grid-cols-5 gap-4 py-4" key={i}>
              <div className="col-span-2 flex flex-col -space-y-0.5">
                <h3 className="font-medium text-blue-700">Interface theme</h3>
                <small className="text-xs">
                  Select or Customize your UI theme.
                </small>
              </div>

              <OptionCard
                title={"System Preference"}
                func={removeTheme}
                active={theme == ""}
              />
              <OptionCard
                title={"Light Mode"}
                func={() => setTheme("light")}
                active={theme == "light"}
              />
              <OptionCard
                title={"Dark Mode"}
                func={() => setTheme("dark")}
                active={theme == "dark"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface Props {
  title: string;
  func: () => void;
  active: boolean;
}

const OptionCard: React.FC<Props> = ({ title, func, active }) => (
  <div className={"group block overflow-hidden"} onClick={func}>
    <div className={cn("relative p-2", active && "border border-blue-700")}>
      <Image
        src="https://storage.cerebase.com/app/mode.png"
        alt=""
        width={258}
        height={258}
        className="object-cover aspect-square rounded-md ring-2"
      />
    </div>

    <div className="relative pt-3">
      <h3 className="text-sm tracking-wide text-gray-900 dark:text-neutral-400 group-hover:underline group-hover:underline-offset-4">
        {title}
      </h3>
    </div>
  </div>
);
