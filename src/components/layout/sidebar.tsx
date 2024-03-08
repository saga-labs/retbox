import React from "react";

// components
import { Button } from "../ui/button";

const Sidebar: React.FC = () => {
  return (
    <aside className="flex h-screen flex-col space-y-2 border-r p-2">
      <Button variant={"ghost"} size={"icon"} className="text-2xl">🔮</Button>
      <Button variant={"ghost"} size={"icon"}>A</Button>
      <Button variant={"ghost"} size={"icon"}>B</Button>
      <Button variant={"ghost"} size={"icon"}>C</Button>
      <Button variant={"ghost"} size={"icon"}>D</Button>
    </aside>
  );
};

export default Sidebar;
