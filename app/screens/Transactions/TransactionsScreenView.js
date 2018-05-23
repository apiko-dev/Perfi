import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import screens from '../../constants/screens';
import { AccauntsSwiper } from './components';
import {
  Subtitle,
  Separator,
  DateFilter,
  AddTransactionButton,
  TransactionItem,
  FlatList,
} from '../../components';
import s from './styles';
import { colors, dimensions } from '../../styles';
import NavigationButton from '../../components/NavigationButton';

const Transactions = ({
  navigation,
  totalBalance,
  transactions,
  onDeleteTransaction,
  onAddTransactionToFavourite,
  onDeleteFromFavourites,
  onGoToDetail,
  dateForFiltering,
  setDateForFiltering,
  setListRef,
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
      onPress={() => onGoToDetail({ id: item.id, isTransaction: true })}
    />
);

  return (
    <View style={s.root}>
      <Subtitle
        style={s.subtitle}
        withoutPadding
        leftText="Accounts"
        totalBalance={totalBalance}
      />
      <View style={{ paddingLeft: dimensions.halfIndent, paddingRight: dimensions.halfIndent }}>
        <AccauntsSwiper navigation={navigation} />
      </View>
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
        data={transactions}
        renderItem={_renderItem}
        listEmptyText="You don't have any transactions"
        ListHeaderComponent={null}
        flatListRef={setListRef}
      />
      <AddTransactionButton navigation={navigation} />
    </View>
  );
};


Transactions.propTypes = {
  navigation: T.object,
  totalBalance: T.number,
  transactions: T.array,
  onDeleteTransaction: T.func,
  onAddTransactionToFavourite: T.func,
  onDeleteFromFavourites: T.func,
  onGoToDetail: T.func,
  dateForFiltering: T.object,
  setDateForFiltering: T.func,
  setListRef: T.func,
};

Transactions.navigationOptions = ({ navigation }) => ({
  headerRight: <NavigationButton
    iconName="pie-chart"
    tintColor={colors.green}
    onPress={() => navigation.navigate(screens.TransactionsStatistics)}

  />,
});

export default Transactions;
