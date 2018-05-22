import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import R from 'ramda';
import colors from '../../styles/colors';
import styles from './PieChartStyles';

const sum = R.pipe(
  R.map(R.prop('value')),
  R.sum,
);

const percent = total => value => `${Math.floor((value / total) * 100)}%`;

const IconWithRate = (props) => {
  const {
    data, centerX, centerY, outerRadius, labelRadius,
  } = props;
  const radiusDelta = 20;
  const iconDistance = outerRadius + radiusDelta;
  const textDistance = labelRadius + radiusDelta;
  const iconPositionDelta = 12;
  const textPositionDeltaX = 15;
  const textPositionDeltaY = 10;
  const getPercent = percent(sum(data));

  return (c, i) => {
    const x1 = c.sector.centroid[0];
    const y1 = c.sector.centroid[1];
    const angle = Math.atan2(y1 - centerY, x1 - centerX);
    const x2 = centerX + (iconDistance * Math.cos(angle));
    const y2 = centerY + (iconDistance * Math.sin(angle));
    const x3 = centerX + (textDistance * Math.cos(angle));
    const y3 = centerY + (textDistance * Math.sin(angle));

    return (
      <View key={i}>
        <Icon
          style={[styles.labelStyle, {
            left: x2 - iconPositionDelta,
            top: y2 - iconPositionDelta,
          }]}
          name={c.item.icon}
          type="material-community"
          color={colors.secondaryText}
        />
        <Text
          style={[styles.labelStyle, {
            left: x3 - textPositionDeltaX,
            top: y3 - textPositionDeltaY,
            color: colors.secondaryText,
          }]}
        >
          {getPercent(c.item.value)}
        </Text>
      </View>
    );
  };
};

export default IconWithRate;
