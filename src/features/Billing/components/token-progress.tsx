'use client';

import React from 'react';
import * as Progress from '@radix-ui/react-progress';

export const TokenProgress = () => {
  const [progressCurrent, setProgressCurrent] = React.useState(13);
  const [progressMax, _] = React.useState(100);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgressCurrent(66), progressMax);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col space-y-2 px-6 py-4">
      <h2 className="leading-tight">
        <span className="font-medium">{progressCurrent}</span> /{' '}
        <span className="font-medium">{progressMax}</span> Tokens used:
      </h2>
      <Progress.Root
        className="relative h-[10px] w-full overflow-hidden rounded bg-gray-200"
        style={{ transform: 'translateZ(0)' }}
        value={progressCurrent}
      >
        <Progress.Indicator
          className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-green-500 transition-transform duration-[660ms]"
          style={{ transform: `translateX(-${100 - progressCurrent}%)` }}
        />
      </Progress.Root>
    </div>
  );
};
