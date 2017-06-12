import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Pie } from 'react-native-pathjs-charts';
import PiePath from 'paths-js/pie';
import R from 'ramda';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLayout: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    backgroundColor: colors.lightShadow,
  },
});

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
  width: 400,
  height: 400,
  r: 80,
  R: 120,
  // pallete: Object.values(pieChartPalette).map(hexToRgb),
  color: '#03a9f4',
};

const PieChart = () => {
  const { width, height, r: innerRadius, R: outerRadius } = options;

  const chart = PiePath({
    center: [width / 2, height / 2],
    r: innerRadius,
    R: outerRadius,
    data,
    accessor: R.prop('value'),
  });

  return (
    <View style={styles.container}>
      <Pie
        options={options}
        data={data}
        accessorKey="value"
      />
      <View style={styles.lightShadow}>
        <Text>OK</Text>
      </View>
    </View>
  );
};

export default PieChart;
