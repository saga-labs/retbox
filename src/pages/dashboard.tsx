import React from "react";

// primitives
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

// components
import Layout from "@/components/layout";
import { DriveMenu } from "@/components/drive/drive-menu";
import { DriveBrowser } from "@/components/drive/drive-browser";
import { ChatMessages } from "@/components/chat/chat-messages";
import { ChatInput } from "@/components/chat/chat-input";

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <ResizablePanelGroup
        direction="horizontal"
        className="flex h-screen flex-grow"
      >
        {/* Drive Panel */}
        <ResizablePanel minSize={25} defaultSize={67}>
          <div className="item flex h-full flex-col overflow-scroll px-6 pb-6 @container">
            <DriveMenu />
            <DriveBrowser />
          </div>
        </ResizablePanel>
        <ResizableHandle />

        {/* Chat Panel */}
        <ResizablePanel minSize={25} defaultSize={33}>
          <div className="flex h-full flex-col justify-between p-2">
            <ChatMessages />
            <ChatInput />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </Layout>
  );
};

export default Dashboard;
