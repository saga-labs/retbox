import React from 'react';

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

  return (
    <nav className="flex w-14 flex-shrink-0 flex-col items-center justify-between border-r">
      <section className="flex flex-col items-center">
        <article className="flex h-14 w-14 items-center justify-center border-b">
          <img
            src="logo.svg"
            alt="logo"
            className="h-7 w-7 duration-700 ease-linear hover:animate-spin"
          />
        </article>

        {/** links */}
        <article className="flex flex-col space-y-2 pt-2">
          {links.map((item: Link, key: React.Key) => (
            <NavItem
              title={item.title}
              goto={item.goto}
              icon={item.icon}
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
          exec={async () => console.log('app search')}
        />
        <NavItem
          title="Sign out"
          icon={<ExitIcon className="h-4 w-4" />}
          variant="button"
          exec={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        />
      </section>
    </nav>
  );
};

interface itemProps {
  title: string;
  icon: React.ReactNode;
  variant: 'link' | 'button';
  goto?: string;
  exec?: () => void;
}

const NavItem: React.FC<itemProps> = ({ title, icon, goto, exec, variant }) => {
  if (variant == 'link') {
    return (
      <a
        className="flex h-10 w-10 items-center justify-center rounded text-neutral-500 hover:bg-neutral-400 hover:text-neutral-50"
        href={goto}
      >
        {icon}
        <p className="hidden">{title}</p>
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
