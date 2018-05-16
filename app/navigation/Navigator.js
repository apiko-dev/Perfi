import { DrawerNavigator } from 'react-navigation';
import { Drawer } from '../components';
import Routes from './routes/RootRoutes';
import screens from '../constants/screens';


const Navigator = DrawerNavigator;
const config = {
  initialRouteName: screens.AccountsRoot,
  contentComponent: Drawer,
};

export default Navigator(Routes, config);
