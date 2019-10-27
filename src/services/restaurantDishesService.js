import api from './api';

const restaurantDishesService = async restaurantId => {
  try {
    const response = await api.get(`/restaurants/${restaurantId}/dishes`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default restaurantDishesService;
