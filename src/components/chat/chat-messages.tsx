import React from "react";

// data
import mockData from "@/mock/chat.json";

// components
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "./chat-message";

// types & interfaces
import { MessageType, ChatType } from "@/types/chat";

export const ChatMessages: React.FC = () => {
  const [chat] = React.useState<ChatType>(mockData);
  return (
    <ScrollArea>
      {chat?.messages.map((message: MessageType, key: React.Key) => (
        <ChatMessage message={message} key={key} />
      ))}
    </ScrollArea>
  );
};
