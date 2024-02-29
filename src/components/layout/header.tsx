import React from "react";
import { createClient } from "@supabase/supabase-js";

// components
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// create supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON,
);

// contexts
// import useSessionStore from "../../contexts/session-store";
import { Badge } from "../ui/badge";
import { ThemeToggle } from "../theme-toggle";

// icons
import { FolderIcon } from "@heroicons/react/24/outline";

const Header: React.FC = () => {
  // const session = useSessionStore((state) => state.session);

  return (
    <header className="flex h-14 w-full grow-0 flex-row justify-between border-b px-6 py-4">
      {/** Org & Drive Navigation */}
      <div className="flex space-x-2">
        <p className="text-sm">Saga Labs</p>
        <Badge variant={"outline"}>Free</Badge>

        <Separator orientation="vertical" className="mx-1 h-6" />

        <span className="flex items-center space-x-1">
          <FolderIcon className="w-4 text-gray-400" />
          <p className="text-sm">Saga Labs</p>
        </span>
      </div>

      <div className="flex flex-row items-center space-x-2">
        <ThemeToggle />
        <Button size={"default"} onClick={async () => supabase.auth.signOut()}>
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
