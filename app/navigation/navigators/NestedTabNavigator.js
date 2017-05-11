import { TabNavigator } from 'react-navigation';

const NestedTabNavigator = routes => TabNavigator(routes, {
  tabBarPosition: 'top',
  swipeEnabled: true,
  tabBarOptions: {
    labelStyle: {
      fontSize: 16,
    },
    showIcon: false,
  },
});

export default NestedTabNavigator;
