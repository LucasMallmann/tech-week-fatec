import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

export default function Restaurant({
  title,
  distance,
  category,
  uri,
  deliveryPrice,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri,
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
          <Text style={styles.deliveryLabel}>40-50 min</Text>
          <Text style={styles.free}>{deliveryPrice}</Text>
        </View>
      </View>
    </View>
  );
}
