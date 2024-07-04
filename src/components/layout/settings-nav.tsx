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
    text: "General",
    route: "/settings",
  },
  {
    text: "Integrations",
    route: "/settings/tenants",
  },
  {
    text: "Notications",
    route: "/settings/notifications",
  },
  {
    text: "Billing",
    route: "/settings/billing",
  },
];

export const SettingsNav = ({ path }: { path: string }) => {
  const tabStyle = "shrink-0 rounded px-4 py-1 text-sm font-medium hover:underline hover:underline-offset-4";
  return (
    <nav className="flex gap-6" aria-label="Tabs">
      {links.map((link: LinkType, i: React.Key) => {
        return (
          <Link
            key={i}
            href={link.route}
            className={cn(tabStyle, path == link.route ? "bg-blue-700  text-blue-100" : "text-gray-500")}
          >
            {link.text}
          </Link>
        );
      })}
    </nav>
  );
};
