import React, { PropTypes } from 'react';
import { Svg } from 'expo';
import R from 'ramda';
import 'babel-polyfill';
import { chartPalette } from '../../styles/colors';

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

const Bars = ({ data, width, height, gutter, accessorKey }) => {
  const chart = Chart({
    data,
    width,
    height,
    gutter,
    accessor: R.prop(accessorKey),
  });

  return (
    <Svg
      width={width}
      height={height}
    >
      {chart.curves.map(Bar)}
    </Svg>
  );
};

Bars.propTypes = {
  data: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  gutter: PropTypes.number,
  accessorKey: PropTypes.string,
};


export default Bars;
