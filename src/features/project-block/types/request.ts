export interface Root {
  status: number;
  meta: Meta;
  data: Project[];
}

export interface Meta {
  "api-version": string;
  request_timestamp: string;
  request_id: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  status: string;
  timeline: Timeline;
  epics: string[];
}

export interface Timeline {
  start_date: string;
  end_date: string;
}
