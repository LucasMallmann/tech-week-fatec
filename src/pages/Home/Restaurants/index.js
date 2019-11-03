import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import styles from './styles';
import { formatMetersToKm } from '../../../util/format';
import api from '../../../services/api';

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

  function renderRestaurantItem(param) {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: param.item.image_url,
              }}
            />
          </View>
          <View style={styles.aboutContainer}>
            <Text style={styles.title}>{param.item.title}</Text>
            <View style={styles.categoryContainer}>
              <Text style={styles.label}>{param.item.category}</Text>
              <View style={styles.dot} />
              <Text style={styles.label}>{param.item.distance}</Text>
            </View>
            <View style={styles.delivery}>
              <Text style={styles.deliveryLabel}>40-50 min</Text>
              <Text style={styles.free}>{param.item.deliveryPrice}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

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
