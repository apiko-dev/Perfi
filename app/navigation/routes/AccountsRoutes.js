import screens from '../../constants/screens';
import AccountEditor from '../../screens/AccountEditor';
import Accounts from '../../containers/AccountsListScreenContainer';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Accounts]: {
    screen: Accounts,
    navigationOptions: headerOptions({ title: 'Accounts' }),
  },
  [screens.AccountEditor]: {
    screen: AccountEditor,
  },
};

export default Routes;
