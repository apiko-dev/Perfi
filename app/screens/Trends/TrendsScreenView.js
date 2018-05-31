import React from 'react';
// import T from 'prop-types';
import { View, ScrollView } from 'react-native';
import {
  VictoryGroup,
  VictoryChart,
  VictoryLabel,
  VictoryBar,
  VictoryAxis,
} from 'victory-native';
import {
  Subtitle,
  Separator,
  TransactionItem,
  FlatList,
  SimpleDateFilter,
} from '../../components';
import s from './styles';
import colors from '../../styles/colors';


const Trends = ({
    dateForFiltering,
    setDateForFiltering,
    dataForList,

                                  stats,
}) => (
  <View style={s.root}>
    <SimpleDateFilter
      dateForFiltering={dateForFiltering}
      setDateForFiltering={setDateForFiltering}
    />
    <Subtitle
      style={s.subtitle}
      withLittlePadding
      leftText="Trends"
    />
    <Separator withShadow />
    <FlatList
      data={dataForList}
      renderItem={({ item }) => (
        <TransactionItem
          entity={item}
          isSimpleItem
        />
        )}
      listEmptyText="You don't have any transactions"
      ListHeaderComponent={
        <View>
          <View style={s.chartContainer}>
            <ScrollView horizontal>
              <VictoryChart
                padding={{ top: 30, left: 50, bottom: 30, right: 40 }}
              // width={700}
              // width={700}
                width={stats.tickValues.length * 17}
                domain={{ x: [1, 12] }}
              >
                <VictoryAxis
                  tickValues={stats.tickValues}
                // width={1000}
                  width={stats.tickValues.length * 17}
                  tickLabelComponent={<VictoryLabel dy={5} angle={45} />}
                  style={{
                  // axis: { stroke: 'transparent' },
                    grid: { stroke: colors.grey, strokeWidth: 0.5 },
                    tickLabels: {
                      fontSize: 14,
                      stroke: colors.grey,
                      fill: colors.greyVeryDarker,
                      strokeWidth: 0.5,
                      padding: 5,
                      angle: 1800,
                    },
                    axisLabel: { fontSize: 20, padding: 30, angle: 90 },
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  domain={[0, 3000]}
                  style={{
                    grid: { stroke: colors.grey, strokeWidth: 0.5 },
                  // tickLabels: {
                  //   fontSize: 14,
                  //   stroke: colors.grey,
                  //   fill: colors.greyVeryDarker,
                  //   strokeWidth: 0.5,
                  // },
                    axisLabel: { fontSize: 20, padding: 30, angle: 90 },
                    tickLabels: { fontSize: 15, padding: 5, angle: 59 },
                  }}
                />
                <VictoryGroup
                  // width={3000}
                  height={375}
                  offset={18}
                >
                  <VictoryBar
                    data={stats.Expense}
                    // barRatio={0.7}

                    style={{
                      labels: { fill: 'black' },
                      data: {
                        fill: colors.red,
                        width: 13,
                      },
                    }}

                    animate={{
                      duration: 2000,
                      onLoad: { duration: 1000 },
                    }}
                  />
                  <VictoryBar
                    data={stats.Income}
                    labels={(d) => d.y}
                    style={{
                      labels: { fill: 'black' },
                      data: {
                        fill: colors.green,
                        width: 13,
                      },
                    }}
                    labelComponent={<VictoryLabel dy={0} style={{ angle: 45 }} />}
                    animate={{
                      duration: 2000,
                      onLoad: { duration: 1000 },
                    }}
                  />
                </VictoryGroup>
              </VictoryChart>
            </ScrollView>


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
  </View>
  );

Trends.propTypes = {

};

export default Trends;
