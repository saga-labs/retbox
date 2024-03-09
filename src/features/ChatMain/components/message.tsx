import React from 'react';
import Image from 'next/image';

// interfaces & types
import { MessageType } from '../interfaces/chat';

export const Message = ({ message }: { message: MessageType }) => {
  return (
    <div className="flex px-4 py-3">
      <div className="relative w-10 h-10 rounded-md bg-white/70 border-gray-300 flex items-center justify-center">
        {message.sender === 'ai' ? (
          <Image src="/openai.png" alt="AI" width={28} height={28} />
        ) : (
          <Image
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
          <span className="ml-1 text-xs text-gray-500">
            {message.timestamp}
          </span>
        </div>
        <p className="text-sm">{message.message}</p>
        
        {message.sender === 'ai' && (
          <div className="flex items-center mt-2">
            <div className="h-6 w-6 rounded flex-shrink-0 bg-gray-300"></div>
            <div className="h-6 w-6 rounded flex-shrink-0 bg-gray-300 ml-1"></div>
            <div className="h-6 w-6 rounded flex-shrink-0 bg-gray-300 ml-1"></div>
            <a className="text-blue-600 text-xs font-medium ml-1" href="#">
              3 versions
            </a>
            <span className="text-xs text-gray-600 ml-1"></span>
          </div>
        )}
      </div>
    </div>
  );
};
