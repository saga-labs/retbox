// services/projects.service.ts

import axios from 'axios';

// set correct edge worker url
const instance = axios.create({
  baseURL: process.env.MEXT_PUBLIC_PROJECTS_API,
});

const getProjects = async () => {
  console.log(process.env.MEXT_PUBLIC_PROJECTS_API)
  const result = await axios.get('http://localhost:3001/v1/projects');
  return result.data;
};

// freeze the object to prevent modifications
const ProjectsService = Object.freeze({
  getProjects,
});

export default ProjectsService;
