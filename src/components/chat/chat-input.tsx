import React from "react";

// primitives
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const ChatInput: React.FC = () => {
  const [message, ] = React.useState("");
  return (
    <form className="p-4">
      <div className="grid gap-4">
        <Textarea
          className="resize-none p-4"
          value={message}
          placeholder={`Reply ${"Frederik"}...`}
        />
        <div className="flex items-center">
          <Button
            onClick={(e) => e.preventDefault()}
            size="sm"
            className="ml-auto"
          >
            Send
          </Button>
        </div>
      </div>
    </form>
  );
};
