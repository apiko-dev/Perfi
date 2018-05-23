import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import { SingletonAccountSwiper } from './components';
import {
  Subtitle,
  Separator,
  DateFilter,
  TransactionItem,
  HeaderTitle,
  FlatList,
} from '../../components';
import s from './styles';

const AccountDetails = ({
  navigation,
  onAccountChange,
  transactions,
  onDeleteTransaction,
  onAddTransactionToFavourite,
  onDeleteFromFavourites,
  dateForFiltering,
  setDateForFiltering,
  setListRef,
  onAllowScroll,
  isScrollEnabled,
}) => {
  /* eslint-disable react/prop-types */
  const _renderItem = ({ item }) => (
    <TransactionItem
      accountId={item.account}
      categoryId={item.category}
      date={item.date}
      value={item.value}
      onDelete={() => onDeleteTransaction(item.id)}
      onAddToFavourite={() => onAddTransactionToFavourite(item.id)}
      onDeleteFromFavourites={() => onDeleteFromFavourites(item.id)}
      isFavourites={item.isFavourites}
      onAllowScroll={onAllowScroll}
    />
);

  return (
    <View style={s.root}>
      <SingletonAccountSwiper
        navigation={navigation}
        onAccountChange={onAccountChange}
      />
      <Separator withOpacity />
      <DateFilter
        dateForFiltering={dateForFiltering}
        setDateForFiltering={setDateForFiltering}
      />
      <Subtitle
        style={s.subtitle}
        withLittlePadding
        leftText="Transaction"
        date={dateForFiltering}
      />
      <Separator withShadow />

      <FlatList
        scrollEnabled={isScrollEnabled}
        data={transactions}
        renderItem={_renderItem}
        flatListRef={setListRef}
        listEmptyText="You don't have any transaction on this account"
      />
    </View>
  );
};

AccountDetails.navigationOptions = ({
  headerTitle: <HeaderTitle title="Account Detail" />,
});


AccountDetails.propTypes = {
  navigation: T.object,
  onAccountChange: T.func,
  transactions: T.array,
  onDeleteTransaction: T.func,
  onAddTransactionToFavourite: T.func,
  onDeleteFromFavourites: T.func,
  dateForFiltering: T.object,
  setDateForFiltering: T.func,
  setListRef: T.func,
  isScrollEnabled: T.bool,
  onAllowScroll: T.func,
};


export default AccountDetails;
