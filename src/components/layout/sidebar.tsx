import React from "react";

// components
import { Button } from "../ui/button";

// icons
import {
  BeakerIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  Cog8ToothIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const Sidebar: React.FC = () => {
  return (
    <aside className="flex h-screen flex-col space-y-2 border-r p-2">
      <Button variant={"ghost"} size={"icon"} className="text-2xl">
        🔮
      </Button>
      <Button variant={"ghost"} size={"icon"}>
        <ChatBubbleOvalLeftEllipsisIcon className="w-4 text-gray-500" />
      </Button>
      <Button variant={"ghost"} size={"icon"}>
        <CpuChipIcon className="w-4 text-gray-500" />
      </Button>
      <Button variant={"ghost"} size={"icon"}>
        <Cog8ToothIcon className="w-4 text-gray-500" />
      </Button>
      <Button variant={"ghost"} size={"icon"}>
        <BeakerIcon className="w-4 text-gray-500" />
      </Button>
    </aside>
  );
};

export default Sidebar;
