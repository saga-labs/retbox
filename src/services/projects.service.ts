// services/projects.service.ts

import axios from 'axios';

// set correct edge worker url
const instance = axios.create({
  baseURL: import.meta.env.VITE_TASKS_WORKER_URL,
});

const getProjects = async () => {
  const result = await instance.get('/');
  return result.data;
};

// freeze the object to prevent modifications
const ProjectsService = Object.freeze({
  getProjects,
});

export default ProjectsService;
