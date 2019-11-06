import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import api from '../../../services/api';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const response = await api.get('/categories');
    const categoriesData = response.data.map(cat => ({
      ...cat,
      id: cat.id.toString(),
    }));

    setCategories(categoriesData);
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: item.url }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderCategoryItem}
      />
    </View>
  );
}
