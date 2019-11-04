import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import api from '../../../services/api';
import renderCategory from './components/renderCategory';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const response = await api.get('/categories');
    setCategories(response.data);
  };

  useEffect(() => {
    loadCategories();
  }, []);

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
