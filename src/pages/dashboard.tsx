import React from 'react';

// data
import mockData from '@/features/chat/mock/chat.json';

// context
import useViewStore from '@/contexts/use-view';
import { View } from '@/contexts/use-view';

// common components
import Layout from '@/components/layout';
import { ResizablePanelGroup } from '@/components/common/resizable';
import { ResizablePanel } from '@/components/common/resizable';
import { ResizableHandle } from '@/components/common/resizable';

// feature: drive
import { ToolBar } from '@/features/drive/components/toolbar';
import { Browser } from '@/features/drive/components/browser';

// feature: chat
import { ChatMessage } from '@/features/chat/components/chat-message';
import { ChatContainer } from '@/features/chat/components/chat-container';
import type { MessageType, ChatType } from '@/features/chat/types/chat';
// import { ChatInput } from '@/features/chat/components/chat-input';

const Dashboard: React.FC = () => {
  const [chat] = React.useState<ChatType>(mockData);
  const selected = useViewStore((state) => state.selected);
  return (
    <Layout>
      {selected === View.drive && (
        <div className="px-3 py-3">
          <div className="item flex h-full grow flex-col space-y-3 overflow-scroll p-[5px]">
            <ToolBar />
            <Browser />
          </div>
        </div>
      )}

      {selected === View.chat && (
        <ChatContainer>
          <div className=" flex flex-col divide-y">
            {chat?.messages.map((message: MessageType, key: React.Key) => (
              <ChatMessage message={message} key={key} />
            ))}
          </div>
        </ChatContainer>
      )}

      {selected == View.split && (
        <ResizablePanelGroup
          direction="horizontal"
          className="flex h-screen flex-grow"
        >
          {/* Drive Panel */}
          <ResizablePanel minSize={25} defaultSize={67}>
            <div className="px-3 py-3">
              <div className="item flex h-full grow flex-col space-y-3 overflow-scroll p-[5px]">
                <ToolBar />
                <Browser />
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle className="border-l" />

          {/* Chat Panel */}
          <ResizablePanel minSize={25} defaultSize={33}>
            <ChatContainer>
              <div className=" flex flex-col divide-y">
                {chat?.messages.map((message: MessageType, key: React.Key) => (
                  <ChatMessage message={message} key={key} />
                ))}
              </div>
            </ChatContainer>
          </ResizablePanel>
        </ResizablePanelGroup>
      )}
    </Layout>
  );
};

export default Dashboard;
