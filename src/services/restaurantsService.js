import api from './api';

const restaurantsService = async () => {
  try {
    const response = await api.get('/restaurants');
    return response.data;
  } catch (error) {
    return error;
  }
};

export default restaurantsService;
