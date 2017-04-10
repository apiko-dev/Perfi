import { StackNavigator } from 'react-navigation';
import { Accounts, AddAccount, EditAccount } from '../../scenes';
import scenes from '../../constants/scenes';
import navOptions from '../../utils/navOptions';

const AccountsNavigator = StackNavigator({
  [scenes.Accounts]: {
    screen: Accounts,
  },
  [scenes.AddAccount]: {
    screen: AddAccount,
  },
  [scenes.EditAccount]: {
    screen: EditAccount,
  },
}, {
  ...navOptions({
    title: 'Accounts',
    icon: 'cards',
  }),
});

export default AccountsNavigator;
