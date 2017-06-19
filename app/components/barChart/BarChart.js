import React from 'react';
import { View } from 'react-native';
import { Svg } from 'expo';
import R from 'ramda';
import 'babel-polyfill';
import styles from './BarChartStyles';

const Bar = require('paths-js/bar');

const data = [
  [
    { type: 'income', value: 1000 },
    { type: 'expense', value: 800 },
  ],
  [
    { type: 'income', value: 1200 },
    { type: 'expense', value: 900 },
  ],
  [
    { type: 'income', value: 1100 },
    { type: 'expense', value: 700 },
  ],
];

const defaultProps = {
  data,
  width: 360,
  height: 360,
  gutter: 10,
};

const BarChart = (props) => {
  const { width, height } = props;

  const chart = Bar({
    ...defaultProps,
    ...props,
    accessor: R.prop('value'),
  });

  return (
    <View style={[styles.container, { width, height }]}>
      <Svg
        width={width}
        height={height}
      >
      </Svg>
    </View>
  );
};


export default BarChart;
