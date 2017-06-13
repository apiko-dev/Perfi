import React, { PropTypes } from 'react';
import { Svg } from 'expo';

const { Path } = Svg;

const Sector = ({ sector }, i) => (
  <Path
    key={i}
    d={sector.path.print()}
    stroke="#00ff00"
    fill="#0000ff"
    fillOpacity={1}
  />
);

Sector.propTypes = {
  sector: PropTypes.object,
};

export default Sector;
