import { StackNavigator } from 'react-navigation';
import { Dashboard, Settings, AddTransaction } from '../scenes';
import { NavIcon, PropsProxyHOC } from '../components';
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
      icon: PropsProxyHOC(NavIcon, { name: 'chart-arc' }),
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
      icon: PropsProxyHOC(NavIcon, { name: 'settings' }),
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
