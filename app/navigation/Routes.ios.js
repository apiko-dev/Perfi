import { StackNavigator } from 'react-navigation';
import { Dashboard, Settings, AddTransaction } from '../scenes';
import { navIcon } from '../components';
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
    tabBar: {
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
    tabBar: {
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
