export type Status = "Backlog" | "In progress" | "Done" | "Review";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: Status;
};

export type BoardSections = {
  [name: string]: Task[];
};

export type Pane = {
  [name: string]: Task[];
};
