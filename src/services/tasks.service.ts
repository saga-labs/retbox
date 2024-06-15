// services/taks.service.ts

import axios from 'axios';

// set correct edge worker url
const instance = axios.create({
  baseURL: import.meta.env.VITE_TASKS_WORKER_URL,
});

//! todo: impl
const getTaskGroups = async (projectId: string) => {
  return instance.get(`/${projectId}`).then((response) => response);
};

//! todo: impl
const getTasks = async (id: string) => {
  return instance.get(`/${id}`).then((response) => response);
};

//! todo: impl
const getTaskDetail = async (id: string) => {
  return instance.get(`/${id}/agents`).then((response) => response);
};

// freeze the object to prevent modifications
const TeamsService = Object.freeze({
  getTaskGroups,
  getTasks,
  getTaskDetail,
});

export default TeamsService;
