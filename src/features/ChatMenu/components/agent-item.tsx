import React from 'react';
import Link from 'next/link';

// interfaces & types
import { AgentType } from '../interfaces/agent';

export const AgentItem = ({ agent }: { agent: AgentType }) => {
  return (
    <Link
      className="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
      href="#"
    >
      <div className="flex justify-center w-4">
        {agent.status ? (
          <span className="w-2 h-2 rounded-full bg-blue-300"></span>
        ) : (
          <span className="w-2 h-2 rounded-full border-2 border-gray-500"></span>
        )}
      </div>
      <span className="ml-2 leading-none font-bold">{agent.name}</span>
      <span className="flex items-center justify-center bg-blue-300 rounded-full font-medium h-5 px-2 ml-auto text-xs text-white">
        3
      </span>
    </Link>
  );
};
