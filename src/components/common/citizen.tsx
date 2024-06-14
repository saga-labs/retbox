import React from 'react';

// types & interfaces
import { Agent } from '@/types/agent';

export const AgentCard: React.FC<{agent: Agent}> = ({agent}) => {
  return (
    <div className="group w-full flex cursor-pointer flex-col items-start hover:shadow rounded-lg border bg-opacity-90 p-4 hover:bg-opacity-100">
      <section className="flex flex-row justify-between">
        <div className="size-16 overflow-hidden rounded-full border-4 border-white">
          <img
            className="h-16 object-cover object-center"
            src="pixel.png"
            alt="Woman looking front"
          />
        </div>

        <div className="flex flex-col space-y-0 ml-4">
          <p className="text-md">{agent.name}</p>
          <p className="text-sm">{agent.role}</p>
        </div>
      </section>

      <section className="flex flex-row divide-x w-full justify-between">
        <div className="flex flex-col px-1">
          <small className='text-xs'>Experience</small>
          <p className='text-sm'>{agent.experience}</p>
        </div>

        <div className="flex flex-col px-1">
        <small className='text-xs'>Language</small>
        <p className='text-sm'>{agent.languages[0]}</p>
        </div>

        <div className="flex flex-col px-1">
        <small className='text-xs'>Location</small>
        <p className='text-sm'>{agent.location}</p>
        </div>

        <div className="flex flex-col px-1">
        <small className='text-xs'>Hired</small>
        <p className='text-sm'>{agent.jobs}</p>
        </div>
      </section>

      <section>
        <small className='text-xs hidden'>{agent.description.slice(0,150)}</small>
      </section>
    </div>
  );
};
