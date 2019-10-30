import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default function Category({ uri, title }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

Category.propTypes = {
  uri: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
