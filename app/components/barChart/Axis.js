import React from 'react';
import { View } from 'react-native';
// import colors, { chartPalette } from '../../styles/colors';

const Axis = (props) => {
  const { width, height } = props;

  return (
    <View style={[styles.container, { width, height }]}>
      <Axis />
      <Svg
        width={width}
        height={height}
      >
        {chart.curves.map(Column)}
      </Svg>
    </View>
  );
};


export default Axis;
