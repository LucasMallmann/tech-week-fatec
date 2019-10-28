import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

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
          <Text>Ok</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
        Restaurantes Tops
      </Text>
    </View>
  );
}

// Home.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func,
//   }).isRequired,
// };
