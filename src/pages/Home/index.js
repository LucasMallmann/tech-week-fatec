import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

const data = [
  {
    id: 1,
    url:
      'https://i.pinimg.com/originals/d8/8a/ca/d88acacdd20c6e4af73520058cb85aca.jpg',
    title: 'Lanches',
  },
  {
    id: 2,
    url:
      'https://i.pinimg.com/originals/d8/8a/ca/d88acacdd20c6e4af73520058cb85aca.jpg',
    title: 'Lanches',
  },
  {
    id: 3,
    url:
      'https://i.pinimg.com/originals/d8/8a/ca/d88acacdd20c6e4af73520058cb85aca.jpg',
    title: 'Lanches',
  },
  {
    id: 4,
    url:
      'https://i.pinimg.com/originals/d8/8a/ca/d88acacdd20c6e4af73520058cb85aca.jpg',
    title: 'Lanches',
  },
  {
    id: 5,
    url:
      'https://i.pinimg.com/originals/d8/8a/ca/d88acacdd20c6e4af73520058cb85aca.jpg',
    title: 'Lanches',
  },
];

function Category({ uri, title }) {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Image
        source={{ uri }}
        style={{
          width: 65,
          height: 65,
          borderRadius: 5,
        }}
      />
      <Text>{title}</Text>
    </View>
  );
}

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
          <Icon color="#FB565A" type="font-awesome" name="search" size={16} />
        </TouchableOpacity>
      </View>

      <Text style={styles.category}>Categorias</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        horizontal
        renderItem={({ item }) => (
          <Category uri={item.url} title={item.title} />
        )}
      />

      <Text style={{ fontSize: 20 }}>Restaurantes aqui</Text>
    </View>
  );
}

// Home.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func,
//   }).isRequired,
// };
