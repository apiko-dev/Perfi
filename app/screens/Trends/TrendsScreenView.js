import React from 'react';
// import T from 'prop-types';
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

const getChartWidth = width => width * 60 + 60 < 400 ? 330 : width * 60 + 60;

const Trends = ({
    dateForFiltering,
    setDateForFiltering,
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
      date={dateForFiltering}
    />
    <Separator />

    <View style={s.mainContainer}>
      <View style={s.chartContainer}>

        <ScrollView horizontal style={{ paddingLeft: 50 }} bounces={false}>
          <VictoryChart
            height={chartHeight}
            padding={{ top: 25, bottom: 50, right: 40 }}
            width={getChartWidth(stats.tickValues.length)}
            domainPadding={{ x: [50, 60] }}
          >
            <VictoryAxis
              height={chartHeight}
              dependentAxis
              domain={[1, stats.maxValue]}
              width={48}
              style={{
                grid: { stroke: colors.grey, strokeWidth: 0.5 },
              }}
            />
            <VictoryAxis
              height={chartHeight}
              tickValues={stats.tickValues}
              tickFormat={(d) => formatMonthWithYear(d)}
              style={{
                grid: { stroke: colors.grey, strokeWidth: 0.5 },
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
                labels={(d) => d.y !== 0 ? `-${d.y}` : ''}
                style={{
                  labels: {
                    fill: (d) => stats.maxValue / d.y < 3.5 ? colors.white : colors.red,
                    fontSize: 12 },
                  data: {
                    fill: colors.red,
                    width: 18,
                  },
                }}
                labelComponent={
                  <VictoryLabel
                    dy={6}
                    angle={90}
                    dx={d => stats.maxValue / d.y < 3.5 ? (chartHeight * d.y / 4100 / 2) : -5}
                  />
                }
                animate={{ duration: 500, onLoad: { duration: 200 } }}
              />
              <VictoryBar
                data={stats.Income}
                labels={(d) => d.y !== 0 ? `+${d.y}` : ''}
                style={{
                  labels: {
                    fill: (d) => stats.maxValue / d.y < 3.5 ? colors.white : colors.green,
                    fontSize: 12 },
                  data: {
                    fill: colors.green,
                    width: 18,
                  },
                }}
                labelComponent={<VictoryLabel
                  dy={6}
                  angle={90}
                  dx={d => stats.maxValue / d.y < 3.5 ? (chartHeight * d.y / 4100 / 2) : -5}
                />}
                animate={{ duration: 500, onLoad: { duration: 200 } }}
              />
            </VictoryGroup>
          </VictoryChart>
        </ScrollView>


        <View style={s.verticalAxisContainer}>
          <VictoryAxis
            height={chartHeight}
            padding={{ top: 24, left: 50, bottom: 50 }}
            dependentAxis
            domain={[1, stats.maxValue]}
            width={50}
            style={{
              grid: { stroke: colors.grey, strokeWidth: 0.5 },
              tickLabels: {
                fontSize: fontSizes.verySmall,
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

      <Separator />
    </View>
  </View>
  );

Trends.propTypes = {

};

export default Trends;
