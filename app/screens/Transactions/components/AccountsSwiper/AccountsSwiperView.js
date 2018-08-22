import React from 'react';
import T from 'prop-types';
import Swiper from 'react-native-swiper';
import { View } from 'react-native';
import s from './styles';
import { AccountItem } from '../../../../components/index';


const AccountsSwiper = ({ groupedAccounts, onAccountPress }) => {
  const accountItem = item => (
    <AccountItem
      key={item.id}
      accountId={item.id}
      name={item.name}
      balance={item.balance}
      color={item.color}
      onPress={onAccountPress}
      isAddButton={item.isAddButton}
    />
  );

  const accountsGroup = group => (
    <View
      key={group[0].id}
      style={s.accountsGroup}
    >
      {group.map(accountItem)}
    </View>

  );

  return (
    <View style={s.wrapper}>
      <Swiper
        showsButtons={false}
        loop={false}
        paginationStyle={s.paginationStyle}
        activeDot={<View style={[s.dot, s.activeDot]} />}
        dot={<View style={s.dot} />}
      >
        {groupedAccounts.map(accountsGroup)}
      </Swiper>
    </View>
  );
};

AccountsSwiper.propTypes = {
  groupedAccounts: T.array,
  onAccountPress: T.func,
};

export default AccountsSwiper;
