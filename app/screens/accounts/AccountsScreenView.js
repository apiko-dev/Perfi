import React from 'react';
import T from 'prop-types';

import { View, FlatList } from 'react-native';
import screens from '../../constants/screens';
import {
  NavigationButton,
  Subtitle,
  AccountItem,
} from '../../components';
import s from './styles';

const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);

const Accounts = ({ accounts, onPress, onAddAccount, totalBalance }) => {
  const _keyExtractor = item => item.id;

  /* eslint-disable react/prop-types */
  const _renderItem = ({ item }) => (
    <AccountItem
      name={item.name}
      initialBalance={item.initialBalance}
      color={item.color}
      onPress={item.isAddButton ? onAddAccount : () => onPress(item)}
      isAddButton={item.isAddButton}
    />
  );

  return (
    <View style={s.root}>
      <Subtitle
        style={s.subtitle}
        leftText="Accounts"
        totalBalance={totalBalance}
      />
      <FlatList
        data={accounts}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        numColumns={3}
        style={s.paddingHorizontal}
        bounces={false}
      />
    </View>
  );
};

Accounts.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <NavigationButton
      iconName="pie-chart"
      onPress={onNavigate(navigation, screens.TransferEditor, { title: 'Add transfer' })}
    />
  ),
});

Accounts.propTypes = {
  accounts: T.array,
  onPress: T.func,
  onAddAccount: T.func,
  totalBalance: T.number,
};

export default Accounts;
