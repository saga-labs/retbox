import React from 'react';

// interfaces & types
import { MessageType } from '../types/chat';

interface Props {
  message: MessageType;
}

export const ChatMessage: React.FC<Props> = ({ message }) => {
  const dateString = new Date(message.timestamp).toDateString();
  return (
    <div className="flex px-4 py-3">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-md border-gray-300 bg-white/70">
        {message.sender === 'ai' ? (
          <img src="/openai.png" alt="AI" width={28} height={28} />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User"
            width={40}
            height={40}
            className="rounded-md"
          />
        )}
      </div>
      <div className="ml-2">
        <div className="-mt-1">
          <span className="text-sm font-semibold">{message.sender}</span>
          <span className="ml-1 text-xs text-gray-500">{dateString}</span>
        </div>
        <p className="text-sm">{message.message}</p>

        {message.sender === 'ai' && (
          <div className="mt-2 flex items-center">
            <a className="ml-1 text-xs font-medium text-blue-600" href="#">
              3 versions
            </a>
            <span className="ml-1 text-xs text-gray-600"></span>
          </div>
        )}
      </div>
    </div>
  );
};
