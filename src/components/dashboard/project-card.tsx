import React from "react";
import Image from "next/image";

// icons
import { FingerPrintIcon, FireIcon } from "@heroicons/react/24/solid";

// utils

import { cn } from "@/utils/cn";

export const ProjectCard = ({}) => {
  const progress = Math.round(Math.random() * 100);
  const connected = true;
  return (
    <article className="flex flex-col space-y-6  rounded-lg border bg-neutral-100 p-6">
      {/** Header */}
      <div className="flex flex-col justify-between">
        <div className="flex flex-row items-center justify-between mb-4">
          <p className="text-xl font-medium text-neutral-700 mb-2">Project</p>
          <Avatars />
        </div>

        <p className="text-xs text-blue-700 font-normal line-clamp-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          sit rerum quis laborum, impedit porro, atque quos dicta officia quo,
          deserunt cumque consequuntur dolores laudantium fugit minima vitae
          magni voluptates.
        </p>
      </div>

      {/** Project Stats */}
      <div className="flex justify-between align-top">
        <div className="inline-flex gap-1 rounded bg-blue-100 py-1 px-2 text-blue-600">
          <FireIcon className="size-4" />
          <span className="text-xs font-medium">13 Epics</span>
        </div>
      </div>

      {/** Progress Tracker*/}
      <section className="mt-3 w-full">
        <div>
          <span id="ProgressLabel" className="sr-only">
            Loading
          </span>

          <span
            role="progressbar"
            aria-labelledby="ProgressLabel"
            aria-valuenow={progress}
            className="block rounded-full bg-gray-200"
          >
            <span
              className={cn(
                "block h-2 rounded-full",
                progress >= 0 && progress < 10 && "bg-blue-300", // Applied when 0 <= progress < 10
                progress >= 10 && progress < 30 && "bg-blue-400", // Applied when 10 <= progress < 30
                progress >= 30 && progress < 60 && "bg-blue-500", // Applied when 30 <= progress < 60
                progress >= 60 && progress < 90 && "bg-blue-600", // Applied when 60 <= progress < 90
                progress >= 90 && "bg-blue-700" // Applied when progress >= 90
              )}
              style={{ width: `${progress}%` }}
            ></span>
          </span>
        </div>

        <div className="flex justify-between font-light text-sm mt-2">
          <span>Progress</span>
          <span>{progress} %</span>
        </div>
      </section>
    </article>
  );
};

const Avatars = () => (
  <div className="flex -space-x-2 overflow">
    <Image
      className="object-cover object-center inline-block size-6 rounded-full ring-2 ring-white"
      src="https://storage.cerebase.com/128x128/pixel.webp"
      alt="Woman looking front"
      width={28}
      height={28}
    />
    <Image
      className="object-cover object-center inline-block size-6 rounded-full ring-2 ring-white"
      src="https://storage.cerebase.com/128x128/pixel.webp"
      alt="Woman looking front"
      width={28}
      height={28}
    />
    <Image
      className="object-cover object-center inline-block size-6 rounded-full ring-2 ring-white"
      src="https://storage.cerebase.com/128x128/pixel.webp"
      alt="Woman looking front"
      width={28}
      height={28}
    />
    <Image
      className="object-cover object-center inline-block size-6 rounded-full ring-2 ring-white"
      src="https://storage.cerebase.com/128x128/pixel.webp"
      alt="Woman looking front"
      width={28}
      height={28}
    />

    <span className=" flex items-center justify-center size-6 rounded-full ring-2 ring-white bg-white">
      <p className="font-light text-sm tracking-tight">+3</p>
    </span>
  </div>
);
