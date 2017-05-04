import { StackNavigator } from 'react-navigation';
import { Settings } from '../../screens';
import AccountsRoutes from '../routes/AccountsRoutes';
import CategoriesRoutes from '../routes/CategoriesRoutes';
import screens from '../../constants/screens';
import navOptions from '../../utils/navOptions';

const SettingsNavigator = StackNavigator({
  [screens.Settings]: {
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
