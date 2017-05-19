import screens from '../../constants/screens';
import Accounts from '../../containers/AccountsScreenContainer';
import { TransferEditor, AccountEditor } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Accounts]: {
    screen: Accounts,
    navigationOptions: headerOptions({ title: 'Accounts' }),
  },
  [screens.AccountEditor]: {
    screen: AccountEditor,
  },
  [screens.TransferEditor]: {
    screen: TransferEditor,
  },
};

export default Routes;
