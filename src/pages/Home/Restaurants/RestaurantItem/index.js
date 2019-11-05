import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import styles from './styles';

export default function RestaurantItem({
  id,
  url,
  title,
  category,
  distance,
  deliveryTime,
  deliveryPrice,
}) {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate('Dishes', { id })}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: url,
            }}
          />
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.categoryContainer}>
            <Text style={styles.label}>{category}</Text>
            <View style={styles.dot} />
            <Text style={styles.label}>{distance}</Text>
          </View>
          <View style={styles.delivery}>
            <Text style={styles.deliveryLabel}>{deliveryTime}</Text>
            <Text style={styles.free}>{deliveryPrice}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
