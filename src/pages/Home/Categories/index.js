import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import styles from './styles';
import api from '../../../services/api';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const response = await api.get('/categories');
    setCategories(response.data);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  function renderCategory(param) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: param.item.url }} style={styles.image} />
        <Text style={styles.title}>{param.item.title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderCategory}
      />
    </View>
  );
}
