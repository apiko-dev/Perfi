import React from 'react';
import PropTypes from 'prop-types';
import { Svg } from 'expo';
import colors, { chartPalette } from '../../styles/colors';

const { Path } = Svg;

const palette = Object.values(chartPalette);

const getColor = i => palette[i % palette.length];

const Sector = ({ sector }, i) => (
  <Path
    key={i}
    d={sector.path.print()}
    fill={getColor(i)}
    stroke={colors.backgroundColor}
    fillOpacity={0.9}
  />
);

Sector.propTypes = {
  sector: PropTypes.object,
};

export default Sector;
