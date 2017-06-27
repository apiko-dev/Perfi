import React from 'react';
import { View } from 'react-native';
import { Svg } from 'expo';
import R from 'ramda';
import 'babel-polyfill';
import IconWithRate from './IconWithRate';
import Sector from './Sector';
import propTypes from './PieChartPropTypes';
import styles from './PieChartStyles';

const Pie = require('paths-js/pie');

const SeveralSlices = (props) => {
  const { data, width, height, centerX, centerY, innerRadius, outerRadius } = props;

  const chart = Pie({
    center: [centerX, centerY],
    r: innerRadius,
    R: outerRadius,
    data,
    accessor: R.prop('value'),
  });

  return (
    <View style={[styles.container, { width, height }]}>
      <Svg
        width={width}
        height={height}
      >
        {chart.curves.map(Sector)}
      </Svg>
      <View style={[styles.topLayout, { width, height }]}>
        {chart.curves.map(IconWithRate(props))}
      </View>
    </View>
  );
};

SeveralSlices.propTypes = propTypes;

export default SeveralSlices;
