import React, { useState } from 'react';

// contexts
// import useCommandStore from '@/contexts/use-command';

// utils
import { useAuth0 } from '@auth0/auth0-react';

// icons
import { ExitIcon, GearIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';

import {
  BeakerIcon,
  UserGroupIcon,
  FlagIcon,
} from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';

interface Link {
  title: string;
  goto: string;
  icon: React.ReactNode;
}

const links: Link[] = [
  {
    title: 'Dashboard',
    goto: '/',
    icon: <BeakerIcon className="size-5" />,
  },
  {
    title: 'Projects',
    goto: '/projects',
    icon: <FlagIcon className="size-5" />,
  },
  {
    title: 'Agents',
    goto: '/agents',
    icon: <UserGroupIcon className="size-5" />,
  },
  {
    title: 'Settings',
    goto: '/settings',
    icon: <GearIcon className="size-5" />,
  },
];

export const Navigation: React.FC = () => {
  // const setOpen = useCommandStore((state) => state.setOpen);
  const { logout } = useAuth0();
  const [wide, setWide] = useState(false);

  return (
    <nav
      className={cn(
        'group flex flex-shrink-0 flex-col items-center justify-between border-r transition',
        wide ? 'w-48' : 'w-14',
      )}
    >
      <section className="flex w-full flex-col items-center group-hover:justify-start">
        <article className="indigo flex h-14 w-full items-center justify-center border-b ">
          <div className="w-7" onClick={() => setWide(!wide)}>
            <svg
              id="logo-15"
              width="29"
              height="28"
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
                className="ccustom"
                fill="rgb(79, 70, 229)"
              ></path>
              <path
                d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
                className="ccustom"
                fill="rgb(79, 70, 229)"
              ></path>
              <path
                d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
                className="ccustom"
                fill="rgb(79, 70, 229)"
              ></path>
              <path
                d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
                className="ccustom"
                fill="rgb(79, 70, 229)"
              ></path>
            </svg>
          </div>
          <h1 className={cn('ml-2', !wide && 'hidden')}>cerebase</h1>
        </article>

        {/** links */}
        <article className="flex flex-col space-y-2 pt-2">
          {links.map((item: Link, key: React.Key) => (
            <NavItem
              title={item.title}
              goto={item.goto}
              icon={item.icon}
              wide={wide}
              variant="link"
              key={key}
            />
          ))}
        </article>
      </section>

      {/** actions */}
      <section className="flex flex-col space-y-2 pb-2">
        <NavItem
          title="Search"
          icon={<MagnifyingGlassIcon className="h-4 w-4" />}
          variant="button"
          wide={wide}
          exec={async () => console.log('app search')}
        />
        <NavItem
          title="Sign out"
          icon={<ExitIcon className="h-4 w-4" />}
          variant="button"
          wide={wide}
          exec={() => {
            logout({
              logoutParams: {
                returnTo: window.location.origin,
              },
            });
          }}
        />
      </section>
    </nav>
  );
};

interface itemProps {
  title: string;
  icon: React.ReactNode;
  variant: 'link' | 'button';
  wide: boolean;
  goto?: string;
  exec?: () => void;
}

const NavItem: React.FC<itemProps> = ({
  title,
  icon,
  goto,
  wide,
  exec,
  variant,
}) => {
  if (variant == 'link') {
    return (
      <a
        className="flex h-10 w-full items-center justify-center rounded text-neutral-500 hover:bg-neutral-400 hover:text-neutral-50"
        href={goto}
      >
        {icon}
        <p className={cn('ml-2', !wide && 'hidden')}>{title}</p>
      </a>
    );
  }

  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded text-neutral-500 hover:bg-neutral-300 hover:text-neutral-50"
      type="button"
      onClick={exec}
    >
      {icon}
    </button>
  );
};
