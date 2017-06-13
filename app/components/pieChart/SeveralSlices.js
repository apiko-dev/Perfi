import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Svg } from 'expo';
import R from 'ramda';
import 'babel-polyfill';
import IconWithRate from './IconWithRate';
import Sector from './Sector';
import styles from './PieChartStyles';
import colors from '../../styles/colors';

const Pie = require('paths-js/pie');


const SeveralSlices = (props) => {
  const { data, width, height, centerX, centerY, innerRadius, outerRadius } = props;

  const chart = Pie({
    center: [width / 2, height / 2],
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
        {chart.curves.map(IconWithRate)}
      </View>
    </View>
  );
};

export default SeveralSlices;
