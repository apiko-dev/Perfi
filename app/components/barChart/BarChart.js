import React from 'react';
import { View } from 'react-native';
import { Svg } from 'expo';
import R from 'ramda';
import 'babel-polyfill';
import exampleData from './exampleData';
import Column from './Column';
import Label from './Label';
import Line from './Line';
import styles from './BarChartStyles';

const Bar = require('paths-js/bar');

const options = {
  data: exampleData,
  height: 325,
  barsGroupWidth: 50,
  barsGroupGap: 10,
  xLabelHeight: 25,
  yLabelWidth: 40,
};

const labels = ['test0', 'test1', 'test2', 'test3', 'test4'];

const getChartWidth = (data, groupWidth = options.barsGroupWidth, gap = options.barsGroupGap) => {
  const groups = data[0] && data[0].length;
  
  return groups > 1 ? (groups * groupWidth) + (gap * (groups - 1)) : groupWidth;
};

const getMaxValue = R.pipe(
  R.flatten,
  R.map(R.prop('value')),
  R.apply(R.max),
);

const BarChart = (props) => {
  const { data, height, barsGroupGap, xLabelHeight, yLabelWidth } = { ...options, ...props };

  const plotHeight = height - xLabelHeight;
  const maxValue = getMaxValue(data);
  const dec = Math.floor(Math.log(maxValue) / Math.log(10));
  const lineStep = 10 ** (dec > 1 ? dec - 1 : dec);
  const linesNumber = Math.ceil(maxValue / lineStep);
  const plotMaxValue = lineStep * linesNumber;

  const chartHeight = (height - xLabelHeight) * (maxValue / (lineStep * linesNumber));
  const chartWidth = getChartWidth(data);
  const plotWidth = yLabelWidth + chartWidth + (2 * barsGroupGap);

  const chart = Bar({
    data,
    width: chartWidth,
    height: chartHeight,
    gutter: options.barsGroupGap,
    accessor: R.prop('value'),
  });

  return (
    <View>
      <View style={{ width: plotWidth, height: plotHeight }}>
        {R.times(Line(plotMaxValue, lineStep, yLabelWidth), linesNumber)}
      </View>
      <View
        style={[styles.xLabelsContainerStyle, {
          width: plotWidth,
          paddingLeft: yLabelWidth + barsGroupGap,
        }]}
      >
        {R.map(Label, labels)}
      </View>
      <View
        style={[styles.chartContainerStyle, {
          paddingTop: plotHeight - chartHeight,
          paddingLeft: yLabelWidth + barsGroupGap,
        }]}
      >
        <Svg
          width={chartWidth}
          height={chartHeight}
        >
          {chart.curves.map(Column)}
        </Svg>
      </View>
    </View>
  );
};


export default BarChart;
