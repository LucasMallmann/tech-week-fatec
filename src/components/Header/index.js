import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default function Header() {
  return (
    <View style={{ backgroundColor: '#eee' }}>
      <Image
        style={StyleSheet.absoluteFill}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg',
        }}
      />
      <View style={{ backgroundColor: 'transparent' }}>
        <Text>Ola mundo</Text>
      </View>
    </View>
  );
}
