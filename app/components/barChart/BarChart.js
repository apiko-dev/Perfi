import React from 'react';
import { ScrollView, View } from 'react-native';
import R from 'ramda';
import Bars from './Bars';
import Plot from './Plot';
import styles from './BarChartStyles';

const options = {
  height: 320,
  width: 320,
  minBarsGroupWidth: 50,
  barsGroupGap: 10,
  xLabelHeight: 20,
  yLabelWidth: 40,
};

const getChartWidth = (data) => {
  const groups = data[0] && data[0].length;
  const { width, barsGroupGap, minBarsGroupWidth, yLabelWidth } = options;
  const chartWidth = width - yLabelWidth;
  const groupWithGapWidth = minBarsGroupWidth + barsGroupGap;
  
  return groups > 1 && (groupWithGapWidth * groups) - barsGroupGap > chartWidth
    ? (groups * groupWithGapWidth) - barsGroupGap
    : chartWidth;
};

const getMaxValue = R.pipe(
  R.flatten,
  R.map(R.prop('value')),
  R.apply(Math.max),
);

const BarChart = (props) => {
  const {
    data,
    height,
    width,
    barsGroupGap,
    xLabelHeight,
    yLabelWidth,
    labels,
  } = { ...options, ...props };

  const maxValue = data.length ? getMaxValue(data) : 1;
  const dec = Math.round(Math.log(maxValue) / Math.log(10));
  const lineStep = 10 ** (dec > 1 ? dec - 1 : dec);
  const linesNumber = Math.ceil(maxValue / lineStep);

  const chartHeight = (height - xLabelHeight) * (maxValue / (lineStep * linesNumber));
  const chartWidth = getChartWidth(data);
  const plotHeight = height - xLabelHeight;

  return (
    <View style={{ height, width }}>
      <Plot
        width={width}
        height={plotHeight}
        labelWidth={yLabelWidth}
        linesStep={lineStep}
        linesNumber={linesNumber}
        labels={labels}
      />
      <ScrollView
        style={[styles.chartContainerStyle, {
          top: plotHeight - chartHeight,
          left: yLabelWidth,
        }]}
        horizontal
      >
        <Bars
          data={data}
          width={chartWidth}
          height={chartHeight}
          gutter={barsGroupGap}
          accessorKey="value"
          labels={labels}
        />
      </ScrollView>
    </View>
  );
};

export default BarChart;
