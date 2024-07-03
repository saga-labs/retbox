// src/services/projects.service.ts

import axios from "axios";

// set correct edge worker url
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PROJECTS_API,
});

const URL = process.env.NEXT_PUBLIC_PROJECTS_API;

const getProjects = async () => {
  try {
    const result = await axios.get(`${URL}/v1/projects`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

// freeze the object to prevent modifications
const ProjectsService = Object.freeze({
  getProjects,
});

export default ProjectsService;
