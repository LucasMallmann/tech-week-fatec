import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Categories from './Categories';
import Restaurants from './Restaurants';
import styles from './styles';
import SearchBar from './SerachBar';

export default function Home() {
  const [restaurant, setRestaurant] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar restaurant={restaurant} setRestaurant={setRestaurant} />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <Text style={styles.titleLabel}>Categorias</Text>
        <Categories />

        <Text style={styles.titleLabel}>Restaurantes</Text>
        <Restaurants restaurant={restaurant} />
      </ScrollView>
    </View>
  );
}
