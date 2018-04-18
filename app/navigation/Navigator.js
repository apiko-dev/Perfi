import { DrawerNavigator } from 'react-navigation';
import { Drawer } from '../components';
import Routes from './routes/RootRoutes';


const Navigator = DrawerNavigator;
const config = {
  contentComponent: Drawer,
};

export default Navigator(Routes, config);
