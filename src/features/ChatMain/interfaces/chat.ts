export type MessageType = {
  sender: string;
  message: string;
  timestamp: string; // Assuming timestamps are represented as strings for simplicity
};

export type UserType = {
  id: string;
  username: string;
  avatar: string;
};

export type ChatType = {
  id: string;
  user: UserType;
  chat_title: string;
  chat_description: string;
  created_at: string; // Assuming timestamps are represented as strings for simplicity,
  updated_at: string; // Assuming timestamps are represented as strings for simplicity,
  deleted_at: string | null; // Assuming timestamps are represented as strings for simplicity,
  messages: MessageType[];
};
