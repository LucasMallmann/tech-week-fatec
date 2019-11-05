import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import { Image, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import Home from './pages/Home';
import Dishes from './pages/Dishes';

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
      // navigationOptions: {
      //   headerBackground: (
      //     <Image
      //       style={StyleSheet.absoluteFill}
      //       source={{
      //         uri:
      //           'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg',
      //       }}
      //     />
      //   ),
      //   headerTintColor: '#fff',
      //   headerStyle: {
      //     marginTop: getStatusBarHeight(),
      //     height: 60,
      //     textAlignVertical: 'center',
      //   },
      // },
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
      // Other pages
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: ({ navigation }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = 'home';
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
