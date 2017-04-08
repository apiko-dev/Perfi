import { StackNavigator } from 'react-navigation';
import { AddTransaction, Dashboard } from '../../scenes';
import scenes from '../../constants/scenes';
import navOptions from '../../utils/navOptions';

const DashboardNavigator = StackNavigator({
  [scenes.Dashboard]: {
    screen: Dashboard,
  },
  [scenes.AddTransaction]: {
    screen: AddTransaction,
  },
}, {
  ...navOptions({
    title: 'Dashboard',
    icon: 'chart-arc',
  }),
});

export default DashboardNavigator;
