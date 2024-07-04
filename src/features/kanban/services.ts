// features/kanban/services.ts
import OpenAI from "openai";

// Set config defaults when creating the instance
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
  dangerouslyAllowBrowser: true, // ! DO NOT PUSH THIS TO PROD, SHOULD GO THROUGH PROXY SERVER
});

// Simulate fetching team data
const generateTask = async () => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Generate an idea for summer day" }],
    model: "gpt-3.5-turbo",
  });

  return chatCompletion;
};

// Freeze the object to prevent modifications
const OpenAIServices = Object.freeze({
  generateTask,
});

export default OpenAIServices;
