import { StackNavigator } from 'react-navigation';
import { TransactionEditor, Transactions } from '../../screens';
import screens from '../../constants/screens';
import navOptions from '../../utils/navOptions';
import AccountsRoutes from '../routes/AccountsRoutes';
import CategoriesRoutes from '../routes/CategoriesRoutes';

const TransactionsNavigator = StackNavigator({
  [screens.Transactions]: {
    screen: Transactions,
  },
  [screens.TransactionEditor]: {
    screen: TransactionEditor,
  },
  ...AccountsRoutes,
  ...CategoriesRoutes,
}, {
  ...navOptions({
    title: 'Home',
    icon: 'home',
  }),
});

export default TransactionsNavigator;
