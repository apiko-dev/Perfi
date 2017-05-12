import screens from '../../constants/screens';
import AccountEditor from '../../screens/AccountEditor';
import Accounts from '../../containers/AccountsListScreenContainer';

const Routes = {
  [screens.Accounts]: {
    screen: Accounts,
  },
  [screens.AccountEditor]: {
    screen: AccountEditor,
  },
};

export default Routes;
