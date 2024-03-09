import React from 'react';
import Link from 'next/link';

// Components
import { Button } from './components/Button';
import { UserProfile } from '@auth0/nextjs-auth0/client';

interface Props {
  children?: React.ReactNode;
}

export const ModelSelect = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen items-center justify-between flex-shrink-0 w-16 border-r border-gray-300 bg-gray-200 py-3">
      <div className="flex flex-col space-y-3 items-center flex-shrink-0">
        <Button link="/chat" image="/openai.png" alt="OpenAI" />
        <Button link="/chat" image="/meta.png" alt="LLaMa2" />

        <Link
          href="/settings/models"
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent hover:bg-gray-300"
        >
          <svg
            className="w-6 h-6 fill-current"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </Link>
      </div>

      <div className="mt-auto">{children}</div>
    </div>
  );
};

export default ModelSelect;
