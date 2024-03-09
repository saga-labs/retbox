import React, { useState } from 'react';

import mockData from './mock/chat.json';

// components
import { Message } from './components/message';
import { Message as Msg } from '@/features/ChatMain/components/ChatMsg';
import { ChatInput } from './components/chat-input';

// interfaces & types
import { MessageType, ChatType } from './interfaces/chat';

const ChatMain = () => {
  const [chat, _] = useState<ChatType>(mockData);

  return (
    <div className="flex flex-col flex-grow">
      {/* Chat Header */}
      <div className="flex items-center flex-shrink-0 h-16 bg-white border-b border-gray-300 px-4">
        <div>
          <h1 className="text font-semibold leading-none">
            {chat?.chat_title}
          </h1>
          <span className="text-xs leading-none">{chat.updated_at}</span>
        </div>
      </div>

      {/* Chat History */}
      <div className="flex flex-col flex-grow overflow-auto">
        {chat?.messages.map((message: MessageType, key: React.Key) => (
          <>
            <Message key={key} message={message} />
            <Msg
              key={key}
              sender={message.sender}
              content={message.message}
              isUser={true}
            />
          </>
        ))}

        {/* Date Divider */}
        <div className="flex flex-col items-center mt-2">
          <hr className="w-full" />
          <span className="flex items-center justify-center -mt-3 bg-white h-6 px-3 rounded-full border text-xs font-semibold mx-auto">
            Today
          </span>
        </div>

        <div className="flex flex-col items-center mt-2">
          <hr className="w-full" />
          <span className="flex items-center justify-center -mt-3 bg-white h-6 px-3 rounded-full border text-xs font-semibold mx-auto">
            Yesterday
          </span>
        </div>
      </div>

      {/* Chat Input */}
      <ChatInput />
    </div>
  );
};

export default ChatMain;
