import React from 'react';

// utils
import { supabase } from '@/utils/supabase';

// icons
import { Component2Icon, ExitIcon } from '@radix-ui/react-icons';

export const Navigation: React.FC = () => {
  return (
    <nav className="border-slate11 flex w-14 flex-shrink-0 flex-col items-center justify-between border-r">
      <section className="flex flex-col items-center">
        <article className="border-slate11 flex h-14 w-14 items-center justify-center border-b">
          <img src="logo.svg" alt="logo" className="h-7 w-7" />
        </article>

        {/** links */}
        <article className="flex flex-col space-y-2 pt-2">
          {[...Array(7)].map(() => (
            <NavItem />
          ))}
        </article>
      </section>

      {/** actions */}
      <section className="mb-2 flex flex-col">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-transparent hover:bg-gray-400"
          type="button"
          onClick={async () => supabase.auth.signOut()}
        >
          <ExitIcon className="h-4 w-4" />
        </button>
      </section>
    </nav>
  );
};

const NavItem = () => {
  return (
    <a
      className="flex h-10 w-10 items-center justify-center rounded hover:bg-gray-300"
      href="#"
    >
      <Component2Icon className="h-5 w-5" />
    </a>
  );
};
