import { ListView } from 'react-native';
import { compose, withProps } from 'recompose';
import screens from '../../../constants/screens';
import { getParam } from '../../../utils/navHelpers';
import AccountsListItem from './AccountsListItem';

const goEditAccount = navigation => (account) => {
  navigation.navigate(screens.AccountEditor, { account });
};

const withSelectAccountEvent = withProps(({ navigation }) => ({
  onSelectAccount: getParam('onSelectAccount')(navigation) || goEditAccount(navigation),
}));

const withDataSource = withProps({
  ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
});

const withClonedState = withProps(({ ds, accounts }) => ({
  dataSource: ds.cloneWithRows(accounts),
}));

const withAccountItem = withProps(({ onSelectAccount }) => ({
  renderRow: compose(
    withProps(props => ({
      onPress: () => onSelectAccount(props),
    })),
  )(AccountsListItem),
}));

const withRenderProps = withProps({
  enableEmptySections: true,
  removeClippedSubviews: false,
});

const AccountsList = compose(
  withSelectAccountEvent,
  withDataSource,
  withClonedState,
  withAccountItem,
  withRenderProps,
)(ListView);

export default AccountsList;
