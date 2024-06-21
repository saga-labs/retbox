import React from "react";
import { cn } from "@/utils/cn";

type Size = "sm" | "md" | "lg";

interface Props {
  size: Size;
  func: () => void;
  children: React.ReactNode;
}

export const Button = ({ size, func, children }: Props) => {
  return (
    <button
      className={cn(
        "inline-block rounded border border-blue-600 bg-blue-600 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500",
        size === "sm" && "px-4 py-1 ",
        size === "md" && "px-6 py-2 ",
        size === "lg" && "px-8 py-3 "
      )}
      type="button"
      onClick={func}
    >
      {children}
    </button>
  );
};
