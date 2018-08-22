import React from 'react';
import T from 'prop-types';
import { View, ScrollView, Text } from 'react-native';
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
  SimpleDateFilter,
  Value,
} from '../../components';
import s from './styles';
import { colors, fontSizes } from '../../styles';
import { formatMonthWithYear } from '../../utils/dateHelpers';

const chartHeight = 375;
const getChartWidth = length => (length * 60 + 60 < 400 ? 330 : length * 60 + 60);
const getBarLabelPadding = (currentValue, maxValue) =>
  (maxValue / currentValue < 3.5 ? ((chartHeight - 40) * currentValue / maxValue / 2) : -10);


const Trends = ({
    dateForFiltering,
    onSetDateForFiltering,
    stats,
    setListRef,
}) => (
  <View style={s.root}>
    <SimpleDateFilter
      dateForFiltering={dateForFiltering}
      setDateForFiltering={onSetDateForFiltering}
    />
    <Subtitle
      style={s.subtitle}
      withLittlePadding
      leftText="Trends"
      date={dateForFiltering}
    />
    <Separator />

    <View style={s.container}>
      <View style={s.chartContainer}>

        <ScrollView
          horizontal
          ref={setListRef}
          bounces={false}
          showsHorizontalScrollIndicator={stats.tickValues.length > 1}
        >
          <VictoryChart
            height={chartHeight}
            padding={{ top: 25, bottom: 50, left: 50 }}
            width={getChartWidth(stats.tickValues.length)}
            domainPadding={{ x: [50, 50] }}
          >
            <VictoryAxis
              height={chartHeight}
              dependentAxis
              domain={[1, stats.maxValue]}
              width={50}
              style={{
                grid: { stroke: colors.grey, strokeWidth: 0.5 },
                axis: { stroke: colors.white },
                tickLabels: { fill: colors.white },
              }}
            />
            <VictoryAxis
              height={chartHeight}
              tickValues={stats.tickValues}
              tickFormat={d => formatMonthWithYear(d)}
              style={{
                grid: { stroke: colors.grey, strokeWidth: 0.5 },
                axis: { stroke: colors.greyVeryDarker },
                tickLabels: {
                  fontSize: fontSizes.verySmall,
                  stroke: colors.grey,
                  fill: colors.greyVeryDarker,
                  strokeWidth: 0.5,
                },
              }}
            />
            <VictoryGroup height={chartHeight} offset={22}>
              <VictoryBar
                data={stats.Expense}
                labels={d => (d.y !== 0 ? `-${Math.round(d.y)}` : '')}
                style={{
                  labels: {
                    fill: d => (stats.maxValue / d.y < 3.5 ? colors.white : colors.red),
                    fontSize: 12,
                  },
                  data: { fill: colors.red, width: 18 },
                }}
                labelComponent={
                  <VictoryLabel
                    dy={6}
                    angle={90}
                    dx={d => getBarLabelPadding(d.y, stats.maxValue)}
                  />
                }
              />
              <VictoryBar
                data={stats.Income}
                labels={d => (d.y !== 0 ? `+${Math.round(d.y)}` : '')}
                style={{
                  labels: {
                    fill: d => (stats.maxValue / d.y < 3.5 ? colors.white : colors.green),
                    fontSize: 12,
                  },
                  data: { fill: colors.green, width: 18 },
                }}
                labelComponent={
                  <VictoryLabel
                    dy={6}
                    angle={90}
                    dx={d => getBarLabelPadding(d.y, stats.maxValue)}
                  />
                }
              />
            </VictoryGroup>
          </VictoryChart>
        </ScrollView>


        <View style={s.verticalAxisContainer}>
          <VictoryAxis
            height={chartHeight}
            padding={{ top: 24, left: 50, bottom: 51.3 }}
            dependentAxis
            domain={[1, stats.maxValue]}
            width={50}
            style={{
              grid: { stroke: colors.grey, strokeWidth: 0.5 },
              axis: { stroke: colors.greyVeryDarker, strokeWidth: 2 },
              tickLabels: {
                fontSize: fontSizes.verySmall,
                padding: 6,
                stroke: colors.grey,
                fill: colors.greyVeryDarker,
                strokeWidth: 0.5,
              },
            }}
          />
        </View>
      </View>

      <Separator />

      <View style={s.totalContainer}>
        <Text style={s.totalText}>Total: </Text>
        <View style={s.totalValueContainer}>
          <Value
            containerStyle={s.valueContainer}
            style={s.valueText}
            value={stats.totalIncome}
          />
          <Value
            containerStyle={s.valueContainer}
            style={s.valueText}
            value={stats.totalExpense}
          />
        </View>

      </View>

    </View>
  </View>
  );

Trends.propTypes = {
  dateForFiltering: T.object,
  onSetDateForFiltering: T.func,
  setListRef: T.func,
  stats: T.shape({
    Income: T.array,
    Expense: T.array,
    tickValues: T.array,
    maxValue: T.number,
    totalIncome: T.number,
    totalExpense: T.number,
  }),
};

export default Trends;
