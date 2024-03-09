import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// tauri
import { open } from '@tauri-apps/api/shell';

// interfaces & types
import { ModelType } from '../interfaces/model';

export const ModelCard = ({ model }: { model: ModelType }) => {
  // https://github.com/tauri-apps/tauri/issues/4756
  const openLibrary = (link: string) => {
    open(`https://ollama.ai/library/${link}`);
  };

  return (
    <Link href={'/feed'}>
      <article className="rounded border border-gray-200 bg-gray-50 p-4 transition sm:p-6 h-full">
        <div className="relative w-10 h-10 rounded-md hover:rounded-lg hover:shadow border bg-white/70 border-gray-300 flex items-center justify-center">
          <Image src={'/openai.png'} alt={'model'} width={28} height={28} />
        </div>

        <h3 className="mt-2 text-lg font-medium text-gray-900">{model.name}</h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {model.description}
        </p>

        <span onClick={() => openLibrary(model.name)}>
          <span className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
            Setup Model
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5"
            >
              &rarr;
            </span>
          </span>
        </span>
      </article>
    </Link>
  );
};
