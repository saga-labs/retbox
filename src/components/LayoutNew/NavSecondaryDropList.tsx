import React, { ReactNode } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { RowSpacingIcon, Cross2Icon, CaretDownIcon } from "@radix-ui/react-icons";

export const NavSecondaryDropList = ({
  meta,
  children,
}: {
  meta: string;
  children: Array<ReactNode> | ReactNode;
}) => {
  const [open, setOpen] = React.useState(true);
  return (
    <Collapsible.Root
      className="mt-4 w-full"
      open={open}
      onOpenChange={setOpen}
    >
      <div>
        <div className="group flex h-8 items-center px-3">
          <Collapsible.Trigger asChild>
            <button
              id="channels_toggle"
              className="flex flex-grow items-center focus:outline-none"
            >
              <svg
                className={`h-4 w-4 ${open && "rotate-180"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-2 text-sm font-medium leading-none">
                {meta}
              </span>
            </button>
          </Collapsible.Trigger>
          <button className="ml-auto hidden h-6 w-6 items-center justify-center rounded hover:bg-gray-300 group-hover:flex">
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
          <button className="ml-1 flex h-6 w-6 items-center justify-center rounded hover:bg-gray-300">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>

      <Collapsible.Content>{children}</Collapsible.Content>
    </Collapsible.Root>
  );
};
