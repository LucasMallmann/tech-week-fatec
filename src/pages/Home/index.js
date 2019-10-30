import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';

import Category from './Category';
import Restaurant from './Restaurant';

import styles from './styles';

const data = [
  {
    id: 1,
    url:
      'https://i.pinimg.com/originals/d8/8a/ca/d88acacdd20c6e4af73520058cb85aca.jpg',
    title: 'Lanches',
  },
  {
    id: 2,
    url:
      'https://i.pinimg.com/originals/d8/8a/ca/d88acacdd20c6e4af73520058cb85aca.jpg',
    title: 'Lanches',
  },
  {
    id: 3,
    url:
      'https://i.pinimg.com/originals/d8/8a/ca/d88acacdd20c6e4af73520058cb85aca.jpg',
    title: 'Lanches',
  },
  {
    id: 4,
    url:
      'https://i.pinimg.com/originals/d8/8a/ca/d88acacdd20c6e4af73520058cb85aca.jpg',
    title: 'Lanches',
  },
  {
    id: 5,
    url:
      'https://i.pinimg.com/originals/d8/8a/ca/d88acacdd20c6e4af73520058cb85aca.jpg',
    title: 'Lanches',
  },
];

const restaurants = [
  {
    id: 1,
    title: 'Restaurante do Boteco',
    distance: 0.7,
    delivery_time: 40,
    delivery_price: 3,
    minimum_price: 12,
    category: 'Lanches',
    image_url:
      'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
  },
  {
    id: 2,
    title: 'Restaurante do Boteco',
    distance: 0.7,
    delivery_time: 40,
    delivery_price: 3,
    minimum_price: 12,
    category: 'Lanches',
    image_url:
      'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
  },
  {
    id: 3,
    title: 'Restaurante do Boteco',
    distance: 0.7,
    delivery_time: 40,
    delivery_price: 3,
    minimum_price: 12,
    category: 'Lanches',
    image_url:
      'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
  },
  {
    id: 4,
    title: 'Restaurante do Boteco',
    distance: 0.7,
    delivery_time: 40,
    delivery_price: 3,
    category: 'Lanches',
    image_url:
      'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
  },
];

function renderResaurantItem({ item }) {
  return (
    <TouchableOpacity>
      <Restaurant />
    </TouchableOpacity>
  );
}

export default function Home() {
  const [restaurant, setRestaurant] = useState('');

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

      <ScrollView showsHorizontalScrollIndicator={false} style={styles.scroll}>
        <Text style={styles.titleLabel}>Categorias</Text>
        <View style={styles.categoriesContainer}>
          <FlatList
            data={data}
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
          <FlatList
            showsVerticalScrollIndicator={false}
            data={restaurants}
            keyExtractor={item => item.id.toString()}
            renderItem={renderResaurantItem}
          />
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
