import { DrawerNavigator } from 'react-navigation';
import { Drawer } from '../components';
import Routes from './routes/RootRoutes';
import screens from '../constants/screens';

const config = {
  initialRouteName: screens.AccountsRoot,
  contentComponent: Drawer,
};

export default DrawerNavigator(Routes, config);
