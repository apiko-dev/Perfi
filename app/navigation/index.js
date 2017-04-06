import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import DrawerButton from '../components/DrawerButton';
import Drawer from '../components/Drawer';
import { Dashboard, Settings } from '../scenes';
import scenes from '../constants/scenes';

const MainNavigator = StackNavigator({
  [scenes.Dashboard]: {
    screen: Dashboard,
  },
  [scenes.Settings]: {
    screen: Settings,
  },
}, {
  navigationOptions: {
    header: navigation => ({
      left: <DrawerButton navigation={navigation} />,
    }),
  },
});

const Navigator = DrawerNavigator({
  [scenes.Main]: {
    screen: MainNavigator,
  },
}, {
  contentComponent: Drawer,
});

export default Navigator;
