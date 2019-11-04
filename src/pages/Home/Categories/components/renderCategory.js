import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import styles from '../styles';

export default function renderCategory(param) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: param.item.url }} style={styles.image} />
      <Text style={styles.title}>{param.item.title}</Text>
    </View>
  );
}
