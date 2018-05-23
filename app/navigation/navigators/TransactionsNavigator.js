import { StackNavigator } from 'react-navigation';
import {
  TransactionEditor,
  Transactions,
  Calculator,
  TransactionsStatistics,
  AccountDetail,
} from '../../screens';
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
  [screens.TransactionsStatistics]: {
    screen: TransactionsStatistics,
    navigationOptions: headerOptions(),
  },
  [screens.TransactionEditor]: {
    screen: TransactionEditor,
  },
  [screens.AccountDetail]: {
    screen: AccountDetail,
    navigationOptions: headerOptions(),
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
