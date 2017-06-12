import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Svg } from 'expo';
import R from 'ramda';
import styles from './PieChartStyles';
import 'babel-polyfill';
const Pie = require('paths-js/pie');

const { Circle, G, Path } = Svg;

const data = [
  { name: 'one', value: 80, icon: 'tag' },
  { name: 'two', value: 160, icon: 'car' },
  { name: 'three', value: 320, icon: 'phone' },
];

const options = {
  margin: {
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
  },
  width: 360,
  height: 360,
  r: 80,
  R: 120,
  color: '#03a9f4',
};

const Sector = ({ sector }, i) => {
  console.log('sector', sector);

  return (
    <Path
      key={i}
      d={sector.path.print()}
      stroke="#00ff00"
      fill="#0000ff"
      fillOpacity={1}
    />
  );
};

const PieChart = () => {
  const { width, height, r: innerRadius, R: outerRadius } = options;

  const chart = Pie({
    center: [width / 2, height / 2],
    r: innerRadius,
    R: outerRadius,
    data,
    accessor: R.prop('value'),
  });

  console.log('chart', chart);

  return (
    <View style={[styles.container, { width, height }]}>
      <Svg
        width={width}
        height={height}
      >
        {chart.curves.map(Sector)}
        {chart.curves.map((c, i) => (
          <Circle key={i} r="4" cx={c.sector.centroid[0]} cy={c.sector.centroid[1]} fill="pink" />
        ))}
      </Svg>
      <View style={[styles.topLayout, { width, height }]}>
        {chart.curves.map((c, i) => (
          <Icon
            key={i}
            style={{ position: 'absolute', left: c.sector.centroid[0] - 12, top: c.sector.centroid[1] - 12 }}
            name={c.item.icon}
            type="material-community"
          />
        ))}
      </View>
    </View>
  );
};

export default PieChart;
