import { DrawerNavigator } from 'react-navigation';
import { Drawer } from '../components';
import Routes from './routes/RootRoutes';

const config = {
  contentComponent: Drawer,
};

export default DrawerNavigator(Routes, config);
