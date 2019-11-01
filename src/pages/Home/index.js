/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Icon } from 'react-native-elements';

import api from '../../services/api';

import Category from './Category';
import Restaurant from './Restaurant';

import styles from './styles';
import { formatMetersToKm } from '../../util/format';

function renderResaurantItem({ item }) {
  return (
    <TouchableOpacity>
      <Restaurant
        title={item.title}
        category={item.category}
        uri={item.image_url}
        distance={item.distance}
        deliveryPrice={item.delivery_price}
      />
    </TouchableOpacity>
  );
}

export default function Home() {
  const [restaurant, setRestaurant] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const response = await api.get('/categories');
    setCategories(response.data);
  };

  async function loadRestaurants() {
    setRefreshing(true);
    const response = await api.get('/restaurants');

    const restaurantData = response.data.map(restaurant => ({
      ...restaurant,
      id: restaurant.id.toString(),
      distance: formatMetersToKm(restaurant.distance),
      deliveryPrice: restaurant.delivery_price,
    }));

    setRestaurants(restaurantData);
    setLoading(false);
    setRefreshing(false);
  }

  useEffect(() => {
    loadRestaurants();
    loadCategories();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          onChangeText={text => setRestaurant(text)}
          value={restaurant}
          placeholder="Digite o restaurante"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TouchableOpacity>
          <Icon color="#FB565A" type="font-awesome" name="search" size={16} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <Text style={styles.titleLabel}>Categorias</Text>
        <View style={styles.categoriesContainer}>
          <FlatList
            data={categories}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Category uri={item.url} title={item.title} />
            )}
          />
        </View>

        <Text style={styles.titleLabel}>Restaurantes</Text>
        <View>
          {loading ? (
            <ActivityIndicator
              style={styles.loading}
              color="#f4511e"
              size={24}
            />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={restaurants}
              keyExtractor={item => item.id}
              renderItem={renderResaurantItem}
              onRefresh={loadRestaurants}
              refreshing={refreshing}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

// Home.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func,
//   }).isRequired,
// };
