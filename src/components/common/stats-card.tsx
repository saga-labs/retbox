import React from "react";

type StatsType = {
  desc: string;
  amount: number;
  change: number;
};

interface Props {
  stats: StatsType;
}

// ! dark:bg-blue-700  py-1 px-2 text-blue-700 dark:text-blue-100
// TODO: NOT FINISHED WITH DARK MODE

export const StatsCard: React.FC<Props> = ({ stats }) => {
  return (
    <article className="flex w-full items-end justify-between rounded-lg border border-gray-50 dark:border-0 bg-blue-100/70 dark:bg-blue-700 p-6">
      <div>
        <p className="text-xs text-blue-700 dark:text-blue-100  font-normal mb-2">
          {stats.desc}
        </p>

        <p className="text-3xl font-medium text-blue-700 dark:text-blue-100">
          {stats.amount}
        </p>
      </div>

      <div className="inline-flex gap-2 rounded bg-blue-100 dark:bg-blue-500/70 p-1 text-blue-600 dark:text-blue-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>

        <span className="text-xs font-medium"> {stats.change}% </span>
      </div>
    </article>
  );
};
