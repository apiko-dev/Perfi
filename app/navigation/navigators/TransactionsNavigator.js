import { StackNavigator } from 'react-navigation';
import { TransactionEditor, Transactions, Calculator } from '../../screens';
import screens from '../../constants/screens';
import navOptions from '../../utils/navOptions';
import AccountsRoutes from '../routes/AccountsRoutes';
import CategoriesRoutes from '../routes/CategoriesRoutes';
import headerOptions from '../../utils/stackHeaderOptions';

const TransactionsNavigator = StackNavigator({
  [screens.Transactions]: {
    screen: Transactions,
    navigationOptions: headerOptions(),
  },
  [screens.Calculator]: {
    screen: Calculator,
    navigationOptions: headerOptions(),
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
