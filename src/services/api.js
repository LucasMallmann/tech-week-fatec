import axios from 'axios';
import { ip } from '../config/ip';

const baseURL = `http://${ip}:3333`;

const api = axios.create({
  baseURL,
});

export default api;
