import React, { ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

interface RouteLinkProps {
  to: string;
  children: ReactNode;
}

export const RouteLink: React.FC<RouteLinkProps> = ({ to, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={to}
      className={clsx(
        'flex items-center h-8 hover:bg-gray-300 text-sm px-3',
        pathname === to && 'font-bold'
      )}
    >
      {children}
    </Link>
  );
};
