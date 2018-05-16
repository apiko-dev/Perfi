import React from 'react';
import T from 'prop-types';
import { View, } from 'react-native';
import ActionButton from 'react-native-action-button';
import screens from '../../constants/screens';
import { AccauntsSwiper } from './components';
import {
  Subtitle,
  Separator,
  DateFilter,
  NavIcon,
  TransactionItem,
  FlatList,
} from '../../components';
import s from './styles';
import { colors, dimensions } from '../../styles';
import NavigationButton from '../../components/NavigationButton';
import { getParam } from '../../utils/navHelpers';

const Transactions = ({
    navigation,
    totalBalance,
    transactions,
    onDeleteTransaction,
    onAddTransactionToFavourite,
    onDeleteFromFavourites,
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
    />
  );

  return (
    <View style={s.root}>
      <Subtitle
        style={s.subtitle}
        leftText="Accounts"
        totalBalance={totalBalance}
      />
      <View style={{ paddingLeft: dimensions.halfIndent, paddingRight: dimensions.halfIndent }}>
        <AccauntsSwiper navigation={navigation} />
      </View>
      <Separator style={s.separator} />
      <DateFilter
        dateForFiltering={dateForFiltering}
        setDateForFiltering={setDateForFiltering}
      />
      <Subtitle
        style={s.subtitle}
        leftText="Transaction"
        date={dateForFiltering}
      />
      <FlatList
        data={transactions}
        renderItem={_renderItem}
        listEmptyText="You don't have any favourites"
        flatListRef={setListRef}
      />
      <ActionButton
        buttonColor={colors.green}
        size={55}
        spacing={10}
        offsetX={15}
        offsetY={15}
        buttonText="+/-"
      >
        <ActionButton.Item
          buttonColor={colors.red}
          title="Add Expence"
          onPress={() => navigation.navigate(screens.Calculator, { type: 'expense' })}
          // onPress={() => navigation.navigate(screens.TransactionEditor)}
        >
          <NavIcon name="minus" tintColor={colors.white} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor={colors.green}
          title="Add Income"
          onPress={() => navigation.navigate(screens.Calculator, { type: 'income' })}
        >
          <NavIcon name="plus" tintColor={colors.white} />
        </ActionButton.Item>
      </ActionButton>

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
  dateForFiltering: T.object,
  setDateForFiltering: T.func,
  setListRef: T.func,
};

Transactions.navigationOptions = ({ navigation }) => ({
  headerRight: <NavigationButton
    iconName="pie-chart"
    name={getParam('isChartShown')(navigation) ? 'list' : 'pie-chart'}
    tintColor={colors.green}
    onPress={getParam('onToggleChart')(navigation)}
  />,
});

export default Transactions;
