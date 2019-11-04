import React, { useState, useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import styles from './styles';
import { formatMetersToKm } from '../../../util/format';
import api from '../../../services/api';
import renderRestaurantItem from './components/renderRestaurantItem';

export default function Restaurants({ restaurant }) {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function loadRestaurants() {
    setRefreshing(true);
    const response =
      restaurant === ''
        ? await api.get('/restaurants')
        : await api.get(`/restaurants?title_like=${restaurant}`);

    const restaurantData = response.data.map(restaurantResponseData => ({
      ...restaurantResponseData,
      id: restaurantResponseData.id.toString(),
      distance: formatMetersToKm(restaurantResponseData.distance),
      deliveryPrice: restaurantResponseData.delivery_price,
    }));

    setRestaurants(restaurantData);
    setLoading(false);
    setRefreshing(false);
  }

  useEffect(() => {
    loadRestaurants();
  }, [restaurant]);

  return (
    <View style={styles.containerRestaurants}>
      {loading ? (
        <ActivityIndicator style={styles.loading} color="#f4511e" size={24} />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={loadRestaurants}
            />
          }
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={restaurants}
            keyExtractor={item => item.id}
            renderItem={renderRestaurantItem}
          />
        </ScrollView>
      )}
    </View>
  );
}

Restaurants.propTypes = {
  restaurant: PropTypes.string.isRequired,
};
