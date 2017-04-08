import { StackNavigator } from 'react-navigation';
import { navIcon } from '../components';
import { AddTransaction, Dashboard, Settings } from '../scenes';
import scenes from '../constants/scenes';

const DashboardNavigator = StackNavigator({
  [scenes.Dashboard]: {
    screen: Dashboard,
  },
  [scenes.AddTransaction]: {
    screen: AddTransaction,
  },
}, {
  navigationOptions: {
    title: 'Dashboard',
    drawer: {
      icon: navIcon('chart-arc'),
    },
  },
});

const SettingsNavigator = StackNavigator({
  [scenes.Settings]: {
    screen: Settings,
  },
}, {
  navigationOptions: {
    title: 'Settings',
    drawer: {
      icon: navIcon('settings'),
    },
  },
});

const Routes = {
  [scenes.DashboardRoot]: {
    screen: DashboardNavigator,
  },
  [scenes.SettingsRoot]: {
    screen: SettingsNavigator,
  },
};

export default Routes;
