import { StackNavigator } from 'react-navigation';
import { NavIcon, PropsProxyHOC } from '../components';
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
    drawer: {
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
