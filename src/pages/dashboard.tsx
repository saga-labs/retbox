import React from "react";

// icons
import { MagnifyingGlassIcon as Search } from "@heroicons/react/24/solid";

// components
import Layout from "../components/layout";
import DriveItem from "@/components/drive-item";

// shadcn primitives
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <Layout>
      <ResizablePanelGroup direction="horizontal" className="">
        {/** Drive Pnale */}
        <ResizablePanel minSize={25} defaultSize={66}>
          <div className="@container item flex h-full flex-col px-6 pb-6">
            {/** Drive Menu */}
            <article className="flex flex-row items-center justify-between space-x-2 pb-3 pt-6">
              {/** Search Bar */}
              <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search" className="grow pl-8" />
                  </div>
                </form>
              </div>

              {/** Filter */}
              <Button variant={"default"} size={"icon"}>
                F
              </Button>
            </article>

            {/** Drive File Browser */}
            <ScrollArea>
              <div className="@xs:md:grid-cols-2 @sm:grid-cols-3 @md:grid-cols-5 grid grid-cols-1 gap-2">
                {[...Array(23)].map(() => (
                  <DriveItem />
                ))}
              </div>
            </ScrollArea>
          </div>
        </ResizablePanel>
        <ResizableHandle />

        {/** Chat Panel */}
        <ResizablePanel minSize={25} defaultSize={33}>
          <div className="h-full flex-row items-center justify-between p-2">
            <div className="p-4">
              <form>
                <div className="grid gap-4">
                  <Textarea
                    className="p-4 resize-none"
                    placeholder={`Reply ${"Frederik"}...`}
                  />
                  <div className="flex items-center">
                    <Button
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                      className="ml-auto"
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </Layout>
  );
};

export default Dashboard;
