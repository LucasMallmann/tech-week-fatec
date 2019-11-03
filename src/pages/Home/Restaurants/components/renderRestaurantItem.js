import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from '../styles';

export default function renderRestaurantItem(param) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: param.item.image_url,
            }}
          />
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.title}>{param.item.title}</Text>
          <View style={styles.categoryContainer}>
            <Text style={styles.label}>{param.item.category}</Text>
            <View style={styles.dot} />
            <Text style={styles.label}>{param.item.distance}</Text>
          </View>
          <View style={styles.delivery}>
            <Text style={styles.deliveryLabel}>40-50 min</Text>
            <Text style={styles.free}>{param.item.deliveryPrice}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
