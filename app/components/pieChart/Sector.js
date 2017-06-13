import React, { PropTypes } from 'react';
import { Svg } from 'expo';
import { pieChartPalette } from '../../styles/colors';

const { Path } = Svg;

const palette = Object.values(pieChartPalette);

const getColor = i => palette[i % palette.length];

const Sector = ({ sector }, i) => (
  <Path
    key={i}
    d={sector.path.print()}
    fill={getColor(i)}
    fillOpacity={0.9}
  />
);

Sector.propTypes = {
  sector: PropTypes.object,
};

export default Sector;
