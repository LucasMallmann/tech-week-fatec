import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import Categories from './Categories';
import Restaurants from './Restaurants';
import styles from './styles';

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

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <Text style={styles.titleLabel}>Categorias</Text>
        <Categories />

        <Text style={styles.titleLabel}>Restaurantes</Text>
        <Restaurants restaurant={restaurant} />
      </ScrollView>
    </View>
  );
}
