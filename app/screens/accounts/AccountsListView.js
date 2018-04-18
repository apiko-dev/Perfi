import { compose, hoistStatics, withProps, withHandlers } from 'recompose';
import screens from '../../constants/screens';
import { getParam } from '../../utils/navHelpers';
import AccountsScreen from './AccountsScreen';


const goEditAccount = navigation => (account) => {
  navigation.navigate(screens.AccountEditor, { account });
};

const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);

const enhance = compose(

  withProps(props => ({
    accounts: props.accounts.concat({ name: 'Add an account', isAddButton: true }),
    onSelectAccount: getParam('onSelectAccount')(props.navigation) ||
      goEditAccount(props.navigation),
    onAddAccount: onNavigate(props.navigation, screens.AccountEditor, { title: 'Add an account' }),
  })),
  withHandlers({
    onPress: props => item => props.onSelectAccount(item),
  }),
);

export default hoistStatics(enhance)(AccountsScreen);
