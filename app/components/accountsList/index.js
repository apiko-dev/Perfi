import { ListView } from 'react-native';
import { compose, withProps } from 'recompose';
import AccountsListItem from './AccountsListItem';
import screens from '../../constants/screens';

const withDataSource = withProps({
  ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
});

const withClonedState = withProps(({ ds, accounts }) => ({
  dataSource: ds.cloneWithRows(accounts),
}));

const withAccountItem = withProps(({ deleteAccount, updateAccount, navigation }) => ({
  renderRow: compose(
    withProps(account => ({
      onPress: () => {
        navigation.navigate(screens.AccountEditor, {
          title: `Edit ${account.name}`,
          onDelete: deleteAccount,
          onSubmit: updateAccount,
          account,
        });
      },
    })),
  )(AccountsListItem),
}));

const AccountsList = compose(
  withDataSource,
  withClonedState,
  withAccountItem,
)(ListView);

export default AccountsList;
