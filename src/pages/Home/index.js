import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Dishes')}>
        <Text>Navigate</Text>
      </TouchableOpacity>
    </View>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
