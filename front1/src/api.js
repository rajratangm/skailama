// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getProjects = () => api.get('/projects');
export const getProjectById = (id) => api.get(`/projects/${id}`);
export const updateSettings = (settings) => api.post('/settings', settings);
export const getSettings = () => api.get('/settings');
export const updateWidgetConfig = (config) => api.post('/widget-config', config);
export const getWidgetConfig = () => api.get('/widget-config');
