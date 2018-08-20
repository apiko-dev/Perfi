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
  concatenatedData,
  onGoToDetail,
  onDelete,
  onAddToFavourite,
  onDeleteFromFavourites,
  dateForFiltering,
  setDateForFiltering,
  setListRef,
  onAllowScroll,
  isScrollEnabled,
}) => {
  /* eslint-disable react/prop-types */
  const _renderItem = ({ item }) => {
    const param = { id: item.id, isTransaction: !!item.account };
    return (
      <TransactionItem
        entity={item}
        onPress={() => onGoToDetail(param)}
        onDelete={() => onDelete(param)}
        onAddToFavourite={() => onAddToFavourite(param)}
        onDeleteFromFavourites={() => onDeleteFromFavourites(param)}
        isFavourite={item.isFavourite}
        onAllowScroll={onAllowScroll}
      />
    );
  };

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
        isSimpleEmptyText={!!concatenatedData.length}
        scrollEnabled={isScrollEnabled}
        data={concatenatedData}
        renderItem={_renderItem}
        flatListRef={setListRef}
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
  concatenatedData: T.array,
  onGoToDetail: T.func,
  onDelete: T.func,
  onAddToFavourite: T.func,
  onDeleteFromFavourites: T.func,
  dateForFiltering: T.object,
  setDateForFiltering: T.func,
  setListRef: T.func,
  isScrollEnabled: T.bool,
  onAllowScroll: T.func,
};


export default AccountDetails;
