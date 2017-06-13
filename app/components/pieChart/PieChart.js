import React from 'react';
import SeveralSlices from './SeveralSlices';
import SingleSlice from './SingleSlice';
import propTypes from './PieChartPropTypes';

const defaultData = [
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

const defaultProps = {
  width: 360,
  height: 360,
  innerRadius: 70,
  outerRadius: 110,
  labelRadius: 140,
};

const PieChart = ({ data = defaultData, ...props }) => {
  const Chart = data.length > 1 ? SeveralSlices : SingleSlice;
  const options = { ...defaultProps, ...props };
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

PieChart.propTypes = propTypes;

export default PieChart;
