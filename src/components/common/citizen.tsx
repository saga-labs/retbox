import React from 'react';

export const AgentCard: React.FC = () => {
  return (
    <div className="group w-full flex cursor-pointer flex-col items-start rounded-lg border bg-opacity-90 p-4 hover:bg-opacity-100">
      <section className="flex flex-row justify-between">
        <div className="size-16 overflow-hidden rounded-full border-4 border-white">
          <img
            className="h-16 object-cover object-center"
            src="pixel.png"
            alt="Woman looking front"
          />
        </div>

        <div className="flex flex-col space-y-0">
          <p className="text-md">John Doe</p>
          <p className="text-sm">Los Angeles, United States</p>
        </div>
      </section>

      <section className="flex flex-row divide-x">
        <div className="flex flex-col">
          <small className='text-xs'>Experience</small>
          <p className='text-sm'>2 yrs</p>
        </div>

        <div className="flex flex-col">
        <small className='text-xs'>Experience</small>
        <p className='text-sm'>2 yrs</p>
        </div>

        <div className="flex flex-col">
        <small className='text-xs'>Experience</small>
        <p className='text-sm'>2 yrs</p>
        </div>

        <div className="flex flex-col">
        <small className='text-xs'>Experience</small>
        <p className='text-sm'>2 yrs</p>
        </div>
      </section>
    </div>
  );
};
