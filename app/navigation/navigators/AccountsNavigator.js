import { StackNavigator } from 'react-navigation';
import { Accounts, AccountEditor } from '../../scenes';
import scenes from '../../constants/scenes';
import navOptions from '../../utils/navOptions';

const AccountsNavigator = StackNavigator({
  [scenes.Accounts]: {
    screen: Accounts,
  },
  [scenes.AccountEditor]: {
    screen: AccountEditor,
  },
}, {
  ...navOptions({
    title: 'Accounts',
    icon: 'credit-card-multiple',
  }),
});

export default AccountsNavigator;
