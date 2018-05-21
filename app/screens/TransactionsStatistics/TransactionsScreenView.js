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
} from '../../components';
import s from './styles';
import { categoriesTypes as types } from '../../constants/categories';
import colors from '../../styles/colors';


const tabs = [types.income, types.expense];


const Transactions = ({
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
    <Separator style={s.separator} />
    <FlatList
      data={dataForList}
      renderItem={({ item }) => (
        <TransactionItem
          isSimpleItem
          categoryId={item.id}
          value={item.value}
          percent={item.percent}
        />
        )}
      listEmptyText="You don't have any transactions"
      ListHeaderComponent={
        <View>
          <View style={s.chartContainer}>
            <View style={s.pieContainer}>
              <VictoryPie
                width={185} height={185}
                innerRadius={60}
                padding={0}
                labels={() => ''}
                data={dataForChart}
              />
              <View style={s.pieTextContainer}>
                <Text
                  style={[
                    s.pieTotalValue, { color: selectedTabIndex === 0 ? colors.green : colors.red }]}
                >
                    ${totalValue}
                </Text>
                <Text style={s.pieDate}>{date}</Text>
              </View>
            </View>
            <PieLegend data={dataForChart} />
          </View>
          <Subtitle
            style={s.subtitle}
            leftText="Statistic per category"
          />
          <Separator />
        </View>
        }
    />

    <AddTransactionButton navigation={navigation} />
  </View>
  );


Transactions.propTypes = {
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

export default Transactions;
