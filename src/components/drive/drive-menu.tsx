import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

// primitives
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const DriveMenu = () => {
  return (
    <article className="flex flex-row items-center justify-between space-x-2 pb-3 pt-6">
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <form>
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="grow pl-8" />
          </div>
        </form>
      </div>
      <Button variant={"default"} size={"icon"}>
        F
      </Button>
    </article>
  );
};
