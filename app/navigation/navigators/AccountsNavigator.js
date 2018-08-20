import { StackNavigator } from 'react-navigation';
import AccountsRoutes from '../routes/AccountsRoutes';
import navOptions from '../../utils/navOptions';

const AccountsNavigator = StackNavigator(AccountsRoutes, {
  ...navOptions({
    title: 'Accounts',
    icon: 'wallet',
  }),
});

export default AccountsNavigator;
