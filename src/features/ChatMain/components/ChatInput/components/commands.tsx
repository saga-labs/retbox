import clsx from 'clsx';
import { useState } from 'react';

// Types
import { Command } from '../types/command';

export const Commands = () => {
  const [command, setCommand] = useState<Command>();
  const [commands, setCommands] = useState([
    {
      name: 'help',
      description: 'Get help with commands',
    },
    {
      name: 'settings',
      description: 'Change your settings',
    },
    {
      name: 'templates',
      description: 'Manage your templates',
    },
    {
      name: 'agents',
      description: 'Manage your agents',
    },
  ]);

  return (
    <ul className="sticky space-y-1 bg-white rounded border border-gray-200 shadow-lg mb-2">
      {commands.map((iter) => (
        <li
          key={iter.name}
          className={clsx(command?.name === iter.name && 'bg-gray-100')}
        >
          <span
            onClick={() => setCommand(iter)}
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            {iter.name}
          </span>
        </li>
      ))}
    </ul>
  );
};
