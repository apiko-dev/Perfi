import { connect } from 'react-redux';
import R from 'ramda';
import { compose, hoistStatics, withProps, withHandlers } from 'recompose';
import screens from '../../constants/screens';
import { getParam } from '../../utils/navHelpers';
import AccountsScreenView from './AccountsScreenView';
import { accountTransactionsSum as transactionsSum } from '../../utils/transactionsHelpers';
import { getTotalBalance } from '../../modules/accounts/selectors';

const transfersSum = (transfers, accId) => R.reduce((sum, transfer) => {
  let delta = 0;

  if (R.propEq('to', accId, transfer)) {
    delta = transfer.value;
  } else if (R.propEq('from', accId, transfer)) {
    delta = -transfer.value;
  }

  return sum + delta;
}, 0, R.values(transfers.byId));

const mapStateToProps = ({ accounts, categories, transactions, transfers }) => {
  const accountsById = accounts.byId;
  return {
    accounts: R.map(accId => ({
      ...accountsById[accId],
      balance: transfersSum(transfers, accId) + transactionsSum(transactions, categories, accId),
    }), accounts.ids),
    totalBalance: getTotalBalance(accounts),
  };
};

const goEditAccount = navigation => (account) => {
  navigation.navigate(screens.AccountEditor, { account });
};

const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);

const enhance = compose(
  connect(mapStateToProps),

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

export default hoistStatics(enhance)(AccountsScreenView);
