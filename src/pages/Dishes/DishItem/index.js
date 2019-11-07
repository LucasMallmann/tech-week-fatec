import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

export default function DishItem({ title, ingredients, price }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        {/* <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: url,
            }}
          />
        </View> */}
        <View style={styles.aboutContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.categoryContainer}>
            <Text style={styles.label}>Ingredientes: {ingredients}</Text>
          </View>
          <View style={styles.delivery}>
            <Text style={styles.deliveryLabel}>
              Preço: R$ {price.toString()}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
