import React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { CheckIcon } from '@radix-ui/react-icons';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { ChevronUpIcon } from '@radix-ui/react-icons';

interface props {
  descriptor: string;
  values: Array<{ value: string; text: string }>;
}

export const Select: React.FC<props> = ({ descriptor, values }) => (
  <RadixSelect.Root>
    <RadixSelect.Trigger
      className="text-green-300hover:bg-mauve3 data-[placeholder]:text-violet9 inline-flex h-[35px] items-center justify-center gap-[5px] rounded bg-white px-[15px] text-[13px] leading-none outline-none focus:shadow-black"
      aria-label="Food"
    >
      <RadixSelect.Value placeholder="Status" />
      <RadixSelect.Icon className="text-violet11">
        <ChevronDownIcon />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>

    <RadixSelect.Portal>
      <RadixSelect.Content className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
        <RadixSelect.ScrollUpButton className="text-green-300 flex h-[25px] cursor-default items-center justify-center bg-white">
          <ChevronUpIcon />
        </RadixSelect.ScrollUpButton>

        <RadixSelect.Viewport className="p-[5px]">
          <RadixSelect.Group>
            <RadixSelect.Label className="text-mauve11 px-[25px] text-xs leading-[25px]">
              {descriptor}
            </RadixSelect.Label>

            {values.map(({ value, text }, key) => (
              <RadixSelect.Item
                key={key}
                value={value}
                className="text-green-300data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none data-[disabled]:pointer-events-none data-[highlighted]:outline-none"
              >
                <RadixSelect.ItemText>{text}</RadixSelect.ItemText>
                <RadixSelect.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
                  <CheckIcon />
                </RadixSelect.ItemIndicator>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Group>
        </RadixSelect.Viewport>

        <RadixSelect.ScrollDownButton className="text-green-300flex h-[25px] cursor-default items-center justify-center bg-white">
          <ChevronDownIcon />
        </RadixSelect.ScrollDownButton>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  </RadixSelect.Root>
);
