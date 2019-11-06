import React from 'react';
import { View, StatusBar } from 'react-native';
import { Text } from 'react-native-elements';
import styles from './styles';

export default function Fake() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text>Página falsa apenas para testes</Text>
      </View>
    </>
  );
}
