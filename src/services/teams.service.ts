// services/teams.service.ts
import axios from 'axios';

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: import.meta.env.VITE_TEAMS_WORKER_URL,
});

// Simulate fetching team data
const getTeam = async (id: string) => {
  return instance.get(`/${id}`).then((response) => response);
};

// Simulate fetching individual team member data
const getTeamAgents = async (id: string) => {
  return instance.get(`/${id}/agents`).then((response) => response);
};

// Freeze the object to prevent modifications
const TeamsService = Object.freeze({
  getTeam,
  getTeamAgents,
});

export default TeamsService;
