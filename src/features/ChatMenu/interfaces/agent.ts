export type AgentType = {
  id: string;
  name: string;
  description: string;
  avatar: string; // File path or URL for the avatar
  created_at: string; // Assuming timestamps are represented as strings for simplicity
  updated_at: string;
  status: boolean;
};

export type AgentsListType = {
  ai_agents: AgentType[];
};
