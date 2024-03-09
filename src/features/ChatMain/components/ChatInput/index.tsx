import React from 'react';

// Local Components
import { Commands } from './components/commands';

// Icons
import { PaperPlaneIcon } from '@radix-ui/react-icons';

interface Props {
  handler: (message: string) => void;
}

export const ChatInput: React.FC<Props> = ({ handler }) => {
  const [message, setMessage] = React.useState<string>("");
  const [commandActive, setCommandActive] = React.useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = e.target.value; // Extract the value from the event object
    setMessage(newMessage);

    // If the message starts with a slash, it's a command
    if (newMessage.charAt(0) == '/') {
      setCommandActive(true);
    } else {
      setCommandActive(false);
    }
  };

  return (
    <div className='sticky bottom-4'>
      <label htmlFor="PromptArea" className="sr-only">
        Prompt for user input
      </label>

      {commandActive && <Commands />}

      <div className="overflow-hidden flex flex-row align-center rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <textarea
          id="PromptArea"
          className="w-full resize-none border-none align-center focus:ring-0 sm:text-sm"
          rows={3}
          placeholder="Send a message"
          value={message} // Bind the value of the textarea to the 'message' state
          onChange={handleOnChange}
        />

        <div className="flex items-center justify-end gap-2 bg-white p-3">
          <button
            type="button"
            className="flex flex-row items-center rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
            onClick={() => handler('Hello')}
          >
            Send <PaperPlaneIcon className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
