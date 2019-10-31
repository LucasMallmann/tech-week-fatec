import axios from 'axios';

// TODO: CHANGE TO YOUR IP
const ip = '192.168.0.31';

const baseURL = `http://${ip}:3333`;

const api = axios.create({
  baseURL,
});

export default api;
