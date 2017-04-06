import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import DrawerButton from '../components/DrawerButton';
import { Dashboard, Settings } from '../scenes';
import scenes from '../constants/scenes';

const stackConfig = {
  navigationOptions: {
    header: navigation => ({
      left: <DrawerButton navigation={navigation} />,
    }),
  },
};

const DashboardNavigator = StackNavigator({
  [scenes.DashboardMain]: {
    screen: Dashboard,
  },
}, {
  ...stackConfig,
});

const SettingsNavigator = StackNavigator({
  [scenes.SettingsMain]: {
    screen: Settings,
  },
}, {
  ...stackConfig,
});

const Navigator = DrawerNavigator({
  [scenes.Dashboard]: {
    screen: DashboardNavigator,
  },
  [scenes.Settings]: {
    screen: SettingsNavigator,
  },
});

export default Navigator;
