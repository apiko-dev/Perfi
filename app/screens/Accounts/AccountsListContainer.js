import { connect } from 'react-redux';
import { compose, hoistStatics, withProps, withHandlers } from 'recompose';
import screens from '../../constants/screens';
import { getParam } from '../../utils/navHelpers';
import AccountsScreenView from './AccountsScreenView';
import { getAccounts, getTotalBalance } from '../../modules/accounts/selectors';

const mapStateToProps = state => ({
  accounts: getAccounts(state),
  totalBalance: getTotalBalance(state),
});

const goEditAccount = navigation => (account) => {
  navigation.navigate(screens.AccountEditor, { account });
};

const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);

const enhance = compose(
  connect(mapStateToProps),

  withProps(props => ({
    accounts: props.accounts.concat({ isAddButton: true }),
    onSelectAccount: getParam('onSelectAccount')(props.navigation) ||
    goEditAccount(props.navigation),
    onAddAccount: onNavigate(props.navigation, screens.AccountEditor, { title: 'Add an account' }),
  })),
  withHandlers({
    onPress: props => item => props.onSelectAccount(item),
  }),
);

export default hoistStatics(enhance)(AccountsScreenView);
