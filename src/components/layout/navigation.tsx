"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Collapsible from "@radix-ui/react-collapsible";

// icons
import { ExitIcon, GearIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

import {
  BeakerIcon,
  UserGroupIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";
import { cn } from "@/utils/cn";

import type { Link as LinkType } from "@/types/nav-link";
import { ChevronUpDownIcon, XMarkIcon } from "@heroicons/react/24/solid";

const links: LinkType[] = [
  {
    title: "Dashboard",
    goto: "/dashboard",
    icon: <BeakerIcon className="size-5" />,
  },
  {
    title: "Projects",
    goto: "/projects",
    icon: <FlagIcon className="size-5" />,
  },
  {
    title: "Agents",
    goto: "/agents",
    icon: <UserGroupIcon className="size-5" />,
  },
  {
    title: "Settings",
    goto: "/settings",
    icon: <GearIcon className="size-5" />,
  },
];

export const Navigation: React.FC = () => {
  const [wide, setWide] = React.useState(true);
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "group flex flex-shrink-0 flex-col items-center justify-between border-r transition",
        wide ? "w-48" : "w-14"
      )}
    >
      <section className="flex w-full flex-col items-center group-hover:justify-start">
        <article className="indigo flex h-14 w-full items-center justify-center border-b ">
          <div className="w-7" onClick={() => setWide(!wide)}>
            <svg
              id="logo-15"
              width="29"
              height="28"
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
                className="ccustom"
                fill="rgb(79, 70, 229)"
              ></path>
              <path
                d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
                className="ccustom"
                fill="rgb(79, 70, 229)"
              ></path>
              <path
                d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
                className="ccustom"
                fill="rgb(79, 70, 229)"
              ></path>
              <path
                d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
                className="ccustom"
                fill="rgb(79, 70, 229)"
              ></path>
            </svg>
          </div>
          <h1 className={cn("ml-2", !wide && "hidden")}>cerebase</h1>
        </article>

        {/** links */}
        <article className="flex flex-col space-y-2 pt-2 px-2 w-full">
          {links.map((item: LinkType, key: React.Key) => (
            <Link
              key={key}
              className={cn(
                "flex h-10 w-full items-center rounded ",
                wide ? "justify-start px-4" : "justify-center",
                pathname == item.goto
                  ? "bg-blue-100/70 text-blue-700"
                  : "text-neutral-600 bg-neutral-200/70 hover:bg-neutral-400 hover:text-neutral-50"
              )}
              href={item.goto}
            >
              {item.icon}
              <p className={cn("ml-3 text-sm", !wide && "hidden")}>
                {item.title}
              </p>
            </Link>
          ))}
        </article>
      </section>

      {/** actions */}
      <section className="flex flex-col space-y-2 pb-2 w-full px-2">
        <button
          type="button"
          onClick={async () => console.log("app search")}
          className={cn(
            "flex h-10 w-full items-center rounded text-neutral-500  hover:bg-neutral-400 hover:text-neutral-50",
            wide ? "justify-start px-2" : "justify-center"
          )}
        >
          <MagnifyingGlassIcon className="h-4 w-4" />
          <p className={cn("ml-2 text-sm", !wide && "hidden")}>Search</p>
        </button>

        <Collapsible.Root className="w-full">
          <Collapsible.Trigger className="w-full">
            <div
              className={cn(
                "flex h-10 w-full items-center rounded text-neutral-500  hover:bg-neutral-400 hover:text-neutral-50",
                wide ? "justify-start px-2" : "justify-center"
              )}
              onClick={() => console.log("hello")}
            >
              <ExitIcon className="h-4 w-4" />
              <p className={cn("ml-2 text-sm", !wide && "hidden")}>User</p>
            </div>
          </Collapsible.Trigger>

          <Collapsible.Content>
            <div className="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA4">
              <span className="text-violet11 text-[15px] leading-[25px]">
                @radix-ui/primitives
              </span>
            </div>
            <div className="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA4">
              <span className="text-violet11 text-[15px] leading-[25px]">
                @radix-ui/primitives
              </span>
            </div>
            <div className="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA4">
              <span className="text-violet11 text-[15px] leading-[25px]">
                @radix-ui/primitives
              </span>
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      </section>
    </nav>
  );
};

const UserMenu = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root className="w-full" open={open} onOpenChange={setOpen}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="text-green-400 text-[15px] leading-[25px]">
          @peduarte starred 3 repositories
        </span>
        <Collapsible.Trigger asChild>
          <button className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none data-[state=closed]:bg-white data-[state=open]:bg-violet3 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black">
            {open ? <XMarkIcon /> : <ChevronUpDownIcon />}
          </button>
        </Collapsible.Trigger>
      </div>

      <div className="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA4">
        <span className="text-violet11 text-[15px] leading-[25px]">
          @radix-ui/primitives
        </span>
      </div>

      <Collapsible.Content>
        <div className="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA4">
          <span className="text-violet11 text-[15px] leading-[25px]">
            @radix-ui/colors
          </span>
        </div>
        <div className="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA4">
          <span className="text-violet11 text-[15px] leading-[25px]">
            @stitches/react
          </span>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
