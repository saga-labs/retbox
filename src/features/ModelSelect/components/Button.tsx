import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// interfaces & types
interface props {
  link: string;
  image: string;
  alt: string;
}

export const Button = ({ link, image, alt }: props) => {
  return (
    <Link
      className="relative w-10 h-10 rounded-md hover:rounded-lg hover:shadow border bg-white/70 border-gray-300 flex items-center justify-center"
      href={link}
    >
      <Image src={image} alt={alt} width={28} height={28} />
    </Link>
  );
};
