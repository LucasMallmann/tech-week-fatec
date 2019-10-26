import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
    },
    {
      initialRouteName: 'Home',
    }
  )
);

export default Routes;
