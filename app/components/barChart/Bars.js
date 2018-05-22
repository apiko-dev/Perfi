import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Svg } from 'expo';
import R from 'ramda';
import 'babel-polyfill';
import { chartPalette } from '../../styles/colors';
import appStyles from '../../styles/AppStyles';
import styles from './BarChartStyles';

const Chart = require('paths-js/bar');

const { Path } = Svg;
const palette = Object.values(chartPalette);

const Bar = curve => (
  <Path
    key={`${curve.group}${curve.index}`}
    d={curve.line.path.print()}
    fill={palette[curve.index]}
    opacity={0.8}
  />
);

const Label = i => (
  <Text key={i} style={[styles.labelStyle, styles.xLabelStyle]}>
    {i}
  </Text>
);

const Bars = ({
  data, width, height, gutter, accessorKey, labels,
}) => {
  const chart = Chart({
    data,
    width,
    height,
    gutter,
    accessor: R.prop(accessorKey),
  });

  return (
    <View style={appStyles.rootStyle}>
      <Svg
        width={width}
        height={height}
      >
        {chart.curves.map(Bar)}
      </Svg>
      {labels && labels.length > 0 && (
        <View style={styles.xLabelsContainerStyle}>
          {R.map(Label, labels)}
        </View>
      )}
    </View>
  );
};

Bars.propTypes = {
  data: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  gutter: PropTypes.number,
  accessorKey: PropTypes.string,
  labels: PropTypes.array,
};


export default Bars;
