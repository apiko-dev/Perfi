import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Svg } from 'expo';
import R from 'ramda';
import styles from './PieChartStyles';
import Sector from './Sector';
import 'babel-polyfill';
const Pie = require('paths-js/pie');

const { Circle, G, Path } = Svg;

const data = [
  { name: 'one', value: 10, icon: 'tag' },
  { name: 'two', value: 20, icon: 'car' },
  { name: 'three', value: 30, icon: 'phone' },
  { name: 'one', value: 40, icon: 'tag' },
  { name: 'two', value: 50, icon: 'car' },
  { name: 'three', value: 60, icon: 'phone' },
  { name: 'one', value: 70, icon: 'tag' },
  { name: 'two', value: 80, icon: 'car' },
  { name: 'three', value: 90, icon: 'phone' },
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
  r: 70,
  R: 110,
  labelR: 140,
  color: '#03a9f4',
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

  return (
    <View style={[styles.container, { width, height }]}>
      <Svg
        width={width}
        height={height}
      >
        {chart.curves.map(Sector)}
      </Svg>
      <View style={[styles.topLayout, { width, height }]}>
        {chart.curves.map((c, i) => {
          const r2 = 130;
          const r3 = 160;
          const x0 = width / 2;
          const y0 = height / 2;
          const x1 = c.sector.centroid[0];
          const y1 = c.sector.centroid[1];
          const angle = Math.atan2(y1 - y0, x1 - x0);
          const x2 = x0 + (r2 * Math.cos(angle));
          const y2 = y0 + (r2 * Math.sin(angle));
          const x3 = x0 + (r3 * Math.cos(angle));
          const y3 = y0 + (r3 * Math.sin(angle));

          return (
            <View key={i}>
              <Icon
                style={{
                  position: 'absolute',
                  left: x2 - 12,
                  top: y2 - 12,
                }}
                name={c.item.icon}
                type="material-community"
              />
              <Text
                style={{
                  position: 'absolute',
                  left: x3 - 12,
                  top: y3 - 12,
                }}
              >
                {c.item.value}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default PieChart;
