import { StackNavigator } from 'react-navigation';
import { Dashboard, TransactionEditor } from '../../screens';
import screens from '../../constants/screens';
import navOptions from '../../utils/navOptions';
import AccountsRoutes from '../routes/AccountsRoutes';
import CategoriesRoutes from '../routes/CategoriesRoutes';

const DashboardNavigator = StackNavigator({
  [screens.Dashboard]: {
    screen: Dashboard,
  },
  [screens.TransactionEditor]: {
    screen: TransactionEditor,
  },
  ...AccountsRoutes,
  ...CategoriesRoutes,
}, {
  ...navOptions({
    title: 'Dashboard',
    icon: 'chart-arc',
  }),
});

export default DashboardNavigator;
