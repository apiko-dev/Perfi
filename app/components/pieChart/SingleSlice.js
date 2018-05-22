import React from 'react';
import { View } from 'react-native';
import { Svg } from 'expo';
import R from 'ramda';
import TextWithIcons from '../TextWithIcons';
import propTypes from './PieChartPropTypes';
import styles from './PieChartStyles';
import colors, { chartPalette } from '../../styles/colors';

const { Circle, G } = Svg;

const SingleSlice = (props) => {
  const {
    data, width, height, centerX, centerY, innerRadius, outerRadius, labelRadius,
  } = props;
  const isEmpty = R.isEmpty(data);
  const outerFillColor = isEmpty ? colors.divider : R.values(chartPalette)[0];

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
            fill={outerFillColor}
            fillOpacity={0.9}
          />
          <Circle
            r={innerRadius}
            cx={centerX}
            cy={centerY}
            fill={colors.white}
          />
        </G>
      </Svg>
      <View style={[styles.topLayout, { top: (height / 2) - labelRadius }]}>
        <TextWithIcons
          containerStyle={styles.singleLabelStyle}
          text={isEmpty ? '' : '100%'}
          color={colors.secondaryText}
          leftIcon={data[0] && data[0].icon}
        />
      </View>
    </View>
  );
};

SingleSlice.propTypes = propTypes;

export default SingleSlice;
