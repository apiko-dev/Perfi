import React, { PropTypes } from 'react';
import { ListView } from 'react-native';
import AccountsListItem from './AccountsListItem';
import style from '../../styles/FormStyles';
import screens from '../../constants/screens';

const AccountsList = ({ accounts, navigation, deleteAccount, updateAccount }) => {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
  });

  const dataSource = ds.cloneWithRows(accounts);
  const onPress = account =>
    () => {
      navigation.navigate(screens.AccountEditor, {
        title: `Edit ${account.name}`,
        onDelete: deleteAccount,
        onSubmit: updateAccount,
        account,
      });
    };

  const renderRow = item => (
    <AccountsListItem
      key={item.id}
      onPress={onPress(item)}
      {...item}
    />
  );

  return (
    <ListView
      dataSource={dataSource}
      renderRow={renderRow}
      style={style.listStyle}
      enableEmptySections
    />
  );
};

AccountsList.propTypes = {
  accounts: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    icon: PropTypes.string,
    balance: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    initialBalance: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    initialDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  })),
  navigation: PropTypes.object,
  deleteAccount: PropTypes.func,
  updateAccount: PropTypes.func,
};

export default AccountsList;
