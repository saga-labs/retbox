import React from 'react';

// interfaces & types
import { MessageType } from '../types/chat';
import { Avatar } from '@/components/common/avatar';

interface Props {
  message: MessageType;
}

const image =
  'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80';

export const ChatMessage: React.FC<Props> = ({ message }) => {
  const dateString = new Date(message.timestamp).toDateString();
  return (
    <div className="flex px-4 py-3">
      {message.sender === 'ai' ? (
        <Avatar src={image} alt="user" />
      ) : (
        <Avatar src={image} alt="ai" />
      )}

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
