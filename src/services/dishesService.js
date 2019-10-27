import api from './api';

const dishesService = async () => {
  try {
    const response = await api.get('/dishes');
    return response.data;
  } catch (error) {
    return error;
  }
};

export default dishesService;
