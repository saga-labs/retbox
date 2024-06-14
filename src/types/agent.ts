export interface Agent {
  name: string;
  role: string;
  description: string;
  skills: string[];
  experience: string;
  jobs: number;
  contact: Contact;
  availability: string;
  location: string;
  languages: string[];
}

export interface Contact {
  email: string;
  phone: string;
}