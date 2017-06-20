import React from 'react';
import { View, Text } from 'react-native';
import { Svg } from 'expo';
import R from 'ramda';
import 'babel-polyfill';
import exampleData from './exampleData';
import Column from './Column';
import Line from './Line';
import styles from './BarChartStyles';
// import colors, { chartPalette } from '../../styles/colors';

const Bar = require('paths-js/bar');

const options = {
  data: exampleData,
  height: 325,
  barsGroupWidth: 50,
  barsGroupGap: 10,
  xLabelHeight: 25,
  yLabelWidth: 40,
};

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

  const chartHeight = (height - xLabelHeight) * (maxValue / (lineStep * linesNumber));
  const chartWidth = getChartWidth(data);

  const chart = Bar({
    data,
    width: chartWidth,
    height: chartHeight,
    gutter: options.barsGroupGap,
    accessor: R.prop('value'),
  });

  return (
    <View>
      <View style={{ height: plotHeight }}>
        {R.times(Line, linesNumber)}
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
