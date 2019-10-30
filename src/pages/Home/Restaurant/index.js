import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

export default function Restaurant() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
          }}
        />
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.title}>Burgeria Top</Text>
        <View style={styles.categoryContainer}>
          <Text style={styles.label}>Lanches</Text>
          <View style={styles.dot} />
          <Text style={styles.label}>2,0km</Text>
        </View>
        <View style={styles.delivery}>
          <Text style={styles.deliveryLabel}>40-50 min</Text>
          <Text style={styles.free}>Entrega GRÁTIS</Text>
        </View>
      </View>
    </View>
  );
}
