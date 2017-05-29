import { ListView } from 'react-native';
import { compose, withProps } from 'recompose';
import AccountsListItem from './AccountsListItem';

const withDataSource = withProps({
  enableEmptySections: true,
  removeClippedSubviews: false,
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

const AccountsList = compose(
  withDataSource,
  withClonedState,
  withAccountItem,
)(ListView);

export default AccountsList;
