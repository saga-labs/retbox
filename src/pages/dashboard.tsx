import React from 'react';

// data
import mockData from '@/features/chat/mock/chat.json';

// common components
import Layout from '@/components/layout';
import { Input } from '@/components/common/input';
import { ResizablePanelGroup } from '@/components/common/resizable';
import { ResizablePanel } from '@/components/common/resizable';
import { ResizableHandle } from '@/components/common/resizable';

// feature: drive

// feature: chat
import { ChatMessage } from '@/features/chat/components/chat-message';
import { ChatContainer } from '@/features/chat/components/chat-container';
import type { MessageType, ChatType } from '@/features/chat/types/chat';

const Dashboard: React.FC = () => {
  const [chat] = React.useState<ChatType>(mockData);
  return (
    <Layout>
      <ResizablePanelGroup
        direction="horizontal"
        className="flex h-screen flex-grow"
      >
        {/* Drive Panel */}
        <ResizablePanel minSize={25} defaultSize={67}>
          <div className="px-4 py-3">
            <div className="item @container flex h-full flex-col overflow-scroll p-[5px]">
              <Input />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle className="border-l" />

        {/* Chat Panel */}
        <ResizablePanel minSize={25} defaultSize={33}>
          <ChatContainer>
            <>
              {chat?.messages.map((message: MessageType, key: React.Key) => (
                <ChatMessage message={message} key={key} />
              ))}
            </>
          </ChatContainer>
        </ResizablePanel>
      </ResizablePanelGroup>
    </Layout>
  );
};

export default Dashboard;
