import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Tooltip from "@radix-ui/react-tooltip";

// Components
import AvatarComponent from "../shared/AvatarComponent";

// Icons
import {
  Cog6ToothIcon,
  CommandLineIcon,
  CubeIcon,
  NewspaperIcon,
  Square3Stack3DIcon,
  Squares2X2Icon
} from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";

// Interfaces
interface NavData {
  url: string;
  desc: string;
  children: JSX.Element;
}

export const MainNav = () => {
  return (
    <div className="flex w-16 flex-shrink-0 flex-col items-center space-y-4 border-r border-gray-300 bg-gray-200 py-3">
      <Link
        href="/"
        className="flex h-10 w-10 items-center justify-center rounded bg-none"
      >
        <Image src="logo.svg" width={32} height={32} alt="logo" />
      </Link>

      <NavItem url="/" desc="Dashboard">
        <Squares2X2Icon className="h-5 w-5" />
      </NavItem>

      <NavItem url="/news" desc="News">
        <NewspaperIcon className="h-5 w-5" />
      </NavItem>

      <NavItem url="/containers" desc="Containers">
        <CubeIcon className="h-5 w-5" />
      </NavItem>

      <NavItem url="/strategies" desc="Strategies">
        <CommandLineIcon className="h-5 w-5" />
      </NavItem>

      <NavItem url="/services" desc="Services">
        <Square3Stack3DIcon className="h-5 w-5" />
      </NavItem>

      <NavItem url="/settings" desc="Settings">
        <Cog6ToothIcon className="h-5 w-5" />
      </NavItem>

      <div className="absolute bottom-4">
        <button type="button" onClick={() => signOut({callbackUrl: '/auth/signin'})}>
          <AvatarComponent />
        </button>
      </div>
    </div>
  );
};

const NavItem = ({ url, desc, children }: NavData) => {
  let style =
    "flex h-10 w-10 items-center justify-center rounded bg-gray-300 text-gray-500 hover:bg-gray-500  hover:text-white";

  if (useRouter().asPath == url) {
    style =
      "flex h-10 w-10 items-center justify-center rounded bg-green-500 text-white hover:bg-gray-500  hover:text-white";
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Link className={style} href={url}>
            {children}
          </Link>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade"
            sideOffset={5}
            side={"right"}
          >
            {desc}
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
