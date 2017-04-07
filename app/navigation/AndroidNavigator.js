import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import DrawerButton from '../components/DrawerButton';
import NavIcon from '../components/NavIcon';
import { AddTransaction, Dashboard, Settings } from '../scenes';
import scenes from '../constants/scenes';

const getStackConfig = drawerIcon => ({
  navigationOptions: {
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
    navigationOptions: {
      header: navigation => ({
        title: 'Dashboard',
        left: <DrawerButton navigation={navigation} />,
      }),
    },
  },
  [scenes.AddTransaction]: {
    screen: AddTransaction,
  },
}, {
  ...getStackConfig('chart-arc'),
});

const SettingsNavigator = StackNavigator({
  [scenes.SettingsMain]: {
    screen: Settings,
    navigationOptions: {
      header: navigation => ({
        title: 'Settings',
        left: <DrawerButton navigation={navigation} />,
      }),
    },
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
