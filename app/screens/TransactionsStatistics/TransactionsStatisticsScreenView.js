import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';
import { VictoryPie } from 'victory-native';
import { PieLegend } from './components';
import {
  Subtitle,
  Separator,
  DateFilter,
  TransactionItem,
  FlatList,
  SegmentedControl,
  AddTransactionButton,
  HeaderTitle,
} from '../../components';
import s from './styles';
import { categoriesTypes as types } from '../../constants/categories';
import colors from '../../styles/colors';


const tabs = [types.income, types.expense];


const TransactionsStatistics = ({
    navigation,
    totalValue,
    date,
    dateForFiltering,
    setDateForFiltering,
    selectedTabIndex,
    setSelectedTabIndex,
    dataForChart,
    dataForList,
}) => (
  <View style={s.root}>
    <DateFilter
      dateForFiltering={dateForFiltering}
      setDateForFiltering={setDateForFiltering}
    />
    <View style={s.container}>
      <SegmentedControl
        values={tabs}
        selectedIndex={selectedTabIndex}
        onTabPress={setSelectedTabIndex}
      />
    </View>
    <Separator withShadow />
    <FlatList
      data={dataForList}
      renderItem={({ item }) => (
        <TransactionItem
          entity={item}
          isSimpleItem
        />
        )}
      isSimpleEmptyText
      listEmptyText="You don't have any transactions"
      ListHeaderComponent={
        <View>
          <View style={s.chartContainer}>
            <View style={s.pieContainer}>
              <VictoryPie
                data={dataForChart.length ? dataForChart : [{ y: 1, fill: colors.greyDarker }]}
                animate={{ duration: 800 }}
                padding={0}
                width={185}
                height={185}
                innerRadius={60}
                labels={() => ''}
              />
              <View style={s.pieTextContainer}>
                <Text
                  style={[
                    s.pieTotalValue, { color: selectedTabIndex === 0 ? colors.green : colors.red }]}
                >
                    ${Math.round(totalValue)}
                </Text>
                <Text style={s.pieDate}>{date}</Text>
              </View>
            </View>
            <PieLegend data={dataForChart} />
          </View>
          <Subtitle
            style={s.subtitle}
            withLittlePadding
            leftText="Statistic per category"
          />
          <Separator />
        </View>
        }
    />
    <AddTransactionButton navigation={navigation} />
  </View>
  );

TransactionsStatistics.navigationOptions = ({
  headerTitle: <HeaderTitle title="Statistics" />,
});


TransactionsStatistics.propTypes = {
  navigation: T.object,
  totalValue: T.number,
  date: T.string,
  dateForFiltering: T.object,
  setDateForFiltering: T.func,
  selectedTabIndex: T.number,
  setSelectedTabIndex: T.func,
  dataForChart: T.array,
  dataForList: T.array,
};

export default TransactionsStatistics;
