import React from 'react';
import SeveralSlices from './SeveralSlices';
import SingleSlice from './SingleSlice';
import propTypes from './PieChartPropTypes';

const defaultProps = {
  width: 360,
  height: 360,
  innerRadius: 70,
  outerRadius: 110,
  labelRadius: 140,
};

const PieChart = ({ data = [], ...props }) => {
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
