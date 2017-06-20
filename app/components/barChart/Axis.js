import React from 'react';
import { View } from 'react-native';
import styles from './AxisStyles';

const Axis = (props) => {
  const { range, width } = props;
  const dec = Math.floor(Math.log(range) / Math.log(10));
  const step = 10 ** (dec > 1 ? dec - 1 : dec);
  const stepsNumber = Math.ceil(range / step);
  const height = stepsNumber * step;

  return (
    <View style={[styles.rootStyle, { width, height }]}>

    </View>
  );
};


export default Axis;
