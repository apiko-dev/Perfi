import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import DrawerButton from '../components/DrawerButton';
import NavIcon from '../components/NavIcon';
import { Dashboard, Settings } from '../scenes';
import scenes from '../constants/scenes';

const getStackConfig = drawerIcon => ({
  navigationOptions: {
    header: navigation => ({
      left: <DrawerButton navigation={navigation} />,
    }),
    drawer: {
      icon: ({ tintColor }) => (
        <NavIcon name={drawerIcon} color={tintColor} />
      ),
    },
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

const Navigator = DrawerNavigator({
  [scenes.Dashboard]: {
    screen: DashboardNavigator,
  },
  [scenes.Settings]: {
    screen: SettingsNavigator,
  },
});

export default Navigator;
