import React from 'react';
import { View } from 'react-native';
import R from 'ramda';
import exampleData from './exampleData';
import Bars from './Bars';
import Plot from './Plot';
import styles from './BarChartStyles';

const options = {
  data: exampleData,
  height: 325,
  barsGroupWidth: 50,
  barsGroupGap: 10,
  xLabelHeight: 25,
  yLabelWidth: 40,
};

const getChartWidth = (data, groupWidth = options.barsGroupWidth, gap = options.barsGroupGap) => {
  const groups = data[0] && data[0].length;
  
  return groups > 1 ? (groups * groupWidth) + (gap * (groups - 1)) : groupWidth;
};

const getMaxValue = R.pipe(
  R.flatten,
  R.map(R.prop('value')),
  R.apply(R.max),
);

const BarChart = (props) => {
  const {
    data,
    height,
    barsGroupGap,
    xLabelHeight,
    yLabelWidth,
    labels,
  } = { ...options, ...props };

  const maxValue = getMaxValue(data);
  const dec = Math.floor(Math.log(maxValue) / Math.log(10));
  const lineStep = 10 ** (dec > 1 ? dec - 1 : dec);
  const linesNumber = Math.ceil(maxValue / lineStep);

  const chartHeight = (height - xLabelHeight) * (maxValue / (lineStep * linesNumber));
  const chartWidth = getChartWidth(data);
  const plotWidth = yLabelWidth + chartWidth + (2 * barsGroupGap);
  const plotHeight = height - xLabelHeight;

  return (
    <View>
      <Plot
        width={plotWidth}
        height={plotHeight}
        labelWidth={yLabelWidth}
        linesStep={lineStep}
        linesNumber={linesNumber}
        labels={labels}
      />
      <View
        style={[styles.chartContainerStyle, {
          paddingTop: plotHeight - chartHeight,
          paddingLeft: yLabelWidth + barsGroupGap,
        }]}
      >
        <Bars
          data={data}
          width={chartWidth}
          height={chartHeight}
          gutter={barsGroupGap}
          accessorKey="value"
        />
      </View>
    </View>
  );
};

export default BarChart;
