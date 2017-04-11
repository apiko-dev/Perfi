import { StackNavigator } from 'react-navigation';
import { Settings } from '../../scenes';
import AccountsRoutes from '../routes/AccountsRoutes';
import CategoriesRoutes from '../routes/CategoriesRoutes';
import scenes from '../../constants/scenes';
import navOptions from '../../utils/navOptions';

const SettingsNavigator = StackNavigator({
  [scenes.Settings]: {
    screen: Settings,
  },
  ...AccountsRoutes,
  ...CategoriesRoutes,
}, {
  ...navOptions({
    title: 'Settings',
    icon: 'settings',
  }),
});

export default SettingsNavigator;
