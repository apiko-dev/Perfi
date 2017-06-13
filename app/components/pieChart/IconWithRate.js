import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const IconWithRate = (c, i) => {
  const r2 = 130;
  const r3 = 160;
  const x0 = 180;
  const y0 = 180;
  const x1 = c.sector.centroid[0];
  const y1 = c.sector.centroid[1];
  const angle = Math.atan2(y1 - y0, x1 - x0);
  const x2 = x0 + (r2 * Math.cos(angle));
  const y2 = y0 + (r2 * Math.sin(angle));
  const x3 = x0 + (r3 * Math.cos(angle));
  const y3 = y0 + (r3 * Math.sin(angle));

  return (
    <View key={i}>
      <Icon
        style={{
          position: 'absolute',
          left: x2 - 12,
          top: y2 - 12,
        }}
        name={c.item.icon}
        type="material-community"
      />
      <Text
        style={{
          position: 'absolute',
          left: x3 - 15,
          top: y3 - 10,
        }}
      >
        {c.item.value}
      </Text>
    </View>
  );
};

export default IconWithRate;