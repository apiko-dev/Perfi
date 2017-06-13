import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Svg } from 'expo';
import styles from './PieChartStyles';
import colors from '../../styles/colors';

const { Circle, G } = Svg;

const SingleSlice = (props) => {
  const { data, width, height, centerX, centerY, innerRadius, outerRadius } = props;

  return (
    <View style={[styles.container, { width, height }]}>
      <Svg
        width={width}
        height={height}
      >
        <G>
          <Circle
            r={outerRadius}
            cx={centerX}
            cy={centerY}
            fill={colors.defaultPrimary}
          />
          <Circle
            r={innerRadius}
            cx={centerX}
            cy={centerY}
            fill={colors.white}
          />
        </G>
      </Svg>
      <View style={[styles.topLayout, { width, height }]}>
        <Text>Data</Text>
      </View>
    </View>
  );
};

export default SingleSlice;
