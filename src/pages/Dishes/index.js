import React, { useState, useEffect } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';

import api from '../../services/api';
import { formatMetersToKm } from '../../util/format';
import styles from './styles';

export default function Dishes() {
  const restaurantId = useNavigationParam('id');
  const [dishes, setDishes] = useState([]);
  const [restaurant, setRestaurant] = useState({});

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
  }

  useEffect(() => {
    loadDishes();
    loadRestaurant();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri:
                'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            }}
            style={styles.logo}
          />
        </View>

        <Text style={styles.title}>Restaurante top</Text>

        <View style={styles.restaurantInfo}>
          <Text style={styles.label}>Lanches</Text>
          <View style={styles.dot} />
          <Text style={styles.label}>60 - 70 min</Text>
          <View style={styles.dot} />
          <Text style={styles.label}>3.20 km</Text>
        </View>

        <Text style={styles.delivery}>Entrega R$3,00</Text>

        <View style={styles.statusContainer}>
          <Image
            source={{
              uri:
                'https://i.pinimg.com/originals/4e/24/f5/4e24f523182e09376bfe8424d556610a.png',
            }}
            style={styles.plate}
          />
          <View style={styles.status}>
            <Text style={styles.open}>Restaurante Aberto</Text>
            <Text styçe={styles.closesAt}>Fecha às 22:00</Text>
          </View>
        </View>
      </View>
    </>
  );
}

Dishes.navigationOptions = {
  title: 'Teste',
};
