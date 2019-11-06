import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import { Icon } from 'react-native-elements';

import api from '../../services/api';
import { formatMetersToKm } from '../../util/format';
import styles from './styles';

export default function Dishes() {
  const restaurantId = useNavigationParam('id');
  const [dishes, setDishes] = useState([]);
  const [restaurant, setRestaurant] = useState({});
  const [loading, setLoading] = useState(true);

  async function loadDishes() {
    const response = await api.get(`/restaurants/${restaurantId}/dishes`);
    setDishes(response.data);
  }

  async function loadRestaurant() {
    const response = await api.get(`/restaurants/${restaurantId}`);
    const restaurantData = {
      ...response.data,
      id: response.data.id.toString(),
      distance: formatMetersToKm(response.data.distance),
    };

    setRestaurant(restaurantData);
    setLoading(false);
  }

  useEffect(() => {
    loadDishes();
    loadRestaurant();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color="#EA1D2C" style={styles.loading} size={28} />
      ) : (
        <>
          <View style={styles.logoContainer}>
            <Image
              source={{
                uri: restaurant.image_url,
              }}
              style={styles.logo}
            />
          </View>

          <Text style={styles.title}>{restaurant.title}</Text>

          <View style={styles.restaurantInfo}>
            <Text style={styles.label}>{restaurant.category}</Text>
            <View style={styles.dot} />
            <Text style={styles.label}>{restaurant.delivery_time}</Text>
            <View style={styles.dot} />
            <Text style={styles.label}>{restaurant.distance}</Text>
          </View>

          <Text style={styles.delivery}>
            Entrega {restaurant.delivery_price}
          </Text>

          <View style={styles.status}>
            <View style={styles.icon}>
              <Icon color="#FB565A" type="font-awesome" name="home" size={32} />
            </View>
            <View>
              <Text style={styles.open}>Restaurante Aberto</Text>
              <Text styçe={styles.closesAt}>Fecha às 22:00</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
}
