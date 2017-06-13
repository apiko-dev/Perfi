import React, { Component } from 'react';
import SeveralSlices from './SeveralSlices';
import SingleSlice from './SingleSlice';

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
  width: 360,
  height: 360,
  innerRadius: 70,
  outerRadius: 110,
  labelR: 140,
  color: '#03a9f4',
};

const PieChart = () => {
  const Chart = data.length > 1 ? SeveralSlices : SingleSlice;
  const { width, height } = options;

  return (
    <Chart
      data={data}
      {...options}
      centerX={width / 2}
      centerY={height / 2}
    />
  );
};

export default PieChart;
