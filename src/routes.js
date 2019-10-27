import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import Home from './pages/Home';

const HomeNavigator = createAppContainer(
  createStackNavigator(
    {
      Home,
      // Restaurant specific page
    },
    {
      initialRouteName: 'Home',
    }
  )
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
