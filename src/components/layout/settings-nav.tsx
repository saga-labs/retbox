import React from "react";
import Link from "next/link";

// utils
import { cn } from "@/utils/cn";

type LinkType = {
  text: string;
  route: string;
};

const links: LinkType[] = [
  {
    text: "Settings",
    route: "/settings",
  },
  {
    text: "Tenants",
    route: "/settings/tenants",
  },
  {
    text: "Billing",
    route: "/settings/billing",
  },
  {
    text: "Notications",
    route: "/settings/notifications",
  },
];

export const SettingsNav = ({ path }: { path: string }) => {
  const tabStyle = "shrink-0 rounded-lg px-4 py-2 text-sm font-medium hover:underline hover:underline-offset-4";
  return (
    <nav className="flex gap-6" aria-label="Tabs">
      {links.map((link: LinkType, i: React.Key) => {
        return (
          <Link
            key={i}
            href={link.route}
            className={cn(tabStyle, path == link.route ? "bg-blue-100/70  text-blue-700" : "text-gray-500")}
          >
            {link.text}
          </Link>
        );
      })}
    </nav>
  );
};
