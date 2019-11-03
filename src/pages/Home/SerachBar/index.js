import React from 'react';
import { View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

export default function SearchBar({ restaurant, setRestaurant }) {
  return (
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
  );
}

SearchBar.propTypes = {
  restaurant: PropTypes.string.isRequired,
  setRestaurant: PropTypes.func.isRequired,
};
