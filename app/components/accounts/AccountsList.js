import React, { PropTypes } from 'react';
import { ListView } from 'react-native';
import AccountsListItem from './AccountsListItem';
import style from '../../styles/AccountsStyles';
import scenes from '../../constants/scenes';

const AccountsList = ({ accounts, navigation, updateAccount }) => {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
  });

  const dataSource = ds.cloneWithRows(accounts);
  const onPress = item =>
    () => {
      updateAccount(item);
      navigation.navigate(scenes.AccountEditor, {
        title: `Edit ${item.name}`,
      });
    };

  const renderRow = item => (<AccountsListItem
    key={item.id}
    onPress={onPress(item)}
    {...item}
  />);

  return (<ListView
    dataSource={dataSource}
    renderRow={renderRow}
    style={style.listStyle}
    enableEmptySections
  />);
};

AccountsList.propTypes = {
  accounts: PropTypes.array,
  navigation: PropTypes.object,
  updateAccount: PropTypes.func,
};

export default AccountsList;
