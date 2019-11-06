import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import { Image, StyleSheet } from 'react-native';
import Home from './pages/Home';
import Dishes from './pages/Dishes';
import Fake from './pages/Fake';

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Food in Vale',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#f4111e',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Dishes: {
      screen: Dishes,
    },
  },
  {
    headerLayoutPreset: 'center',
    initialRouteName: 'Home',
  }
);

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeNavigator,
      Busca: Fake,
      Pedidos: Fake,
      Perfil: Fake,
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: ({ navigation }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          switch (routeName) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Busca':
              iconName = 'search';
              break;
            case 'Pedidos':
              iconName = 'list';
              break;
            case 'Perfil':
              iconName = 'user';
              break;
            default:
              iconName = '';
              break;
          }
          return (
            <Icon
              color={`${tintColor}`}
              type="font-awesome"
              name={`${iconName}`}
              size={25}
            />
          );
        },
      }),
      tabBarOptions: {
        activeTintColor: '#f4111e',
        inactiveTintColor: '#C4C4C4',
      },
    }
  )
);

export default Routes;
