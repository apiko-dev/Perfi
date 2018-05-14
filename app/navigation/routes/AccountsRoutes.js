import screens from '../../constants/screens';
import Accounts from '../../screens/Accounts';
import { TransferEditor, AccountEditor } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Accounts]: {
    screen: Accounts,
    navigationOptions: headerOptions(),
  },
  [screens.AccountEditor]: {
    screen: AccountEditor,
  },
  [screens.TransferEditor]: {
    screen: TransferEditor,
  },
};

export default Routes;
