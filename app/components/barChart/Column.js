import React from 'react';
import { Svg } from 'expo';
import { chartPalette } from '../../styles/colors';

const { Path } = Svg;
const palette = Object.values(chartPalette);

const Column = c => (
  <Path
    key={`${c.group}${c.index}`}
    d={c.line.path.print()}
    fill={palette[c.index]}
    opacity={0.8}
  />
);

export default Column;
