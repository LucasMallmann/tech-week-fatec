import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ActivityIndicator,
  RefreshControl,
  FlatList,
} from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../services/api';
import { formatMetersToKm } from '../../util/format';
import styles from './styles';
import DishItem from './DishItem';

export default function Dishes() {
  const restaurantId = useNavigationParam('id');
  const [dishes, setDishes] = useState([]);
  const [restaurant, setRestaurant] = useState({});
  const [loading, setLoading] = useState(true);
  const [dishLoading, setDishLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function loadDishes() {
    setRefreshing(true);

    const response = await api.get(`/restaurants/${restaurantId}/dishes`);
    setDishes(response.data);

    setRefreshing(false);
    setDishLoading(false);
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

  function renderDishItem({ item }) {
    return (
      <DishItem
        title={item.title}
        ingredients={item.ingredients}
        price={item.price}
      />
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      <StatusBar barStyle="dark-content" />
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
                <Icon
                  color="#EA1D2C"
                  type="font-awesome"
                  name="home"
                  size={40}
                />
              </View>
              <View>
                <Text style={styles.open}>Restaurante Aberto</Text>
                <Text styçe={styles.closesAt}>Fecha às 22:00</Text>
              </View>
            </View>
          </>
        )}

        {dishLoading ? (
          <ActivityIndicator color="#EA1D2C" style={styles.loading} size={28} />
        ) : (
          <>
            <Text style={styles.dishesTitle}>Pratos:</Text>
            <ScrollView
              style={styles.dishesScroll}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={loadDishes}
                />
              }
            >
              <FlatList
                showsVerticalScrollIndicator={false}
                data={dishes}
                keyExtractor={item => item.id}
                renderItem={renderDishItem}
              />
            </ScrollView>
          </>
        )}
      </View>
    </ScrollView>
  );
}

Dishes.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.state.params.title,
  };
};
