import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Dashboard, Settings } from '../scenes';
import NavIcon from '../components/NavIcon';
import scenes from '../constants/scenes';

const getStackConfig = tabIcon => ({
  navigationOptions: {
    tabBar: ({
      icon: ({ tintColor }) => (
        <NavIcon name={tabIcon} color={tintColor} />
      ),
    }),
  },
});

const DashboardNavigator = StackNavigator({
  [scenes.DashboardMain]: {
    screen: Dashboard,
  },
}, {
  ...getStackConfig('chart-arc'),
});

const SettingsNavigator = StackNavigator({
  [scenes.SettingsMain]: {
    screen: Settings,
  },
}, {
  ...getStackConfig('settings'),
});

const Navigator = TabNavigator({
  [scenes.Dashboard]: {
    screen: DashboardNavigator,
  },
  [scenes.Settings]: {
    screen: SettingsNavigator,
  },
});

export default Navigator;
