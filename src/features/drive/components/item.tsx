import React from 'react';
import type { FileObject } from '@supabase/storage-js';

// components
import { ItemContext } from './item-context';
import { IconSelector } from './icon-selector';

interface props {
  file: FileObject;
}

export const Item: React.FC<props> = ({ file }) => {
  const typeIdentifier = file.metadata.mimetype.split('/')[0];
  return (
    <ItemContext>
      <a
        href="#"
        className="block w-full rounded-lg border border-neutral-800 p-4"
      >
        <div>
          <dl className="mb-2 flex flex-row items-center space-x-1">
            <div>
              <dt className="sr-only">file type</dt>
              <dd className="text-sm font-medium text-neutral-200">
                <IconSelector type={typeIdentifier} />
              </dd>
            </div>
            <div>
              <dt className="sr-only">file name</dt>
              <dd className="text-sm text-neutral-300">
                {file.name.length > 20
                  ? `${file.name.slice(0, 20)} ...`
                  : file.name}
              </dd>
            </div>
          </dl>

          <div className="flex h-32 items-center justify-center rounded-md bg-red-400 object-cover">
            <IconSelector type={typeIdentifier} classes="size-12 text-white" />
          </div>
        </div>
      </a>
    </ItemContext>
  );
};
