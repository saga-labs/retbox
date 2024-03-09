import React, { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import clsx from 'clsx';

// components
import { ModelCard } from '@/features/ModelGrid/components/model-card';

// icons
import { Moon, Star } from '@phosphor-icons/react';

// interfaces & types
import { ModelType } from '@/features/ModelGrid/interfaces/model';

interface ModelContainerProps {
  models: ModelType[];
}

export const ModelContainer: React.FC<ModelContainerProps> = ({ models }) => {
  const [open, setOpen] = React.useState(false);
  const previewModels = models.slice(0, 3);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <div
        className={clsx(
          'grid grid-cols-2 lg:grid-cols-3 gap-4 px-4',
          open && 'hidden'
        )}
      >
        {previewModels.map((model: ModelType, key: React.Key) => (
          <ModelCard model={model} key={key} />
        ))}
      </div>

      <Collapsible.CollapsibleContent className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {models.map((model: ModelType, key: React.Key) => (
          <ModelCard model={model} key={key} />
        ))}
      </Collapsible.CollapsibleContent>

      <div className='flex flex-row justify-center px-4 pt-4'>
        <Collapsible.Trigger asChild>
          <button className="justif-self-center text-xs text-erieLight uppercase">
            {open ? 'Show Less' : 'Show More'}
          </button>
        </Collapsible.Trigger>
      </div>
    </Collapsible.Root>
  );
};
