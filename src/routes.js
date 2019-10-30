import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';

import Home from './pages/Home';
import Dishes from './pages/Dishes';

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Food in Vale',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    Dishes,
  },
  {
    headerLayoutPreset: 'center',
    initialRouteName: 'Home',
  }
);

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      HomeNavigator,
      // Other pages
    },
    {
      initialRouteName: 'HomeNavigator',
      defaultNavigationOptions: ({ navigation }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'HomeNavigator') {
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
        activeTintColor: '#5FB8FB',
        inactiveTintColor: '#C4C4C4',
      },
    }
  )
);

export default Routes;
