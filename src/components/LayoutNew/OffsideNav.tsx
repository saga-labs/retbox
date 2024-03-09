import React, { useState } from "react";

// Icons
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import useUpdateStore from "../../context/useUpdateStore";

export const OffsideNav = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const updateTime = useUpdateStore(state => state.updateTime);

  if (showSideBar) {
    return (
      <div className="flex w-1/4 max-w-xs flex-shrink-0 flex-col border-l border-gray-300 bg-gray-100">
        <div className="flex h-16 shrink-0 items-center border-b border-gray-300 px-4">
          <div>
            <h2 className="text-sm font-semibold leading-none">Market News</h2>
            <a className="text-xs leading-none text-gray-400" href="#">
              Last Updated: {updateTime}
            </a>
          </div>
          <button className="ml-auto flex h-6 w-6 items-center justify-center rounded hover:bg-gray-300" onClick={() => setShowSideBar(!showSideBar)}>
            <ChevronDoubleRightIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-grow flex-col divide-y overflow-auto">
          {[...Array(130)].map((_: unknown, key: React.Key) => {
            return (
              <div
                key={key}
                className="flex w-full flex-row items-center justify-between space-x-1 rounded-none bg-gray-100 p-2 px-4 hover:cursor-pointer hover:bg-gray-200"
              >
                <h2 className="text-sm">Apple reaches 2 trillion... </h2>
                <div className="flex flex-row space-x-2">
                  <div className="rounded bg-green-500 p-1 text-xs text-white ">
                    87.00
                  </div>
                  <div className="rounded bg-black p-1 text-xs uppercase text-white">
                    appl
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-16 max-w-xs flex-shrink-0 flex-col border-l border-gray-300 bg-gray-100">
      <div className="flex h-16 shrink-0 items-center border-b border-gray-300 px-4">
        <button
          type="button"
          className="mx-auto flex h-6 w-6 items-center justify-center rounded hover:bg-gray-300"
          onClick={() => setShowSideBar(!showSideBar)}
        >
          <ChevronDoubleLeftIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
