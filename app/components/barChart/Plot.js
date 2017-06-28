import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import R from 'ramda';
import styles from './BarChartStyles';

const Line = (max, step, labelWidth) => i => (
  <View key={i} style={styles.lineContainerStyle}>
    <Text style={[styles.labelStyle, styles.yLabelStyle, { width: labelWidth }]}>
      {max - (step * (i + 1))}
    </Text>
    <View style={styles.lineStyle} />
  </View>
);

const Plot = (props) => {
  const { width, height, labelWidth, linesStep, linesNumber } = props;
  const maxValue = linesStep * linesNumber;

  return (
    <View style={{ width, height }}>
      {R.times(Line(maxValue, linesStep, labelWidth), linesNumber)}
    </View>
  );
};

Plot.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  labelWidth: PropTypes.number,
  linesStep: PropTypes.number,
  linesNumber: PropTypes.number,
};

export default Plot;
