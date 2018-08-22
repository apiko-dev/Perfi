import React from 'react';
import T from 'prop-types';
import R from 'ramda';
import { Animated, View, FlatList } from 'react-native';
import screens from '../../constants/screens';
import { AccountsSwiper } from './components';
import {
  Subtitle,
  Separator,
  DateFilter,
  AddTransactionButton,
  TransactionItem,
  EmptyList,
} from '../../components';
import s from './styles';
import { colors, dimensions } from '../../styles';
import NavigationButton from '../../components/NavigationButton';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const HEADER_MAX_HEIGHT = dimensions.headerMaxHeight;
const HEADER_MIN_HEIGHT = dimensions.headerMinHeight;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Transactions = ({
  navigation,
  totalBalance,
  concatenatedData,
  onDelete,
  onAddToFavourite,
  onDeleteFromFavourites,
  onGoToDetail,
  dateForFiltering,
  setDateForFiltering,
  setListRef,
  scrollY,
  onAllowScroll,
  isScrollEnabled,
}) => {
  /* eslint-disable react/prop-types */
  const _renderItem = ({ item }) => {
    const param = { id: item.id, isTransaction: !!item.account };
    return (
      <TransactionItem
        id={item.id}
        entity={item}
        onDelete={() => onDelete(param)}
        onAddToFavourite={() => onAddToFavourite(param)}
        onDeleteFromFavourites={() => onDeleteFromFavourites(param)}
        isFavourite={item.isFavourite}
        onPress={() => onGoToDetail(param)}
        onAllowScroll={onAllowScroll}
      />
    );
  };

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  return (
    <View style={s.root}>
      <Animated.View
        style={[
          s.header,
          concatenatedData.length > 5 && { transform: [{ translateY: headerTranslate }] },
        ]}
      >
        <Subtitle
          style={s.subtitle}
          withoutPadding
          leftText="Accounts"
          totalBalance={totalBalance}
        />
        <View style={{ paddingLeft: dimensions.halfIndent, paddingRight: dimensions.halfIndent }}>
          <AccountsSwiper navigation={navigation} />
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
      </Animated.View>
      <AnimatedFlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={1}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={7}
        contentInset={{ top: HEADER_MAX_HEIGHT }}
        contentOffset={{ y: -HEADER_MAX_HEIGHT }}
        scrollEnabled={isScrollEnabled}
        data={concatenatedData}
        renderItem={_renderItem}
        ref={setListRef}
        contentContainerStyle={s.scrollViewContent}
        keyExtractor={R.prop('id')}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={<EmptyList containerStyle={s.emptyList} />}
        ListFooterComponent={
          concatenatedData.length ? <View style={s.paddingBottom}><Separator /></View> : null
        }
      />
      <AddTransactionButton navigation={navigation} isShowTip />
    </View>
  );
};


Transactions.propTypes = {
  navigation: T.object,
  totalBalance: T.number,
  concatenatedData: T.array,
  onDelete: T.func,
  onAddToFavourite: T.func,
  onDeleteFromFavourites: T.func,
  onGoToDetail: T.func,
  dateForFiltering: T.object,
  setDateForFiltering: T.func,
  setListRef: T.func,
  scrollY: T.object,
  isScrollEnabled: T.bool,
  onAllowScroll: T.func,
};

Transactions.navigationOptions = ({ navigation }) => ({
  headerRight: <NavigationButton
    iconName="pie-chart"
    tintColor={colors.green}
    onPress={() => navigation.navigate(screens.TransactionsStatistics)}
  />,
});

export default Transactions;
