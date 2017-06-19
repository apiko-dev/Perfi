import React from 'react';
import { View } from 'react-native';
import { Svg } from 'expo';
import R from 'ramda';
import 'babel-polyfill';
import styles from './BarChartStyles';
import colors, { chartPalette } from '../../styles/colors';

const Bar = require('paths-js/bar');

const { Path } = Svg;

const exampleData = [
  [
    { type: 'income', value: 1000 },
    { type: 'income', value: 1200 },
    { type: 'income', value: 1100 },
    { type: 'income', value: 1000 },
    // { type: 'income', value: 1200 },
    // { type: 'income', value: 1100 },
    // { type: 'income', value: 1000 },
    // { type: 'income', value: 1200 },
    // { type: 'income', value: 1100 },
    // { type: 'income', value: 1000 },
    // { type: 'income', value: 1200 },
    // { type: 'income', value: 1100 },
  ],
  [
    { type: 'expense', value: 800 },
    { type: 'expense', value: 900 },
    { type: 'expense', value: 700 },
    { type: 'expense', value: 800 },
    // { type: 'expense', value: 900 },
    // { type: 'expense', value: 700 },
    // { type: 'expense', value: 800 },
    // { type: 'expense', value: 900 },
    // { type: 'expense', value: 700 },
    // { type: 'expense', value: 800 },
    // { type: 'expense', value: 900 },
    // { type: 'expense', value: 700 },
  ],
];

const palette = R.values(chartPalette);
const minGroupWidth = 40;
const gutter = 10;

const chartWidth = (width, data) => {
  const groups = data[0] && data[0].length;
  
  return groups > 1 && width / groups < minGroupWidth ?
    (groups * minGroupWidth) + (gutter * (groups - 1))
    : width;
};

const defaultProps = {
  data: exampleData,
  width: 300,
  height: 300,
  gutter,
};

const Column = c => (
  <Path
    key={`${c.group}${c.index}`}
    d={c.line.path.print()}
    fill={palette[c.index]}
    opacity={0.8}
  />
);

const BarChart = (props) => {
  const options = { ...defaultProps, ...props };
  const { data, height } = options;
  const width = chartWidth(options.width, data);

  const chart = Bar({
    ...options,
    width,
    accessor: R.prop('value'),
  });

  return (
    <View style={[styles.container, { width, height }]}>
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
