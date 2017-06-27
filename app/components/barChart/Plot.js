import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import R from 'ramda';
import styles from './PlotStyles';

const Line = (max, step, labelWidth) => i => (
  <View key={i} style={styles.lineContainerStyle}>
    <Text style={[styles.labelStyle, styles.yLabelStyle, { width: labelWidth }]}>
      {max - (step * (i + 1))}
    </Text>
    <View style={styles.lineStyle} />
  </View>
);

const Label = i => (
  <Text key={i} style={styles.labelStyle}>
    {i}
  </Text>
);

const Plot = (props) => {
  const { width, height, labelWidth, linesStep, linesNumber, labels } = props;
  const maxValue = linesStep * linesNumber;

  return (
    <View>
      <View style={{ width, height }}>
        {R.times(Line(maxValue, linesStep, labelWidth), linesNumber)}
      </View>
      {labels && labels.length > 0 && (
        <View
          style={[styles.xLabelsContainerStyle, { width, paddingLeft: labelWidth }]}
        >
          {R.map(Label, labels)}
        </View>
      )}
    </View>
  );
};

Plot.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  labelWidth: PropTypes.number,
  linesStep: PropTypes.number,
  linesNumber: PropTypes.number,
  labels: PropTypes.array,
};

export default Plot;
