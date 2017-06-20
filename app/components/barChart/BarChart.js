import React from 'react';
import { View } from 'react-native';
import { Svg } from 'expo';
import R from 'ramda';
import 'babel-polyfill';
import exampleData from './exampleData';
import Column from './Column';
import styles from './BarChartStyles';
// import colors, { chartPalette } from '../../styles/colors';

const Bar = require('paths-js/bar');

const defaultProps = {
  data: exampleData,
  height: 300,
  gutter: 10,
};

const chartWidth = (data, groupWidth = 50, gutter = defaultProps.gutter) => {
  const groups = data[0] && data[0].length;
  
  return groups > 1 ? (groups * groupWidth) + (gutter * (groups - 1)) : groupWidth;
};

const BarChart = (props) => {
  const options = { ...defaultProps, ...props };
  const { data, height } = options;
  const width = chartWidth(data);

  const chart = Bar({
    ...options,
    width,
    accessor: R.prop('value'),
  });

  return (
    <View style={[styles.container, { width, height }]}>
      <Axis />
      <Svg
        width={width}
        height={height}
      >
        {chart.curves.map(Column)}
      </Svg>
    </View>
  );
};


export default BarChart;
