import React from 'react';
import * as AvatarRadix from '@radix-ui/react-avatar';

interface props {
  src: string;
  alt: string;
  fallback?: string;
}

export const Avatar: React.FC<props> = ({ src, alt, fallback = 'user' }) => (
  <AvatarRadix.Root className="bg-blackA1 inline-flex h-10 w-10 shrink-0 select-none items-center justify-center overflow-hidden rounded-md align-middle">
    <AvatarRadix.Image
      className="h-full w-full rounded-[inherit] object-cover"
      src={src}
      alt={alt}
    />
    <AvatarRadix.Fallback
      className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
      delayMs={600}
    >
      {fallback}
    </AvatarRadix.Fallback>
  </AvatarRadix.Root>
);
