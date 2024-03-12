import React from 'react';

// utils
import { supabase } from '@/utils/supabase';

// icons
import { Component2Icon, ExitIcon } from '@radix-ui/react-icons';

export const Navigation: React.FC = () => {
  return (
    <nav className="flex w-14 flex-shrink-0 flex-col items-center justify-between border-r border-neutral-800">
      <section className="flex flex-col items-center">
        <article className="flex h-14 w-14 items-center justify-center border-b border-neutral-800">
          <img
            src="logo.svg"
            alt="logo"
            className="h-7 w-7 duration-700 ease-linear hover:animate-spin"
          />
        </article>

        {/** links */}
        <article className="flex flex-col space-y-2 pt-2">
          {[...Array(7)].map((key: React.Key) => (
            <NavItem
              title="Dashboard"
              icon={<Component2Icon className="h-5 w-5" />}
              variant="link"
              key={key}
            />
          ))}
        </article>
      </section>

      {/** actions */}
      <section className="mb-2 flex flex-col">
        <NavItem
          title="Sign out"
          icon={<ExitIcon className="h-4 w-4" />}
          variant="button"
          exec={async () => supabase.auth.signOut()}
        />
      </section>
    </nav>
  );
};

interface itemProps {
  title: string;
  icon: React.ReactNode;
  variant: 'link' | 'button';
  exec?: () => void;
}

const NavItem: React.FC<itemProps> = ({ title, icon, exec, variant }) => {
  if (variant == 'link') {
    return (
      <a
        className="flex h-10 w-10 items-center justify-center rounded text-neutral-700 hover:bg-neutral-800 hover:text-neutral-300"
        href="#"
      >
        {icon}
        <p className="hidden">{title}</p>
      </a>
    );
  }

  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded text-neutral-700 hover:bg-neutral-800 hover:text-neutral-300"
      type="button"
      onClick={exec}
    >
      {icon}
    </button>
  );
};
